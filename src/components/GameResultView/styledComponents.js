import styled from 'styled-components/macro'

export const GameContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
`
export const Button = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ImageBtn = styled.img`
  width: 150px;
`

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const YouAndOpponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const Img = styled.img`
  width: 150px;
`
export const Result = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const PlayButton = styled.button`
  background-color: "ffffff"
  color: '#223a57';
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
