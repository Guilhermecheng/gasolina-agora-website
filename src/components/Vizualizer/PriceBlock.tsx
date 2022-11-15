

export function PriceBlock() {

    return (
		<div id='price-block-main' className='flex flex-col items-center text-textmaincolor mt-6 transition-height duration-300'>
            <span id='price-block-title' className='text-3xl md:text-4xl px-4 font-semibold'>
                Preço da Gasolina no Brasil
            </span>

            <div className='text-4xl md:text-5xl font-semibold mt-10'>
                R$ <span className='text-7xl md:text-8xl text-orange-400'>7,10</span> /litro 
            </div>

            <div id='more-info-block' className='flex flex-col items-center justify-center mt-12 px-6 text-lg sm:text-xl md:text-2xl font-semibold'>
              <div id="min-max-prices" className='flex flex-col w-auto justify-center items-center md:flex-row space-y-2 md:space-x-8'>
                    <p id='min-price'>
                        Mínimo: <span className='text-orange-400'>R$ 1,00 / litro </span> <a className="cursor-pointer">(onde?)</a>
                    </p>
                    <p id='max-price'>
                        Máximo: <span className='text-orange-400'>R$ 11,00 / litro </span> <a className="cursor-pointer">(onde?)</a>
                    </p>
              </div>

              <div id="info-and-source" className=' flex flex-col items-center my-6 px-4 space-y-2  text-center'>
                    <span id='info-part' className='text-base sm:text-lg md:text-xl font-semibold'>
                        Valores coletados em 1000 postos de 01/10/2022 a 02/11/2022
                    </span>
                    <span id='font-part' className='text-zinc-400 text-sm sm:text-base md:text-lg font-semibold'>
                        Fonte: ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis
                    </span>
              </div>
            </div>
        </div>
    )
}