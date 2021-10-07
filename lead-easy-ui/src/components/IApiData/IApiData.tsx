export interface IApiData {
    rows: { 
        id: number; 
        name: string; 
        email: string; 
        phone: string; 
        status: string; 
        details: string; }[];
    setRows: any;
}
