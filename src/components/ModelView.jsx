// ThreeJS
import { Html, PerspectiveCamera, View ,OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { Suspense } from "react"

// custom lights component
import Lights from "./Lights"

// actual model
import IPhone from './iPhone';

// Loader component
import Loader from "./Loader";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      // absolute position necessary to show multiple models on top of another
      className={`border-2 border-red-400 w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}       // swap between both model views
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      {/* Perspective Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      {/* Custom Lights */}
      <Lights />

      {/* orbit controls -- allow moving model with mouse */}
      <OrbitControls
        ref={controlRef}
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}    // put in centre of screen
        onEnd={()=>{setRotationState(controlRef.current.getAzimuthalAngle())}}    // get current angle of model
      />

      {/* need to wrap Suspense in Group */}
      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]}>  {/* small/large ,,, put model position in center of screen*/}
      {/* Loader -- fallback shows what to show while loading */}
      <Suspense fallback={<Loader/>}>
        {/* ThreeJS Gltf scene to JSX using https://gltf.pmnd.rs/ */}
        <IPhone
          scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} // scale of the model small and large
          item={item} // pass all details of the item (title , colors , id , img)
          size={size} // samll/large
        />
      </Suspense>
      </group>

    </View>
  )
}

export default ModelView
