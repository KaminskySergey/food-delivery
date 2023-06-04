import styled from 'styled-components';


export const Item = styled.li`
width: calc((100% - 8 * 15px) / 4);
    margin: 15px;
    display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  color: white;
  outline: 1px solid blue;
`

export const ImageContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ItemPrice = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  color: green;
`;

export const ItemQuantity = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const AddToCartButton = styled.button`
  background-color: #4830f0;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const RemoveToCartButton = styled.button`
background-color: red;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`