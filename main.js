const filterBtns = document.querySelectorAll(".filter-btn");
const filterItem = document.querySelectorAll(".filter-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterItem.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        filterBtns.forEach((btn) => {
          btn.classList.remove("active__btn");
        });
        item.style.display = "block";
        btn.classList.add("active__btn");
      } else {
        item.style.display = "none";
      }
    });
  });
});
