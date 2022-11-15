import './styles/main.css';
import whiteLogo from './assets/logo-white.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { AboutUsBlock } from './components/AboutUsBlock';
import { MiniBanner } from './components/MiniBanner';
import { FaqBlock } from './components/FaqBlock';
import { Footer } from './components/Footer';
import { Visualizer } from './components/Vizualizer';

function App() {
  // config page state
  const [isconfigPageOpen, setisConfigPageOpen] = useState(false);

  // fuel states
  const [configFuelTypeId, setConfigFuelTypeId] = useState('gasolina-comum');
  const [configFuelTypeName, setConfigFuelTypeName] = useState('Gasolina Comum');

  // location states
  const [configLocationType, setconfigLocationType] = useState('general');
  const [configLocationId, setconfigLocationId] = useState('Brasil');
  const [configLocationName, setconfigLocationName] = useState('Brasil');

  let apiBody = `GASOLINA COMUM\\BRASIL`

  useEffect(() => {

    const fetchData = async () => {
      let response = await axios.post('https://us-central1-gasolina-agora.cloudfunctions.net/query_fuel', {
        headers: {
          'content-type': 'application/json',
        },
        data: {
          'data_id': `GASOLINA COMUM\\BRASIL`
        }
      })
      console.log(response)
    }

    fetchData()

  }, [])

  return (
    <div className="w-full text-white justify-center">

      <MiniBanner />
      <section className='w-full h-[500px]  flex flex-col items-center bg-purple-background z-0'>
        <div className='flex items-center justify-center  max-w-[940px] space-x-12 px-6 h-3/5'> {/* verify if w-container or w-full is better*/}

          <img src={ whiteLogo } />
          
          <div className='flex flex-col items-center max-w-[40rem] space-y-4 text-center'>
            <h1 className='text-orange-400 text-5xl md:text-title font-semibold'>Gasolina Agora</h1>
            <h3 className='text-xl md:text-2xl font-semibold'>Preço do combustível atualizado, a qualquer hora e qualquer lugar</h3>
          </div>

        </div>
      </section>

      <section id='section2' className='min-h-[300px] flex flex-col items-center relative'>
        <div id='price-and-config-block' className='z-10 absolute top-[-196px] max-w-[940px] w-[90%] mx-20 min-h-[450px] text-textmaincolor rounded-xl border border-[#B1B1B1] shadow-2xl bg-zinc-100'> {/* verify if w-container or w-full is better*/}

          <Visualizer
            isconfigPageOpen={isconfigPageOpen}
            setisConfigPageOpen={setisConfigPageOpen}
            configFuelTypeName={configFuelTypeName}
            configLocationName={configLocationName}
          />

        </div>
      </section>

      <section id='section3' className='w-full h-[420px] flex flex-col items-center bg-orange-background'>
        <AboutUsBlock />
      </section>

      <section className='w-full  flex flex-col items-center mb-8'>
        <FaqBlock />
      </section>

      <section className='w-full h-[420px] flex flex-col items-center  '>
        <Footer />
      </section>
    </div>
  )
}

export default App
