import './styles/main.css';
import whiteLogo from './assets/logo-white.svg'

function App() {

  return (
    <div className="w-full text-white justify-center">
      <section className='w-full h-[500px]  flex flex-col items-center bg-purple-background z-0'>
        <div className='flex items-center justify-center  max-w-[940px] space-x-12 px-6 h-3/5'> {/* verify if w-container or w-full is better*/}

          <img src={ whiteLogo } />
          
          <div className='flex flex-col items-center max-w-[40rem] text-center'>
            <h1 className='text-orange-400 text-title font-semibold'>Gasolina Agora</h1>
            <h3 className='text-2xl font-semibold'>Preço do combustível atualizado, a qualquer hora e qualquer lugar</h3>
          </div>

        </div>
      </section>

      <section id='section2' className='h-[500px] flex flex-col items-center relative'>
        <div id='price-block' className='z-10 absolute top-[-196px] max-w-[940px] w-[90%] mx-20 h-[450px] text-red-700 rounded-xl border border-[#B1B1B1] shadow-2xl bg-zinc-100'> {/* verify if w-container or w-full is better*/}
          
          <div className='w-full h-[4rem] flex items-center bg-zinc-300 rounded-t-xl '>
            <div id="config-block" className=" w-[90%] grid  grid-cols-2">
              <span>Combustível</span>
              <span>Localidade</span>
            </div>

            <div className='w-[10%]'>seta</div>
          </div>

          <div id='price-block-main' className='flex flex-col items-center text-textmaincolor mt-6'>
            <span id='title' className='text-4xl font-semibold'>
              Preço da Gasolina no Brasil
            </span>

            <div className='text-5xl font-semibold mt-12'>
              R$ <span className='text-8xl text-orange-400'>7,10</span> /litro 
            </div>
          </div>

        </div>
      </section>

      <section id='section3' className='w-full h-[420px] flex flex-col items-center justify-center bg-orange-background'>
        hey
      </section>
    </div>
  )
}

export default App
