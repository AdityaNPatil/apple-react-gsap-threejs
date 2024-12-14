import { Link } from "react-router-dom";

// ◘◘ import gsap ,,,, useGSAP from @gsap/react 
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method

  // ♦ useGSAP is similar to useLayoutEffect(fallback of useEffect) hook of react -- it also handles cleanup of gsap  objects 
  useGSAP(()=>{
    gsap.to("#blue-box" , {
      x: 500,
      rotation: 180,
      ease: "power1", // how animation happens
      duration: 1,    // duration of animation  
      repeat: -1,     // -1 means keep repeating infinitely
      yoyo: true      // means keep going in alternate directions
    }) // gsap.to(target , vars)

    // gsap.to returns a tween
  } , []) // dependency array similar to useEffect

  return (
    <main>
      <Link to={"/"}><small>Home</small></Link>

      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      {/* image to animate  */}
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
