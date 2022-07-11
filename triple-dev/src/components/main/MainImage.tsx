import styled from "styled-components";

const MainImage = () => {
  return <Img>2021년 12월 기준</Img>;
};

export const Img = styled.div`
  ${({ theme }) => theme.defaultAnimation}

  background-image: url("../images/triple.png");
  background-size: cover;
  width: 400px;
  height: 338px;

  text-align: center;
  padding-top: 280px;

  color: rgba(58, 58, 58, 0.7);
`;

export default MainImage;
