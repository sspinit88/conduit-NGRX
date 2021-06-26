import { Article } from '../../shared/types/article.interface';

export interface ArticleState {
  isLoading: boolean;
  data: Article | null;
  error: string | null;
}
