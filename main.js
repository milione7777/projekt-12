// завдання 1
let user = {
  name: "Oleg",
  age: 28,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// завдання 2
function countProps(obj) {
  return Object.keys(obj).length;
}

const users = {
  name: "Oleg",
  age: 28,
  hobby: "skydiving",
  premium: false,
};

console.log(countProps(users));

// завдання 3
function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (let employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

const employees = {
  Ann: 29,
  David: 35,
  Helen: 1,
  Lorence: 99,
};

console.log(findBestEmployee(employees));

// Завдання 4
function countTotalSalary(employees) {
  let totalSalary = 0;

  for (let salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

const salaries = {
  Ann: 5000,
  David: 7200,
  Helen: 3000,
  Lorence: 10000,
};

console.log(countTotalSalary(salaries));

// Завдання 5
function getAllPropValues(arr, prop) {
  const propValues = [];

  for (let obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      propValues.push(obj[prop]);
    }
  }

  return propValues;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));

// Завдання 6

function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (let product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break; // Припиняємо пошук, якщо знайшли потрібний продукт
    }
  }

  return totalPrice;
}

const product = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(calculateTotalPrice(product, "Radar"));
console.log(calculateTotalPrice(product, "Droid"));
console.log(calculateTotalPrice(product, "Scanner"));

// Завдання 7
const account = {
  balance: 0,
  transactions: [],

  generateId() {
    return Math.floor(Math.random() * 1000000);
  },

  createTransaction(amount, type) {
    return {
      id: this.generateId(),
      amount,
      type,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, "deposit");
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку для зняття");
      return;
    }
    const transaction = this.createTransaction(amount, "withdraw");
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionHistory() {
    return this.transactions;
  },

  getTransactionDetails(id) {
    return this.transactions.find((transaction) => transaction.id === id);
  },
};

account.deposit(1000);
account.withdraw(500);
account.deposit(200);

console.log("Поточний баланс:", account.getBalance());
console.log("Історія транзакцій:", account.getTransactionHistory());
console.log(
  "Деталі транзакції:",
  account.getTransactionDetails(account.transactions[0].id)
);
