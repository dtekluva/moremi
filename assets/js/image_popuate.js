

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/
  const image_entries = document.getElementsByClassName('image');
  const top_image_entry = document.getElementsByClassName('top_image');


  const image_array     = [ {name: "electric Baking cup", image : "kitchen.jpg", price : "₦300" }, {name: "electric Baking cup", image : "kitchen2.jpg", price : "₦300" }, {name: "electric Baking cup", image : "kitchen3.jpg", price : "₦300" } ];


  random_index = Math.floor((Math.random() * 10) + 1);

  console.log(top_image_entry);
  
  var index = 0;

  top_image_entry[0].innerHTML = '<div class="image"></div><div><span class="product_name">Electric cupcake maker </span><span class="upmost_price">   ₦500</span></div>'




  for (const key in image_entries) {
    console.log(key)
    if (image_entries.hasOwnProperty(key)) {
      const element = image_entries[key];
      var image_html = '<img src="assets/images/'+ image_array[index] + '" alt="">';
      element.innerHTML = image_html;
    }
    index += 1;
    if (index === image_array.length){
      break;
    }
  }
   


  /* Back top
  -----------------------------------------------*/
  
  

