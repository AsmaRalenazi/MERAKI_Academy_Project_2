$(document).ready(function () {
  $(`.p2container`).hide();
  $(`.detail_productsC`).hide();
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

const homepage3 = $(`#homep3`);
homepage3.click(() => {
  $(`#p2Contaner`).show();
  $(`#detail_products`).hide();
});



let carts = $(`.add_to_cart`);
console.log(carts);
for (let i = 0; i < carts.length; i++) {
  carts[i].on(`click()`, () => {
    console.log("ppppppp");
    cartNumbers();
  });
  localStorage.getItem() 
}
let counter=0
function cartNumbers(img,name,tag,price) {
  console.log(product);
  counter++
  localStorage.setItem("counter", counter);}



let products = [
  {
    name: "AVALIERI",
    tag: "ساعة يد دائرية للنساء مع سوار من افاليري",

    detail: `  ساعة يد أنيقة من افاليري تمنح إطلالتك لمسة مميزة وتزين يديك بسوار فاخر لمزيد من الأناقة.<br>
    تتميز بسوار شبكي مقاوم للصدأ ويعطي إحساسًا مريحًا لمعصمك وشكلًا انيقًا على يدك.<br>
    بالإضافة للهيكل بحجم 30ملم، يتميز بمقاومته للماء حتى عمق 5متر لتحافظ على ساعتك وتبقيها محمية دائمًا<br>
    الهيكل يحتوي على عقربين، والميناء مزين بشعار افاليري، بالإضافة لنمط الأرقام الرومانية.<br>
    هذه الساعة ستضيف لمسة من الفخامة لوقتك. <br> 
    الملحقات:
    سوار بلون روز جولد مزين بأحجار سواروفسكي, 
    ضمان سنتين
    `
   ,
    price: "621ريال",
    imge: "1.png",
  },

  {
    name: "Kylemore",
    tag: " ساعة نسائية من كايلمور - فضي مع ذهبي",
    detail:`سوار فضي مع ذهبي لامع من الفولاذ المقاوم للصدأ .<br>
    مادة الهيكل من الفولاذ المقاوم للصدأ مع زجاج كريستالي بحجم 28 ملم<br>
    يتميز بلون ميناء ابيض مزين بشعار كايلمور، كما أنه مقاوم للماء حتى 3 متر<br>
    حركة عقارب كوارتز ثلاثية  ويوجد بها مكان لتاريخ اليوم<br>
    اختيار مثالي لاناقتك اليومية 
    `,
    price: "321ريال",
    imge: "2.png",
  },
  {
    name: "AVALIERI",
    tag: "ساعة نسائية من افاليري - ذهبي",
    detail:`بسوار ذهبي من الفولاذ المقاوم للصدأ يعطي الساعة شكل انيق<br>
    تتميز بوجود سوار ليس مقاوم للصدأ  فقط بل يعطي إحساسًا مريحًا لمعصمك وشكلًا انيقًا على يدك .<br>
    وبشكل مناسب للجميع مصنوعة هذه الساعة من الفولاذ المقاوم للصدأ بحجم 28مم <br>
    وتمتاز بمقاومتها للماء حتى عمق 5متر لتحافظ على ساعتك وتبقيها محمية دائمًا<br>.
    تتميز بحركة ثلاثية للعقارب بلون ذهبي ملفت بشكل رائع وانيق .<br>
    مثالية لمظهر مثالي وانيق  .<br>
    العقارب: 3 عقارب,
الحجم:28مم,
لون الميناء : فضي `,
    price: "388ريال",
    imge: "3.png",
  },

];
// let counter=0
// function cartNumbers(product) {
//   console.log(product);
//   counter++
//   localStorage.setItem("counter", counter);
  
  // let productsNumbers = localStorage.getItem("cartNumbers");

  // productsNumbers = parseInt(productsNumbers);
  // if (productsNumbers) {
    // localStorage.setItem("cartNumbers", productsNumbers + 1);
  // } else {
  //   localStorage.setItem("cartNumbers", 1);
  // }
  // setItems(product);
// }
// const carts=$("shopping")
// carts.click(()=>{
//   cartNumbers()
// })
// localStorage.getItem()


const detail_products = $(`#detail_products`);
const fun1 = (i) => {
  const elem3 = $(` <div id="img${i}" class="imge1C">
      <img src="${products[i].imge} " id="${products[i].name}" class="all_imgewhatch" />
      <div id="right_div" class="right_divC">
      <p class="name_whatch">${products[i].name}</p>
      <p class="pragraf">${products[i].tag}</p>
      <p class ="detail">${products[i].detail}</p>
      <p id="price1${i}" class="priceC">${products[i].price}</p>
      </div>
      <div>
      <a class="add_to_cart1" href="#" onclick="cartNumbers(${products[i].imge},${products[i].name} ,${products[i].tag} ,${products[i].price})">اضف لسلة التسوق</a>
     </div> </div>`);

  elem3.appendTo(detail_products);
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
      <a class="add_to_cart" href="#" onclick="cartNumbers(${products[i].imge +products[i].tag +products[i].price})">اضف لسلة التسوق</a>
      </div>`);

    elem22.appendTo(elem);
    elem.appendTo(all_products);
  }
};
