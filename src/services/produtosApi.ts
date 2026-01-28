import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/api/ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
