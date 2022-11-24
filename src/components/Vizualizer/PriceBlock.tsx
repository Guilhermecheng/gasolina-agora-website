import { Skeleton } from "../Skeleton";

interface PriceBlockProps {
    priceData: {
        data_id: string,
		deviation: number,
		end_date: string,
		initial_date: string,
		measure_unit: string,
		price_average: number,
		price_max: number,
		price_min: number,
		product_name: string,
		scope: string,
		scope_description: string,
		stations: number
    } | null;
}

export function PriceBlock({ priceData }: PriceBlockProps) {

    return (
		<div id='price-block-main' className='flex flex-col items-center text-textmaincolor mt-6 transition-height duration-300'>
            <span id='price-block-title' className='text-3xl md:text-4xl px-4 font-semibold'>
                Preço da Gasolina no Brasil
            </span>

            <div className='text-4xl md:text-5xl font-semibold mt-10'>
                { priceData ? (
                    <>
                        R$ <span className='text-7xl md:text-8xl text-orange-400'>{ priceData.price_average }</span> /litro 
                    </>
                ) : (
                    <div className="w-64 md:w-80 h-20">
                        <Skeleton  />
                    </div>
                ) }
            </div>

            <div id='more-info-block' className='flex flex-col items-center justify-center mt-12 px-6 text-lg sm:text-xl md:text-2xl font-semibold'>
              <div id="min-max-prices" className='flex flex-col w-auto justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
                    { priceData ? (
                        <p id='min-price' className="text-center">
                            Mínimo:&nbsp;
                            <span className='text-orange-400'>
                                R$ { priceData.price_min } / litro
                            </span>
                            <a className="cursor-pointer">&nbsp;(onde?)</a>
                        </p>
                    ) : (
                        <div className="w-[300px] h-8">
                            <Skeleton />
                        </div>
                    ) }

                    { priceData ? (
                        <p id='max-price' className="text-center">
                            Máximo:&nbsp;
                            <span className='text-orange-400'>
                                R$ { priceData.price_max } / litro
                            </span>
                            <a className="cursor-pointer">&nbsp;(onde?)</a>
                        </p>
                    ) : (
                        <div className="w-[300px] h-8">
                            <Skeleton />
                        </div>
                    ) }
              </div>

              <div id="info-and-source" className=' flex flex-col items-center my-6 px-4 space-y-2  text-center'>
                    { priceData ? (
                        <>
                            <span id='info-part' className='text-base sm:text-lg md:text-xl font-semibold'>
                                Valores coletados em 1000 postos de 01/10/2022 a 02/11/2022
                            </span>
                            <span id='font-part' className='text-zinc-400 text-sm sm:text-base md:text-lg font-semibold'>
                                Fonte: ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis
                            </span>
                        </>

                    ) : (
                        <div className="w-[360px] md:w-[480px] lg:w-[800px] h-[70px]">
                            <Skeleton />
                        </div>
                    ) }
                   
              </div>
            </div>
        </div>
    )
}