
export interface IUser {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  password?: string;
  active?: string;
  rol_id?: number;
  rel_store_id?: number;
  permits?: any[];
  idadmin?: number;
}

export class User implements IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: string;
  password: string;
  active: string;
  rol_id: number;
  rel_store_id: number;
  permits: any[];
  idadmin: number;
}
