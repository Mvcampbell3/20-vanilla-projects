const addBtn = document.getElementById('add');
const doubleBtn = document.getElementById('double');
const millionBtn = document.getElementById('million');
const sortBtn = document.getElementById('sort');
const totalBtn = document.getElementById('total');
const userHolder = document.getElementById('userHolder');

const url = 'https://randomuser.me/api';
let people = [];

async function getPersonInfo() {
  const res = await fetch(url);
  const data = await res.json()
  const user = data.results[0];
  const money = Math.floor(Math.random() * 3000000);
  const person = { name: `${user.name.first} ${user.name.last}`, money }
  people.push(person);

  displayData();
}

function formatMoney(money) {
  return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function displayData() {
  userHolder.innerHTML = '';
  people.forEach(one => createPersonElement(one));
}

function createPersonElement(person) {
  const newPerson = document.createElement('div');
  newPerson.classList = 'person';
  newPerson.innerHTML = `
    <div class="row">
      <div class="col-12">
        <p>${person.name} ${formatMoney(person.money)}</p>
      </div>
    </div>
        
  `
  userHolder.appendChild(newPerson);
}

function doubleMoney() {
  people = people.map(person => {
    return { ...person, money: person.money * 2 }
  })
  displayData()
}

function onlyMillionaires() {
  people = people.filter(person => person.money > 1000000);
  displayData();
}

function rankMoney() {
  people = people.sort((a, b) => b.money - a.money);
  displayData()
}

function totalMoney() {
  const totalWealth = people.map(person => person.money).reduce((amt, tot)  => amt + tot)
  console.log(totalWealth);
  const totalHolder = document.getElementById('totalHolder');
  totalHolder.textContent = `Total Wealth = ${formatMoney(totalWealth)}`;
}

getPersonInfo();
getPersonInfo();
getPersonInfo();

addBtn.addEventListener('click', getPersonInfo)
doubleBtn.addEventListener('click', doubleMoney);
millionBtn.addEventListener('click', onlyMillionaires);
sortBtn.addEventListener('click', rankMoney)
totalBtn.addEventListener('click', totalMoney)