import styled from "styled-components";

const Awards = (imgURL: string, desc: string) => {
  return (
    <>
      <AwardImg src={`images/${imgURL}.png`} />
      <AwardDesc>{desc}</AwardDesc>
    </>
  );
};

export const AwardImg = styled.img``;
export const AwardDesc = styled.div`
  white-space: pre-wrap;
`;
export default Awards;
