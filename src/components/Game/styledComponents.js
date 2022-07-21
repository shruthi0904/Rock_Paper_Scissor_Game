import styled from 'styled-components/macro'
import Popup from 'reactjs-popup'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
  background-color: #223a57;
`
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
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ImageBtn = styled.img`
  width: 150px;
`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
`
export const ListItem = styled.li`
  width: 120px;
`

export const PopupContainer = styled(Popup)`
  background-color: #ffffff;
  width: 90%;
  max-width: 400px;
  height: 460px;
  border-radius: 16px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ffffff;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`
export const RuleButton = styled.button`
  color: #223a57;
  background-color: #ffffff;
  padding-top: 12px;
  padding-left: 24px;
  padding-bottom: 12px;
  padding-right: 24px;
  align-self: flex-end;
  font-family: 'Bree Serif';
  font-weight: 500;
  border-radius: 8px;
  font-size: 20px;
`
export const ImgContainer = styled.div`
  margin-top: 12px;
  margin-left: 18px;
  margin-bottom: 18px;
  margin-right: 18px;
`
export const Img = styled.img`
  width: 400px;
  height: 400px;
`
