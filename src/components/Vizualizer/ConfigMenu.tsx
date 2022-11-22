import * as Accordion from '@radix-ui/react-accordion';

import { capitalsDatabase, fuelDatabase, regionalDatabase, statesDatabase } from '../../utils/FuelLocHandlerDatabase';

interface ConfigMenuProps {
    configState: {
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
    };

    setisConfigPageOpen: (isconfigPageOpen: boolean) => void;
}

export function ConfigMenu({ configState, setisConfigPageOpen }: ConfigMenuProps) {
    const { fuelConfig, locationConfig } = configState;

    function setNewFuel(fuelId: string) {
        const newFuel = fuelDatabase.find(fuel => fuel.id === fuelId)
        if(newFuel) {
            fuelConfig.setConfigFuelTypeId(newFuel.id);
            fuelConfig.setConfigFuelTypeName(newFuel.name)
            setisConfigPageOpen(false);
        }
    }

    function setNewLocation(locationId: string) {
        locationConfig.setconfigLocationId(locationId);
    }
    
    return (
        <div id='config-menu' className={`flex flex-col items-center text-textmaincolor mt-6 `}>

            <div className="w-full flex flex-col md:grid md:grid-cols-2">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-6">Combustível</h2>

                    <ul className="w-80 px-4 py-2">
                        { fuelDatabase.map((fuel) => {
                            return (
                                <li 
                                    key={fuel.id} 
                                    className={`w-full flex justify-center  text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 ${ fuel.id === fuelConfig.configFuelTypeId ? 'bg-textmaincolor' : 'bg-zinc-400'}`}
                                    onClick={() => setNewFuel(fuel.id) }
                                >
                                    { fuel.name }
                                </li>
                            )
                        }) }
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">Localidade</h2>

                    <div className="block w-80 bg-zinc-100 p-6">
                    <h2 className={`w-full flex justify-center text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 ${ locationConfig.configLocationId === 'brasil' ? 'bg-textmaincolor' : 'bg-zinc-400'}`}>Brasil</h2>

                    <Accordion.Root type="single" defaultValue='region' collapsible>
                        <Accordion.Item value='region'>
                            <Accordion.AccordionTrigger className={`w-full flex justify-center bg-zinc-400 text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 data-[state="open"]:bg-orange-400`}>
                                Por região
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-32 overflow-y-auto bg-zinc-200 px-4 rounded-md data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
                                { statesDatabase.map((state) => {
                                    return (
                                        <p  
                                            key={state.id} 
                                            className={`font-semibold cursor-pointer hover:text-orange-400 mt-1 ${ state.id === locationConfig.configLocationId ? 'text-textmaincolor' : 'text-zinc-600'}`}
                                        >
                                            { state.name }
                                        </p>
                                    )
                                }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>

                        <Accordion.Item value='state'>
                            <Accordion.AccordionTrigger className={`w-full flex justify-center bg-zinc-400 text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 data-[state="open"]:bg-orange-400`}>
                                Por estado
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-32 overflow-y-auto  bg-zinc-200 px-4 rounded-md data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
                                { regionalDatabase.map((region) => {
                                        return (
                                            <p  
                                                key={region.id} 
                                                className={`font-semibold cursor-pointer hover:text-orange-400 mt-1 ${ region.id === locationConfig.configLocationId ? 'text-textmaincolor' : 'text-zinc-600'}`}
                                            >
                                                { region.name }
                                            </p>
                                        )
                                    }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>

                        <Accordion.Item value='capital'>
                            <Accordion.AccordionTrigger className={`w-full flex justify-center bg-zinc-400 text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 data-[state="open"]:bg-orange-400`}>
                                Por capital
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-32 overflow-y-auto  bg-zinc-200 px-4 rounded-md data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
                                { capitalsDatabase.map((capital) => {
                                    return (
                                        <p  
                                            key={capital.id} 
                                            className={`font-semibold cursor-pointer hover:text-orange-400 mt-1 ${ capital.id === locationConfig.configLocationId ? 'text-textmaincolor' : 'text-zinc-600'}`}
                                        >
                                            { capital.name }
                                        </p>
                                    )
                                }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>
                    </Accordion.Root>

                    </div>
                </div>
            </div>
        </div>
    )
}