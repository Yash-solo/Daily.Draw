let items = [
    {
        id:1,
        name:"The Starry Night",
        price:10000,
        image:"images.jpg",
    },
    {
        id:2,
        name:"The Girl with a Pearl Earring",
        price:10300,
        image:"ssd.jpg",
    },
    {
        id:3,
        name:"The river in the sun",
        price:10230,
        image:"sdf.jpg",
    },
    {
        id:4,
        name:"trees are burning",
        price:230000,
        image:"burn.jpg",
    },
    {
        id:5,
        name:"Two sided lake scene",
        price:142000,
        image:"two_sided_lack.jpg",
    },
    {
        id:6,
        name:"Dark blue night ",
        price:500,
        image:"dark night.jpg",
    }
];

let product = "";
items.forEach(goal=>{
    product+= `
    <div>
        <img src="${goal.image}" alt = "${"Painting photo"}"></img>
        <h1>${goal.name}</h1>
        <p>Price:-${goal.price}</p>
        <button class="buy_btn">Buy now</button>
    </div>`
});
document.querySelector('.painting_prod').innerHTML = product;