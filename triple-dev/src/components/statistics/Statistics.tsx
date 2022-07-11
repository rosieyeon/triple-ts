import styled from "styled-components";

const Statistics = (num: number, desc: string) => {
  return (
    <>
      <Strong>{num}만 명</Strong>
      {desc}
    </>
  );
};

export const Strong = styled.span`
  font-weight: 600;
`;
export default Statistics;
