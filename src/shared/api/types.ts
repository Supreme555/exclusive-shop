export interface ProductType {
  id: string;
  name: string;
  slug: string;
  rating: number;
  actualPrice: number;
  discountPrice: number | null;
  image: string;
  reviewsCount: number;
  liked?: boolean;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
} 