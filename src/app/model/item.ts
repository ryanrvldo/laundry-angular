import { ItemDetails } from './item-details';
import { Services } from './services';

export class Item {
  id: number;
  itemDetails: ItemDetails;
  services: Services;
  cost: number;
}
