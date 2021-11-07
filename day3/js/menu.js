const changeTitle = (restaurants) => {

    const restaurantTitle = document.querySelector(".restaurant-title");
    restaurantTitle.textContent = restaurants.name;
    const rating = document.querySelector(".rating");
    rating.textContent = restaurants.stars;
    const price = document.querySelector(".price");
    price.innerHTML = `От ${restaurants.price} ₽`;
    const category = document.querySelector('.category');
    category.textContent = restaurants.kitchen;
}
const cardsMenu = document.querySelector(".cards-menu");

function renderItems(data) {
    data.forEach(({ name, description, price, image }) => {
        const cards = document.createElement('div');
        cards.classList.add('card');
        cards.innerHTML = `
       <img src="${image}" alt="${name}" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-title card-title-reg">${name}</h3>
                            </div>
                            <!-- /.card-heading -->
                            <div class="card-info">
                                <div class="ingredients">${description}</div>
                            </div>
                            <!-- /.card-info -->
                            <div class="card-buttons">
                                <button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
                                <strong class="card-price-bold">${price} ₽</strong>
                            </div>
                        </div>
       `;
        cardsMenu.appendChild(cards);

    });

}

if (localStorage.getItem("linkProducts")) {
    const restaurants = JSON.parse(localStorage.getItem('linkProducts'));
    changeTitle(restaurants);
    fetch(`./db/${restaurants.products}`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        });
} else {
    window.location.href = "/day3/";
}