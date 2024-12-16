// images
import { appleImg, bagImg, searchImg } from "../utils"

// import navbar items from constants/index.js
import {navLists} from "../constants/index"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">  {/*screen-max-width is custom class in index.css*/}
        {/* logo */}
        <img src={appleImg} alt="Apple logo" width={14} height={18} />

        {/* each nav Item */}
        <div className="flex flex-1 justify-center max-sm:hidden">  {/*hide items when small screen*/}
          {navLists.map((navItem, idx) => {
            return (
              <div key={idx} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                {navItem}
              </div>
            )
          })}
        </div>

        {/* search & bag image */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">  {/*flex-1 allows grow and shrink as needed*/}
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
