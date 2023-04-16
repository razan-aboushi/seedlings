const products = {
  roses: [{
      name: "Plant",
      image: "plant.png",
      bgColor: "#ff0000",
      price: 10.0
    },
    {
      name: "Flower Basket",
      image: "plant1.png",
      bgColor: "#ff8787",
      price: 12.0
    },
    {
      name: "Flower Bouquet",
      image: "plant2.png",
      bgColor: "#ffed00",
      price: 8.0
    },
    {
      name: "Flower Box",
      image: "plant3.png",
      bgColor: "#337ab7",
      price: 8.0
    }

  ],
  tulips: [{
      name: "Red Tulip",
      image: "plant4.png",
      bgColor: "#fff",
      price: 6.0
    },
    {
      name: "Pink Tulip",
      image: "plant.png",
      bgColor: "#b62929",
      price: 7.0
    },
    {
      name: "White Tulip",
      image: "plant.png",
      bgColor: "#fff",
      price: 5.0
    },
    {
      name: "Blue Tulip",
      image: "plant.png",
      bgColor: "#fff",
      price: 8.0
    }

  ],
  daisies: [{
      name: "Yellow Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 4.0
    },
    {
      name: "White Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 3.0
    },
    {
      name: "Pink Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 4.5
    },
    {
      name: "Blue Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 8.0
    }

  ],
  flowers: [{
      name: "Yellow Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 4.0
    },
    {
      name: "White Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 3.0
    },
    {
      name: "Pink Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 4.5
    },
    {
      name: "Blue Daisy",
      image: "plant.png",
      bgColor: "#fff",
      price: 8.0
    }

  ]
};


function showProducts()
 {
  const select = document.getElementById("plant-variety");
  const selectedVariety = select.options[select.selectedIndex].value;
  const productsList = document.getElementById("products-list");

  // Clear any existing products from the list
  while (productsList.firstChild) 
  {
    productsList.removeChild(productsList.firstChild);
  }

  // If a variety has been selected, add its products to the list
  if (selectedVariety !== "null")
   {
    products[selectedVariety].forEach(product =>
       {
      const li = document.createElement("li");
      const element = "<img src='images/" + product.image + "' alt='" + product.image + "' style='width: 50px;' />";
      const color = product.bgColor;

      content = element + `${product.name} - ${product.price} JD`;
      li.innerHTML = content;

      li.style.backgroundColor = color;

      productsList.appendChild(li);

      
    });
  } 
  else
   {
    const li = document.createElement("li");
    const text = document.createTextNode("No products available");
    li.appendChild(text);
    productsList.appendChild(li);
  }
}