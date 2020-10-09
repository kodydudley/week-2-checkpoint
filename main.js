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

function buyPizzaCutters() {
  if (pizza >= 50) {
    clickUpgrades.pizzaCutters.quantity++
    updatePizzaCutters()
    pizza -= 50
  }
}

function updatePizzaCutters() {
  let pizzaCuttersElem = document.getElementById("pizzaCuttersValue")
  pizzaCuttersElem.innerText = `Pizza Cutters: ${clickUpgrades.pizzaCutters.quantity}`
  update()
}

function buyPizzaBoxes() {
  if (pizza >= 500) {
    clickUpgrades.pizzaBoxes.quantity++
    updatePizzaBoxes()
    pizza -= 500
  }
}

function updatePizzaBoxes() {
  let pizzaBoxesElem = document.getElementById("pizzaBoxesValue")
  pizzaBoxesElem.innerText = `Pizza Boxes: ${clickUpgrades.pizzaBoxes.quantity}`
  update()
}

function buyPizzaServers() {
  if (pizza >= 250) {
    autoUpgrades.pizzaServers.quantity++
    updatePizzaServers()
    pizza -= 250
  }
}

function updatePizzaServers() {
  let pizzaServersElem = document.getElementById("pizzaServersValue")
  pizzaServersElem.innerText = `Pizza Servers: ${autoUpgrades.pizzaServers.quantity}`
  update()
}

function buyDeliveryDrivers() {
  if (pizza >= 5000) {
    autoUpgrades.deliveryDrivers.quantity++
    updateDeliveryDrivers()
    pizza -= 5000
  }
}

function updateDeliveryDrivers() {
  let deliveryDriversElem = document.getElementById("deliveryDriversValue")
  deliveryDriversElem.innerText = `Delivery Drivers: ${autoUpgrades.deliveryDrivers.quantity}`
  update()
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