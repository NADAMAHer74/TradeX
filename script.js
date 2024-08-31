let header_one = document.querySelector(".header1");
let header_two = document.querySelector(".header2");
let header_three = document.querySelector(".header3");
let header_four = document.querySelector(".header4");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    myFunction(header_one, 100, 200, 1000);
    myFunction(header_two, 50, 200, 500);
    myFunction(header_three, 140, 300, 2000);
    myFunction(header_four, 200, 100, 3000);
  }
};

// i = 100;
function myFunction(e, i, increment, max) {
  //   header_one.innerText = i;
  var int = setInterval(() => {
    i += increment;
    e.innerText = i;
    // header_one.innerText = i;
    // header_two.innerText = i;
    // header_three.innerText = i;
    // header_four.innerText = i;

    if (i >= max) {
      clearInterval(int);
    }
  }, 100);
}
