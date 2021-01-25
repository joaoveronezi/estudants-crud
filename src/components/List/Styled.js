import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-style: solid;
  margin: 10px;
  height: auto;
  img {
    object-fit: cover;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: -20px;
  p {
    font-size: 25px;
  }
  input {
    width: 130px;
    height: 20px;
    margin-left: 5px;
  }
`;

export const InformationWrapper = styled.div`
  width: 40%;
  margin-left: 30px;
`;
