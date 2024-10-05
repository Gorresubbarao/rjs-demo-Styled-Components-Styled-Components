import styled from 'styled-components'

export const Heading = styled.h1`
color:red;
font-size:16px;
`
export const CustomButton = styled.button`padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outLinnn ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outLinnn ? '#ffffff' : '#0070c1')};`

const ReversedButton = props => (
  <Button {...props} children={props.children.split('').reverse()} />
)

export const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`
