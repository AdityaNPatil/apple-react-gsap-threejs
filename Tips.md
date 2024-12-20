## In tailwind.config.js file
```javascript
theme: {
    extend: {
      colors:{
        blue : "#2997FF"
      }
    },
  }
```
- For custom color class within tailwind

## Utility classes in index.css
```css
@layer utilities {
  .flex-center {
    @apply flex items-center justify-center
  }

  .nav-height {
    @apply h-[calc(100vh-60px)]
  }
}
```

## Utility JS File (utils/index.js) to import and export images
```javascript
import chip from "/assets/images/chip.jpeg";
import frame from "/assets/images/frame.png";

export const chipImg = chip;
export const frameImg = frame;
```

## Constants in (constants/index.js)
- Store arrays of information within them 

For more [Snippets of Project](https://github.com/adrianhajdin/iphone/blob/main/README.md#%EF%B8%8F-snippets)

## Direct return in .map
```javascript
{hightlightsSlides.map((highlight,idx)=>(   
 // direct parantheses used no return needed        --- instead of { return( jsx ) }
)
)}
```

## Install ThreeJS
`npm i three @react-three/drei @react-three/fiber`

## GLTF scene to JSX
ThreeJS Gltf scene to JSX using [repo](https://github.com/pmndrs/gltfjsx) [link](https://gltf.pmnd.rs/ )

## Optimized Code for DRY Principle (Dont repeat yourself)
```javascript
// optimized -- DRY principle -- use GSAP for ScrollTrigger animations from utils/animations.js
    useGSAP(()=>{
        animateWithGsap("#features_title", {y:0 , opacity:1})
    }, [])
```
