import React, { useRef, useState } from 'react';
import '../assets/css/card.css';
import music from '../assets/data';
import { timer } from '../utils/timer';

const Card = ({props:{musicNumber,setMusicNumber,setOpen}}) => {
    const [duration,setDuration] = useState(1)
    const [currentTime,setCurrentTiime] = useState(0);
    const [play,setPlay] = useState(false);
    const [showvolume,setShowvolume] = useState(false)
    const [volume,setVolum] = useState(50);

    const audioRef = useRef()

    const handleLoadStart = (e) =>{
        const src = e.nativeEvent.srcElement.src
        const audio = new Audio(src);
        audio.onloadedmetadata = function(){
            if(audio.readyState > 0){
                setDuration(audio.duration)
            }
        }
        if(play) { audioRef.current.play()}
    }

    const handlePlayingAudio = () => {
        if(play){
            audioRef.current.pause();
            setPlay(!play)
        }else{
            audioRef.current.play();
            setPlay(!play)
        }
    }

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime ;
        setCurrentTiime(currentTime)
    }

    const changeCurrentTime = (e) => {
        const currentTime = Number(e.target.value)
        audioRef.current.currentTime = currentTime
    }

    const handleNextPre = (n) => {
        setMusicNumber( value => {
            if(n>0)
                return value + n > music.length - 1 ? 0 : value + n;
            return value + n < 0 ? music.length - 1 : value + n;
        })
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
                <input type="range" min={0} max={duration} 
                    value={currentTime} 
                    onChange = { e => changeCurrentTime(e)}
                />
            </div>

            <div className="timer">
                <span>{timer(currentTime)}</span>
                <span>{timer(duration)}</span>
            </div>

            <div className="controls">
                <i className="material-icons">repeat</i>

                <i className="material-icons" id="prev"
                    onClick={()=> handleNextPre(-1)}
                >skip_previous</i>

                <div className="play" onClick={handlePlayingAudio}>
                    <i className="material-icons">
                        {play ? 'pause' : 'play_arrow'}
                    </i>
                </div>

                <i className="material-icons" id="next"
                    onClick={()=> handleNextPre(+1)}
                >skip_next</i>

                <i className="material-icons" 
                    onClick={ () => setShowvolume( prev => ! prev )}
                >volume_up</i>

                <div className={`volume ${showvolume ? 'show' : ''}`}>
                    <i className="material-icons" id="next">volume_up</i>
                    <input type="range" min={0} max={100} 
                        onChange={e => setVolum(e.target.value)}
                    />
                    <span>{volume}</span>
                </div>


            </div>

            <audio src={music[musicNumber].src} hidden ref={audioRef}
                onLoadStart={handleLoadStart} 
                onTimeUpdate={handleTimeUpdate}
            />

        </div>
    )
}

export default Card