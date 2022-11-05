import './styles/main.css';
import whiteLogo from './assets/logo-white.svg'

function App() {

  return (
    <div className="w-full text-white justify-center">
      <section className='w-full h-[500px]  flex flex-col items-center justify-center bg-purple-background z-0'>
        <div className='flex items-center justify-center w-container max-w-container space-x-12 px-6'> {/* verify if w-container or w-full is better*/}


          <img src={ whiteLogo } />
          
          <div className='flex flex-col items-center max-w-[40rem] text-center'>
            <h1 className='text-orange-400 text-[4rem] font-semibold'>Gasolina Agora</h1>
            <h3 className='text-2xl font-semibold'>Preço do combustível atualizado, a qualquer hora, e qualquer lugar</h3>
          </div>
        </div>

      </section>

      <section id='section2' className='h-[500px] flex flex-col items-center relative'>
        <div id='price-block' className='z-10 absolute top-[-150px] w-container h-[450px] text-red-700 rounded-xl border border-[#B1B1B1] shadow-2xl bg-zinc-100'> {/* verify if w-container or w-full is better*/}
          asd
        </div>
      </section>

      <section id='section3' className='w-full h-[420px] flex flex-col items-center justify-center bg-orange-background'>
        hey
      </section>
    </div>
  )
}

export default App
