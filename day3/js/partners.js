const cardRestaurant = document.querySelector('.cards-restaurants');

function renderItems(data) {
    data.forEach((item) => {
        const { name, time_of_delivery, stars, price, kitchen, products, image } = item;
        const a = document.createElement('a');
        a.setAttribute("href", "/day3/restaurant.html");
        a.classList.add('card');
        a.classList.add('card-restaurant');
        a.dataset.products = products;
        a.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
                            <div class="card-text">
                                <div class="card-heading">
                                    <h3 class="card-title">${name}</h3>
                                    <span class="card-tag tag">${time_of_delivery} мин</span>
                                </div>
                                <!-- /.card-heading -->
                                <div class="card-info">
                                    <div class="rating">
                                        ${stars}
                                    </div>
                                    <div class="price">От ${price} ₽</div>
                                    <div class="category">${kitchen}</div>
                                </div>
                                <!-- /.card-info -->
                            </div>
        `;
        a.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(!localStorage.getItem('user'));

            if (localStorage.getItem('user')) {
                localStorage.setItem("linkProducts", JSON.stringify(item));
                window.location.href = "/day3/restaurant.html";
            } else {
                modalAuth.style.display = "flex";
            }
        });
        cardRestaurant.appendChild(a);
    });
}

fetch("./db/partners.json")
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    });