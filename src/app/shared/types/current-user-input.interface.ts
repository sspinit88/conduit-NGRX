import { CurrentUser } from './current-user.interface';

export interface CurrentUserInput
  extends CurrentUser {
  password: string;
}
