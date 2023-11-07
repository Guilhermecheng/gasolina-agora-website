import * as Accordion from '@radix-ui/react-accordion';

import { capitalsDatabase, fuelDatabase, regionalDatabase, statesDatabase } from '../../utils/FuelLocHandlerDatabase';
import { useFuel } from '../../hooks/useFuel';

interface ConfigMenuProps {
    setisConfigPageOpen: (isconfigPageOpen: boolean) => void;
}

export function ConfigMenu({ setisConfigPageOpen }: ConfigMenuProps) {
    const { 
        fuelId, 
        locationId, 
        setFuelId, 
        setFuelName, 
        setFuelApiFetch, 
        setLocationApiFetch, 
        setLocationId, 
        setLocationName, 
        setLocationType 
    } = useFuel();

    function setNewFuel(fuelId: string) {
        const newFuel = fuelDatabase.find(fuel => fuel.id === fuelId)
        console.log(newFuel);
        if(newFuel) {
            setFuelId(newFuel.id);
            setFuelName(newFuel.name);
            setFuelApiFetch(newFuel.apiFetch);
            setisConfigPageOpen(false);
        }
    }

    function setNewLocation(locationId: string, locationName: string, locationType: string) {
        console.log(locationId, locationName, locationType)
        switch(locationType) {
            case 'general': 
                setLocationApiFetch("")
                // setTitleLoc('Brasil');
                // setlocPronoun('no');
                break;
            
                case 'region':
                let regionData = regionalDatabase.find(region => region.id === locationId);
                console.log(regionData)
                if (regionData?.fetchSlug) {
                    let fetchslug = regionData.fetchSlug.toUpperCase();
                    setLocationApiFetch(fetchslug)
                }
                // setTitleLoc(regionData?.name);
                // setlocPronoun('na');
                break;
        
            case 'state':
                let stateData = statesDatabase.find(region => region.id === locationId);
                console.log(stateData)
                if (stateData?.fetchSlug) {
                    let fetchslug = stateData.fetchSlug.map(item => item.toUpperCase())
                    setLocationApiFetch(fetchslug)
                }
                // setTitleLoc(stateData?.name);
                // setlocPronoun(stateData?.pronoun);
                break;
        
            case 'capital':
                let capitalData = capitalsDatabase.find(region => region.id === locationId);
                console.log(capitalData)
                if (capitalData?.fetchSlug) {
                    let fetchslug = capitalData.fetchSlug.map(item => item.toUpperCase())
                    setLocationApiFetch(fetchslug)
                }
                // setTitleLoc(capitalData?.name);
                // setlocPronoun('na cidade de');
                break;
        
            default:
                // setTitleLoc('Brasil');
                // setlocPronoun('no');
                break;
        }

        setLocationId(locationId);
        setLocationType(locationType);
        setLocationName(locationName);
        setisConfigPageOpen(false);
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
                                    className={`w-full flex justify-center text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 ${ fuel.id === fuelId ? 'bg-textmaincolor' : 'bg-neutral-400'}`}
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
                    <h2 
                        className={`w-full flex justify-center text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 ${ locationId === 'brasil' ? 'bg-textmaincolor' : 'bg-neutral-400'}`}
                        onClick={() => setNewLocation('brasil', 'Brasil', 'general')}
                    >
                        Brasil
                    </h2>

                    <Accordion.Root type="single" defaultValue='region' collapsible>
                        <Accordion.Item value='region'>
                            <Accordion.AccordionTrigger className={`w-full flex justify-center bg-neutral-400 text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 data-[state="open"]:bg-orange-400`}>
                                Por região
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-32 overflow-y-auto bg-zinc-200 px-4 rounded-md data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
                                { regionalDatabase.map((region) => {
                                    return (
                                        <p  
                                            key={region.id} 
                                            className={`font-semibold cursor-pointer hover:text-orange-400 mt-1 text-zinc-600 px-2 rounded ${ region.id === locationId ? 'bg-textmaincolor text-zinc-200 py-1' : 'text-zinc-600'}`}
                                            onClick={() => setNewLocation(region.id, region.name, region.type)}
                                        >
                                            { region.name }
                                        </p>
                                    )
                                }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>

                        <Accordion.Item value='state'>
                            <Accordion.AccordionTrigger className={`w-full flex justify-center bg-neutral-400 text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 data-[state="open"]:bg-orange-400`}>
                                Por estado
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-32 overflow-y-auto  bg-zinc-200 px-4 rounded-md data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
                                { statesDatabase.map((state) => {
                                        return (
                                            <p  
                                                key={state.id} 
                                                className={`font-semibold cursor-pointer hover:text-orange-400 mt-1 text-zinc-600 px-2 rounded ${ state.id === locationId ? 'bg-textmaincolor text-zinc-200 py-1' : 'text-zinc-600'}`}
                                                onClick={() => setNewLocation(state.id, state.name, state.type)}
                                            >
                                                { state.name }
                                            </p>
                                        )
                                    }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>

                        <Accordion.Item value='capital'>
                            <Accordion.AccordionTrigger className={`w-full flex justify-center bg-neutral-400 text-zinc-100 text-xl font-semibold cursor-pointer rounded my-1 hover:bg-orange-400 data-[state="open"]:bg-orange-400`}>
                                Por capital
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-32 overflow-y-auto  bg-zinc-200 px-4 rounded-md data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
                                { capitalsDatabase.map((capital) => {
                                    return (
                                        <p  
                                            key={capital.id} 
                                            className={`font-semibold cursor-pointer hover:text-orange-400 mt-1 text-zinc-600 px-2 rounded ${ capital.id === locationId ? 'bg-textmaincolor text-zinc-200 py-1' : 'text-zinc-600'}`}
                                            onClick={() => setNewLocation(capital.id, capital.name, capital.type)}
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