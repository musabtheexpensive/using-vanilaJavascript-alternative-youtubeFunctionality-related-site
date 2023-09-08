const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category}</a> 
        `;
    tabContainer.appendChild(div);
  });
  console.log(data.data);
};

const handleLoadNews = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl  glass">
      <figure><img src=${news?.thumbnail} alt="car!"/></figure>
      <div class="card-body">
        ${news.title};
        <h2 class="card-title">Awlad Hossen</h2>
        <h4>91k views</h4>
      </div>
    </div>
    `;
    cardContainer.appendChild(div);
  });
};
handleCategory();
handleLoadNews("1000");