// ThreeJS
import { PerspectiveCamera,View } from "@react-three/drei"
import { Suspense } from "react"

// custom lights component
import Lights from "./Lights"

// actual model
import IPhone from './IPhone';

const ModelView = ({index ,groupRef , gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View 
    index={index}
    id={gsapType}
    className={`border-2 border-red-400 w-full h-full ${index===2} ? 'right-[-100%]' : ''`}       // swap between both model views
    >
        {/* Ambient Light */}
        <ambientLight intensity={0.3}/>
        {/* Perspective Camera */}
        <PerspectiveCamera makeDefault position={[0,0,4]}/>
        {/* Custom Lights */}
        <Lights/>

        {/* Loader -- fallback shows what to show while loading */}
        <Suspense fallback={null}>
            {/* ThreeJS Gltf scene to JSX using https://gltf.pmnd.rs/ */}
            <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} // scale of the model small and large
            item={item} // pass all details of the item (title , colors , id , img)
            size={size} // samll/large
            />
        </Suspense>
    </View>
  )
}

export default ModelView
