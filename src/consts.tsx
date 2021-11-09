export const filtersByCategory = [
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b81', name: 'People', value: 'people' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b82', name: 'Premium', value: 'premium' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b84', name: 'Pets', value: 'pets' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b85', name: 'Food', value: 'food' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b86', name: 'Landmarks', value: 'landmarks' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b87', name: 'Cities', value: 'cities' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b88', name: 'Nature', value: 'nature' },
];
export const filtersByPrice = [
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b89', name: 'Lower than $20', value: 'low20' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b90', name: '$20 - $100', value: '20-100' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b91', name: '$100 - $200', value: '100-200' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b92', name: 'More than $200', value: 'more200' },
];

export interface ThemeTypes {
    isLightMode: boolean,
    isFadeIn?: boolean
}

export const PRIMARY_COLOR = '#181818';
export const SECONDARY_COLOR = '#eeeeee';

export const DEFAULT_TEXT = `So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter 
likely scrambled part of Cicero's De Finibus in order to provide placeholder
text to mockup various fonts for a type specimen book.So how did the classical 
Latin become so incoherent? According to McClintock.`

