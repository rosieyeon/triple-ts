import styled from "styled-components";
import useCountUp from "../../hooks/useCountup";

const Statistics = (num: number, desc: string) => {
  return (
    <>
      <Strong>{useCountUp(num)}만 명</Strong>
      {desc}
    </>
  );
};

export const Strong = styled.span`
  font-weight: 600;
`;
export default Statistics;
