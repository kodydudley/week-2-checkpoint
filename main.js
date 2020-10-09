let pizza = 0

let clickUpgrades = {
  pizzaCutters: {
    price: 50,
    quantity: 0,
    multiplier: 1,
  },
  pizzaBoxes: {
    price: 500,
    quantity: 0,
    multiplier: 10,
  }
}

let autoUpgrades = {
  pizzaServers: {
    price: 250,
    quantity: 0,
    multiplier: 5,
  },
  deliveryDrivers: {
    price: 5000,
    quantity: 0,
    multiplier: 25,
  }
}

// UDGRADE BUTTONS SECTION
function buyPizzaCutters() {
  clickUpgrades.pizzaCutters.quantity++
  updatePizzaCutters()
}

function updatePizzaCutters() {
  if (pizza >= 50) {
    let pizzaCuttersElem = document.getElementById("pizzaCuttersValue")
    pizzaCuttersElem.innerText = `Pizza Cutters: ${clickUpgrades.pizzaCutters.quantity}`
    pizza -= 50
    update()
  }
}

function buyPizzaBoxes() {
  clickUpgrades.pizzaBoxes.quantity++
  updatePizzaBoxes()
}

function updatePizzaBoxes() {
  if (pizza >= 500) {
    let pizzaBoxesElem = document.getElementById("pizzaBoxesValue")
    pizzaBoxesElem.innerText = `Pizza Boxes: ${clickUpgrades.pizzaBoxes.quantity}`
    pizza -= 500
    update()
  }
}

function buyPizzaServers() {
  autoUpgrades.pizzaServers.quantity++
  updatePizzaServers()
}

function updatePizzaServers() {
  if (pizza >= 250) {
    let pizzaServersElem = document.getElementById("pizzaServersValue")
    pizzaServersElem.innerText = `Pizza Servers: ${autoUpgrades.pizzaServers.quantity}`
    pizza -= 250
    update()
  }
}

function buyDeliveryDrivers() {
  autoUpgrades.deliveryDrivers.quantity++
  updateDeliveryDrivers()
}

function updateDeliveryDrivers() {
  if (pizza >= 5000) {
    let deliveryDriversElem = document.getElementById("deliveryDriversValue")
    deliveryDriversElem.innerText = `Delivery Drivers: ${autoUpgrades.deliveryDrivers.quantity}`
    pizza -= 500
    update()
  }
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
updatePizzaCutters()
updatePizzaBoxes()
updatePizzaServers()
updateDeliveryDrivers()