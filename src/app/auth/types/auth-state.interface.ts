import { CurrentUser } from '../../shared/types/current-user.interface';
import { BackendError } from '../../shared/types/backend-error.interface';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoginIn: boolean | null;
  validationErrors: BackendError | null;
  isLoading: boolean;
}
