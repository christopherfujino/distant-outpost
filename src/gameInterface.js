const gameInterface = (that) => {
  return {
    setTagline: (tag) => that.setState({tagline: tag}),
    getTime: () => that.state.time
  }
}

export default gameInterface;
