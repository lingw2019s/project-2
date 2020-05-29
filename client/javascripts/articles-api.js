// jshint esversion: 8

let clickHandler = function(){

    let requestURL = 'https://thejsway-server.herokuapp.com/api/articles';

    //modify the following statement to clear the photos box
    $(".photos").empty();

  $.getJSON(requestURL, function(response) {
      console.log(response);
      for(let i = 0; i<response.length; i++) {
        console.log(`Article ${response[i].id} \n Title: ${response[i].title} \n Content: ${response[i].content} \n`.trim());
      }

      //clear the output
      document.querySelector(".articles").textContent = ``;

      //Display Article title and id of all the elements of the response array:
      response.forEach((item, j) => {
        article = document.createElement("div");
        id = document.createElement("h3");
        id.textContent = `Article ${item.id}`;
        title = document.createElement("p");
        title.textContent = `${item.title}`;
        content = document.createElement("p");
        content.textContent = `${item.content}`;
        article.appendChild(id);
        article.appendChild(title);
        article.appendChild(content);
        document.querySelector(".articles").appendChild(article);
      });


    /*flickrResponse.items.forEach(function(item, index) {

      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
    });
*/
  });
};


//$(document).ready(main);
/*
//no jQuery
window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click",
     clickHandler);
});
*/

$(document).ready(function() {
  $("button").on("click", clickHandler);
  $("input").on("keypress", function(event) {
    if (event.keyCode === 13) {         //return button
      clickHandler();
    }
  });
});
