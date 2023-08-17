import React from 'react'

const Square = ({value,onClick}) => {
  return (
    <div onClick={onClick} className={`square border text-black font-bold text-7xl border-black w-40 h-40 flex justify-center items-center`}>
        <h5>{value}</h5>
    </div>
  )
}

export default Square