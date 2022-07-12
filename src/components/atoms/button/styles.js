import styled from "styled-components";

export const ButtonFullWidth = styled.button`
  width: 100%;
  height: 56px;
  background-color: #000000;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  border: none;
  outline: none;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    span {
      display: flex;
      p {
        padding: 0;
        margin: 0;
        margin-inline: 15px;
        margin-top: 2px;
        color: #fcfcfc;
      }
    }
  }
`;
export const ButtonDefault = styled.button`
  padding-inline: 32px;
  height: 50px;
  background-color: #000000;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  margin-inline: auto;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    span {
      display: flex;
      p {
        padding: 0;
        margin: 0;
        margin-inline: 18px;
        margin-top: 2px;
        color: #fcfcfc;
      }
    }
  }
`;
export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: #000000;
  border: none;
  outline: none;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;

  span {
    display: flex;
    p {
      padding: 0;
      margin: 0;
      margin-inline: 15px;
      margin-top: 2px;
      color: #fcfcfc;
    }
  }
`;
