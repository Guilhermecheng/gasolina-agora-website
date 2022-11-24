import { CaretDown } from "phosphor-react";

import { ConfigMenu } from "./ConfigMenu";
import { PriceBlock } from "./PriceBlock";

interface VizualizerProps {
    isconfigPageOpen?: boolean;
    setisConfigPageOpen: (isconfigPageOpen: boolean) => void;

    fuelConfig: {
        configFuelTypeId: string;
        setConfigFuelTypeId: (variable: string) => void;
        configFuelTypeName: string;
        setConfigFuelTypeName: (variable: string) => void;
    };

    locationConfig: {
        configLocationType: string;
        setconfigLocationType: (variable: string) => void;
        configLocationId: string;
        setconfigLocationId: (variable: string) => void;
        configLocationName: string;
        setconfigLocationName: (variable: string) => void;
    };

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

export function Visualizer({
    isconfigPageOpen = false, // page config to set default state
    setisConfigPageOpen,

    fuelConfig,
    locationConfig,

    priceData = null
}: VizualizerProps) {

    return (
        <>
            <div className='w-full h-[5.5rem] flex items-center bg-zinc-300 rounded-t-xl md:h-[4rem] '>
            
                { isconfigPageOpen ? (
                    <div id='config-block-title' className='w-[90%] h-full flex flex-col items-center justify-center px-8 text-xl sm:text-3xl font-semibold'>
                        <h1 className='ml-20'>Configurações</h1>
                    </div>
                ) : (
                    <div id="config-block" className=" w-[90%] flex flex-col items-start md:items-center justify-center px-8 md:space-x-4 space-y-2 md:space-y-0 md:flex-row whitespace-nowrap overflow-hidden">
                        <div className='w-full flex items-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>
                        Combustível: <span className='text-orange-400 ml-2'>{ fuelConfig.configFuelTypeName }</span>
                        </div>

                        <div className='w-[50%] flex items-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>
                        Localidade: <span className='text-orange-400 ml-2 '>{ locationConfig.configLocationName }</span>
                        </div>
                    </div>
                ) }

                <div id='config-menu-crevron' className='w-[10%] flex justify-center cursor-pointer mx-4 md:mx-0'>
                <CaretDown
                    size={36}
                    weight="bold"
                    className={`transition duration-500 ease-in-out transform ${isconfigPageOpen && 'rotate-180'}`}
                    onClick={() => setisConfigPageOpen(!isconfigPageOpen)} 
                />
                </div>
            </div>

            { isconfigPageOpen ? (
                <ConfigMenu configState={{ fuelConfig, locationConfig }} setisConfigPageOpen={setisConfigPageOpen} />
            ) : (
                <PriceBlock priceData={priceData} />
            ) }
        </>
    )
}