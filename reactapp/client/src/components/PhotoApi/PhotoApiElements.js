import styled from 'styled-components';


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;



background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
 /* meridian gradient - linear-gradient(to right, #283c86, #45a247); */
`;

export const Input = styled.input.attrs(props => ({
    type: 'file',
    size: props.small ? 5 : undefined,
  }))`
  border-radius: 50px;
  color: #fff;
  background: #010606;
  white-space: nowrap;
  padding: 18px;
  
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin: 10px;

  &:hover {
      transition: all 0.2s ease-in-out;
      background: linear-gradient(to left, #42275a, #734b6d);
  };

`;

export const Button1 = styled.button`
    border-radius: 50px;
    color: #fff;
    background: #010606;
    white-space: nowrap;
    padding: 12px;
    
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 10px;
    height: 55px;
    width: 320px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(to left, #42275a, #734b6d);
    };

`;


export const Button2 = styled.button`
    border-radius: 150px;
    color: #fff;
    background: #010606;
    white-space: nowrap;
    padding: 12px;
    
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 10px;
    height: 200px;
    width: 200px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(to left, #42275a, #734b6d);
    };

`;


export const Instruction = styled.h1`
    font-size: 90px;
    color: #010606;
    margin-bottom: 10px;
    font-size: 20px;
`;