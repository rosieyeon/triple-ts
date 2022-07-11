import styled from "styled-components";

const Awards = (imgURL: string, desc: string) => {
  return (
    <>
      <AwardImg src={`images/${imgURL}.png`} />
      <AwardDesc>{desc}</AwardDesc>
    </>
  );
};

export const AwardImg = styled.img`
  width: 64px;
`;
export const AwardDesc = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export default Awards;
