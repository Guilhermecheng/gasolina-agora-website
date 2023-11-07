import { useEffect, useState } from "react";
import { Skeleton } from "../Skeleton";
import { fuelDatabase, regionalDatabase, statesDatabase } from "../../utils/FuelLocHandlerDatabase";
import { useFuel } from "../../hooks/useFuel";

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
    } | null | "error";
}

export function PriceBlock({ priceData }: PriceBlockProps) {
    const { fuelId, fuelName, locationType, locationId, locationName } = useFuel();

    const [measureUnit, setMeasureUnit] = useState('litro');
    const [fuelPronoun, setFuelPronoun] = useState('da');
    const [locationPronoun, setLocationPronoun] = useState('no')

    useEffect(() => {
        const fuelData = fuelDatabase.find(fuel => fuel.id === fuelId);

        if(fuelData) {
            setMeasureUnit(fuelData.measureUnit);
            setFuelPronoun(fuelData.pronoun);
        }

        switch(locationType) {
            case 'general':
                setLocationPronoun('no');
                break;

            case 'region':
                setLocationPronoun('na');
                break;

            case 'state':
                let regionData = statesDatabase.find(region => region.id === locationId);
                if(regionData) {
                    setLocationPronoun(regionData?.pronoun);
                }
                break;

            case 'capital':
                setLocationPronoun('em');
                break;
        }
    },[fuelId, locationId]);

    console.log(priceData);
    /* -- data formatting -- */
    let formattedPriceAverage ;
    let formattedMinPrice;
    let formattedMaxPrice;
    let formattedInitialDate = '01/01/1900';
    let formattedEndDate = '01/01/1900';

    // let pageTitle = `Preço ${fuelPronoun} ${titleFuel} ${locPronoun} ${titleLoc}`;
    if(priceData === "error") {
        return (
            <div className="flex flex-col items-center justify-center text-xl md:text-2xl font-semibold pt-4 md:pt-8">
                <h1>Ops.. parece que este valor não está disponível.</h1>
                <h2>Tente novamente</h2>
            </div>
        )
    }
    // dates
    if(priceData) {
        formattedPriceAverage = priceData?.price_average.toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        formattedMinPrice = priceData?.price_min.toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        formattedMaxPrice = priceData?.price_max.toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        formattedInitialDate = new Date(priceData?.initial_date + "T00:00:00").toLocaleDateString("pt-BR");
        formattedEndDate = new Date(priceData?.end_date + "T00:00:00").toLocaleDateString("pt-BR");
    }

    return (
		<div id='price-block-main' className='flex flex-col items-center text-textmaincolor mt-6 transition-height duration-300'>
            <span id='price-block-title' className='text-3xl md:text-4xl px-4 font-semibold'>
                Preço { fuelPronoun } { fuelName } { locationPronoun } { locationName }
            </span>

            <div className='text-4xl md:text-5xl font-semibold mt-10'>
                { priceData ? (
                    <>
                        R$ <span className='text-7xl md:text-8xl text-orange-400'>{ formattedPriceAverage }</span> / { measureUnit } 
                    </>
                ) : (
                    <div className="w-64 md:w-80 h-20">
                        <Skeleton  />
                    </div>
                ) }
            </div>

            <div id='more-info-block' className='flex flex-col items-center justify-center mt-12 px-6 text-lg md:text-xl lg:text-2xl font-semibold'>
              <div id="min-max-prices" className='flex flex-col w-auto justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
                    { priceData ? (
                        <p id='min-price' className="text-center">
                            Mínimo:&nbsp;
                            <span className='text-orange-400'>
                                R$ { formattedMinPrice } / { measureUnit }
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
                                R$ { formattedMaxPrice } / { measureUnit }
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
                                { `Valores coletados em ${ priceData.stations } postos de ${formattedInitialDate} a ${formattedEndDate}` }
                            </span>
                            <span id='font-part' className='text-zinc-400 text-sm sm:text-base md:text-lg font-semibold'>
                                Fonte: ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis
                            </span>
                        </>

                    ) : (
                        <div className="w-[320px] md:w-[480px] lg:w-[800px] h-[70px]">
                            <Skeleton />
                        </div>
                    ) }
                   
              </div>
            </div>
        </div>
    )
}