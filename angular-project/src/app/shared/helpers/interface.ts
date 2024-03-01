export interface DPOAddressType {
    address: string;
    zipcode: number;
    city: string;
    country: string;
}

export interface DPOContactType {
    telp: number;
    as: string;
}

export interface DPOType {
    id: string;
    name: string;
    image: string;
    age: number;
    gender: 'Man' | 'Woman';
    marital: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    job: string;
    status: 'Wanted' | 'Found';
    description: string;
    height: number;
    weight: number;
    contacts: DPOContactType[];
    addresses: DPOAddressType[];
}