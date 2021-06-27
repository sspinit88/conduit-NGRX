import { Article } from '../../shared/types/article.interface';
import { BackendError } from '../../shared/types/backend-error.interface';

export interface ArticleState {
  isLoading: boolean;
  data: Article | null;
  error: string | null;

  isSubmitting: boolean;
  validationErrors: BackendError | null;
}
