document.addEventListener("DOMContentLoaded", function () {
  // Define the URL of your API
  const apiUrl = "https://retoolapi.dev/IC7fxG/data"; // Replace with your actual API URL

  // Select the container where trending articles will be inserted
  const trendingArticlesContainer = document.getElementById("trending-articles");

  // Function to fetch data from the API and populate the trending articles
  function fetchAndPopulateTrendingArticles() {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Clear the container
        trendingArticlesContainer.innerHTML = "";

        // Loop through the data and create HTML elements for each article
        data.forEach((article, index) => {
          const trendingArticle = document.createElement("div");
          trendingArticle.classList.add("trending-article");

          // You may need to adapt the structure according to your API response
          trendingArticle.innerHTML = `
            <div class="article-image">
              <img src="${article.image}" alt="Trending Article">
            </div>
            <div class="article-content">
              <h3 class="article-title">${index + 1}# ${article.title}</h3>
              <p class="article-text">${article.description}</p>
            </div>
          `;

          trendingArticlesContainer.appendChild(trendingArticle);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Call the function to fetch and populate trending articles
  fetchAndPopulateTrendingArticles();
});