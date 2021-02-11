const people = (state = [], action) => {
    switch(action.type)
    {
      case "ADD_PEOPLE":
       return state.people=action.payload;
      default:
        return state;
    }
}

export default people;
