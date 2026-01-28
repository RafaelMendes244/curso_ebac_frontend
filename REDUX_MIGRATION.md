# Migração para Redux - EXERCICIO_MD30

## Alterações Realizadas

### ✅ Redux Toolkit Implementado
- **Redux Toolkit** - Gerenciamento centralizado de estado
- **Redux DevTools** - Disponível automaticamente para debug

### ✅ Slices Criados

#### 1. **carrinhoSlice.ts** 
- `adicionarAoCarrinho()` - Adiciona produtos únicos ao carrinho
- `removerDoCarrinho()` - Remove produtos pelo ID
- `limparCarrinho()` - Limpa todo o carrinho

#### 2. **favoritosSlice.ts**
- `adicionarAosFavoritos()` - Adiciona produtos aos favoritos
- `removerDosFavoritos()` - Remove produtos dos favoritos
- `limparFavoritos()` - Limpa todos os favoritos

### ✅ RTK Query Implementado

#### **produtosApi.ts**
- `useGetProdutosQuery()` - Hook para buscar produtos da API
- Suporta cache automático
- Tratamento de loading e erros

### ✅ Hooks Customizados

#### **store/hooks.ts**
- `useAppDispatch()` - Dispatch tipado
- `useAppSelector()` - Selector tipado com TypeScript

### ✅ App.tsx Refatorado
- Removido useState para Carrinho, Favoritos e Produtos
- Integração com Redux usando `useAppSelector()`
- Uso de `useAppDispatch()` para disparar actions
- RTK Query para requisições de produtos

### ✅ Configuração da Store
- **store/index.ts** - Configuração central do Redux
- Middleware RTK Query integrado
- Tipagem completa com TypeScript

## Arquivos Criados

```
src/
├── store/
│   ├── index.ts          (Configuração da store)
│   └── hooks.ts          (Hooks customizados tipados)
├── slices/
│   ├── carrinhoSlice.ts  (Estado do carrinho)
│   └── favoritosSlice.ts (Estado dos favoritos)
└── services/
    └── produtosApi.ts    (RTK Query para produtos)
```

## Dependências Instaladas

```
@reduxjs/toolkit
react-redux
```

## Como Usar

### Dispatch de Actions
```tsx
const dispatch = useAppDispatch()
dispatch(adicionarAoCarrinho(produto))
```

### Selecionar Estado
```tsx
const carrinho = useAppSelector(state => state.carrinho.itens)
const favoritos = useAppSelector(state => state.favoritos.itens)
```

### Buscar Produtos
```tsx
const { data: produtos = [] } = useGetProdutosQuery()
```

## Branch
- **REDUX_MD30** - Branch criado com todas as alterações

## Próximos Passos

1. Fazer fork do projeto no GitHub em sua conta
2. Configurar credenciais do Git
3. Fazer push da branch REDUX_MD30
4. Compartilhar o link do repositório

---

✨ **Exercício Completo!**
