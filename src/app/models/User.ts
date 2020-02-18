
export interface IUser {
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
}

export class User implements IUser {
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
}
