import { Input } from './Input/Index';
import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import { makeRequest } from './services';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { ListData } from './ListData/index';
import { addTaskRequest } from './services';

export type DataType = {
  id: string;
  title: string;
  completed: boolean
}[] | null

function App() {

  const [data, setData] = useState<DataType>(null)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest(`query Todos {
          todos{
            data {
              id
              title
              completed
              user {
                name
                address{
                  city
                }
              }
            }
          }
        }`)
        setData(response.data.todos.data);

      } catch (error) {
        setData(null)
      }
    }
    fetchData()

  }, [addTaskRequest])


  async function addTaskRequest(addTaskValue: string) {
    if (addTaskValue) {
        const newTaskQuery = `mutation CreateTodo {
            createTodo(input: {title: '${addTaskValue}', completed: false}) {
                title
                completed
                id
            }
        }`;
        
      await makeRequest(newTaskQuery)
    }
}
  

return (
  <div className="App">
    <h1>GraphQl Todos</h1>
    <div className='wrapper'>
      <div className='app-wrapper-input'>
        <Input
          addTask={addTaskRequest}
          label='Добавление задачи'
          buttonName='Добавить'
        />
        <Input
          label='Поиск задачи'
          buttonName='Найти'
        />
      </div>
      <br />
      <div className='list'>
        {data ? <ListData data={data}/> : <div className='spinner'><CircularProgress/></div>}
      </div>
    </div>
  </div>
);
}

export default App;
//  