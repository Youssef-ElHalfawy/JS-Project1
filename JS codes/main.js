                                            // Slider


var imgs = ["https://displate.com/img/what-a-displate/animals.jpg","https://displate.com/img/what-a-displate/gaming.jpg","https://displate.com/img/what-a-displate/travel.jpg","https://static.displate.com/1200x1200/limited/2022-02-08/75a65cf14f51c7e66a6d2fea5e722641_17f10522afd6f5de38360528ac3640dd.jpg","https://displate.com/img/what-a-displate/music2.jpg","https://displate.com/img/what-a-displate/garage2.jpg"];
var comments = ["Paintings Fit for Every Taste","Well-known Creative Artists","A Variety of Sizes and Shapes","Inspiring Art Designs","Easy and Trustworthy Transactions","Long-life High Quality Products"];
var slide = document.getElementById("slides");
var comment = document.getElementById("comment");

var i = 0;
slide.setAttribute("src",imgs[i]);
comment.innerHTML = comments[i];

function slideRight() {
    i++;
    if (i >= imgs.length) {
        i = 0;
    }
    slide.setAttribute("src",imgs[i]);
    comment.innerHTML = comments[i];
}
function slideLeft() {
    i--;
    if (i < 0) {
        i = imgs.length-1;
    }
    slide.setAttribute("src",imgs[i]);
    comment.innerHTML = comments[i];
}
var slideInterval = setInterval (slideRight, 4000);


                                            // Go to top


topBtn = document.getElementById("top-button");
window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.onclick = function() {toTop()};
function toTop() {
  document.documentElement.scrollTop = 0;
}


                                            // Categories


var fantasy = ["https://static.displate.com/280x392/displate/2020-05-04/ae78b94f84ad71c14293561bfc90dc59_16ec557fe8d4fd65faa284109fb5cf19.jpg","https://static.displate.com/280x392/displate/2020-10-01/053245a6532bb0f857faec2ff3e7c998_0fdc4c851424854ebd6db81e00cb123a.jpg","https://static.displate.com/280x392/displate/2021-01-29/a641e1fd41d3f55561dc08ede4870c94_446ec879a970d1c93879fa7992dc4cd2.jpg","https://static.displate.com/280x392/displate/2019-11-15/8d7ac792632afe756015c8d1801d2ffa_9eb9a128ad91dc367e921cf0128fc3a5.jpg","https://static.displate.com/280x392/displate/2021-01-29/efba0723f54b7cb2555065b89afbe38d_6fc99933034a2bc68040babdb452ad30.jpg","https://static.displate.com/280x392/displate/2018-09-25/ee59a69a07f2f69e81039e729923e62d_e7b7a23dc81b8faded4ad59c384c0b87.jpg","https://static.displate.com/280x392/displate/2020-08-18/fe8682559921e3cd15bd31a3e7e1b79e_1e8f41f4e25e4d3c1a7533d5073e555f.jpg","https://static.displate.com/280x392/displate/2021-07-20/d272ec68a23b49ea680889f5f64c58ec_1e4b19044d3d09837c35e84258cd5464.jpg"];
var games = ["https://static.displate.com/280x392/displate/2020-09-02/d9c324c893e45e74f156cb9db94aaab3_30a1406d2d8af78059f5eda4ca0f4653.jpg","https://static.displate.com/280x392/displate/2020-08-13/8812c0941dd76bd3b1df67bb88249249_b14088eef3ad5124795a7d60d78e5ba6.jpg","https://static.displate.com/280x392/displate/2019-05-13/1daee6f5a30739fc72b7fdbbe62c6736_026672b5788d784fa75b20835f68ee68.jpg","https://static.displate.com/280x392/displate/2019-04-25/6488ffcc335a85503de9b3c175e9dca4_5f1e8555933e2bd864aa517c5591286d.jpg","https://static.displate.com/280x392/displate/2021-11-04/9678595671a28f0438fbded7718a47f1_a38926665cec249fe6e695c39015815f.jpg","https://static.displate.com/280x392/displate/2019-04-25/2349d72d69c1c59da99aeea00ce8e4b1_dfa61b22d88e55d19911c4aab18ce133.jpg","https://static.displate.com/280x392/displate/2020-07-14/00e444ac6b68b2c4e3870b4e106b1b4c_52608dee993fa90b88fad997cfdbf08c.jpg","https://static.displate.com/280x392/displate/2020-09-09/0c374608e57bc547ff146b8cd0e7a121_82d1b3e2cf729b97d95b165ec81e8ca7.jpg"];
var anime = ["https://static.displate.com/280x392/displate/2020-05-07/a74ecf5fe98b605a23bfe82e2b1c05c9_887a39f573004b571741a6731747cdbe.jpg","https://static.displate.com/280x392/displate/2021-09-13/579a797a50d393a3e91b776d3bf71a33_6b4bb1ec9389149293098f49637d739b.jpg","https://static.displate.com/280x392/displate/2020-04-13/daff3aecf8347bb661bdcecdd11c6673_4802027cf0e024b808e6882802d2408b.jpg","https://static.displate.com/280x392/displate/2021-08-16/2499af8bc45b08a5435c188e14625aaa_ce8e359de69c545b5fe22f41bf39d4fd.jpg","https://static.displate.com/280x392/displate/2019-06-21/96f5f4414b951e5ed568b44303217efb_9c8c3f0021fea55bda32ce64858fd2a5.jpg","https://static.displate.com/280x392/displate/2020-07-14/233dd5b003e1e333fec55aa3d729b3ad_2b02c0535ac78fb427afcf5af38adeaa.jpg","https://static.displate.com/280x392/displate/2022-04-01/3575d7670b8e143f906dc59f8528a970_62f80408b4a824a44e6b4db13ddee4a5.jpg","https://static.displate.com/280x392/displate/2020-04-11/c6b9696d80f099d83c720f4afa1ba8a5_882aaeefe08489dda3aeb9e1ef244f2c.jpg"];
var nature = ["https://static.displate.com/280x392/displate/2020-07-23/4849180cc375cf3a6c4905594d78cf72_a4f4ea92277079bf9ec1789ec9826316.jpg","https://static.displate.com/280x392/displate/2020-03-18/7f90d204e0446a928ca919fc00869768_89386636a2cf4fb572f54195fe84c71c.jpg","https://static.displate.com/280x392/displate/2021-06-24/c8615547fb28329b6e6b6727bb288111_871131132c797d8ea533eda56cced5c6.jpg","https://static.displate.com/280x392/displate/2021-02-06/24a5ba058c9588b5b39f06475248c4f7_9af1c1e7d2bdb36b7446c2ae399162bc.jpg","https://static.displate.com/280x392/displate/2021-01-02/4236b8017dc974f79d27fdd0f6d73dfd_593012348c68d1696c025014370635da.jpg","https://static.displate.com/280x392/displate/2021-11-02/b28bad138ea75a39f77b2bef354106c2_29aa0b726eeea83ca6f0887667bcf24f.jpg","https://static.displate.com/280x392/displate/2021-01-03/467acada6d811adb354a934037a1b95c_af6c78ee1bfd1f231a5fe4fa2f138df7.jpg","https://static.displate.com/280x392/displate/2021-06-12/bc74bdad54235b6d6d35369a3d7bafd6_a74f2a970002981b256e077bdeb6f247.jpg"];

var fantasyBtn = document.getElementById("fantasyBtn");
var gamesBtn = document.getElementById("gamesBtn");
var animeBtn = document.getElementById("animeBtn");
var natureBtn = document.getElementById("natureBtn");
var products = document.getElementsByClassName("productImgs");
var products2 = document.getElementsByClassName("products2");
// console.log(products2);
for (var index = 0; index < products2.length; index++) {
    products2[index].classList.add("hide-products2");
}

var changetoFantasy = function () {
    // console.log(products);
    for (var index = 0; index < products.length; index++) {
        products[index].setAttribute("src",fantasy[index]);
    }
}
var changetoGames = function () {
    for (var index = 0; index < products.length; index++) {
        products[index].setAttribute("src",games[index]);
    }
}
var changetoAnime = function () {
    for (var index = 0; index < products.length; index++) {
        products[index].setAttribute("src",anime[index]);
    }
}
var changetoNature = function () {
    for (var index = 0; index < products.length; index++) {
        products[index].setAttribute("src",nature[index]);
    }
}
var unhide = function(){
    for (var index = 0; index < products2.length; index++) {
        products2[index].classList.remove("hide-products2");
    }
}

fantasyBtn.addEventListener("click",changetoFantasy);
gamesBtn.addEventListener("click",changetoGames);
animeBtn.addEventListener("click",changetoAnime);
natureBtn.addEventListener("click",changetoNature);
fantasyBtn.addEventListener("click",unhide);
gamesBtn.addEventListener("click",unhide);
animeBtn.addEventListener("click",unhide);
natureBtn.addEventListener("click",unhide);


                                            // Add to cart


var cart_count = document.getElementById("cart-count");
var addBtns = document.getElementsByClassName("add-product");
for (var index = 0; index < addBtns.length; index++) {
    addBtns[index].addEventListener("click",addtoCart);
}

var count = 0;
cart_count.innerHTML = "Cart Count: <span>"+count+"</span>";
function addtoCart() {
    count++
    // console.log(count);
    cart_count.innerHTML = "Cart Count: <span>"+count+"</span>";
}