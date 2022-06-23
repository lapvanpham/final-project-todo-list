import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addTask } from '../pages/home/slice'
import { useDispatch } from 'react-redux'


function AddTaskForm() {
  const dispatch = useDispatch()
  const currentDate = new Date();

  const [task, setTask] = React.useState({
    title: '',
    addedDate: currentDate,
    dueDate: '',
  })

  const handleChange = function (e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleDateChange = function (date) {
    setTask({
      ...task,
      dueDate: date,
    })
  }

  const handleSubmit = function () {
    // dispatch(addTask(task))
    if (task.title.length > 0) {
      dispatch(addTask(task))
    }
  }


  return (
    <div className="row m-1 p-3">
      <div className="col col-11 mx-auto">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              onChange={handleChange}
              name="title"
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              type="text"
              placeholder="Add new ..."
            />
          </div>
          <div className="col-auto m-0 px-2 d-flex align-items-center">
            <label style={{ marginRight: "5px" }} htmlFor="start">Due date</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={task.dueDate}
              minDate={currentDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              onClick={handleSubmit}
              type="button" className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AddTaskForm;