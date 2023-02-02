export interface IUserInformation<T,Q> {
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data:T[];
    support: Q[],
}

export interface IUserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IUserSupport {
    url:string;
    text:string;
}