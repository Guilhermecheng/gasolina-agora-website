import * as Accordion from '@radix-ui/react-accordion';

import { capitalsDatabase, fuelDatabase, regionalDatabase, statesDatabase } from '../utils/FuelLocHandlerDatabase';

interface ConfigMenuProps {
    isconfigPageOpen?: boolean;
}

export function ConfigMenu({ isconfigPageOpen= false }: ConfigMenuProps) {

    return (
        <div id='config-menu' className={`flex flex-col items-center text-textmaincolor mt-6 `}>
            <span id='config-block-title' className='text-4xl font-semibold mb-6'>
                Configurações
            </span>

            <div className="w-full flex flex-col md:grid md:grid-cols-2">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-6">Combustível</h2>
                    <ul className="w-60">
                        { fuelDatabase.map((fuel) => {
                            return (
                                <li key={fuel.id}>{ fuel.name }</li>
                            )
                        }) }
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-6">Localidade</h2>
                    <div className="block w-60 bg-zinc-200 p-6">
                    <span>Brasil</span><br/>

                    <Accordion.Root type="single" defaultValue='region' collapsible>
                        <Accordion.Item value='region'>
                            <Accordion.AccordionTrigger className='text-xl font-semibold w-full bg-red300'>
                                Por região
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-20 overflow-y-auto'>
                                { statesDatabase.map((state) => {
                                    return (
                                        <p>{ state.name }</p>
                                    )
                                }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>

                        <Accordion.Item value='state'>
                            <Accordion.AccordionTrigger className='text-xl font-semibold w-full bg-red300'>
                                Por estado
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-20 overflow-y-auto'>
                                { regionalDatabase.map((region) => {
                                        return (
                                            <p>{ region.name }</p>
                                        )
                                    }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>

                        <Accordion.Item value='capital'>
                            <Accordion.AccordionTrigger className='text-xl font-semibold w-full bg-red300'>
                                Por capital
                            </Accordion.AccordionTrigger>

                            <Accordion.AccordionContent className='max-h-20 overflow-y-auto'>
                                { capitalsDatabase.map((capital) => {
                                    return (
                                        <p>{ capital.name }</p>
                                    )
                                }) }
                            </Accordion.AccordionContent>
                        </Accordion.Item>
                    </Accordion.Root>

                    {/* <span>Por região</span><br/>
                    <span>Por estado</span><br/>
                    <span>Por capital</span><br/>
                    <ul>
                        <li>Acre</li>
                        <li>São paulo</li>
                    </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}