import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : '5em')};
  background: ${(props) => (props.background ? props.background : '#5e942d')};
  color: ${(props) => (props.color ? props.color : 'white')};
  border: none;
  padding: 7px;
  cursor: pointer;
`;
