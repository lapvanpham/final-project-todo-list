import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        {
          tasks.map(task => {
            console.log(task)
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