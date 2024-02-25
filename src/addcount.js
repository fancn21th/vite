export const addCount = () => {
  document.querySelector("#counter").textContent =
    parseInt(document.querySelector("#counter").textContent) + 1;
};
