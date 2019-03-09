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
  addPassenger('Michael', 20, true, 'front');
  addPassenger('Zoe', 20, false, 'back');
  addPassenger('Greg', 4, false, 'back');
  addPassenger('Michael', 20, true, 'front');
  addPassenger('Zoe', 20, false, 'back');
  addPassenger('Michael', 2, true, 'front');

  //const firstPassenger = unloadPassenger(strugglesBus, 'front');

  const busPeople = allAboard(strugglesBus);
  //console.log(busPeople);

  busBuilder(busPeople);
};

init();
