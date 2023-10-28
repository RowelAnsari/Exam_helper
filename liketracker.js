const apiUrl = "https://retoolapi.dev/txQAOG/data";


$(document).ready(function() {


  $(document).on('click', '.like-button', function(e) {
    e.preventDefault();
    article_id = e.target.id;
    current_likes_num = Number(e.target.innerHTML);
    $("#" + e.target.id + ".like-button").html(current_likes_num + 1);
  });
});


/*function update() {
  fetch(apiUrl + "/1", {
  method: "PUT",
  body: JSON.stringify({
    "id": 1,
    "likes": ,
    "description": "Analyse ideas and values of the classical world",
    "trendingArticle": "Classics"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}*/