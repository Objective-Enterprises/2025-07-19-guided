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
    const transactionsList = document.getElementById('transactions')
    const balanceSection = document.getElementById('balance')
    const expenseButton = document.getElementById('add-transaction-btn')
    const descriptionInput = document.getElementById('description')
    const expenseInput = document.getElementById('amount')
    const categorySelect = document.getElementById('category')
    for (category in categoryWiseBudget) {
        categorySelect.innerHTML += `<option value='${category}'>${category}</option>`
    }
    incomeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const value = Number(incomeInput.value)
        income += value
        totalIncome.innerHTML = `<b>Total Income: $${income}</b>`
        transactionsList.innerHTML += `<li>
            <span class='category'>Income</span>
            <span class='description'></span>
            <span class='amount positive'>$${value}</span>
        </li>`

        const balance = income - expense
        balanceSection.innerHTML = `<b>Balance: $${balance}`
    })
    expenseButton.addEventListener('click', () => {
        const value = Number(expenseInput.value)
        expense += value
        transactionsList.innerHTML = `<li>
            <span class='category'>
        </li>`
    })
}