$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  let currImage =
    "url(https://s3-media0.fl.yelpcdn.com/bphoto/U4YTRl3qadSxlP7YINfxeg/o.jpg)";
  let nextImage =
    "url(https://s3-media0.fl.yelpcdn.com/bphoto/qr0yMJraW7lJwUNta00rdQ/o.jpg)";
  let temp = null;

  const cycleBackgroundImage = () => {
    let temp = currImage;
    $(".landing-image").css({
      "background-image": nextImage,
    });
    currImage = nextImage;
    nextImage = temp;
  };

  setInterval(function () {
    cycleBackgroundImage();
  }, 3000);
});
