import { IUser } from 'app/core/user/user.model';
import { ICooperative } from 'app/shared/model/cooperative.model';

export interface IRestaurant {
  id?: number;
  nom?: string;
  type?: string;
  users?: IUser[];
  cooperatives?: ICooperative[];
}

export class Restaurant implements IRestaurant {
  constructor(
    public id?: number,
    public nom?: string,
    public type?: string,
    public users?: IUser[],
    public cooperatives?: ICooperative[]
  ) {}
}
