let pizza = 0

let clickUpgrades = {
  pizzaCutter: {
    price: 50,
    quantity: 0,
    multiplier: 1,
  },
  pizzaBox: {
    price: 500,
    quantity: 0,
    multiplier: 10,
  }
}

let autoUpgrades = {
  pizzaServer: {
    price: 250,
    quantity: 0,
    multiplier: 5,
  },
  deliveryDriver: {
    price: 5000,
    quantity: 0,
    multiplier: 25,
  }
}

function buyPizzaCutter() {

}


function getPizza() {
  pizza++
  update()
}


function update() {
  let pizzaElem = document.getElementById("pizza")
  pizzaElem.innerText = `Pieces of Pizza: ${pizza}`
}

update()