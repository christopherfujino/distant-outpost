const gameInterface = that => ({
  "game": () => that.state.game,
  "getTime": () => that.state.time,
  "setTagline": tag => that.setState({"tagline": tag})
});

export default gameInterface;
