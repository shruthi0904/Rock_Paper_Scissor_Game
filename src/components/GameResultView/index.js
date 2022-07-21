import {
    ResultViewContainer,
    YouAndOpponentContainer,
    Container,
    Heading,
    Img,
    Result,
    PlayButton,
  } from './styledComponents'
  
  const GameResultView = props => {
    const {selectedObject, opponentObject, result, resetGame} = props
  
    const onClickPlay = () => {
      resetGame()
    }
  
    return (
      <ResultViewContainer>
        <YouAndOpponentContainer>
          <Container>
            <Heading>YOU</Heading>
            <Img src={selectedObject.imageUrl} alt="your choice" />
          </Container>
          <Container>
            <Heading>OPPONENT</Heading>
            <Img src={opponentObject.imageUrl} alt="opponent choice" />
          </Container>
        </YouAndOpponentContainer>
        <Result>{result}</Result>
        <PlayButton type="button" onClick={onClickPlay}>
          PLAY AGAIN
        </PlayButton>
      </ResultViewContainer>
    )
  }
  export default GameResultView
  
  