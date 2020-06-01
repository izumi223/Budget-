//income
let income = document.getElementById("income");
//expense
let expense = document.getElementById("expense");
//budget
let budget = document.getElementById('budget');
//showlist ul
let listGroup = document.getElementById("showList");
//form
const form = document.getElementById("form");
//select
const select = document.getElementById("select");
//category
let category = document.getElementById("category");
//money
let money = document.getElementById("money");
//add count
let count = 0;


//form submit
form.addEventListener("submit", addDetail);

function addDetail(event) {
  event.preventDefault();

  let list = "list" + count;
  let btn = "delete" + count;
  const html = `<li id=${list}>${select.value} ${category.value} $ ${money.value}<span id=${btn} onclick=deleteListEntry(event) class="fa fa-trash"></span></li>`;

  listGroup.innerHTML += html;
  count += 1;

  if (select.value === '-') {
    expense.textContent = parseInt(expense.textContent) - parseInt(money.value);
    budget.textContent = parseInt(budget.textContent) - parseInt(money.value);
    
  } if (select.value === '+') {
    income.textContent = parseInt(income.textContent) + parseInt(money.value);
    budget.textContent = parseInt(money.value) + parseInt(budget.textContent);
    
  }

  console.log(money.value);

  category.value = "";
  money.value = "";

}

function deleteListEntry(event) {
  let clickedDetail = event.target.parentNode;
  let clickedDetailText = clickedDetail.textContent;
  
  let number = clickedDetailText.split(' ');
  console.log(number[3]);
  console.log(number[0]);
  

  if (number[0] === "+") {
    income.textContent = parseInt(income.textContent) - parseInt(number[3]);
    budget.textContent = parseInt(budget.textContent) - parseInt(number[3])
  } if (number[0] === '-') {
    expense.textContent = parseInt(expense.textContent) + parseInt(number[3]);
    budget.textContent = parseInt(budget.textContent) + parseInt(number[3]);
  }

  clickedDetail.remove();
  }





