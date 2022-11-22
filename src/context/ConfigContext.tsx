import { createContext, useState } from "react";

interface GlobalContextProps {
    
}

interface ConfigContextProps {

}

export const GlobalContext = createContext<any>(null);

export const ConfigContext = (props: any) => {
    const [configFuelTypeId, setConfigFuelTypeId] = useState('gasolina');
    const [configFuelTypeName, setConfigFuelTypeName] = useState('Gasolina Comum');
  
    // location states
    const [configLocationType, setconfigLocationType] = useState('general');
    const [configLocationId, setconfigLocationId] = useState('brasil');
    const [configLocationName, setconfigLocationName] = useState('Brasil');

    return (
        <GlobalContext.Provider
            value={{
                // fuel states and updaters
                configFuelTypeId,
                setConfigFuelTypeId,
                configFuelTypeName,
                setConfigFuelTypeName,

                // location states and updaters
                configLocationType,
                setconfigLocationType,
                configLocationId,
                setconfigLocationId,
                configLocationName,
                setconfigLocationName,
            }}
        >
                { props.children }
        </GlobalContext.Provider>
    )
}