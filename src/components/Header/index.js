import {
    HeaderContainer,
    HeadsContainer,
    Heading,
    ScoreContainer,
    ScoreHeading,
    Score,
  } from './styledComponents'
  
  const Header = props => {
    const {score} = props
  
    return (
      <HeaderContainer>
        <HeadsContainer>
          <Heading>ROCK PAPER SCISSORS</Heading>
        </HeadsContainer>
        <ScoreContainer>
          <ScoreHeading>Score</ScoreHeading>
          <Score>{score}</Score>
        </ScoreContainer>
      </HeaderContainer>
    )
  }
  export default Header
  