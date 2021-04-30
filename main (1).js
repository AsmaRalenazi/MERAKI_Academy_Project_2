$(document).ready( function () {
      $(`.p2container`).hide();
});

// $(document).ready( function () {
//     $(`.container`).show();
//     $(`#p2Contaner`).show();

// });

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
    $(`#p2Contaner`).show();
    $(`#container`).hide(); 
});
$(document).ready( function () {
    $(`#p2Contaner`).hide();
    $(`.container`).show();

});


let carts=$(`.add_to_cart`);
for(let i=0;i<carts.length;i++){
    carts[i].addEventLister(`click()`,()=>{
        carNumbers();
    })
}
function carNumbers(){
    let productsNumbers=localStorage.getItem('cartNumbers');
 

    productsNumbers=parseInt(productsNumbers)
  if (productsNumbers){
    localStorage.serItem('carNumbers',productsNumbers + 1);
}else{
    localStorage.serItem('carNumbers', 1);
    
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



