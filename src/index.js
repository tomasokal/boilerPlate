import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 100,
                position: [ 0, 15, 20 ]
            } }>
            <Suspense fallback={null}>
                <Experience /> 
            </Suspense>  
        </Canvas>
    </StrictMode>
)