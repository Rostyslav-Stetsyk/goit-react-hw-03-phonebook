import styled from '@emotion/styled';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  border: 1px solid gray;

  li:nth-of-type(2n + 1) {
    background-color: lightgray;
  }
`;

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;
