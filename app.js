console.log("numbers project");

const numbers = document.querySelectorAll(".number");
const numbersArray = [...numbers];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
};

numbersArray.forEach((number) => {
  updateCount(number);
});
