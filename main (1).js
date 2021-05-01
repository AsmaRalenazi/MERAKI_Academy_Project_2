$(document).ready( function () {
      $(`.p2container`).hide();
});



const buttonNext=$("#tswaqi_famel");
// buttonNext.on("mouseover",hander)
buttonNext.mouseover(function() {
    $('.tswaqi_famel').css('cursor', 'pointer');

});
buttonNext.click(()=>{
    $(`#container`).hide();
    $(`#p2Contaner`).show();
    
    
});

const homepage=$(`#homep2`);
homepage.click(()=>{
    $(`#container`).show(); 
    $(`#p2Contaner`).hide();
});



let carts=$(`.add_to_cart`);
console.log(carts);
for(let i=0;i<carts.length;i++){
    carts[i].on(`click()`,()=>{
        carNumbers(products[i]);
    })
}

let products=[
{
    name:'AVALIERI'
    // tag:'ساعة يد دائرية للنساء مع سوار من افاليري'
    // price:"621ريال"
}
]


function cartNumbers(product){
    let productsNumbers=localStorage.getItem('cartNumbers');
 

    productsNumbers=parseInt(productsNumbers)
  if (productsNumbers){
    localStorage.setItem('cartNumbers',productsNumbers + 1);
}else{
    localStorage.setItem('cartNumbers', 1);
}
setItems(product);
}

function srtItems(product){

}




// getMatch()
// buttonNext.text("next")

// $(`#imge1${i}`).on("click", function () {
//     $(this).css({
//      $(#`imge1`).show() 
//      $(#`all_products`).hide() 
//     });

//     homePageHider();
//   });



