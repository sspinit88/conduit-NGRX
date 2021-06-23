import { PopularTagType } from '../../../types/popular-tag-type.type';

export interface PopularTagsState {
  isLoading: boolean;
  data: PopularTagType[] | null;
  error: string | null;
}
