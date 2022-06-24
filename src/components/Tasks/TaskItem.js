import React, { useState } from 'react'
import { TbSquare, TbCheckbox } from 'react-icons/tb'
import formatDate from '../../assets/common-functions/formatDate';
import { HiInformationCircle } from 'react-icons/hi'
import { FaHourglassHalf } from 'react-icons/fa'
import { MdOutlineDeleteSweep } from 'react-icons/md'

import { useDispatch } from 'react-redux'
import { toggleCompleted, deleteTask, editTask } from "../../pages/home/slice"

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const { id, title, addedDate, dueDate, completed } = task;
  const formattedAddedDate = formatDate(addedDate);
  console.log('duedate ->', dueDate)
  const formattedDueDate = formatDate(dueDate);
  console.log(formattedDueDate)

  const [updatedTitle, setUpdatedTitle] = useState(title)

  const handleCompletedClick = function () {
    dispatch(toggleCompleted({
      id,
      completed: !completed
    }))
  }

  const handleDelete = async function () {
    dispatch(deleteTask({ id }))
  }

  const handleChange = function (e) {
    setUpdatedTitle(e.target.value)
    dispatch(
      editTask({
        id,
        title: updatedTitle
      })
    )
  }

  const handleBlur = function () {
    if (updatedTitle.length === 0) {
      dispatch(deleteTask({ id }))
    } else {
      dispatch(
        editTask({
          id,
          title: updatedTitle
        })
      )
    }
  }


  return (
    <div className='TaskItem'>
      <div className="row px-3 align-items-center todo-item rounded">
        <div className="col-auto m-1 p-0 d-flex align-items-center">
          {
            completed ?
              <TbCheckbox style={{ fontSize: '30px' }} onClick={handleCompletedClick} color='blue' /> :
              <TbSquare style={{ fontSize: '30px' }} onClick={handleCompletedClick} color='blue' />
          }
        </div>
        <div className="col px-1 m-1 d-flex align-items-center">
          <input
            onChange={handleChange} onBlur={handleBlur}
            type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" defaultValue={updatedTitle} title={updatedTitle} />
        </div>
        <div className="col-auto m-1 p-0 px-3">
          <div className="row">
            {
              dueDate === '' ? <div></div> :
                <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
                  <FaHourglassHalf color='orange' />
                  <h6 className="text my-2 pr-2">{formattedDueDate}</h6>
                </div>
            }
          </div>
        </div>
        <div className="col-auto m-1 p-0 px-3" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          <div className="row todo-created-info">
            <div className="col-auto d-flex align-items-center pr-2" >
              <HiInformationCircle className="text-info" />
              <label className="date-label my-2 text-black-50">{formattedAddedDate}</label>
            </div>
          </div>
        </div>

        <div className="col-auto m-1 p-0 px-3">
          <div className="row d-flex align-items-center justify-content-end">
            <button
              onClick={handleDelete}
              className='btn btn-danger'>
              <MdOutlineDeleteSweep className='m-1' fontSize={'1.4rem'} />
              Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskItem;
