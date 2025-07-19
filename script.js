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
const categoryWiseExpense = {
    // Groceries: 0,
    // Entertainment: 0,
    // Rent: 0,
    // Utilities: 0,
    // Health: 0,
    // Education: 0,
    // Miscellaneous: 0
};

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
    const budgetSummary = document.getElementById('budget-summary')
    for (category in categoryWiseBudget) {
        console.log('category', category)
        categorySelect.innerHTML += `<option value='${category}'>${category}</option>`
        categoryWiseExpense[category] = 0
    }
    function displayDollars (number) {
        const options = {
            style: 'decimal', // Ensures standard decimal formatting, not currency
            minimumFractionDigits: 2, // Ensures at least 2 decimal places
            maximumFractionDigits: 2  // Ensures at most 2 decimal places (for rounding)
        };
        const string = number.toLocaleString(undefined, options)
        return `$${string}`
    }
    function displayFinanceSummary () {
        const balance = income - expense
        const positive = balance > 0
        const className = positive ? 'positive' : 'negative'
        balanceSection.innerHTML = `<b class="${className}">Balance: ${displayDollars(balance)}`

        budgetSummary.innerHTML = ''
        for (const category in categoryWiseBudget) {
            const budget = categoryWiseBudget[category]
            const expense = categoryWiseExpense[category]
            const balance = budget - expense
            const positive = balance > 0
            const className = positive ? 'positive' : 'negative'
            budgetSummary.innerHTML += `<ul>
                <li><b>${category}</b></li>
                <li>
                    <span>Budget:</span>
                    <span>${displayDollars(budget)}</span>
                </li>
                <li>
                    <span>Expense:</span>
                    <span>${displayDollars(expense)}</span>
                </li>
                <li class="${className}">
                    <span>Balance:</span>
                    <span>${displayDollars(balance)}</span>
                </li>
            </ul>`
        }
    }
    incomeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const value = Number(incomeInput.value)
        income += value
        totalIncome.innerHTML = `<b>Total Income: ${displayDollars(income)}</b>`
        transactionsList.innerHTML += `<li>
            <span class='category'>Income</span>
            <span class='description'></span>
            <span class='amount positive'>${displayDollars(value)}</span>
        </li>`
        incomeInput.value = ''

        displayFinanceSummary()
    })
    expenseButton.addEventListener('click', () => {
        const value = Number(expenseInput.value)
        expense += value
        categoryWiseExpense[categorySelect.value] += value
        transactionsList.innerHTML += `<li>
            <span class='category'>${categorySelect.value}</span>
            <span class='description'>${descriptionInput.value}</span>
            <span class='amount'>${displayDollars(value)}</span>
        </li>`
        expenseInput.value = ''
        descriptionInput.value = ''

        displayFinanceSummary()
    })
}