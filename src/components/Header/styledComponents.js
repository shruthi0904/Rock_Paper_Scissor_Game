import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
`
export const HeadsContainer = styled.div`
  width: 120px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-family: 'Bree Serif';
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #ffffff;
  border-radius: 16px;
`
export const ScoreHeading = styled.p`
  color: #223a57;
  font-size: 24px;
  font-family: 'Bree Serif';
  margin-bottom: 0px;
`
export const Score = styled.p`
  color: #223a57;
  font-size: 24px;
  font-family: 'Roboto';
  margin-top: 10px;
`
