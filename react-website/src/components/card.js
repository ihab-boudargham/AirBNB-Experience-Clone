import React from 'react'

function Card(props) {
  return (
      <div className=' w-56 relative'>
        {props.item.onspot === 0 && <div className='badge absolute bg-white text-black m-3 p-1 px-2 rounded-lg font-bold '>SOLD OUT</div>}
        <img className='imgs rounded-2xl object-cover' src={props.item.img}/>
        <div className=' flex flex-col rate w-56 py-3'>
            <span><p className='pb-1'>{props.item.location}</p></span>
            <p className='pb-1'>{props.item.distance}</p>
            <p> <b>{props.item.price}</b> / night</p>
        </div>
    </div>
  )
}

export default Card
