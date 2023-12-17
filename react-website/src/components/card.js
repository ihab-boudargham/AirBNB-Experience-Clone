import React from 'react'

function Card(props) {
  return (
      <div className=' w-56 relative'>
        {props.onspot === 0 && <div className='badge absolute bg-white text-black m-3 p-1 px-2 rounded-lg font-bold '>SOLD OUT</div>}
        <img className='imgs rounded-2xl object-cover' src={props.img}/>
        <div className=' flex flex-col rate w-56 py-3'>
            <span><p className='pb-1'>{props.location}</p></span>
            <p className='pb-1'>{props.distance}</p>
            <p> <b>{props.price}</b> / night</p>
        </div>
    </div>
  )
}

export default Card
