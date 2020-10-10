let pizza = 0
let tpmValue = 0
let ppsValue = 0
let collectionInterval = 0


let clickUpgrades = {
  pizzaCutters: {
    price: 50,
    quantity: 0,
    multiplier: 2,
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
    updatePPS()
    pps()
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
    updatePPS()
    pps()
  }
}

function updateDeliveryDrivers() {
  let deliveryDriversElem = document.getElementById("deliveryDriversValue")
  deliveryDriversElem.innerText = `Delivery Drivers: ${autoUpgrades.deliveryDrivers.quantity}`
  update()
}

function getPizza() {
  pizza += (1 + tpmValue)
  update()
}


function getAutoPizza() {
  for (const key in autoUpgrades) {
    if (autoUpgrades.hasOwnProperty(key)) {
      const element = autoUpgrades[key];
      pizza += (element.multiplier * element.quantity)
    }
  }
  update()
}


function update() {
  let pizzaElem = document.getElementById("pizza")
  pizzaElem.innerText = `Pieces of Pizza: ${pizza}`
}

function updateTPM() {
  tpmValue = ((clickUpgrades.pizzaCutters.quantity) + (clickUpgrades.pizzaBoxes.quantity * 10))
}

function tpm() {
  let tpmElem = document.getElementById("tpmValue")
  tpmElem.innerText = `TPM (Total Pizza Multiplier): ${tpmValue}`
}

function updatePPS() {
  ppsValue = ((autoUpgrades.pizzaServers.quantity * 5) + (autoUpgrades.deliveryDrivers.quantity * 25))
}

function pps() {
  let ppsElem = document.getElementById("ppsValue")
  ppsElem.innerText = `APPS (Auto Pizzas Per 3 Seconds): ${ppsValue}`
}

function startInterval() {
  collectionInterval = setInterval(getAutoPizza, 3000);
}

update()
updatePizzaCutters()
updatePizzaBoxes()
updatePizzaServers()
updateDeliveryDrivers()
tpm()
pps()
startInterval()