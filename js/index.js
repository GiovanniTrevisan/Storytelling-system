$(document).ready(function () {


  var story = {
    title: "História",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto et facilis voluptatum reiciendis labore, dicta distinctio doloribus fuga eveniet placeat adipisci corporis animi alias repudiandae nobisneque! Enim, voluptatibus quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur odit sequi accusamus voluptate incidunt eaque, ex perspiciatis qui velit! Voluptate magni numquam similique doloremque magnam dolorem nulla reiciendis molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae dignissimos alias laborum totam  sint mollitia qui minus cupiditate consectetur! Est recusandae voluptatibus quos. Voluptates nisi repellendus exercitationem accusamus quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam similique saepe ad commodideserunt in! Inventore sequi, doloremque eligendi sint sapiente, quo velit optio hic debitis voluptatesadipisci earum.",
    paths: [
      {icon: "https://img.icons8.com/ios/35/FFFFFF/sword.png", message: "Lorem ipsum, dolor sit amet consectetur." },    
      {icon: "https://img.icons8.com/windows/35/FFFFFF/shield.png", message: "Lorem ipsum, dolor sit amet consectetur." }
    ]
  };
  function changeText() {

    $(".title").text(story.title);

    $(".content-paragraph").text(story.content);

    $(".choose-path").empty();

    $.each(story.paths, function(index, value) {
      $(".choose-path").append('<button class="col-lg-5 col-sm-12 btn button text-light" path="' + index + '"><img class="icon"    src="' + value.icon + '">    ' + value.message + '</button>');
    });
  }
  changeText();

  $("button").click(function () {
    $(".gradient-1").toggleClass("hide");
    $(".gradient-2").toggleClass("hide");
  });

});