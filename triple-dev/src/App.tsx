import React from "react";
import styled from "styled-components";

import AwardsItem from "./components/awards/AwardsItem";
import Statistics from "./components/statistics/Statistics";

const statisticsInfo = [
  { id: "1", number: 700, desc: "의 여행자" },
  { id: "2", number: 100, desc: "의 여행 리뷰" },
  { id: "3", number: 470, desc: "의 여행 일정" },
];

function App() {
  return (
    <Layout>
      <MainImg src="images/triple.png" />
      <div>
        <StatisticsSection>
          {statisticsInfo.map((statistics) => (
            <Statistic key={statistics.id}>
              {Statistics(statistics.number, `${statistics.desc}`)}
            </Statistic>
          ))}
        </StatisticsSection>

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

  margin: 150px 62px;
`;
export const MainImg = styled.img`
  ${({ theme }) => theme.defaultAnimation}
  width: 400px;
`;
export const StatisticsSection = styled.div`
  ${({ theme }) => theme.defaultAnimation}
  opacity: 0;
  animation-delay: 0.1s;

  font-size: 36px;
`;
export const Statistic = styled.div`
  padding-bottom: 20px;
`;
