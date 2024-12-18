import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { pauseImg, playImg, replayImg } from "../utils";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// hightlightsSlides from constants
import { hightlightsSlides } from "../constants"

const VideoCarousel = () => {

    // references to keep track of current video
    const videoRef = useRef([]);        // reference for all videos (stores as array)
    const videoSpanRef = useRef([]);    // reference for all video progress bars (stores as array)
    const videoDivRef = useRef([]);

    // state for loaded data -- array to store all indices of videos (0,1,2,3)
    const [loadedData, setLoadedData] = useState([]);

    // state for current video
    const [video , setVideo] = useState({   // each vid will have certain properties in objects 
        isEnd: false,       // isEnd tells whether this is end current video
        startPlay: false,   // whether to startPlaying the video
        videoId: 0,         // id of current vid
        isLastVideo: false,  // whether current vid is last in list
        isPlaying:false
    })

    // destructure the above state object properties
    const {isEnd , startPlay, videoId, isLastVideo, isPlaying } = video;

    // animate using gsap
    useGSAP(()=>{
        gsap.to("#video",{
            scrollTrigger:{
                trigger:"#video",
                toggleActions: "restart none none none", //restart video when it comes to view and other cases none none none
            },
            // after animation complete -- start video
            onComplete: ()=>{
                setVideo((pre)=>( {...pre, startPlay:true, isPlaying:true} ))
            }
        })

        // slide video into view
        gsap.to("#slider",{
            transform:`translateX(${-100*videoId}%)`,
            duration:2,
            ease:"power2.inOut"
        })
    } , [isEnd , videoId])

    // useEffect concerned with actual playing and pausing of video
    useEffect(() => {
        // if array contains > 3 items (more than 3 video indices i.e all video indices included in metadata)
        if(loadedData.length > 3){
            // if isPlaying false -- pause it
            if(!isPlaying){
                videoRef.current[videoId].pause()
            }
            else{
                // if isPlaying true & startPlay also true -- play it
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay , isPlaying , videoId, loadedData])

    // function to handle loadedData state
    const handleLoadedMetaData = (idx , e) => setLoadedData(
        (pre) => ([...pre , e])
    )

    // useEffect to animate progress bar -- trigger when videoId changes or startPlaying changes
    useEffect(()=>{
        let currentProgress = 0;      // current video progress
        let span = videoSpanRef.current;// span will be used to show current progress    

        // If we have span of specific videoId - animate span of each video with its progress
        if(span[videoId]){
            // animate progress of video
            let anim = gsap.to(span[videoId],{
                // what happens when video updates
                onUpdate: ()=>{
                    const progress = Math.ceil(anim.progress() * 100)     // built in method in gsap to track progress (*100 to get %)
                    if(progress != currentProgress){
                        currentProgress = progress;                 // update current progress
                        gsap.to(videoDivRef.current[videoId],{      // animate current video progress tracker container
                            width: window.innerWidth<760 ? '10vw' : window.innerWidth<1200 ? '10vw' : '4vw'
                        })
                        gsap.to(span[videoId],{                     // animate actual progress
                            width: `${currentProgress}%`,
                            backgroundColor:'white'
                        })
                    }
                },
                // what happens when animation completes
                onComplete: ()=>{
                    if(isPlaying){
                        gsap.to(videoDivRef.current[videoId],{
                            width: '12px'
                        })
                        gsap.to(span[videoId],{
                            backgroundColor:"#afafaf"
                        })
                    }
                }
            })

            // if videoId becomes 0 then restart animation
            if(videoId == 0){
                anim.restart();
            }

            // update progress bar based on video duration (else it will be based on animation duration) 
            const animUpdate = ()=>{
                anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration)
            }
            
            if(isPlaying){
                // update progress bar
                gsap.ticker.add(animUpdate)
            }
            else{
                gsap.ticker.remove(animUpdate)
            }
        }

    } , [videoId , startPlay])

    // onClick handler function-- play pause or reset carousel
    const handleProcess = (type, i)=>{
        switch (type) {
            case "video-end":
                setVideo((prevVideo)=>{return {...prevVideo, isEnd:true, videoId:i+1}})
                break;
            case "video-last":
                setVideo((prevVideo) =>( {...prevVideo , isLastVideo:true}))
                break;
            case "video-reset":
                setVideo((prevVideo) =>( {...prevVideo , isLastVideo:false, videoId:0}))
                break;
            case "play":
                setVideo((prevVideo) =>( {...prevVideo ,isPlaying: !prevVideo.isPlaying}))
                break;
            case "pause":
                setVideo((prevVideo) =>( {...prevVideo ,isPlaying: !prevVideo.isPlaying}))
                break;
        
            default:
                return video;
        }
    }

    return (
        <>
            <div className="flex items-center">
                {/* hightlightsSlides array in constants contains - id,textList,video,videoDuration for each item in video carousel */}
                {hightlightsSlides.map((highlight,idx)=>(   
                    <div key={highlight.id} id="slider" className="sm:pr-20 pr-10">

                        {/* entire video list container (Video + text) */}
                        <div className="video-carousel_container">  {/*video-carousel_container custom css class*/}

                            {/* each video container*/}
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video id="video" muted preload="auto" playsInline={true}
                                    // setting reference -- we get current index from videoRef and set current video at that index 
                                    ref={(el) => (videoRef.current[idx]=el) }
                                    // onPlay keep rest of state object same just change isPlaying to true 
                                    onPlay={()=>{
                                        setVideo((prevVideo)=>{
                                            return {...prevVideo, isPlaying:true};
                                        })
                                    }} 
                                    // onLoading Meta data of video
                                    onLoadedMetadata={(e)=> handleLoadedMetaData(idx , e)}
                                    // onEnd of video -- start next video
                                    onEnded={()=>{
                                        idx!==3 ? handleProcess("video-end", idx) 
                                        : handleProcess("video-last", idx)
                                    }}
                                    className={`${highlight.id === 2} && 'translate-x-44' pointer-events-none`}
                                >  {/*No autoplay.. play with some animations gsap*/}
                                    <source src={highlight.video} type="video/mp4"/>
                                </video>
                            </div>

                            {/* Text */}
                            <div className="absolute top-12 left-[5%] z-10"> {/*text has absolute pos as it needs to be displayed over video with zindex 10*/}
                                {highlight.textLists.map((text,idx)=>(
                                    <p key={text} className="md:text-2xl text-xl font-medium">{text}</p>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>

            {/* Slider below videos -- containing span(videoDivRef)  and span(videoSpanRef) for progress bar*/}
            <div className="relative flex-center mt-10">
                {/* all span container */}
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                    {/* all spans for progress tracking */}
                    {videoRef.current.map((_, idx)=>(
                        <span key={idx} 
                            // ref of span for progress tracking container
                            ref={(el)=>(videoDivRef.current[idx] = el)}
                            className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                        >
                            {/* internal span for showing actual progress*/}
                            <span className="absolute h-full w-full rounded-full"
                                // ref of span for actual progress tracking with animation
                                ref={(el)=>(videoSpanRef.current[idx] = el)}
                            ></span>
                        </span>
                    ))}
                </div>

                {/* button */}
                <button className="control-btn">
                    <img 
                        // show image based on playing,paused,lastvid 
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} 
                        alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}  
                        // handle click -- if last video reset the carousel , if playing pause it , if paused play it
                        onClick={isLastVideo
                            ? ()=>handleProcess('video-reset')
                            : !isPlaying
                                ? ()=>handleProcess('play')
                                : ()=>handleProcess('pause')
                        }
                    />
                </button>
            </div>
        </>
    )
}

export default VideoCarousel
