import { Auth } from './auth.interface';

export interface LoginRequest {
  user: Partial<Auth>
}
