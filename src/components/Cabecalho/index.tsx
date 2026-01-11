import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <HeaderContainer>
    <h1>EBAC Jobs</h1>
  </HeaderContainer>
)

export default Cabecalho
