// PNotify
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex = 0;

const keyElement = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

function getRandomKeyIndex() {
  return Math.floor(Math.random() * keys.length);
}

function startNewGame() {
  currentKeyIndex = getRandomKeyIndex();
  keyElement.textContent = `Натисни: "${keys[currentKeyIndex]}"`;
  PNotify.success({
    text: "Нова гра розпочата! Натисни правильну клавішу.",
    delay: 1000,
  });
}

const showError = _.throttle((key) => {
  PNotify.error({
    text: `Неправильно! Ти натиснув "${key}"`,
    delay: 200,
  });
}, 1000);

document.addEventListener("keydown", (e) => {
  if (keys[currentKeyIndex] === e.key) {
    currentKeyIndex = getRandomKeyIndex();
    keyElement.textContent = `Натисни: "${keys[currentKeyIndex]}"`;
    PNotify.success({
      text: "Правильно!",
      delay: 200,
    });
  } else {
    showError(e.key);
  }
});

document.addEventListener("keypress", (e) => {
  e.preventDefault();
});

newGameButton.addEventListener("click", startNewGame);

// Chart.js
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "День місяця",
        },
      },
      y: {
        title: {
          display: true,
          text: "Продажі (шт)",
        },
        min: 0,
        ticks: {
          stepSize: 100,
        },
      },
    },
  },
};

const salesChart = new Chart(document.getElementById("sales-chart"), config);
