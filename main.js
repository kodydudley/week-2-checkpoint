let pizza = 0
let tpmValue = 0

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
    pizza -= 50
    updatePizzaCutters()
    updateTPM()
    tpm()
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
    pizza -= 500
    updatePizzaBoxes()
    updateTPM()
    tpm()
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
    pizza -= 250
    updatePizzaServers()
    updateTPM()
    tpm()
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
    pizza -= 5000
    updateDeliveryDrivers()
    updateTPM()
    tpm()
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

function updateTPM() {
  tpmValue = ((clickUpgrades.pizzaCutters.quantity) + (autoUpgrades.pizzaServers.quantity * 5) + (autoUpgrades.deliveryDrivers.quantity * 25) + (clickUpgrades.pizzaBoxes.quantity * 10))
}

function tpm() {
  let tpmElem = document.getElementById("tpmValue")
  tpmElem.innerText = `TPM (Total Pizza Multiplier): ${tpmValue}`
}



update()
updatePizzaCutters()
updatePizzaBoxes()
updatePizzaServers()
updateDeliveryDrivers()
tpm()