const gameInterface = (that) => {
  return {
    game: () => that.state.game,
    setTagline: (tag) => that.setState({tagline: tag}),
    getTime: () => that.state.time
  }
}

export default gameInterface;
