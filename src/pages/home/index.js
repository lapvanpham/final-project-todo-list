import React from 'react'
import AddTaskForm from '../../components/AddTaskForm'
import HeaderContent from '../../components/HeaderContent'
import TaskList from '../../components/Tasks/TaskList'
import ViewOptions from '../../components/ViewOptions'
import Header from '../../components/Header'

function Home() {
  return (
    <div className="container">
      <Header />
      <HeaderContent />
      <AddTaskForm />
      <ViewOptions />
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      <TaskList />
    </div>
  )
}

export default Home