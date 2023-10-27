import { createContext, useState } from "react";

interface GlobalContextProps {
    
}

interface ConfigContextProps {

}

export const GlobalContext = createContext<any>(null);

export const ConfigContext = (props: any) => {
    const [configFuelTypeId, setConfigFuelTypeId] = useState('gasolina');
    const [configFuelTypeName, setConfigFuelTypeName] = useState('Gasolina Comum');
    const [fuelApiFetch, setFuelApiFetch] = useState('GASOLINA COMUM');
  
    // location states
    const [configLocationType, setconfigLocationType] = useState('general');
    const [configLocationId, setconfigLocationId] = useState('brasil');
    const [configLocationName, setconfigLocationName] = useState('Brasil');
    const [locationApiFetch, setLocationApiFetch] = useState('');

    return (
        <GlobalContext.Provider
            value={{
                // fuel states and updaters
                configFuelTypeId,
                setConfigFuelTypeId,
                configFuelTypeName,
                setConfigFuelTypeName,
                fuelApiFetch,
                setFuelApiFetch,

                // location states and updaters
                configLocationType,
                setconfigLocationType,
                configLocationId,
                setconfigLocationId,
                configLocationName,
                setconfigLocationName,
                locationApiFetch,
                setLocationApiFetch
            }}
        >
                { props.children }
        </GlobalContext.Provider>
    )
}