export interface EmployeeType {
    id: string;
    name: string;
    email: string;
    image: string;
    age: number;
    gender: 'Man' | 'Woman';
    role: Role;
    department: Department;
    title: Title;
    contacts: Contact[];
    address: Address;
    certificates: Certificate[];
  }
  
  export type Role = 'Frontend Engineer' | 'Backend Engineer' | 'AI Engineer' | 'QA Engineer' | 'HR';
  export type Department = 'Finance Department' | 'Research & Technology' | 'Other';
  export type Title = 'Entry-Level' | 'Mid-Level' | 'Senior-Level';
  
  export interface Contact {
    type: string;
    value: string;
  }
  
  export interface Address {
    address: string;
    zipcode: number;
    city: string;
    country: string;
  }
  
  export interface Certificate {
    name: string;
    description: string;
    dateUpload: string; // Format: YYYY-MM-DD
  }