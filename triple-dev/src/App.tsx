import React from "react";
import styled from "styled-components";
import Awards from "./components/awards/Awards";

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

function App() {
  return (
    <div className="App">
      <AwardsSection>
        {awardInfo.map((award) => (
          <Award key={award.id}>
            {Awards(`${award.imgURL}`, `${award.desc}`)}
          </Award>
        ))}
      </AwardsSection>
    </div>
  );
}

export default App;

export const AwardsSection = styled.div`
  display: flex;
  gap: 40px;
`;
export const Award = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
