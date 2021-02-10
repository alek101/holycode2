const authors = (state = [], action) => {
    switch(action.type)
    {
      case "ADD_AUTHORS":
       return state.authors=action.payload;
      default:
        return state;
    }
}

export default authors;
