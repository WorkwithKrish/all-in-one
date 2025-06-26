const makeCounter = (initialVal = 0) => {
  let counterValue = initialVal;
  return {
    increment: function () {
      counterValue++;
      return counterValue;
    },
    decrement: function () {
      counterValue--;
      return counterValue;
    },
    reset: function () {
      counterValue = initialVal;
      return counterValue;
    },
    getValue: function () {
      return counterValue;
    },
  };
};
export default makeCounter;
const counter = makeCounter(58);
counter.increment();
counter.decrement();
counter.reset();
