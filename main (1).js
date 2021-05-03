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

const pr= $("#AVALIERI");
pr.mouseover(function () {
  $(".AVALIERIC").css("cursor", "pointer");
});
pr.click(()=>{
  $(`#detail_products`).show();
  $(`#p2Contaner`).hide();
})

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
    tag:'ساعة يد دائرية للنساء مع سوار من افاليري',
    price:"621ريال",
    imge:"1.png"

  }

,

  {
    name: "Kylemore",
    tag:' ساعة نسائية من كايلمور - فضي مع ذهبي',
    price:"321 ريال",
    imge:"2.png"
    
  }
,


  {
    name: "AVALIERI",
    tag:'ساعة نسائية من افاليري - ذهبي',
    price:"388 ريال",
    imge:"3.png"
    
  }
  ,
  {
    name:"jad",
    tag:`shum kshzdm`,
    price:"54565",
    imge:"4.png"
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
// const body=$('body')
// const div=$('<div id ="div1"></div>');//creat new div in html
// div.appendTo(body1);//add to html page
// const name=$("<li>hi</li>");
// name.appendTo(div);


// const body1=$('body')
// const div=$('<div id =class"p-box"></div>');//creat new div in html
// div.appendTo(body1);//add to html page

const all_products=$(`#all_products`)
addTomain=(()=>{

  for(let i = 0;i<=products.length;i++){
    const elem=$(`<div id="x"  class="p-box"> </div>`)
  const elem22=$(` <div id="img${i}" class="imge1C">
      <img src="${products[i].imge}" id="${products[i].name}" class="AVALIERIC" />
      <p class="p2imge_AVALIERIC">${products[i].name}</p>
      <p class="p3imge_AVALIERIC">${products[i].tag}</p>
      <p id="price${i}" class="price">${products[i].price}</p>
      <a class="add_to_cart" href="#" onclick="cartNumbers(0)">اضف لسلة التسوق</a>
      </div>`)
    
    elem22.appendTo(elem)
    elem.appendTo(all_products)}
  


});



//   const elem2=$(`<div class="p-box">
//     <div id="imge2" class="imge2C">
//       <img src=${products[i].imge} id="Kylemore" class="KylemoreC" />
//       <p class="p2imge_KylemoreC">${products[i].name}</p>
//       <p class="p3imge_KylemoreC">${products[i].tag}p>
//       <p id="price" class="price">${products[i].price}</p>
//       <a class="add_to_cart" href="#">اضف لسلة التسوق</a>
//     </div>
//   </div>`) 
//   elem2.appendTo(div)

// const elem3=$(` <div class="p-box">
// <div id="imge3" class="imge3C">
//   <img src=${products[i].imge} id="AVALIERI2" class="AVALIERI2C" />
//   <p class="p2imge_AVALIERIC">${products[i].name}</p>
//   <p class="p3imge_AVALIERIC">${products[i].tag}</p>
//   <p id="price" class="price">${products[i].price}</p>
//   <a id="add_to_cart" class="add_to_cart" href="#"
//     >اضف لسلة التسوق</a
//   >
// </div>
// </div>`)



// const name=$("<li>hi</li>");
// name.appendTo(div);

// const femaleSeliction = $(`#tswaqi_famel`);