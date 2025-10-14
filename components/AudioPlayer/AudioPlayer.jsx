import { useState, useEffect } from "react";
import { 
    BsFillRewindCircleFill, 
    BsFillPauseCircleFill, 
    BsFillPlayCircleFill, 
    BsFillFastForwardCircleFill, 
    BsFillVolumeUpFill, 
    BsRepeat, BsRepeat1 
} from "react-icons/bs";

import './AudioPlayer.css'

/**
 * Fixed audio player component for playing podcast episodes.
 */
function AudioPlayer() {

    const [audio, setAudio] = useState(null);
    // const audioUrl = 'https://podcast-api.netlify.app/placeholder-audio.mp3';

    return (
        <section className='audio-player'>
            <div className='audio-playing'>
                <img src="https://content.production.cdn.art19.com/images/3f/03/a1/29/3f03a129-40a1-4ddb-90e1-858c21094d0f/40b6c25e97fb0981c0032789798803128146cd4f7aa7e7ce993adc7925f4b19ec7b7ae696ac611c84a0c1ff93990e41080e1ce0cd2b575dae90901524ba212be.jpeg" alt=""/>
                <div className='audio-info'>
                    <p className="audio-name">Journey Through the PCR Hearing</p>
                    <p className='audio-epsiode'>Episode 1</p>
                </div>
            </div>

            <div className='audio-controls'>
                <button className='prev-btn'>
                    <BsFillRewindCircleFill />
                </button>
                <button className='play-btn'>
                    <BsFillPlayCircleFill />
                </button>
                <button className='pause-btn'>
                    <BsFillPauseCircleFill />
                </button>
                <button className='next-btn'>
                    <BsFillFastForwardCircleFill />
                </button> 
            </div>

            <div className='podcast-controls'>
                <div className='audio'>
                    {/* audio */}
                </div>
                <button className='volumne'>
                    <BsFillVolumeUpFill />        
                </button>
                <button className='repeat'>
                    <BsRepeat />
                    <BsRepeat1 />
                </button>
            </div>
        </section>
        
    )
}

export default AudioPlayer
