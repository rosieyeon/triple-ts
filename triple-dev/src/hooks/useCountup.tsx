import { useEffect, useState } from "react";

const useCountUp = (target: number) => {
  const [count, setCount] = useState(0);
  const frame = 1000 / 60;

  useEffect(() => {
    let currentNum = target;
    const countup = setInterval(() => {
      const countNum = Math.ceil(target - currentNum);

      if (currentNum < 0) {
        clearInterval(countup);
      }

      const stepNum = currentNum / 10;
      currentNum -= stepNum;
      setCount(countNum);
    }, frame);
  }, []);

  return count;
};
export default useCountUp;
