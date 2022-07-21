import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'

import GameResultView from '../GameResultView'

import {
  AppContainer,
  GameContainer,
  ButtonsContainer,
  Button,
  ImageBtn,
  PopupContainer,
  ModalContainer,
  CloseButton,
  RuleButton,
  ImgContainer,
  Img,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    inProgress: true,
    selectedObj: '',
    opponentObj: '',
    result: '',
  }

  getResult = (obj, opponent) => {
    if (obj.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (obj.id === 'SCISSORS') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = obj => {
    const {score} = this.state
    const randNum = Math.floor(Math.random() * 3)
    const opponent = choicesList[randNum]
    const result = this.getResult(obj, opponent)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      inProgress: false,
      selectedObj: obj,
      opponentObj: opponent,
      score: newScore,
      result,
    })
  }

  onResetGame = () => {
    this.setState({inProgress: true})
  }

  renderGame = () => (
    <ButtonsContainer>
      <Button
        type="button"
        data-testid="rockButton"
        onClick={() => this.checkResult(choicesList[0])}
      >
        <ImageBtn src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </Button>
      <Button
        type="button"
        data-testid="scissorsButton"
        onClick={() => this.checkResult(choicesList[1])}
      >
        <ImageBtn src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </Button>
      <Button
        type="button"
        data-testid="paperButton"
        onClick={() => this.checkResult(choicesList[2])}
      >
        <ImageBtn src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </Button>
    </ButtonsContainer>
  )

  renderResult = () => {
    const {selectedObj, opponentObj, result} = this.state

    return (
      <GameResultView
        selectedObject={selectedObj}
        opponentObject={opponentObj}
        resetGame={this.onResetGame}
        result={result}
      />
    )
  }

  render() {
    const {score, inProgress} = this.state
    return (
      <AppContainer>
        <Header score={score} />
        <GameContainer>
          {inProgress ? this.renderGame() : this.renderResult()}
        </GameContainer>
        <PopupContainer modal trigger={<RuleButton>Rules</RuleButton>}>
          {close => (
            <ModalContainer>
              <CloseButton data-testid="closeButton" onClick={() => close()}>
                <RiCloseLine size={20} color="#231f20" />
              </CloseButton>
              <ImgContainer>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ImgContainer>
            </ModalContainer>
          )}
        </PopupContainer>
      </AppContainer>
    )
  }
}
export default Game

