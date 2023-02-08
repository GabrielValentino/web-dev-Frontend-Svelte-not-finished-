export type GeolocationProps = {
    coordinates: Array<number>;
    type: string;
};

export type LocationProps = {
    _id: object;
    filmType: string;
    filmProducerName: string;
    endDate: Date;
    filmName: string;
    district: string;
    geolocationX?: string;
    geolocationY?: string;
    geolocationType?: string;
    geolocation: GeolocationProps;
    sourceLocationId?: string;
    filmDirectorName: string;
    address: string;
    startDate: Date;
    year: string;
    __v?: number;
};

export type FilteredLocationProps = {
    id?: string;
    Type?: string;
    Producer?: string;
    'Ended at'?: Date;
    'Started at'?: Date;
    Name?: string;
    District?: string;
    Director?: string;
    Address?: string;
    Year?: string;
};

export type LocationsLoadValues = {
    locations: Array<FilteredLocationProps>;
    index: number;
};

export type OneLocationLoadValue =
    | {
    location: LocationProps;
}
    | {
    message: string;
};