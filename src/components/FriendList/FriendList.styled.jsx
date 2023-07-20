import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  background-color: #8686de;
  border: solid 1px grey;
  border-radius: 10px;
  border: solid grey 1px;
  box-shadow: 0px 5px 5px gray;
  margin-bottom: 5px;
  :last-child {
    margin: 0;
  }
`;

export const Status = styled.span`
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  background-color: ${props => {
    return props.isOnline && 'green';
  }};
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
`;
