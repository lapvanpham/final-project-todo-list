import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addTask } from '../pages/home/slice'
import { useDispatch } from 'react-redux'


function AddTaskForm() {
  const dispatch = useDispatch()
  const currentDate = new Date();


  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState(new Date())

  const handleDueDateChange = function (date) {
    setDueDate({
      dueDate: date,
    })
  }

  const handleSubmit = async function () {
    if (title.length > 0) {
      dispatch(addTask({
        title,
        addedDate: currentDate.toJSON(),
        dueDate: dueDate.toJSON()
      }))
    }
    setTitle('')
  }


  return (
    <div className="row m-1 p-3">
      <div className="col col-11 mx-auto">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              onChange={(e) => setTitle(e.target.value)}
              id='title'
              name="title"
              type="text"
              value={title}
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              placeholder="Add new ..."
            />
          </div>
          <div className="col-auto m-0 px-2 d-flex align-items-center">
            <label style={{ marginRight: "5px" }} htmlFor="start">Due date</label>
            <DatePicker
              id='dueDate'
              dateFormat="dd/MM/yyyy"
              selected={dueDate}
              minDate={currentDate}
              onChange={(date: Date) => setDueDate(date)}
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