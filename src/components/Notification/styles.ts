import styled from "styled-components/native";

export const Wrapper = styled.View`
  background: #f1f1f1;
  border-radius: 1px;
  width: 36px;
  height: 36px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const isNotification = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: red;
  position: absolute;
  top: 10px;
  right: 8px;
  border: 1px solid #fafafa;
`;
