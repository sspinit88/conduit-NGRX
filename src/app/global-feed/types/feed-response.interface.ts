import { Article } from '../../shared/types/article.interface';

export interface FeedResponse {
  articles: Article[],
  articlesCount: number,
}
