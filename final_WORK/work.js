
//click command for images in carousel #1

const sectionNamesArr = ['logos', 'websites', 'tshirts', 'digital-art'];
let categoryItemIndex = {
  logos: 0,
  websites: 0,
  tshirts: 0,
  'digital-art': 0,
}
let categoryItemMax = {
  logos: 6,
  websites: 7,
  tshirts: 4,
  'digital-art': 3,
}

for(let i=0; i < sectionNamesArr.length; i++){
  let currentCategory = sectionNamesArr[i];


  //
  // '.logos #next'
  // '.logos #previous'
  // '.logos #samples_image img'
  // '.logos .container_box article'

  // '.websites #next'
  // '.websites #previous'
  // '.websites #samples_image img'
  // '.websites .container_box article'


//selectors

  const categoryNextSelector = '.' + currentCategory + ' #next';
  const categoryPreviousSelector = '.' + currentCategory + ' #previous';
  const categoryImageSelector = '.' + currentCategory + " #samples_image img";
  const categoryTextSelector = '.' + currentCategory + ' .container_box article';

//when page loads, this hides all but the first selector

  $(categoryImageSelector).hide();
  $(categoryImageSelector).eq(0).show();
  $(categoryTextSelector).hide();
  $(categoryTextSelector).eq(0).show();

// attaching the click function (next) to each of the different sections

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

// attaching the click function (previous) to each of the different sections


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

// 1st attempt for footer scroll

// $(window).on('scroll', function () {
//   // Step 1: Google $(window).scrollTop();
//
//   let windowScrollBottom = $(window).scrollTop() + $(window).height();
//
//   console.log('distance scrolled', windowScrollBottom);
//   console.log('offset', $(document).height()-255);
//   if (windowScrollBottom >= $(document).height() - 255) {
//     $('.sticky-footer').addClass('hide');
//   } else {
//     $('.sticky-footer').removeClass('hide');
//   }
// });

$(window).on('scroll', function () {
  let windowScrollBottom = $(window).scrollTop() + $(window).height();

  if( $(window).width() >= 640 ){
    if (windowScrollBottom >= $(document).height() - 255) {
      $('.sticky-footer').addClass('hide');
    } else {
      $('.sticky-footer').removeClass('hide');
    }
  } else {
    if (windowScrollBottom >= $(document).height() - 355) {
      $('.sticky-footer').addClass('hide');
    } else {
      $('.sticky-footer').removeClass('hide');
    }
  }
});

//modal pop up ---contact //

$('.showModal').on('click', function () {
  $('.modal-background').css("display", "flex").hide().fadeIn();
});

$('#close').on('click', function () {
  $('.modal-background').fadeOut();

});



// hamburger menu //

$('.showMenu').on('click', function () {
  $('.menu-modal-background').css("display", "flex").hide().fadeIn();
  $('.hamburger').css("display", "none").hide().fadeOut();
});

$('#close-menu').on('click', function () {
  $('.menu-modal-background').fadeOut();
  $('.hamburger').css("display", "none").hide().fadeIn();
});
