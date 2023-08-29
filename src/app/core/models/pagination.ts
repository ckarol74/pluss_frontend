export interface IPagination {
  page: number;
  limit: number;
}

export interface IPaginatedData {
  data: Array<any>;
  meta: IMetaDataPagination;
  links: ILinks;
}

export interface IMetaDataPagination {
  itemsPerPage?: number;
  totalItems?: number;
  currentPage?: number;
  totalPages?: number;
  sortBy?: any[];
}

export interface ILinks {
  first?: string;
  previous?: string;
  current?: string;
  next?: string;
  last?: string;
}
