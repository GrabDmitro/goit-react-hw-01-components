import styled from '@emotion/styled';

export const Container = styled.div`
  //position: absolute;
  width: 250px;

  border-radius: 10px;
  box-shadow: 0px 5px 5px gray;
  border: solid grey 1px;
`;

export const Description = styled.div`
  padding: 20px;
  background-color: #dbdbdb;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const Name = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style: none;
`;

export const Lable = styled.span`
  font-weight: bold;
`;

export const StatSection = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80px;
  padding: 10px;
  border: solid grey 1px;
  color: grey;
`;

export const Quantity = styled.span``;
