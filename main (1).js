$(document).ready(function () {
  $(`.p2container`).hide();
});

const buttonNext = $("#tswaqi_famel");
buttonNext.mouseover(function () {
  $(".tswaqi_famel").css("cursor", "pointer");
});
buttonNext.click(() => {
  $(`#container`).hide();
  $(`#p2Contaner`).show();
});

const homepage = $(`#homep2`);
homepage.click(() => {
  $(`#container`).show();
  $(`#p2Contaner`).hide();
});

let carts = $(`.add_to_cart`);
console.log(carts);
for (let i = 0; i < carts.length; i++) {
  carts[i].on(`click()`, () => {
    cartNumbers(products[i]);
  });
}

let products = [
  {
    name: "AVALIERI",
    tag:'ساعة يد دائرية للنساء مع سوار من افاليري',
    price:"621ريال",
    imge:"1.png"

  }
]

[
  {
    name: "Kylemore",
    tag:' ساعة نسائية من كايلمور - فضي مع ذهبي',
    price:"321 ريال",
    imge:"2.png"
    
  }
]

[
  {
    name: "AVALIERI",
    tag:'ساعة نسائية من افاليري - ذهبي',
    price:"388 ريال",
    imge:"3.png"
    
  }
];

function cartNumbers(product) {
  console.log(product);
  // let productsNumbers = localStorage.getItem("cartNumbers");

  // productsNumbers = parseInt(productsNumbers);
  // if (productsNumbers) {
  //   localStorage.setItem("cartNumbers", productsNumbers + 1);
  // } else {
  //   localStorage.setItem("cartNumbers", 1);
  // }
  // setItems(product);
}


// function srtItems(product) {}


let creatElement=${`<img src="3.png" >
AVALIERI
 
 ساعة نسائية من افاليري - ذهبي
 
 388 ريال`}

 
 ${`imge2`}
