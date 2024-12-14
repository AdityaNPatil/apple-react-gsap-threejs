import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method

  // ADVANCED CONFIG for stagger
  /*
    gsap.to('.box', {
      y: 100,
      stagger: {
          // wrap advanced options in an object
          each: 0.1,
          from: 'center',
          grid: 'auto',
          ease: 'power2.inOut',
          repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
      }
    });
  */

  useGSAP(()=>{
    gsap.to(".stagger-box",{
      y:250,
      rotaion:360,
      borderRadius:"100%",
      repeat: -1,
      duration:1,
      yoyo: true,
      // stagger property -- animate each object 1 by 1 
      stagger: {
        amount: 0.8,  // The total amount of time (in seconds) that gets split among all the staggers
        grid: [3,1],  // number of rows and cols visually for the elements
        axis: "y",    // If you define a grid, staggers are based on each element's total distance to the "from" value on both the x and y axis, but you can focus on just one axis if you prefer  
        // here everything is happening in y axis - hence we give axis as y
        ease: "power1.inOut",
        from: "center"  // from where staggered animation starts -- "start", "center", "edges", "random", or "end"
      }
    })
  })

  return (
    <main>
      <Link to={"/"}> <small>Home</small> </Link>

      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
