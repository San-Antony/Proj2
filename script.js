// Filtering Functionality
$(document).ready(function () {
  $(".filter-btn").click(function () {
    let filter = $(this).data("filter");

    if (filter === "all") {
      $(".artwork").show();
    } else {
      $(".artwork").hide();
      $("." + filter).show();
    }
  });

  // Modal Data Handling
  $(".view-btn").click(function () {
    let title = $(this).data("title");
    let artist = $(this).data("artist");
    let desc = $(this).data("desc");
    let imgSrc = $(this).closest(".card").find("img").attr("src");

    $("#modal-title").text(title);
    $("#modal-artist").text(artist);
    $("#modal-desc").text(desc);
    $("#modal-img").attr("src", imgSrc);
  });
});
