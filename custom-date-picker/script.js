const datePickerWrapper = document.querySelector(".date-picker-wrapper")
const selectedDate = document.querySelector(".selected-date")
const datesContainer = document.querySelector(".dates-container")
const month = document.querySelector(".month .month-item")
const nextMonth = document.querySelector(".month .next-month")
const prevMonth = document.querySelector(".month .prev-month")
const daysContainer = document.querySelector(".days-container")

datePickerWrapper.addEventListener("click", toggleDatePicker);

function toggleDatePicker(e) {
  console.log("toggleDatePicker clicked", e)
  if(!checkClassExist(e.composedPath(), "dates-container")) {
    datesContainer.classList.toggle('active')
  }
}

function checkClassExist(path, element) {
  for(let i=0; i < path.length; i++) {
    if(path[i].classList && path[i].classList.contains(element)) {
      return true
    }
  }
  return false
}