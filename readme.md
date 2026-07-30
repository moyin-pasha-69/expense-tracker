I really like this project because it looks simple at first, but it gradually becomes a complete application. You'll practice thinking like a software developer instead of just displaying data.

# 💰 Expense Tracker Dashboard

Imagine you open the app every morning.

The dashboard immediately tells you:

```
Good Evening, Moyin 👋

Current Balance
₹18,450

Income
₹30,000

Expenses
₹11,550

Savings
₹18,450
```

Below that you can see graphs, recent transactions, budgets, and spending insights.

---

# What problem does it solve?

People usually don't know:

- Where their money goes
- How much they spend on food
- How much they save
- Which category wastes the most money

Your app solves that.

---

# Core Features (Phase 1)

## 1. Add Transaction

User fills a form

```
Amount
₹500

Category
Food

Type
Expense

Date
21 July 2026

Description
Pizza
```

Click

```
Add Transaction
```

Now it appears in the list.

---

## 2. Transaction List

```
₹500
Food
Expense
21 Jul

Delete
```

```
₹25,000
Salary
Income
20 Jul

Delete
```

Newest transaction should appear first.

---

## 3. Dashboard Cards

At the top

```
Balance

₹18,450
```

```
Income

₹30,000
```

```
Expense

₹11,550
```

```
Savings

₹18,450
```

These should update automatically.

---

## 4. Categories

```
Food

Transport

Shopping

Rent

Bills

Entertainment

Education

Health

Salary

Freelance
```

Later allow users to add custom categories.

---

# Phase 2

## Search

```
Search...

Pizza
```

Shows only matching transactions.

---

## Filter

```
All

Income

Expense
```

or

```
Food

Shopping

Bills
```

---

## Sort

```
Newest

Oldest

Highest Amount

Lowest Amount
```

---

# Phase 3

Analytics

Instead of only numbers...

Show charts.

Example

```
Food
██████████ 40%

Shopping
████ 18%

Rent
██████ 25%

Others
██ 17%
```

You'll later replace these with actual charts.

---

# Monthly Report

```
July

Income

₹40,000

Expense

₹23,500

Saved

₹16,500
```

---

# Budget

User sets

```
Food Budget

₹4,000
```

Current spending

```
₹3,650
```

Progress

```
█████████░
91%
```

If spending exceeds the budget

```
⚠ Budget Exceeded
```

---

# Local Storage

Nothing should disappear after refreshing the page.

You'll save transactions like this:

```js
[
  {
    id: 1,
    amount: 500,
    type: "expense",
    category: "Food",
    description: "Pizza",
    date: "2026-07-21",
  },
  {
    id: 2,
    amount: 25000,
    type: "income",
    category: "Salary",
    description: "Monthly Salary",
    date: "2026-07-20",
  },
];
```

---

# Project Structure

```
Expense Tracker

index.html

css/
    style.css

js/
    app.js
    ui.js
    storage.js
    analytics.js

assets/
```

As the project grows, you can add more modules.

---

# Skills You'll Practice

✅ CRUD (Create, Read, Update, Delete)

✅ Forms

✅ Validation

✅ Array methods

- filter()
- map()
- reduce()
- sort()

✅ Local Storage

✅ Project architecture

✅ Dashboard UI

✅ Search & Filtering

✅ Analytics

✅ Date handling

---

# The Thinking Challenge

The most valuable part isn't writing the code—it's designing how everything connects.

For example, if someone adds this transaction:

```text
₹800
Food
Expense
```

Ask yourself:

- Where should this data be stored?
- How will I generate a unique ID?
- How will I save it in Local Storage?
- How will I update the transaction list?
- How will I recalculate the balance?
- How will I update the dashboard cards?
- How will I update the charts?
- How will I keep everything synchronized after deleting a transaction?

Those questions are what real developers think about before they start coding.

---

## My suggestion for how to build it

Don't try to build everything at once. Break it into small milestones:

1. **Transaction management** — add, display, delete, and save transactions.
2. **Dashboard calculations** — balance, income, expenses, and savings.
3. **Search, filter, and sort**.
4. **Budgets and spending alerts**.
5. **Analytics and charts**.
6. **Polish** — responsive design, animations, dark mode, and keyboard shortcuts.

By the end, you'll have a portfolio project that demonstrates much more than just API calls—it shows you can design, organize, and build a complete frontend application.
