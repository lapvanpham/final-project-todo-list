import React from 'react'
import AddTaskForm from '../../components/AddTaskForm'
import HeaderContent from '../../components/HeaderContent'
import TaskList from '../../components/Tasks/TaskList'
import ViewOptions from '../../components/ViewOptions'

function Home() {
  return (
    <div className="container">
      <HeaderContent />
      <AddTaskForm />
      <ViewOptions />
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      <TaskList />
    </div>
  )
}

export default Home