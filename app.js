console.log("numbers project");

const numbers = document.querySelectorAll(".number");
const numbersArray = [...numbers];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 2);
};

numbersArray.forEach((number) => {
  updateCount(number);
});
