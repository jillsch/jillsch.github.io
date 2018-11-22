
//click command for images in carousel #1

const sectionNamesArr = ['logos', 'websites', 'tshirts', 'digital-art'];
let categoryItemIndex = {
  logos: 0,
  websites: 0,
  tshirts: 0,
  'digital-art': 0,
}
let categoryItemMax = {
  logos: 3,
  websites: 3,
  tshirts: 3,
  'digital-art': 3,
}

for(let i=0; i < sectionNamesArr.length; i++){
  let currentCategory = sectionNamesArr[i];

  const categoryNextSelector = '.' + currentCategory + ' #next';
  const categoryPreviousSelector = '.' + currentCategory + ' #previous';
  const categoryImageSelector = '.' + currentCategory + " #samples_image img";
  const categoryTextSelector = '.' + currentCategory + ' .container_box article';


  $(categoryNextSelector).on("click", function() {
    let maxItems = categoryItemMax[currentCategory];
    if (categoryItemIndex[currentCategory] < maxItems - 1 ){
      categoryItemIndex[currentCategory] += 1;
    } else {
      categoryItemIndex[currentCategory] = 0;
    }
    $(categoryImageSelector).hide();
    $(categoryImageSelector).eq(categoryItemIndex[currentCategory]).show();
    $(categoryTextSelector).hide();
    $(categoryTextSelector).eq(categoryItemIndex[currentCategory]).show();
  });

  $(categoryPreviousSelector).on("click", function() {
    let maxItems = categoryItemMax[currentCategory];
    if (categoryItemIndex[currentCategory] > 0){
      categoryItemIndex[currentCategory] -= 1;
    } else {
      categoryItemIndex[currentCategory] = maxItems - 1 ;
    }
    $(categoryImageSelector).hide();
    $(categoryImageSelector).eq(categoryItemIndex[currentCategory]).show();
    $(categoryTextSelector).hide();
    $(categoryTextSelector).eq(categoryItemIndex[currentCategory]).show();
  });
}

// $(".logos #next").on("click", function() {
//   if (itemNumber < 3){
//     itemNumber +=1;
//   } else {
//     itemNumber =0;
//   }
//   $(".logos #samples_image img").hide();
//   $('.logos #samples_image img').eq(itemNumber).show();
//   $(".logos .container_box article").hide();
//   $('.logos .container_box article').eq(itemNumber).show();
// });
//
// $(".logos #previous").on("click", function() {
//   if (itemNumber > 0){
//     itemNumber -=1;
//   } else {
//     itemNumber = 3;
//   }
//   $('.logos #samples_image img').hide();
//   $('.logos #samples_image img').eq(itemNumber).show();
//   $('.logos .container_box article').hide();
//   $('.logos .container_box article').eq(itemNumber).show();
// });

$(window).on('scroll', function () {
  // Step 1: Google $(window).scrollTop();

  let windowScrollBottom = $(window).scrollTop() + $(window).height();

  console.log('distance scrolled', windowScrollBottom);
  console.log('offset', $(document).height()-255);
  if (windowScrollBottom >= $(document).height() - 255) {
    $('.sticky-footer').addClass('hide');
  } else {
    $('.sticky-footer').removeClass('hide');
  }
});


$('.showModal').on('click', function () {
  $('.modal-background').css("display", "flex").hide().fadeIn();
});

$('#close').on('click', function () {
  $('.modal-background').fadeOut();

});
