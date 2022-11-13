import './styles/main.css';
import whiteLogo from './assets/logo-white.svg'
import { useEffect, useState } from 'react';

import { CaretDown } from 'phosphor-react';
import { PriceBlock } from './components/PriceBlock';
import { ConfigMenu } from './components/ConfigMenu';
import { AboutUsBlock } from './components/AboutUsBlock';
import { MiniBanner } from './components/MiniBanner';
import { FaqBlock } from './components/FaqBlock';
import { Footer } from './components/Footer';

function App() {
  
  const [isconfigPageOpen, setisConfigPageOpen] = useState(false);

  const [confugFuelType, setConfugFuelType] = useState('Gasolina Comum');
  const [configLocation, setconfigLocation] = useState('Brasil');

  return (
    <div className="w-full text-white justify-center">

      <MiniBanner />
      <section className='w-full h-[500px]  flex flex-col items-center bg-purple-background z-0'>
        <div className='flex items-center justify-center  max-w-[940px] space-x-12 px-6 h-3/5'> {/* verify if w-container or w-full is better*/}

          <img src={ whiteLogo } />
          
          <div className='flex flex-col items-center max-w-[40rem] text-center'>
            <h1 className='text-orange-400 text-title font-semibold'>Gasolina Agora</h1>
            <h3 className='text-2xl font-semibold'>Preço do combustível atualizado, a qualquer hora e qualquer lugar</h3>
          </div>

        </div>
      </section>

      <section id='section2' className='min-h-[500px] flex flex-col items-center relative'>
        <div id='price-and-config-block' className='z-10 absolute top-[-196px] max-w-[940px] w-[90%] mx-20 min-h-[450px] text-textmaincolor rounded-xl border border-[#B1B1B1] shadow-2xl bg-zinc-100'> {/* verify if w-container or w-full is better*/}
          
          <div className='w-full h-[5.5rem] flex items-center bg-zinc-300 rounded-t-xl md:h-[4rem] '>

            { isconfigPageOpen ? (
              <div id='config-block-title' className='w-[90%] h-full flex flex-col items-center justify-center px-8 text-2.5xl font-semibold'>
                <h1 className='ml-14'>Configurações</h1>
              </div>
            ) : (
              <div id="config-block" className=" w-[90%] flex flex-col items-center px-8 space-x-2 space-y-2 md:flex-row">
                <div className='w-full flex items-center justify-center text-2xl font-semibold md:text-2.5xl'>
                  Combustível: <span className='text-orange-400 text-2.5xl ml-2 '>{ confugFuelType }</span>
                </div>

                <div className='w-[50%] flex items-center justify-center text-2xl font-semibold md:text-2.5xl'>
                  Localidade: <span className='text-orange-400 text-2.5xl ml-2 '>{ configLocation }</span>
                </div>
              </div>
            ) }

            <div id='config-menu-crevron' className='w-[10%] flex justify-center cursor-pointer'>
              <CaretDown
                size={36}
                weight="bold"
                className={`transition duration-500 ease-in-out transform ${isconfigPageOpen && 'rotate-180'}`}
                onClick={() => setisConfigPageOpen(!isconfigPageOpen)} 
              />
            </div>
          </div>

          { isconfigPageOpen ? (
            <ConfigMenu isconfigPageOpen={isconfigPageOpen} />
          ) : (
            <PriceBlock />
          ) }

        </div>
      </section>

      <section id='section3' className='w-full h-[420px] flex flex-col items-center bg-orange-background'>
        <AboutUsBlock />
      </section>

      <section className='w-full  flex flex-col items-center mb-8'>
        <FaqBlock />
      </section>

      <section className='w-full h-[420px] flex flex-col items-center  bg-violet-700'>
        <Footer />
      </section>
    </div>
  )
}

export default App
