import axios from 'axios';
import { ProductType, ApiResponse } from './types';

const API_URL = 'https://665c3c1b3e4ac90a04d9021e.mockapi.io';

const api = axios.create({
  baseURL: API_URL,
});

export const productsApi = {
  async getAll(): Promise<ApiResponse<ProductType[]>> {
    try {
      const { data } = await api.get<ProductType[]>('/products');
      return { data };
    } catch (error) {
      return {
        data: [],
        error: 'Failed to fetch products',
      };
    }
  },

  async getBySlug(slug: string): Promise<ApiResponse<ProductType | null>> {
    try {
      const { data } = await api.get<ProductType[]>('/products', {
        params: { slug },
      });
      return { data: data[0] || null };
    } catch (error) {
      return {
        data: null,
        error: 'Failed to fetch product',
      };
    }
  },
}; 