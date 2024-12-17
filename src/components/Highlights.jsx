// gsap
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

// images
import { rightImg, watchImg } from "../utils"

// components
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

  useGSAP(()=>{
    gsap.to("#title",{
      opacity:1,
      y:0,
    })

    gsap.to(".link",{
      opacity:1,
      y:0,
      duration:1,
      stagger:{     // stagger to make links appear 1 by 1
        amount:0.25,
      }
    })
  },[])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">

      {/* Highlights heading section */}
      <div className="screen-max-width">

        <div className="mb-12 w-full md:flex items-end justify-between">
          {/* heading */}
          <h1 id="title" className="section-heading"> {/*section-heading is custom css class with opacity 0 which can be animated gsap*/}
            Get the Highlights
          </h1>

          {/* links */}
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the film <img src={watchImg} alt="watch" className="ml-2"/> </p> {/*link is custom css class*/}
            <p className="link">Watch the event <img src={rightImg} alt="watch" className="ml-2"/> </p> {/*link is custom css class*/}
          </div>
        </div>        
        
      {/* VIDEO CAROUSEL */}
      <VideoCarousel/>

      </div>
    </section>
  )
}

export default Highlights
