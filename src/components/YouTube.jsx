import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
// import Video from '../assets/images/production_id_4125001 (1080p).mp4';
import '../css/YouTube.css';
import { Container } from 'react-bootstrap';
// const VIDEO_PATH = "https://www.youtube.com/watch?v=DVq2TfXJrwI&pp=ygUUc2hvcnQgcGVyZnVtZSByZXZpZXc%3D"
const YouTube = () => {
    const playerRef = useRef(null);
    return (
        <div className='youtubeG' >
            <Container className=''>
            <h3>Watch Our Reviews</h3>
            <div className="gvideo ratio ratio-16x9">
            <iframe width="100%" height="100%" style={{borderRadius:'10px'}} src="https://www.youtube.com/embed/Le5hGH5DjYM?si=hHnHHAQVyBQLEOB2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
            </Container>
           
            {/* <div className="border border-dark" >
                <div className="video-wrapper ">

                    <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className='react-player' width={600}/>
                </div>
                <p>Read Transcript</p>
            </div> */}
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

