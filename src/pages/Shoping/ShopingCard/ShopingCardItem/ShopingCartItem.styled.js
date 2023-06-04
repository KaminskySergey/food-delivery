import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  padding: 1rem;
  margin-bottom: 16px;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  align-items: center;
  height: 150px;
`;

export const ImageContainer = styled.div`
      height: 100%;
    width: 150px;
  margin-right: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  color: green;
`;

export const QuantityInput = styled.input`
  width: 80px;
  height: 24px;
  padding: 4px;
  margin-bottom: 8px;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ff4136;
  color: white;
  cursor: pointer;
`;