const weekDaysEl = document.getElementsByClassName("weekdays")[0];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date();

let i = 0; // Initialize the loop counter
while (i <= 10) {
  // Loop through today and the next 10 days
  const date = new Date(currentDate);
  date.setDate(currentDate.getDate() + i); // Calculate the date for each day in the loop

  const dateBox = document.createElement("div"); // Create a new div
  dateBox.dataset.jumpTo = "day-tile-" + i;
  dateBox.classList.add("date-box"); // Add the predefined 'date-box' class

  dateBox.addEventListener("click", function (event) {
    const element = document.getElementById(event.target.dataset.jumpTo);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  if (i === 0) {
    dateBox.classList.add("current-day"); // Add the 'current-day' class for today
  }

  const dayName = days[date.getDay()]; // Get the day name based on the calculated date
  const dayDate = date.getDate(); // Get the day of the month
  dateBox.innerText = `${dayName}\n${dayDate}`; // Set the text with day name and date
  weekDaysEl.appendChild(dateBox); // Append the div to the container

  i++; // Increment the loop counter
}

const todayBoxEL = document.getElementsByClassName("today-date")[0];
const currentdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// currentBox.innerText = `${currentdayName}\n${currentdayDate}`;

const hours = [
  "06:00 am",
  "07:00 am",
  "09:15 am",
  "12:00 pm",
  "05:30 pm",
  "06:30 pm",
];
const dateAndTime = [];

let dayIndex = 0;

while (dayIndex < 7) {
  const TodayDate = new Date(currentDate);
  TodayDate.setDate(currentDate.getDate() + dayIndex);

  const timeContainer = document.createElement("div");
  timeContainer.id = "day" + TodayDate.getDate();

  const currentBox = document.createElement("div");
  const currentdayName = currentdays[TodayDate.getDay()];
  const currentdayDate = TodayDate.getDate();

  currentBox.classList.add("current-date-box");
  currentBox.id = "day-tile-" + dayIndex;
  currentBox.innerHTML = `
    <div id="JumpDate" class="Today-date">
      <p>${currentdayName}</p>
      <p>${currentdayDate}</p>
    </div>
`;

  todayBoxEL.appendChild(currentBox);

  let hourIndex = 0;
  const currentClasses = [
    "Liberty",
    "Triple Threat",
    "Deuces",
    "Mont Blanc",
    "Special Ops",
    "Miami Nights",
    "Liberty",
  ];

  while (hourIndex < hours.length) {
    if (TodayDate > currentDate) {
      console.log("bookable");
    }

    console.log(hourIndex, "hourIndex");

    function handleBooking() {
      const username = prompt("Enter your username:");
      if (username !== null) {
        const password = prompt("Enter your password:");
        if (password !== null) {
          alert("Booking confirmed!");
        }
      }
    }

    timeContainer.innerHTML += `
      <div class="classes-box">
        <div class="avail-hours">
          <p>${hours[hourIndex]}</p>
        </div>
        <div class="avail-classes-box">
          ${currentClasses[dayIndex]}
          <h6>F45 Trainer</h>
          ${
            isFutureDateTime(TodayDate, hours[hourIndex])
              ? "<button onclick='handleBooking()' id='BOOK'>Book Now</button>"
              : ""
          }
        </div>
      </div
    `;

    hourIndex = hourIndex + 1;
  }
  dayIndex++;
  todayBoxEL.appendChild(timeContainer);
}

function isFutureDateTime(date, timeString) {
  // Get the current date and time
  const now = new Date();

  // Split the timeString into time and AM/PM part
  const parts = timeString.split(" ");
  const time = parts[0]; // e.g., "2:30"
  const period = parts[1]; // e.g., "PM"

  // Split the time into hours and minutes
  const timeParts = time.split(":");
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  // Adjust hours based on AM/PM
  if (period === "pm" && hours !== 12) {
    hours += 12;
  } else if (period === "am" && hours === 12) {
    hours = 0; // Midnight case
  }

  // Create a new date object for the class date and time
  const classDate = new Date(date);
  classDate.setHours(hours, minutes, 0, 0);

  // Compare the class date with the current date
  return classDate > now;
}
