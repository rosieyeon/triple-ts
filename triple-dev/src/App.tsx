import React from "react";
import styled from "styled-components";

import AwardsItem from "./components/awards/AwardsItem";
import StatisticsItem from "./components/statistics/StatisticsItem";

function App() {
  return (
    <Layout>
      <MainImg src="images/triple.png" />
      <div>
        <StatisticsItem />
        <AwardsItem />
      </div>
    </Layout>
  );
}

export default App;

export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 200px;

  width: 1200px;

  margin: 150px 62px;
`;
export const MainImg = styled.img`
  ${({ theme }) => theme.defaultAnimation}
  width: 400px;
`;
