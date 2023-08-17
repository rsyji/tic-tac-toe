import React, { useState } from 'react'
import Square from "./Square"

const Board = () => {
  const initialState = Array(9).fill(null)
  const [arrayState, setArrayState] = useState(initialState) 
  const [xAlive,setXAlive]= useState(true)

  const checkWinner= ()=> {
    const winnerCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let testCondition of winnerCondition){
        const [a,b,c]= testCondition
        if(arrayState[a]!==null && arrayState[a]===arrayState[b] && arrayState[a]===arrayState[c]){
            return arrayState[a]
        }
    }
    return false
  }

  const isSomeoneWin = checkWinner()

  function handleClick(indexOfSquare){
    const copyOfState = [...arrayState]
    if(!copyOfState[indexOfSquare]){
        copyOfState[indexOfSquare]= xAlive? "X": "O"
        setArrayState(copyOfState)
        setXAlive(!xAlive)
    }
  } 

  const handlePlay = ()=>{
    setArrayState(initialState)
    setXAlive(true)
  }

  return (
    <div className="board-container mx-auto my-7 text-center">
      {isSomeoneWin ? (
        <><h2 className='text-black font-bold text-xl inline-block'>{isSomeoneWin} Someone Won</h2><button className='mx-2 px-3 py-2 text-white bg-teal-400 hover:bg-teal-600 rounded' onClick={handlePlay}>Play Again</button></>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <Square onClick={() => {handleClick(0);}} value={arrayState[0]}/>
            <Square onClick={() => {handleClick(1);}} value={arrayState[1]}/>
            <Square onClick={() => {handleClick(2);}} value={arrayState[2]}/>
          </div>
          <div className="flex justify-center items-center">
            <Square onClick={() => {handleClick(3);}} value={arrayState[3]}/>
            <Square onClick={() => {handleClick(4);}} value={arrayState[4]}/>
            <Square onClick={() => {handleClick(5);}} value={arrayState[5]}/>
          </div>
          <div className="flex justify-center items-center">
            <Square onClick={() => {handleClick(6);}} value={arrayState[6]}/>
            <Square onClick={() => {handleClick(7);}} value={arrayState[7]}/>
            <Square onClick={() => {handleClick(8);}} value={arrayState[8]}/>
          </div>
        </>
      )}
    </div>
  );
}

export default Board