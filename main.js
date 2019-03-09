const strugglesBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
  const passenger = {
    name: name,
    wallet: wallet,
    isStruggling: isStruggling
  };

  if (seat === 'back') {
    strugglesBus.push(passenger);
  } else if (seat === 'front') {
    strugglesBus.unshift(passenger);
  } else if (seat === 'middle') {
    let position = Math.ceil(strugglesBus.length / 2);
    strugglesBus.splice(position, 0, passenger);
  }
};

const busBuilder = bus => {
  let domString = '';
  for (let i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`;
    domString += `<h4>${bus[i].name}</h4>`;
    domString += `<p>${bus[i].wallet}</p>`;
    domString += `<p>${bus[i].isStruggling}</p>`;
    domString += `</div>`;
  }
  printToDom('the-bus', domString);
};

const unloadPassenger = (bus, seat) => {
  if (seat === 'front') {
    return bus.shift();
  } else if (seat === 'back') {
    return bus.pop();
  }
};

const allAboard = bus => {
  const busFare = 5;
  const validPassenger = [];
  bus.forEach(passenger => {
    if (passenger.wallet >= busFare) {
      passenger.wallet -= busFare;
      validPassenger.push(passenger);
    }
  });
  return validPassenger;
};

const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const init = () => {
  addPassenger('Person 1', 20, true, 'front');
  addPassenger('Person 2', 20, false, 'front');
  addPassenger('Person 3', 20, false, 'front');
  // addPassenger('Person 4', 20, true, 'front');
  // addPassenger('Person 5', 20, false, 'front');
  // addPassenger('Person 6', 20, true, 'front');
  // addPassenger('Person 7', 20, true, 'front');
  addPassenger('middle dude', 20, true, 'middle');

  //const firstPassenger = unloadPassenger(strugglesBus, 'front');

  const busPeople = allAboard(strugglesBus, 20, true, 'front');
  //console.log(busPeople);

  busBuilder(busPeople);
};

init();
