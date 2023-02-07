import React from 'react';
import '../assets/css/card.css';
import music from '../assets/data';

const Card = ({props:{musicNumber,setMusicNumber}}) => {
    console.log(music)
    return (
        <div className="card">
            <div className="nav">
                <i className="material-icons">expand_more</i>
                <span>Now Playing {musicNumber+1}/{music.length}</span>
                <i className="material-icons">queue_music</i>
            </div>

            <div className="img">
                <img src={music[musicNumber].thumbnail} alt="" />
            </div>

            <div className="details">
                <p className="title">{music[musicNumber].title}</p>
                <p className="title">{music[musicNumber].artist}</p>
            </div>

            <div className="progess">
                <input type="range" min={0} max={100} />
            </div>

            <div className="timer">
                <span>00:00</span>
                <span>03:43</span>
            </div>

            <div className="controls">
                <i className="material-icons">repeat</i>

                <i className="material-icons" id="prev">skip_previous</i>

                <div className="play">
                    <i className="material-icons">play_arrow</i>
                </div>

                <i className="material-icons" id="next">skip_next</i>

                <i className="material-icons" id="next">volume_up</i>

                <div className="volume">
                    <i className="material-icons" id="next">volume_up</i>
                    <input type="range" min={0} max={100} />
                    <span>50</span>
                </div>


            </div>

            <audio src={music[musicNumber].src} hidden ></audio>

        </div>
    )
}

export default Card