import { Profile } from './profile';
import { Role } from './role';

export class User {
  id: number;
  username: string;
  isActive: boolean;
  profile: Profile;
  role: Role;
}
