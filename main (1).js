$(document).ready( function () {
      $(`.p2container`).hide();
});

$(document).ready( function () {
    $(`.container`).show();
});

const buttonNext=$("#tswaqi_famel");

buttonNext.click(()=>{
    $(`#container`).hide();
    $(`#p2Contaner`).show();
    
    
});


const homepage=$("#homep2");

homepage.click(()=>{
    $(`#p2Contaner`).show();
    $(`#container`).hide(); 
});
// getMatch()
// buttonNext.text("next")

// $(`#imge1${i}`).on("click", function () {
//     $(this).css({
//      $(#`imge1`).show() 
//      $(#`all_products`).hide() 
//     });

//     homePageHider();
//   });



