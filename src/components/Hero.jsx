import { useState } from "react"
import { useEffect } from "react"

// gsap
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

// video
import { heroVideo, smallHeroVideo } from "../utils"

const Hero = () => {

  // state to change video src based on screen width -- if window innerWidth < 760 then smallVid else heroVid
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  // set videoSrc state based on width of screen
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    }
    else {
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() => {
    // whenever window resized run above function
    window.addEventListener("resize", handleVideoSrc);

    // cleanup event listener
    return () => {
      window.removeEventListener('resize', handleVideoSrc);
    }
  }, [])

  // apply animation
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1 // wait for 1 sec after page loads and then go to opacity 1
    })

    gsap.to("#cta",{
      opacity:1,
      y:-50,
      delay:1
    })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative"> {/*nav-height , flex-center, hero-title is a custom css class in index.css*/}
      <div className="h-5/6 w-full flex-center flex-col">
        {/*For now iPhone 15 has opacity 0 (hero-title class) which will go to 1 with gsap animation*/}
        <p id="hero" className="hero-title">iPhone 15 Pro</p>

        {/* video */}
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none"> {/*pointer-events-none disables pointer events on video*/}
            {/* heroVideo for normal screen , smallHeroVideo for mobile small screen ....  type for video extremely necessary*/}
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>


      </div>
      {/* call to action button */}
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a> {/*btn is custom css class in index.css*/}
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>

    </section>
  )
}

export default Hero
