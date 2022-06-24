import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

function TaskList() {
  // const tasks = useSelector(state => state.tasks)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const list = []
      try {
        const querySnapshot = await getDocs(collection(db, 'tasks'))
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, '=>', doc.data)
          list.push({ id: doc.id, ...doc.data() })
          setTasks(list)
        })
      } catch (err) { console.log('err', err) }
    }

    fetchTasks()
  }, [])

  console.log(tasks)
  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className=" mx-auto">
        {
          tasks.map(task => {
            return (
              <TaskItem key={task.id} task={task} />
            )
          }
          )
        }

      </div>
    </div>
  )
}

export default TaskList;