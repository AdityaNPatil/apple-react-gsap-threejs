import { useRef } from "react";
import { Link } from "react-router-dom";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/*
  STEPS
  - register plugin of ScrollTrigger with gsap
  - take the element on which we have to apply scroll trigger using useRef hook
  - use gsap.util.toArray() to store the elemenets on which scrollTrigger needed into a variable
  - Loop over the array of elements for scrollTrigger
  - use scrollTrigger inside gsap.to/from/fromTo method
*/

// ◘◘ register ScrollTrigger with gsap
import { ScrollTrigger } from "gsap/all"; 
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  // TODO: Implement the gsap scroll trigger

  // ◘ create a reference to the element we want to use for scroll trigger
  const scrollRef = useRef(null);

  useGSAP(()=>{

    // ◘ access the boxes -- as an array
    const boxes = gsap.utils.toArray(scrollRef.current.children)

    // ◘ run gsap.to method for each box
    boxes.forEach((box)=>{
      gsap.to(box, {
        x:150 * (boxes.indexOf(box) + 5),
        rotation:360,
        borderRadius:"100%",
        scale:1.7,
        // scrollTrigger
        scrollTrigger:{
          trigger:box,      // on which element to apply trigger
          markers: true,    // displayed on webpage to show where the trigger starts and ends
          start: "bottom bottom", // String | Number | Function - Determines the starting position . -- here when bottom of box meets bottom of viewport
          end: "top 20%",      // String | Number | Function - Determines the ending position . -- here when top of box hits 20% of viewport 
          scrub: true       // scrub: true links the animation's progress directly to the ScrollTrigger's progress.
          // (scrub:Number) The amount of time (in seconds) that the playhead should take to "catch up"
        },
        ease:"power1.inOut"
      })
    })
  } , {scope : scrollRef})  // ◘ define when the useGSAP hook triggers

  return (
    <main>
      <Link to={"/"}> <small>Home</small> </Link>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div ref={scrollRef} className="mt-20 w-full h-screen">
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
