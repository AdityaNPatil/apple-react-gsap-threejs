// import Components
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"

// Import Sentry
import * as Sentry from "@sentry/react";

function App() {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
    </main>
  )
}

export default Sentry.withProfiler(App);
