# GSAP - Detailed notes in iPad
- High performance JS Animation Library
- Animate UI to SVG (can animate everything)
- Can make Parallax effects + morphing svgs + simulating physics etc.

[Here](https://gsap.com/)

# Three JS - Detailed notes in iPad
- 3D rendering engine for creating 3d web pages
- Key Features
    - Abstracts WebGL
        - high level api 
        - Simplified Creation and rendering
    - High Cross Platform Compatibility
    - Rich set of tools and functionalities
    - Supports
        - Lighting
        - Shading 
        - Textures
        - Animations
        - Interactions
    - Hardware accelerated rendering

# Important Concepts in 3D Dev - Detailed notes in iPad
## Scene 
- A scene is the **canvas** (environment where the 3d world exists)
## Renderer
- Converts the 3d scene to 2d images
- Responsible for displaying the 3d scene on the browser
## Camera
- Determine viewpoint from where the scene is viewed
- Properties
    - Position
    - Rotation
    - Field of View 
- Different Types of Cameras supported in ThreeJS
    - Perspective Cam
    - Orthographic Cam
## Lights
- Illuminate the scene and objects
- Types
    - Ambient (Overall illumination of object)
    - Directional (Light From specific direction)
    - Point (Light from a single point , the source emits light in all directions)
    - Spot (Light from a single point, but only in a specific direction in a cone shape)
## Mesh
- Basic building block of 3d objects in ThreeJS
- Consistis of
    - **Vertices** (Points in 3d space)
    - **Faces** (Vertices connected together to form faces)
- Each Mesh Associated with
    - **Geometry** = defines structure and shape of object by specifying vertices and faces
        - (BuiltIn) Box Geometries , Spheres , Planes , Cylinders etc.
        - (Custom) defining custom vertices and faces
    - **Material** = defines appearance of mesh
        - color , texture , how light affects the mesh
        - (BuiltIn) Basic Materials(No reaction to light) , Standard Material(Physically based realistic material) , MeshPhongMaterial(Reacts to light) etc.
        - (Custom) defining custom materials

# Using ThreeJS in a React Application
- In Vanilla JS 
    - use CDN script tag directly and start using

## In React JS
- **React Three Fiber** = library to allow easy integration of 3js with react 
    - Allows scene creation using react components  

# Framer Motion
- Best for SIMPLE GESTURE BASED NAVIGATIONS

# Credits 
[JSM](https://github.com/adrianhajdin)