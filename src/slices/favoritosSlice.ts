import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.itens.find(p => p.id === action.payload.id)
      
      if (!produtoExistente) {
        state.itens.push(action.payload)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(p => p.id !== action.payload)
    },
    limparFavoritos: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarAosFavoritos, removerDosFavoritos, limparFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
