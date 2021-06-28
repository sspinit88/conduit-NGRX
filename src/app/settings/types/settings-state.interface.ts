import { BackendError } from '../../shared/types/backend-error.interface';

export interface SettingsState {
  isSubmitting: boolean;
  validationError: BackendError | null;
}
