document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menu-btn");
  var menuList = document.querySelector(".menu-list");

  menuBtn.addEventListener("click", function () {
    menuList.style.display =
      menuList.style.display === "block" ? "none" : "block";
  });
});
