import './styles/main.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { capitalsDatabase, fuelDatabase, regionalDatabase, statesDatabase } from './utils/FuelLocHandlerDatabase';

import { AboutUsBlock } from './components/AboutUsBlock';
import { MiniBanner } from './components/MiniBanner';
import { FaqBlock } from './components/FaqBlock';
import { Footer } from './components/Footer';
import { Visualizer } from './components/Vizualizer';
import { apiRespGasolComum, apiRespGLP } from './utils/apiResp';
import { GlobalContext } from './context/ConfigContext';
import { MainBanner } from './components/MainBanner';

function App() {
  // config page state
  const [apiResponse, setApiResponse] = useState<any | null>(null);

  // API Data state
  const [isconfigPageOpen, setisConfigPageOpen] = useState(false);

  // States from context
  const { 
    configFuelTypeId,
    setConfigFuelTypeId,
    configFuelTypeName,
    setConfigFuelTypeName,
    fuelApiFetch,
    setFuelApiFetch,

    configLocationType,
    setconfigLocationType,
    configLocationId,
    setconfigLocationId,
    configLocationName,
    setconfigLocationName,
    locationApiFetch,
    setLocationApiFetch
   } = useContext(GlobalContext);


  useEffect(() => {
    setApiResponse(null);

    const fetchData = async () => {
      let locationApiBody: string = "";

      if(typeof locationApiFetch !== 'string' && locationApiFetch !== '') {
        locationApiBody = String(`\\`) + locationApiFetch.join(String(`\\`)).replace(/-/g, ' ');
      } else if (locationApiFetch !== ''){
        locationApiBody = String(`\\`) + locationApiFetch.replace(/-/g, ' ')
      }

      try {
        // let response = await axios(config);
        // proxies: https://cors.sh/ ou https://cors-anywhere.herokuapp.com/ ou https://corsproxy.io/?
        let response = await axios.post('https://corsproxy.io/?https://us-central1-gasolina-agora.cloudfunctions.net/query_fuel', {
          'data_id': `${fuelApiFetch}\\BRASIL${locationApiBody}`
        },{
          headers: {
            'Content-Type':'application/json',
          }
        })
        return response.data
      } catch (err) {
        return "error";
      }
    }
    
    fetchData().then(response => {
      console.log(response)
      if(response === "error") {
        setApiResponse("error")
      } else {
        setApiResponse(response.result);
      }
    });
    // let result = apiRespGasolComum.result;
    // setTimeout(() => setApiResponse(result), 5000);
  }, [fuelApiFetch, locationApiFetch]);

  

  return (
    <div className="w-full text-white justify-center">

      <MiniBanner />
      <MainBanner />
      <Visualizer
        isconfigPageOpen={isconfigPageOpen} // page config to set default state
        setisConfigPageOpen={setisConfigPageOpen}
        fuelConfig={{
          configFuelTypeId,
          setConfigFuelTypeId,
          configFuelTypeName,
          setConfigFuelTypeName,
          fuelApiFetch,
          setFuelApiFetch,
        }}
        locationConfig={{
          configLocationType,
          setconfigLocationType,
          configLocationId,
          setconfigLocationId,
          configLocationName,
          setconfigLocationName,
          locationApiFetch,
          setLocationApiFetch
        }}
        priceData={apiResponse}
      />

      <AboutUsBlock />
      <FaqBlock />
      <Footer />
    </div>
  )
}

export default App
