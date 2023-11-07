import './styles/main.css';
import { useEffect, useState } from 'react';

import { AboutUsBlock } from './components/AboutUsBlock';
import { MiniBanner } from './components/MiniBanner';
import { FaqBlock } from './components/FaqBlock';
import { Footer } from './components/Footer';
import { Visualizer } from './components/Vizualizer';
import { MainBanner } from './components/MainBanner';

import { fetchData } from './api/api';
import { useFuel } from './hooks/useFuel';

function App() {
  // config page state
  const [apiResponse, setApiResponse] = useState<any | null>(null);

  // API Data state
  const [isconfigPageOpen, setisConfigPageOpen] = useState(false);

  // global states
  const { fuelApiFetch, locationApiFetch } = useFuel();

  useEffect(() => {
    setApiResponse(null);

    let locationApiBody: string = "";

    if(typeof locationApiFetch !== 'string') {
      locationApiBody = String(`\\`) + locationApiFetch.join(String(`\\`)).replace(/-/g, ' ');
    } else if (locationApiFetch !== ''){
      locationApiBody = String(`\\`) + locationApiFetch.replace(/-/g, ' ')
    }

    fetchData(fuelApiFetch, locationApiBody).then(response => {
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
        priceData={apiResponse}
      />

      <AboutUsBlock />
      <FaqBlock />
      <Footer />
    </div>
  )
}

export default App
