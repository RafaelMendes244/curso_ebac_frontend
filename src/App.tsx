import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/produtosApi'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { adicionarAoCarrinho } from './slices/carrinhoSlice'
import { adicionarAosFavoritos, removerDosFavoritos } from './slices/favoritosSlice'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useAppDispatch()
  const carrinho = useAppSelector((state) => state.carrinho.itens)
  const favoritos = useAppSelector((state) => state.favoritos.itens)
  const { data: produtos = [] } = useGetProdutosQuery()

  function handleAdicionarAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function handleFavoritar(produto: Produto) {
    const jaEstaFavoritado = favoritos.find((p) => p.id === produto.id)
    
    if (jaEstaFavoritado) {
      dispatch(removerDosFavoritos(produto.id))
    } else {
      dispatch(adicionarAosFavoritos(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
