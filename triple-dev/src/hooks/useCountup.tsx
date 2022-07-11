import { useEffect, useState } from "react";

const useCountUp = (target: number) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const frame = 1000 / 60;

  useEffect(() => {
    let cnt = 0;
    const countup = setInterval(() => {
      const current = ++cnt / (duration / frame);

      if (current === 1) {
        setCount(target);
        clearInterval(countup);
      } else {
        const percentage = 1 - Math.pow(2, -10 * current);
        setCount(Math.ceil(percentage * target));
      }
    }, frame);
  }, [frame, target]);

  return count;
};
export default useCountUp;
