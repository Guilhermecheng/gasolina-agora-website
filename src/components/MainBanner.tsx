import { ReactComponent as WhiteLogo} from '../assets/logo-white.svg'

export function MainBanner() {

    return (
        <section className='w-full h-[500px] flex flex-col items-center bg-purple-background z-0'>
            <div className='flex flex-col sm:flex-row items-center justify-center  max-w-[940px] sm:space-x-12 px-6 h-3/5'> {/* verify if w-container or w-full is better*/}

            <WhiteLogo className="h-[90px] sm:h-[140px] mb-4" />
            
            <div className='flex flex-col items-center max-w-[250px] sm:max-w-[40rem] space-y-4 text-center'>
                <h1 className='text-orange-400 text-3xl sm:text-5xl md:text-title font-semibold'>Gasolina Agora</h1>
                <h3 className='text-base sm:text-xl md:text-2xl font-semibold'>Preço do combustível atualizado, a qualquer hora e qualquer lugar</h3>
            </div>

            </div>
        </section>
    )
}