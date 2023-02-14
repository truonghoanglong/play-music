import React, { useState } from 'react';
import '../assets/css/card.css';
import music from '../assets/data';
import { timer } from '../utils/timer';

const Card = ({props:{musicNumber,setMusicNumber,setOpen}}) => {
    const [duration,setDuration] = useState(1)
    const [currentTime,setCurrentTiime] = useState(0);
    const [play,setPlay] = useState(false);

    const handleLoadStart = (e) =>{
        const src = e.nativeEvent.srcElement.src
        const audio = new Audio(src);
        audio.onloadedmetadata = function(){
            if(audio.readyState > 0){
                setDuration(audio.duration)
            }
        }
    }

    return (
        <div className="card">
            <div className="nav">
                <i className="material-icons">expand_more</i>
                <span>Now Playing {musicNumber+1}/{music.length}</span>
                <i className="material-icons"
                    onClick={()=> setOpen(true)}
                >queue_music</i>
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
                <span>{timer(currentTime)}</span>
                <span>{timer(duration)}</span>
            </div>

            <div className="controls">
                <i className="material-icons">repeat</i>

                <i className="material-icons" id="prev">skip_previous</i>

                <div className="play" onClick={()=> setPlay( prev => !prev )}>
                    <i className="material-icons">
                        {play ? 'pause' : 'play_arrow'}
                    </i>
                </div>

                <i className="material-icons" id="next">skip_next</i>

                <i className="material-icons" id="next">volume_up</i>

                <div className="volume">
                    <i className="material-icons" id="next">volume_up</i>
                    <input type="range" min={0} max={100} />
                    <span>50</span>
                </div>


            </div>

            <audio src={music[musicNumber].src} hidden 
                onLoadStart={handleLoadStart}
            />

        </div>
    )
}

export default Card