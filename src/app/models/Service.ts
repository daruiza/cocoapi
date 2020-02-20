export interface IService {
  date_close?: Date;
  date_open?: Date;
  description?: string;
  id?: number;
  kept?: number;
  name?: string;
  number?: number;
  open?: number;
  rel_clousure_id?: number;
  table_id?: number;
}

export class Service implements IService {
  date_close?: Date;
  date_open?: Date;
  description?: string;
  id?: number;
  kept?: number;
  name?: string;
  number?: number;
  open?: number;
  rel_clousure_id?: number;
  table_id?: number;
}
