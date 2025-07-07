const date = new Date();
const year = document.getElementById('current-year');
const month = document.getElementById('current-month');
const nextIcon = document.getElementById('next');
const previousIcon = document.getElementById('previous');
const daysOfMonth = document.getElementById('days-month');
const divDays = document.querySelectorAll('#days-month div');

let currentYear = date.getFullYear();
year.textContent = currentYear;
let currentDate = date.getDate();

let currentMonth = date.getMonth();
let firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();
let followingMonth = currentMonth + 1;
let lastDayOfCurrentMonth = new Date(currentYear, followingMonth, 0).getDate();
let dayOne = 1;


/**
 * Populates the calendar grid starting from Sunday by adding empty divs for days before the 1st of the month,
 * then appending day elements for each day of the current month.
 * Highlights the current day if it matches today's date, month, and year.
 *
 * Assumes the following variables are defined in the outer scope:
 * - daysOfMonth: HTMLElement where day divs are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month (number).
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year (number).
 * - date: A Date object representing today's date.
 */
const addDaysStartingSunday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = `<div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                           <div></div>`;
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;

    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border');
      
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}

/**
 * Populates the daysOfMonth container with day elements for the current month,
 * starting from Monday. Highlights the current day if it matches today's date.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - daysOfMonth: HTMLElement where day elements are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month.
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year.
 * - date: A Date object representing today's date.
 */
const addDaysStartingMonday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = '';
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;
    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border');
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}


/**
 * Populates the daysOfMonth container with day elements for the current month,
 * starting from Tuesday. Highlights the current day if it matches today's date.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - daysOfMonth: HTMLElement where day elements are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month.
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year.
 * - date: A Date object representing today's date.
 */
const addDaysStartingTuesday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = '';
  daysOfMonth.append(document.createElement('div'));
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;
    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border');
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}

/**
 * Populates the daysOfMonth container with day elements for the current month,
 * starting from Wednesday. Highlights the current day if it matches today's date.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - daysOfMonth: HTMLElement where day elements are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month.
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year.
 * - date: A Date object representing today's date.
 */
const addDaysStartingWednesday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = `<div></div>
                           <div></div>`;
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;
    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border');
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}


/**
 * Populates the daysOfMonth container with day elements for the current month,
 * starting from Thursday. Highlights the current day if it matches today's date.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - daysOfMonth: HTMLElement where day elements are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month.
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year.
 * - date: A Date object representing today's date.
 */
const addDaysStartingThursday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = `<div></div>
                           <div></div>
                           <div></div>`;
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;
    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border', 'p-3');
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}


/**
 * Populates the daysOfMonth container with day elements for the current month,
 * starting from Friday. Highlights the current day if it matches today's date.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - daysOfMonth: HTMLElement where day elements are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month.
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year.
 * - date: A Date object representing today's date.
 */
const addDaysStartingFriday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = `<div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                           `;
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;
    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border');
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}


/**
 * Populates the daysOfMonth container with day elements for the current month,
 * starting from Saturday. Highlights the current day if it matches today's date.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - daysOfMonth: HTMLElement where day elements are appended.
 * - lastDayOfCurrentMonth: Number of days in the current month.
 * - currentDate: The current day of the month.
 * - currentMonth: The current month (0-indexed).
 * - currentYear: The current year.
 * - date: A Date object representing today's date.
 */
const addDaysStartingSaturday = () => {
  dayOne = 1;
  daysOfMonth.innerHTML = `<div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                           `;
  for(let i = 0; i < lastDayOfCurrentMonth; i++) {
    const div = document.createElement('div');
    div.textContent = dayOne;
    if (
      dayOne === currentDate &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      div.classList.add('border');
    }
    daysOfMonth.append(div);
    dayOne++;
  }
}


/**
 * Updates the calendar view based on the current month and year.
 * Determines the first day of the current month and calls the appropriate function
 * to add days to the calendar grid, starting from the correct weekday.
 *
 * Relies on the global variables:
 * - currentYear: number representing the current year.
 * - currentMonth: number representing the current month (0-indexed).
 * - followingMonth: number representing the next month (0-indexed).
 *
 * Calls one of the following functions depending on the first day of the month:
 * - addDaysStartingSunday
 * - addDaysStartingMonday
 * - addDaysStartingTuesday
 * - addDaysStartingWednesday
 * - addDaysStartingThursday
 * - addDaysStartingFriday
 * - addDaysStartingSaturday
 */
const updateCalendar = () => {
 firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();
 lastDayOfCurrentMonth = new Date(currentYear, followingMonth, 0).getDate();

  switch (firstDayOfCurrentMonth) {
    case 0:
      addDaysStartingSunday()
      break;
    case 1 : 
      addDaysStartingMonday()
      break;
    case 2 : 
      addDaysStartingTuesday()
      break;
    case 3: 
      addDaysStartingWednesday()
      break;
    case 4: 
      addDaysStartingThursday()
      break;
    case 5: 
      addDaysStartingFriday()
      break;
    default:
      addDaysStartingSaturday()
      break;
  }
}

updateCalendar()
/**
 * Returns the French name of the current month based on the value of `currentMonth`.
 * 
 * @returns {string} The French name of the current month.
 */
const getEquivalentMonth = () => {
  const months = {
    0: "Janvier",
    1: "Février",
    2: "Mars",
    3: "Avril",
    4: "Mai",
    5: "Juin",
    6: "Juillet",
    7: "Août",
    8: "Septembre",
    9: "Octobre",
    10: "Novembre",
    11: "Décembre"
  };
  return months[currentMonth]
}

month.textContent = getEquivalentMonth();

/**
 * Advances the calendar view to the next month.
 * If the current month is December (11), it moves to the next year.
 * Otherwise, it increments the current and following month values,
 * clears the days of the month display, updates the month label,
 * and refreshes the calendar view.
 */
const moveToNextMonth = () => {
  if (currentMonth === 11) {
    moveToNextYear()
  } else {
    currentMonth++;
    followingMonth++;
    daysOfMonth.innerHTML = ``
  }
  month.textContent = getEquivalentMonth();
  updateCalendar()
}

/**
 * Advances the calendar to the next year.
 * Resets the current month to January, updates the following month,
 * increments the current year, and updates the displayed year.
 *
 * Assumes the existence of global variables:
 * - currentMonth: number representing the current month (0-based).
 * - followingMonth: number representing the next month.
 * - currentYear: number representing the current year.
 * - year: DOM element displaying the year.
 */
const moveToNextYear = () => {
    currentMonth = 0;
    followingMonth = currentMonth + 1;
    currentYear++;
    year.textContent = currentYear;
}


/**
 * Updates the calendar to display December of the previous year.
 * Sets the current month to December (11), updates the following month,
 * decrements the current year, and updates the year display element.
 *
 * Assumes the existence of global variables: currentMonth, followingMonth, currentYear, and year (DOM element).
 */
const returnToPreviousYear = () => {
  currentMonth = 11;
  followingMonth = currentMonth + 1;
  currentYear--;
  year.textContent = currentYear;
}

/**
 * Navigates the calendar to the previous month.
 * If the current month is January (index 0), it navigates to the previous year.
 * Otherwise, it decrements the current and following month indices,
 * clears the days of the current month, updates the displayed month name,
 * and refreshes the calendar view.
 */
const returnToPreviousMonth = () => {
  if (currentMonth === 0) { 
    returnToPreviousYear()
  } else {
    currentMonth--;
    followingMonth--;
    daysOfMonth.innerHTML = ``
  }
  month.textContent = getEquivalentMonth();
  updateCalendar()
}



nextIcon.addEventListener('click', moveToNextMonth);
previousIcon.addEventListener('click', returnToPreviousMonth);





