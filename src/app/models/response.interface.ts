export interface IResponse<T, Q> {
    data: T;
    support: Q;
}

export interface IPaginatedResponse<T, Q> extends IResponse<T[], Q> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T[];
    support:Q;
}