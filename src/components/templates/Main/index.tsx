import { Button } from 'components/Button'
import * as S from './styles'

const Main = () => {
  function handleClick() {
    alert('disparou!')
  }
  return (
    <div>
      <S.Title>Testando o theme</S.Title>
      <Button onClick={handleClick}>Clica neu</Button>
    </div>
  )
}

export default Main
