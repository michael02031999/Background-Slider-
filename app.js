let arrayOfURLS = [
  "/Users/michaelgalan/Desktop/SUMMER2022/images /sevenWonders/sevenWonders.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/wonder%231.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/Wonder%232.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/Wonder%233.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/Wonder%234.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/Wonder%235.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/Wonder%236.jpeg",
  "file:///Users/michaelgalan/Desktop/SUMMER2022/images%20/sevenWonders/Wonder%237.jpeg",
];

let container = document.getElementById("container");
container.style.backgroundImage =
  "url('/Users/michaelgalan/Desktop/SUMMER2022/images /sevenWonders/sevenWonders.jpeg')";

let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", changeImage);
rightArrow.addEventListener("click", changeImageRight);

let count = 0;

let imageURL = "";
let imageURLinQuotes = "";

function changeImage() {
  count++;

  if (count == 8) {
    count = 0;
  }

  arrayChange(count);
}

function changeImageRight() {
  count--;
  if (count == -1) {
    count = 7;
  }
  arrayChange(count);
}

function arrayChange(count) {
  console.log(count);
  imageURL = arrayOfURLS[count];
  imageURLinQuotes = "'".concat(imageURL, "'");

  container.style.backgroundImage = "url(" + imageURLinQuotes + ")";
}

arrayChange((count = 0));
