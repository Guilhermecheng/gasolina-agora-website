import './styles/main.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

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

    configLocationType,
    setconfigLocationType,
    configLocationId,
    setconfigLocationId,
    configLocationName,
    setconfigLocationName,
   } = useContext(GlobalContext);


  useEffect(() => {
    const fetchData = async () => {

      // let response = await axios(config);
      // proxies: https://cors.sh/ ou https://cors-anywhere.herokuapp.com/ ou https://corsproxy.io/?
      let response = await axios.post('https://corsproxy.io/?https://us-central1-gasolina-agora.cloudfunctions.net/query_fuel', {
        'data_id': `GASOLINA COMUM\\BRASIL`
      },{
        headers: {
          'Content-Type':'application/json',
        }
      })
      console.log(response)


    }

    fetchData();
    let result = apiRespGasolComum.result;
    setTimeout(() => setApiResponse(result), 5000);

  }, [])

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
        }}
        locationConfig={{
          configLocationType,
          setconfigLocationType,
          configLocationId,
          setconfigLocationId,
          configLocationName,
          setconfigLocationName,
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
