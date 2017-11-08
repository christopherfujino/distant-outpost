const modes = {
  "default": {
    "totalDays": {
      "name": "total days",
      "value": 21,
      "visible": false
    },
    "oxygen": {
      "name": "oxygen units",
      "value": 17,
      "visible": true
    },
    "food1": {
      "name": "textured vegetable protein",
      "value": 12,
      "visible": true
    }
  }
}

function Game (opt) {
  const settings = opt ? modes[opt.mode] : modes["default"];
  for (let i in settings) {
    this[i] = settings[i];
  }
}

export default Game;
