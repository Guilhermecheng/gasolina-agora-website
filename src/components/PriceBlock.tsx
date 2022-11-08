

export function PriceBlock() {

    return (
		<div id='price-block-main' className='flex flex-col items-center text-textmaincolor mt-6'>
            <span id='price-block-title' className='text-4xl font-semibold'>
                Preço da Gasolina no Brasil
            </span>

            <div className='text-5xl font-semibold mt-10'>
                R$ <span className='text-8xl text-orange-400'>7,10</span> /litro 
            </div>

            <div id='more-info-block' className='flex flex-col items-center justify-center mt-12 text-2xl font-semibold'>
              <div id="min-max-prices" className='flex space-x-8'>
                    <span id='min-price'>
                        Mínimo: <span className='text-orange-400'>R$ 1,00 / litro </span> <a className="cursor-pointer">(onde?)</a>
                    </span>
                    <span id='max-price'>
                        Máximo: <span className='text-orange-400'>R$ 11,00 / litro </span> <a className="cursor-pointer">(onde?)</a>
                    </span>
              </div>

              <div id="info-and-source" className=' flex flex-col items-center mt-2 space-y-2'>
                    <span id='info-part' className='text-xl font-semibold'>
                        Valores coletados em 1000 postos de 01/10/2022 a 02/11/2022
                    </span>
                    <span id='font-part' className='text-zinc-400 text-lg font-semibold'>
                        Fonte: ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis
                    </span>
              </div>
            </div>
        </div>
    )
}