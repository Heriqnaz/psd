const list = document.getElementsByClassName("navigation-list")[0];
var arr = 
[
    {
        name: 'HOME',
        link: '#home',
        isActive: "active",
      },
      {
        name: 'STYLE DEMO',
        link: '#STYLE DEMO',
        isActive: ""
      },
      {
        name: 'FULL WIDTH',
        link: '#FULL WIDTH',
        isActive: ""
      },
      {
        name: 'DROPDOWN',
        link: '#DROPDOWN',
        isActive: ""
      },
      {
        name: 'PORTFOLIO',
        link: '#PORTFOLIO',
        isActive: ""
      },
      {
        name: 'GALLERY',
        link: '#GALLERY',
         isActive: ""
      },
]
  
const item = document.getElementsByClassName("navigation-item");
    for(let i = 0; i<arr.length; i++) {
    const a = document.createElement("div");
    list.appendChild(a);
    a.setAttribute('href', arr[i].link);
    a.innerHTML = arr[i].name;
    a.setAttribute('class', "navigation-item"+" " + arr[i].isActive);
    item[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  
}

const x = document.getElementsByClassName('home')[0];

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


const home = document.getElementsByClassName('navigation-item')[0];
home.addEventListener('click', function() {    
      x.style.display = 'block';  
})

const blog = document.getElementsByClassName("blog-test")[0]
const more = document.getElementsByClassName("more")[0];
more.addEventListener('click', function() {
  blog.style.height= 'auto';
  this.style.display= 'none';
});
