# 📅 Calendar App

This is a simple and responsive Calendar App built with HTML, TailwindCSS, and vanilla JavaScript. It allows users to view the days of any selected month and year, navigate between months, and optionally highlight events or today's date.

## ✨ Features

- Dynamic calendar generation for any month and year
- Highlights today's date
- Navigation between months
- Displays correct day alignment (starting from the right weekday)
- Responsive design using TailwindCSS
- Easy to extend with events or reminders

## 🔗 Live Demo

👉 [Live Demo](https://calendar-app-azure-alpha.vercel.app/)  

## 🛠 Technologies Used

- HTML5
- TailwindCSS
- JavaScript (Vanilla)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/CharlesFaye/calendar-app.git

2. Navigate into the project directory:
cd calendar-app

3. Open index.html in your browser
(or launch it using Live Server for real-time testing)

🧠 How It Works
. On page load, JavaScript generates the days of the current month dynamically.

. Users can navigate to previous or next months using arrows or buttons.

. The app uses JavaScript Date objects to calculate:

    . Number of days in the month

    . Starting weekday of the month

    . Today's date

🗂️ Project Structure
calendar-app/
├── index.html         # Calendar layout and structure
├── script.js          # Calendar logic and interactivity
└── style.css          # TailwindCSS (custom styles if needed)

💡 Possible Enhancements
. Add event creation and editing

. Mark event days with colored dots or badges

. Monthly or weekly view toggle

. Dark mode

. Save events to localStorage or external database

. Display holidays (optional API)

👤 Author
Created by Charles Faye.
