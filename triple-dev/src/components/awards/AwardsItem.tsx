import styled from "styled-components";
import Awards from "./Awards";

const AwardsItem = () => {
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

  return (
    <Layout>
      {awardInfo.map((award) => (
        <Award key={award.id}>
          {Awards(`${award.imgURL}`, `${award.desc}`)}
        </Award>
      ))}
    </Layout>
  );
};

export const Layout = styled.div`
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
export default AwardsItem;
