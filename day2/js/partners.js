function renderItems(data) {
    data.forEach((element) => {
        console.log(
            `Name: ${element.name}
            time_of_delivery: ${element.time_of_delivery}
            stars: ${element.stars}
            price: ${element.price}
            kitchen: ${element.kitchen}
            image: ${element.image}
            product: ${element.products}`
        )
    });
}
fetch("./db/partners.json")
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })