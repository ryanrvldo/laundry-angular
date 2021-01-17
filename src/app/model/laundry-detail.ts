import { ItemDetails } from './item-details';
import { Services } from './services';

export class LaundryDetail {
  id: number;
  itemDetails: ItemDetails;
  services: Services;
  cost: number;
  quantity: number;
  finishDate: string;
}
