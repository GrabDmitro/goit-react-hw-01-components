import styled from '@emotion/styled';

export const ElemBody = styled.section`
  padding-top: 20px;
  width: 300px;
  background-color: #d2d2d2;
  text-align: center;
`;
export const Title = styled.h2`
  margin-left: auto;
`;

export const List = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 3;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #bdbfc3;
  flex-grow: 1;
  flex-shrink: 3;
  border: solid grey 1px;
`;
