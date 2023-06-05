import styled from "styled-components";

export const Item = styled.li`
display: flex;
align-items: center;
width: calc((100% - 4 * 15px) / 2);
    margin: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  height: 90px;
`;

export const OrderTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 6px;
  color: gold;
`;

export const OrderInfo = styled.p`
  margin-bottom: 4px;
  color: white;

`;