const products = {
    roses: [
      { name: "Red Rose", price: 10.0 },
      { name: "Pink Rose", price: 12.0 },
      { name: "Yellow Rose", price: 8.0 },
      { name: "Blue Rose", price: 8.0 }

    ],
    tulips: [
      { name: "Red Tulip", price: 6.0 },
      { name: "Pink Tulip", price: 7.0 },
      { name: "White Tulip", price: 5.0 },
      { name: "Blue Tulip", price: 8.0 }

    ],
    daisies: [
      { name: "Yellow Daisy", price: 4.0 },
      { name: "White Daisy", price: 3.0 },
      { name: "Pink Daisy", price: 4.5 },
      { name: "Blue Daisy", price: 8.0 }

    ]
    ,
    flowers: [
      { name: "Yellow Daisy", price: 4.0 },
      { name: "White Daisy", price: 3.0 },
      { name: "Pink Daisy", price: 4.5 },
      { name: "Blue Daisy", price: 8.0 }

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
        const text = document.createTextNode(`${product.name} - ${product.price} JD`);
        li.appendChild(text);
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
  