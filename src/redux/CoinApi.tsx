import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../constant/staticData';
import {CoinRateT, SupportedCoinT} from './CoinModel';

export const coinApi = createApi({
  reducerPath: 'coainApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getSupportedCoin: builder.query<SupportedCoinT, void>({
      query: () => '/supported',
    }),
    getCoinRate: builder.query<CoinRateT, void>({
      query: () => '/rate',
    }),
  }),
});

export const {
  useGetCoinRateQuery,
  useGetSupportedCoinQuery,
  useLazyGetCoinRateQuery,
  useLazyGetSupportedCoinQuery,
} = coinApi;
