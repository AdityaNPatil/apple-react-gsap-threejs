import { Link } from "react-router-dom";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation

  /*
    gsap.to(yourElement, {
      duration: 1,
      text: {
        value: "Your new text",
        newClass: "class2",
        delimiter: " ",
      },
    });
  */

  useGSAP(()=>{
    // heading animate
    gsap.to("#text" , {
      duration:2,
      ease:"power.inOut",
      opacity:1,
      y:0,
      x: "45%"
    })

    // paragraph animate
    gsap.fromTo(".para",
      // from
      {
        opacity:0,
        y:20
      },
      // to
      {
        opacity:1,
        y:0,
        delay: 0.3,
        stagger:{
          amount:1
        }
      }
    )
  } , [])

  return (
    <main>
      <Link to={"/"}> <small>Home</small> </Link>

      {/* apply text animation here */}
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      {/* apply text animation to paragraphs */}
      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;
