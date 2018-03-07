const modes = {
    "default": {
      "food1": {
        "name": "textured vegetable protein",
        "value": 12,
        "visible": true
      },
      "oxygen": {
        "name": "oxygen units",
        "value": 17,
        "visible": true
      },
      "totalDays": {
        "name": "total days",
        "value": 21,
        "visible": false
      }
    }
  },
  Game = function Game (opt) { /* eslint sort-vars: "off" */
    const settings = opt
      ? modes[opt.mode]
      : modes.default;
    for (const i in settings) {
      this[i] = settings[i];
    }
  };

export default Game;
