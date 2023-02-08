import React from 'react'
import '../assets/css/list.css'
const List = ({props:{open,setOpen,musicNumber,setMusicNumber}}) => {
  return (
    <div>
        <div className="list">
            <div className="header">
                <i className="material-icons">queue_music</i>
            </div>
        </div>
    </div>
  )
}

export default List