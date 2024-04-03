import { Account } from '../../models/account.interface';

export interface AuthState {
  authToken: string;
  accountID: string;
  displayName: string;
  isAdmin: boolean;
  accountList: Account[];
}
