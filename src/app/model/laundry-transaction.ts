import { LaundryDetail } from './laundry-detail';
import { Profile } from './profile';
import { User } from './user';

export class LaundryTransaction {
  receiptNumber: string;
  customer: Profile;
  startDate: string;
  items: LaundryDetail[];
  totalCost: number;
  user: User;
}
