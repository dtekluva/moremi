/*-------------------------------------------------------------------------------
All variables
-------------------------------------------------------------------------------*/
var image_entries = document.getElementsByClassName('image_target');
var top_image_entry = document.getElementsByClassName('top_image');
var index_target = document.getElementsByClassName('thumbnail');//index page populate target 
var new_array = [];
random_index = Math.floor(Math.random() * 10 + 1); //add a random image to top
var index = 1;
var num_imgs = 30


function index_populator(){

  index_target[0].innerHTML =" ";

  while (index < 4) {

      index_target[0].innerHTML += '<div class="target"><div class="image"><img src="product_images/' + image_array[random_index + index ].image + '" alt=""></div><div><span>' + image_array[random_index + index ].name + '</span><span class="price">' +  image_array[random_index + index ].price + '</span></div></div>' ;
      //console.log("working");
      
      index += 1;

    }
};

/*-------------------------------------------------------------------------------
Populate top bar
-------------------------------------------------------------------------------*/
function add_top_image() {
  top_image_entry[0].innerHTML = '<div class="image"><img src="product_images/' + image_array[random_index].image + '" alt=""></div><div><span class="product_name">' + image_array[random_index].name + '</span><span class="upmost_price">' + image_array[random_index].price + '</span></div>';
  add_lower_images(image_array.slice((0),(num_imgs)));
};

/*-------------------------------------------------------------------------------
Populate lower images
-------------------------------------------------------------------------------*/

function add_lower_images(new_imgs) {
  //console.log(image_array.length)
  new_imgs.forEach(function (element, index) {
    new_array.push(element);
    //console.log(new_array);
    if (index === 1) {
      image_entries[0].innerHTML = "";
    }
    if (index % 3 === 0 && index > 2) {

      image_entries[0].innerHTML += ' <div class="main_small_image_left target"><div class="image"><img src="product_images/' + new_array[0].image + '" alt=""></div><div><span class="product_name">' + new_array[0].name + '</span><span class="upmost_price">' + new_array[0].price + '</span></div></div> <div class="main_small_image_mid target"><div class="image"><img src="product_images/' + new_array[1].image + '" alt=""></div><div><span class="product_name">' + new_array[1].name + '</span><span class="upmost_price">' + new_array[1].price + '</span></div></div> <div class="main_small_image_right  target"> <div class="image"><img src="product_images/' + new_array[2].image + '" alt=""></div><div><span class="product_name">' + new_array[2].name + '</span><span class="upmost_price">' + new_array[2].price + '</span></div></div>';

      new_array = [];
    };

    index += 1;
    //---------------------------------------------------------------------------------------------
    //incase of extra product objects not summing up to three populate the remaining 1 or 2 objects
    //---------------------------------------------------------------------------------------------

    if (new_array.length == 2 && index > image_array.length - 2) {
      image_entries[0].innerHTML += ' <div class="main_small_image_left target"><div class="image"><img src="product_images/' + new_array[0].image + '" alt=""></div><div><span class="product_name">' + new_array[0].name + '</span><span class="upmost_price">' + new_array[0].price + '</span></div></div> <div class="main_small_image_mid target"><div class="image"><img src="product_images/' + new_array[1].image + '" alt=""></div><div><span class="product_name">' + new_array[1].name + '</span><span class="upmost_price">' + new_array[1].price + '</span></div></div>';
    } else if (new_array.length == 1 && index > image_array.length - 1) {
      image_entries[0].innerHTML += ' <div class="main_small_image_left target"><div class="image"><img src="product_images/' + new_array[0].image + '" alt=""></div><div><span class="product_name">' + new_array[0].name + '</span><span class="upmost_price">' + new_array[0].price + '</span></div></div>';
    }
  });
};

function divide_screens(){
  var ul_target = document.querySelector('.pagination');
  num_of_screens = image_array.length/num_imgs;
  // if(image_array.length%30){
  //   num_of_screens += 1;
  // };
  for (var i = 0; i < num_of_screens ; i++){
    var new_li = document.createElement("li");
    var new_a_tag = document.createElement("a");
    new_a_tag.innerHTML = "PAGE " + (i + 1);
    new_li.className = "pagination_target";
    new_li.id = i + 1;
    new_li.appendChild(new_a_tag);
    ul_target.appendChild(new_li);
  };
  return true
}

divide_screens()

var btns = document.querySelectorAll(".pagination_target");

for (const key in btns) {
  if (btns.hasOwnProperty(key)) {
    const element = btns[key];
    element.addEventListener("click", (e)=>{
      $('.preloader').fadeIn(800); // set duration in brackets    
      $('.preloader').fadeOut(800); // set duration in brackets
      val = e.target.innerHTML
    console.log((val).substr(val.length - 1))
     send_array((val).substr(val.length - 1));
    })
  }
}

function send_array(ref){
  setTimeout(function(){
    new_imgs = image_array.slice((num_imgs*(ref-1)),(num_imgs*ref));
    console.log(new_imgs);
    add_lower_images(new_imgs)
  }, 1000)
};



/*-------------------------------------------------------------------------------
Function CALLS from body onload
-------------------------------------------------------------------------------*/














// /*-------------------------------------------------------------------------------
// All variables(original code in ES6)
// -------------------------------------------------------------------------------*/
//   const image_entries   = document.getElementsByClassName('image_target');
//   const top_image_entry = document.getElementsByClassName('top_image');
//   var   new_array       = []
//   random_index = Math.floor((Math.random() * 10) + 1); //add a random image to top
//   var index = 1;
  

// /*-------------------------------------------------------------------------------
// Populate top bar
// -------------------------------------------------------------------------------*/
// function add_top_image(){
//   top_image_entry[0].innerHTML = '<div class="image"><img src="product_images/'+ image_array[random_index].image + '" alt=""></div><div><span class="product_name">' + image_array[random_index].name + '</span><span class="upmost_price">'+  image_array[random_index].price +'</span></div>';
// };
  

// /*-------------------------------------------------------------------------------
// Populate lower images
// -------------------------------------------------------------------------------*/

//   function add_lower_images(){
//     image_array.forEach((element, index) => {
//       new_array.push(element);
//       if (index === 1){
//         image_entries[0].innerHTML = ""
//       }
//       if ((index % 3 ) === 0 && index > 2  ){
        
//         image_entries[0].innerHTML += ' <div class="main_small_image_left target"><div class="image"><img src="product_images/'+ new_array[0].image + '" alt=""></div><div><span class="product_name">' + new_array[0].name + '</span><span class="upmost_price">' +   new_array[0].price + '</span></div></div> <div class="main_small_image_mid target"><div class="image"><img src="product_images/'+ new_array[1].image + '" alt=""></div><div><span class="product_name">' + new_array[1].name + '</span><span class="upmost_price">' +   new_array[1].price + '</span></div></div> <div class="main_small_image_right  target"> <div class="image"><img src="product_images/'+ new_array[2].image + '" alt=""></div><div><span class="product_name">' + new_array[2].name + '</span><span class="upmost_price">' +   new_array[2].price + '</span></div></div>';

//         new_array = [];
//       };

//       index += 1;
// //---------------------------------------------------------------------------------------------
// //incase of extra product objects not summing up to three populate the remaining 1 or 2 objects
// //---------------------------------------------------------------------------------------------

//       if (new_array.length == 2 && index > image_array.length - 2  ){
//         image_entries[0].innerHTML += ' <div class="main_small_image_left target"><div class="image"><img src="product_images/'+ new_array[0].image + '" alt=""></div><div><span class="product_name">' + new_array[0].name + '</span><span class="upmost_price">' +   new_array[0].price + '</span></div></div> <div class="main_small_image_mid target"><div class="image"><img src="product_images/'+ new_array[1].image + '" alt=""></div><div><span class="product_name">' + new_array[1].name + '</span><span class="upmost_price">' +   new_array[1].price + '</span></div></div>';
        
//       } else if(new_array.length == 1 && index > image_array.length - 1 ){
//         image_entries[0].innerHTML += ' <div class="main_small_image_left target"><div class="image"><img src="product_images/'+ new_array[0].image + '" alt=""></div><div><span class="product_name">' + new_array[0].name + '</span><span class="upmost_price">' +   new_array[0].price + '</span></div></div>';
//       }
//     });
//   };
  
//   /*-------------------------------------------------------------------------------
// Function CALLS
// -------------------------------------------------------------------------------*/
// add_top_image();
// add_lower_images();