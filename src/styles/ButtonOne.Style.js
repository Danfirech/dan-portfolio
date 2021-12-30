import styled from "styled-components";

export const DansButton = styled.div`
  display: flex;
  background-color: Green;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

const HoverMessage = styled.div`
  display: none;
  ${Container}:hover & {
    display: block;
  }
`;
