export interface ApiRequest {
  method?: HttpMethod;
  returnSslResources?: boolean;
  locale?: string;
  accessToken: string;
  id: string;
  isUrlLookup?: boolean;
  fields?: Field[];
  metadata?: boolean;
}

export interface BasePaging {
  next?: string;
  previous?: string;
}

export interface CursorPaging extends BasePaging {
  before?: string;
  after?: string;
}

export interface Field {
  name: string;
  order?: Order;
  limit?: number;
  subFields?: Field[];
}

export const enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface OffsetPaging extends BasePaging {
  offset?: number;
}

export const enum Order {
  CHRONOLOGICAL = 'chronological',
  REVERSE_CHRONOLOGICAL = 'reverse_chronological',
}

export interface TimePaging extends BasePaging {
  until?: number | string;
  since?: number | string;
}
