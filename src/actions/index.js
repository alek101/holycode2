export const addAuthors = (authors) =>{
    return{
            type: "ADD_AUTHORS",
            payload: authors
        } 
}

export const addPeople = (people) =>{
    return{
            type: "ADD_PEOPLE",
            payload: people
        } 
}