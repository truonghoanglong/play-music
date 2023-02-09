import React from 'react';
import '../assets/css/list.css';
import music from '../assets/data';
const List = ({props:{open,setOpen,musicNumber,setMusicNumber}}) => {
  return (
    
        <div className="list">
            <div className="header">
              <div className="">
                <i className="material-icons">queue_music</i>
                <span>Music list</span>
                <i className="material-icons">close</i>
              </div>
            </div>

        <ul>
          {
            music.map((music,index)=>(
              <li 
                key={music.id} 
                onClick={() => setMusicNumber(index)}
                className={`${musicNumber === index ? 'play' : ''}`}
              >
                <div className="row">
                  <span>{music.title}</span>
                  <p>{music.artist}</p>
                </div>
                <span className='duration'>03:32</span>
              </li>
            ))
          }
        </ul>

        </div>

  )
}

export default List