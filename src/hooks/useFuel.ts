import { create } from 'zustand';

interface FuelProps {
    fuelId: string;
    setFuelId: (fuelId: string) => void;

    fuelName: string;
    setFuelName: (fuelName: string) => void;

    fuelApiFetch: string;
    setFuelApiFetch: (fuelApiFetch: string) => void;

    // locations
    locationType: string;
    setLocationType: (locationType: string) => void;

    locationId: string;
    setLocationId: (locationId: string) => void;

    locationName: string;
    setLocationName: (locationName: string) => void;

    locationApiFetch: string | string[];
    setLocationApiFetch: (locationApiFetch: string | string[]) => void;
}

export const useFuel = create<FuelProps>((set) => ({
    //fuels 
    fuelId: 'gasolina',
    setFuelId: (fuelId) => set({ fuelId }),

    fuelName: 'Gasolina comum',
    setFuelName: (fuelName) => set({ fuelName }),

    fuelApiFetch: 'GASOLINA COMUM',
    setFuelApiFetch: (fuelApiFetch) => set({ fuelApiFetch }),

    // locations
    locationType: 'general',
    setLocationType: (locationType) => set({ locationType }),

    locationId: 'brasil',
    setLocationId: (locationId) => set({ locationId }),

    locationName: 'Brasil',
    setLocationName: (locationName) => set({ locationName }),

    locationApiFetch: '',
    setLocationApiFetch: (locationApiFetch) => set({ locationApiFetch })

}))