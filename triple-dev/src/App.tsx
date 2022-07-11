import React from "react";
import styled from "styled-components";
import Awards from "./components/awards/Awards";
import Statistics from "./components/statistics/Statistics";

const awardInfo = [
  {
    id: "1",
    imgURL: "play-store",
    desc: "2018 구글 플레이스토어\n올해의 앱 최우수상 수상",
  },
  {
    id: "2",
    imgURL: "badge-apple",
    desc: "2018 애플 앱스토어\n올해의 여행앱 선정",
  },
];

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

        <AwardsSection>
          {awardInfo.map((award) => (
            <Award key={award.id}>
              {Awards(`${award.imgURL}`, `${award.desc}`)}
            </Award>
          ))}
        </AwardsSection>
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
export const AwardsSection = styled.div`
  ${({ theme }) => theme.defaultAnimation}
  opacity: 0;
  animation-delay: 0.2s;

  display: flex;
  gap: 40px;
  padding-top: 30px;
`;
export const Award = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
