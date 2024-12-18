// gsap
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

// ThreeJS
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

// import Component
import ModelView from "./ModelView"

// Hooks
import { useRef, useState } from "react"

// images & constant data
import { yellowImg } from "../utils"
import { models, sizes } from "../constants";

const Model = () => {

    // state to determine which iPhone model to be shown -- sizes object in constants/index.jsx
    const [size, setSize] = useState('small')

    // state to get model details for different size -- models object in constants/index.js
    const [model, setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],   // colors for different meshes we are to use for our 3d models
        img: yellowImg,                             // texture we are to use
    })

    // ◘ Camera control for ModelView -- ThreeJS
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // ref to keep track of ◘ Actual Model itself to access its properties when animating -- ThreeJS Elements (npm i three @react-three/drei @react-three/fiber)
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // keep track of ◘ Rotation value
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(() => {
        gsap.to("#heading", {
            opacity: 1,
            y: 0,
        })
    }, [])

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">Take a closer look.</h1>   {/*section-heading is custom class with 0 opacity (animate in)*/}
                {/* container for model */}
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        {/* 3D Model (small) shown here */}
                        <ModelView
                            index={1}
                            groupRef={small}                        // small Model
                            gsapType="view1"
                            controlRef={cameraControlSmall}         // camera control
                            setRotationState={setSmallRotation}     // rotation of model
                            item={model}                            // model details (title , colors , id , img)
                            size={size}                             // model size (large / small)
                        />
                        {/* 3D Model (large) shown here */}
                        <ModelView
                            index={2}
                            groupRef={large}                        // large Model
                            gsapType="view2"
                            controlRef={cameraControlLarge}         // camera control
                            setRotationState={setLargeRotation}     // rotation of model
                            item={model}                            // model details (title , colors , id , img)
                            size={size}                             // model size (large / small)
                        />

                        {/* ◘ Canvas for ThreeJS (given by @react-three/fiber) */}
                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}   // used when we want to interact with model
                        >
                            {/* show multiple views of same model */}
                            <View.Port />
                        </Canvas>
                    </div>

                    {/* show model details title etc. */}
                    <div className="mx-auto w-full">
                        {/* title */}
                        <p className="text-sm font-light text-center mb-5">{model.title}</p>
                        {/* all colors -- constants/index.js */}
                        <div className="flex-center">
                            <ul className="color-container">
                                {models.map((item, i) => (
                                    <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                        style={{ backgroundColor: item.color[0] }}    // show color as bakground
                                        onClick={() => setModel(item)}               // update state - give current model data to state
                                    />
                                ))}
                            </ul>

                            <button className="size-btn-container">
                                {/* show size options -- constants/index.js */}
                                {sizes.map((sz, i) => (
                                    <span key={sz.label} className="size-btn"
                                        style={{
                                            backgroundColor: size === sz.value ? 'white' : "transparent",
                                            color: size === sz.value ? 'black' : "white"
                                        }}                                          // show selected size based on color and bgColor
                                        onClick={() => setSize(sz.value)}             // update state for appropriate size
                                    >
                                        {sz.label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model
