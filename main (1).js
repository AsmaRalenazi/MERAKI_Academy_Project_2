// $(window).on("load", function () {

//         $(`#p2Contaner`).hide();
// });


const buttonNext=$("#btn");
buttonNext.text("next")

buttonNext.click(()=>{


    $(`#container`).hide();
    $(`#p2Contaner`).show();

    getMatch()

});

// $(`#list-item-pushed${i}`).on("click", function () {
//     $(this).css({
//       color: "red",

//       "font-size": "20px",
//     });

//     homePageHider();
//   });



