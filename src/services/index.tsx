const url = 'https://graphqlzero.almansi.me/api'



export const makeRequest = (query: string) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json())
}   

export const addTaskRequest = (addTaskValue: string) => {
    if (addTaskValue) {
        const newTaskQuery = `mutation CreateTodo {
            createTodo(input: {title: '${addTaskValue}', completed: false}) {
                title
                completed
                id
            }
        }`;
        
        return makeRequest(newTaskQuery)
    }
}