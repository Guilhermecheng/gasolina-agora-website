import './styles/main.css';
import { ReactComponent as WhiteLogo} from './assets/logo-white.svg'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AboutUsBlock } from './components/AboutUsBlock';
import { MiniBanner } from './components/MiniBanner';
import { FaqBlock } from './components/FaqBlock';
import { Footer } from './components/Footer';
import { Visualizer } from './components/Vizualizer';
import { apiRespGasolComum, apiRespGLP } from './utils/apiResp';
import { GlobalContext } from './context/ConfigContext';

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


  // let apiBody = `GASOLINA COMUM\\BRASIL`


  useEffect(() => {
    /*
      Testing other API
      fetch('https://api.github.com/users/Guilhermecheng/repos').then((resp) => resp.json()).then((data) => console.log(data))
    
    */
    const fetchData = async () => {
      // let config = {
      //   method: 'POST',
      //   url: 'https://us-central1-gasolina-agora.cloudfunctions.net/query_fuel',
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      //   data: {
      //     "data_id": `GNV\\BRASIL\\NORDESTE`,
      //   },
      // };
    
      // let response = await axios(config);
      //  console.log(response.data)

      // let response = await fetch('https://us-central1-gasolina-agora.cloudfunctions.net/query_fuel', {
      //     method: 'POST',
      //     mode: 'cors',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //         'data_id': "GASOLINA COMUM\\BRASIL"
      //     }),
      // })
      // console.log(response)
      
      // https://us-central1-quickstart-1600134625009.cloudfunctions.net/gasol-agr-teste
      // https://[MY-BUCKET].storage.googleapis.com/[OBJECT-PATH]
      let resp2 = await fetch('https://us-central1-quickstart-1600134625009.cloudfunctions.net/gasol-agr-teste/jsonData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      let data2 = await resp2.json();
      console.log(data2)
      // let data = await response.json();
      // return data;
    }

    fetchData()
    let result = apiRespGasolComum.result;
    setTimeout(() => setApiResponse(result), 5000);

  }, [])

  return (
    <div className="w-full text-white justify-center">

      <MiniBanner />
      <section className='w-full h-[500px] flex flex-col items-center bg-purple-background z-0'>
        <div className='flex flex-col sm:flex-row items-center justify-center  max-w-[940px] sm:space-x-12 px-6 h-3/5'> {/* verify if w-container or w-full is better*/}

          <WhiteLogo className="h-[90px] sm:h-[140px] mb-4" />
          
          <div className='flex flex-col items-center max-w-[250px] sm:max-w-[40rem] space-y-4 text-center'>
            <h1 className='text-orange-400 text-3xl sm:text-5xl md:text-title font-semibold'>Gasolina Agora</h1>
            <h3 className='text-base sm:text-xl md:text-2xl font-semibold'>Preço do combustível atualizado, a qualquer hora e qualquer lugar</h3>
          </div>

        </div>
      </section>

      <section id='section2' className={`${ isconfigPageOpen ? 'h-[600px] md:h-[300px] lg:h-[300px]' : 'h-[380px] sm:h-[340px] md:h-[300px]' } flex flex-col items-center relative`}>
        <div id='price-and-config-block' className='z-10 absolute top-[-196px] max-w-[940px] w-[90%] mx-20 min-h-[450px] text-textmaincolor rounded-xl border border-[#B1B1B1] shadow-2xl bg-zinc-100'> {/* verify if w-container or w-full is better*/}

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

        </div>
      </section>

      <section id='section3' className='w-full min-h-[420px] flex flex-col items-center bg-orange-background bg-center bg-no-repeat bg-cover'>
        <AboutUsBlock />
      </section>

      <section className='w-full flex flex-col items-center mb-8'>
        <FaqBlock />
      </section>

      <section className='w-full flex flex-col items-center bg-gray-background bg-center bg-no-repeat bg-cover'>
        <Footer />
      </section>
    </div>
  )
}

export default App
