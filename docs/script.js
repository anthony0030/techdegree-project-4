/* global lightbox */

var galleryHTML = "";
var numberOfPhotos = "0";
var imgPath = "photos/";
var thumbPath = "photos/thumbnails/";
var images = [
  {
    file: "01.jpg",
    title: "Hay Bales",
    caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields."
  },
  {
    file: "02.jpg",
    title: "Lake",
    caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
  },
  {
    file: "03.jpg",
    title: "Canyon",
    caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
  },
  {
    file: "04.jpg",
    title: "Iceberg",
    caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
  },
  {
    file: "05.jpg",
    title: "Desert",
    caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
  },
  {
    file: "06.jpg",
    title: "Fall",
    caption: "Fall is coming, I love when the leaves on the trees start to change color."
  },
  {
    file: "07.jpg",
    title: "Plantation",
    caption: "I drove past this plantation yesterday, everything is so green!"
  },
  {
    file: "08.jpg",
    title: "Dunes",
    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
  },
  {
    file: "09.jpg",
    title: "Countryside Lane",
    caption: "We enjoyed a quiet stroll down this countryside lane. "
  },
  {
    file: "10.jpg",
    title: "Sunset",
    caption: "Sunset at the coast! The sky turned a lovely shade of orange."
  },
  {
    file: "11.jpg",
    title: "Cave",
    caption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
  },
  {
    file: "12.jpg",
    title: "Bluebells",
    caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
  }
];

$(document).ready(function(){

  $(images).each(function(){
    galleryHTML += "<a class='photo' href='" + imgPath + this.file + "' data-lightbox='image-gallery' data-title='" + this.caption + "' data-alt='" + this.title + "'" + "title='" + this.caption.toLowerCase() + "'>";
    galleryHTML += "<img src=" + thumbPath + this.file +" alt='" + this.title+"'>";
    galleryHTML += "</a>";
    numberOfPhotos++;
  });

  galleryHTML += "<img src='photos/No_image_available.svg' id='noPhotos'>";

  $("div#gallery").html(galleryHTML);
  $("#noPhotos").css("display", "none");
  $("#noPhotos").css("margin", "0 auto");

  $("#search").keyup(function(){
    var userSearch = $(this).val();
    if($.trim(userSearch) !== "" && $.trim(userSearch) !=="\\"){
      $("#gallery").children("[title*='" + userSearch.toLowerCase() + "']").attr("data-lightbox", "image-gallery").show();
      $("#gallery").children(":not([title*='" + userSearch.toLowerCase() + "'])").attr("data-lightbox", "disabled").hide();
    }
    else{
      $("#gallery").children().attr("data-lightbox", "image-gallery").show();
    }

    if($("#gallery").children("[data-lightbox= 'disabled']").length === (numberOfPhotos+1)) {
      $("#noPhotos").show();
    }
    else{
      $("#noPhotos").hide();
    }

  });

  // prints the number of photos to the search bar
  $("#search").attr("placeholder", "Search (" + numberOfPhotos + " Photos)").val("").focus().blur();

  // Configure lightbox2
  lightbox.option({
      showImageNumberLabel: false,
      wrapAround: true
  });

});
