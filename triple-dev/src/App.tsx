import React from "react";
import styled from "styled-components";

import AwardsItem from "./components/awards/AwardsItem";
import MainImage from "./components/main/MainImage";
import StatisticsItem from "./components/statistics/StatisticsItem";

function App() {
  return (
    <Layout>
      <MainImage />
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
