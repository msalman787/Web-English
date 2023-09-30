import styled from 'styled-components'

export const Button = styled.a`

${props => props.$primary && `
  background-color: #fff;
  color: #245CE9;


  &:hover{
    background-color: #245CE9;
    color: #fff;
    border: 1px solid #fff;
    transition: all .3s ease-in-out;
  }
`}

${props => props.$secondary && `

  background-color: #245CE9;
  color: #fff;

  &:hover{
    background-color: #fff ;
    color: #245CE9;
    border: 1px solid #245CE9;
    transition: all .3s ease-in-out;
  
  }
`}

  width: inherit;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 992px){
    width: inherit;
    text-align: center;
  }
  @media (min-width: 922px){
    width: fit-content
  }

`
