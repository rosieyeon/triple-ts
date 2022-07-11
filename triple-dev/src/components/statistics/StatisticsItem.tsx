import styled from "styled-components";
import Statistics from "./Statistics";

const StatisticsItem = () => {
  const statisticsInfo = [
    { id: "1", number: 700, desc: "의 여행자" },
    { id: "2", number: 100, desc: "의 여행 리뷰" },
    { id: "3", number: 470, desc: "의 여행 일정" },
  ];

  return (
    <Layout>
      {statisticsInfo.map((statistics) => (
        <Statistic key={statistics.id}>
          {Statistics(statistics.number, `${statistics.desc}`)}
        </Statistic>
      ))}
    </Layout>
  );
};

export const Layout = styled.div`
  ${({ theme }) => theme.defaultAnimation}
  opacity: 0;
  animation-delay: 0.1s;

  font-size: 36px;
`;
export const Statistic = styled.div`
  padding-bottom: 20px;
`;
export default StatisticsItem;
