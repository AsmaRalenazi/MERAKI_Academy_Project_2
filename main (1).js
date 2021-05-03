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
  addTomain();
});

const homepage = $(`#homep2`);
homepage.click(() => {
  $(`#container`).show();
  $(`#p2Contaner`).hide();
});

let carts = $(`.add_to_cart`);
console.log(carts);
// for (let i = 0; i < carts.length; i++) {
//   carts[i].on(`click()`, () => {
//     cartNumbers(products[i]);
//   });
// }

let products = [
  {
    name: "AVALIERI",
    tag: "ساعة يد دائرية للنساء مع سوار من افاليري",
    price: "621ريال",
    imge: "1.png",
  },

  {
    name: "Kylemore",
    tag: " ساعة نسائية من كايلمور - فضي مع ذهبي",
    price: "321 ريال",
    imge: "2.png",
  },
  {
    name: "AVALIERI",
    tag: "ساعة نسائية من افاليري - ذهبي",
    price: "388 ريال",
    imge: "3.png",
  },
  {
    name: "jad",
    tag: `shum kshzdm`,
    price: "54565",
    imge: "4.png",
  },
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
// const body=$('body')
// const div=$('<div id ="div1"></div>');//creat new div in html
// div.appendTo(body1);//add to html page
// const name=$("<li>hi</li>");
// name.appendTo(div);

// const body1=$('body')
// const div=$('<div id =class"p-box"></div>');//creat new div in html
// div.appendTo(body1);//add to html page

const detail_products = $(`#detail_products`);

// const addToDetailpage = () => {
//   const elem = $(`<div id="x"  class="p-box"> </div>`);
//   const elem3 = $(` <div id="img${0}" class="imge1C">
//       <img src="${products[0].imge} " id="${
//     products[0].name
//   }" class="AVALIERIC" />
//       <p class="p2imge_AVALIERIC">${products[0].name}</p>
//       <p class="p3imge_AVALIERIC">${products[0].tag}</p>
//       <p class ="detail">ssssfffffspdofld,cllklk</p>
//       <p id="price${0}" class="price">${products[0].price}</p>
//       <a class="add_to_cart" href="#" onclick="cartNumbers(0)">اضف لسلة التسوق</a>
//       </div>`);

//   elem3.appendTo(elem);
//   elem.appendTo(detail_products);
// };

const fun1 = (i) => {
  // console.log("ddddddddddd", i);
  const elem = $(`<div id="x"  class="p-box"> </div>`);
  const elem3 = $(` <div id="img${i}" class="imge1C">
      <img src="${products[i].imge} " id="${products[i].name}" class="AVALIERCC" />
      <p class="p2imge_AVALIERIC">${products[i].name}</p>
      <p class="p3imge_AVALIERIC">${products[i].tag}</p>
      <p class ="detail">ssssfffffspdofld,cllklk</p>
      <p id="price${i}" class="price">${products[i].price}</p>
      <a class="add_to_cart" href="#" onclick="cartNumbers(i)">اضف لسلة التسوق</a>
      </div>`);

  elem3.appendTo(elem);
  elem.appendTo(detail_products);
  $(`#p2Contaner`).hide();
  $(`#detail_products`).show();
};



const all_products = $(`#all_products`);
addTomain = () => {
  for (let i = 0; i < products.length; i++) {
    const elem = $(`<div id="x"  class="p-box"> </div>`);
    const elem22 = $(` <div id="img${i}" class="imge1C">
    <img src="${products[i].imge}" id="${products[i].name}" onclick="fun1(${i})" class="AVALIERIC" />
    <p class="p2imge_AVALIERIC">${products[i].name}</p>
    <p class="p3imge_AVALIERIC">${products[i].tag}</p>
      <p id="price${i}" class="price">${products[i].price}</p>
      <a class="add_to_cart" href="#" onclick="cartNumbers(0)">اضف لسلة التسوق</a>
      </div>`);

    elem22.appendTo(elem);
    elem.appendTo(all_products);
  }
};

// const pr= $("#AVALIERI");
// pr.mouseover(function () {
//   $(".AVALIERIC").css("cursor", "pointer");
// });
// pr.click(()=>{
//   console.log("ddddddddddd");
//   $(`#detail_products`).show();
//   $(`#p2Contaner`).hide();
//   addToDetailpage();
// })
