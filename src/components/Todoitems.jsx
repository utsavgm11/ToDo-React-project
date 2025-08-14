import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'

const Todoitems = ({ text, id, iscomplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      {/* Tick/Not-tick + Task (click to toggle) */}
      <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
        <img src={iscomplete ? tick : not_tick} alt="Tick Icon" className='w-7' />
        <p className={`ml-4 text-[17px] ${iscomplete ? 'line-through text-gray-400' : 'text-slate-700'}`}>
          {text}
        </p>
      </div>

      {/* Delete icon */}
      <img onClick={() => deleteTodo(id)} src={delete_icon} alt="Delete Icon" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default Todoitems
