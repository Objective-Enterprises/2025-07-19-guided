// Object containing budget categories and their initial budgets
const categoryWiseBudget = {
    "Groceries": 2000,
    "Entertainment": 500,
    "Rent": 2000,
    "Utilities": 500,
    "Health": 2000,
    "Education": 1500,
    "Miscellaneous": 500
};

// Object to track expenses per category
const categoryWiseExpense = {};

// Initialize income, expense, and transactions
let income = 0, expense = 0;
const transactions = [];

function initialise () {
    const incomeForm = document.getElementById('add-income-form')
    const incomeInput = document.getElementById('income')
    const totalIncome = document.getElementById('total-income')
    incomeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const value = Number(incomeInput.value)
        income += value
        totalIncome.innerHTML = `<b>Total Income: $${income}</b>`
    })
}