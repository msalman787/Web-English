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

  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  
  cursor: pointer;
  font-weight: bold;

  @media (width <= 576px){
    width: 100%;
    text-align: center;
  }
  @media (576px <= width <= 768){

  }
  @media (768px <= width <= 992){
    
  }
  @media (992px <= width <= 1200){
    
  }
  @media ( width > 1200){
    
  }

`
