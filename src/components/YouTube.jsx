import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
// import Video from '../assets/images/production_id_4125001 (1080p).mp4';
import '../css/YouTube.css';
const VIDEO_PATH = "https://www.youtube.com/watch?v=DVq2TfXJrwI&pp=ygUUc2hvcnQgcGVyZnVtZSByZXZpZXc%3D"
const YouTube = () => {
    const playerRef = useRef(null);
    return (
        <div className='youtubeG' >
            <h3>Watch Our Reviews</h3>
            <div className="border border-dark" >
                <div className="video-wrapper ">

                    <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className='react-player' width={600}/>
                </div>
                <p>Read Transcript</p>
            </div>
        </div>
    )
}
export default YouTube

// import React from 'react';
// import '../css/YouTube.css'; 

// const YouTube = () => {
//     return (
//         <div className='bg-danger'>
//             <h3>Watch Our Reviews</h3>
//             <div className="border border-dark">
//                 <div className="video-wrapper">
//                     <video controls className="video-player">
//                         <source src={Video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//                 <p>Read Transcript</p>
//             </div>
//         </div>
//     );
// }

// export default YouTube;

