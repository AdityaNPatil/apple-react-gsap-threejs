import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        // must wrap everything that goes in react three code with Html (suspend fallback)
        <Html>
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div className="w-[10vw] h-[10vw] rounded-full">
                    Loading..
                </div>
            </div>
        </Html>
    )
}

export default Loader
