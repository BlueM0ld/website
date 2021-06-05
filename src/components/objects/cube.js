import React, { useEffect } from 'react'
import * as THREE from 'three';

function Cube(){
    //placeholder for the state
   //const [count , setCount ] = useState(0);


     let light = (scene) => {
        const color = 0xFFFFFF;
        const intensity = 1;
        const directionalLight = new THREE.DirectionalLight(color, intensity);
        directionalLight.position.set(-1, 2, 4);
        return scene.add(directionalLight);
        
    }



    useEffect(()=>{
        let scene = new THREE.Scene();
        scene.background = new THREE.Color('black');
        light(scene);

        let camera = new THREE.PerspectiveCamera(35,   window.innerWidth/window.innerHeight, 0.1,100);
        camera.position.set(0, 0, 10);
        let renderer = new THREE.WebGL1Renderer();

        renderer.setSize(window.innerWidth,window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement)

        // const geometry = new THREE.SphereBufferGeometry(1, 32, 32);
        const geometry = new THREE.BoxGeometry(0.2,0.2,0.2)

          let makeInstance = (geom,color, zpos) => {
            const material = new THREE.MeshPhongMaterial({color});
            const obj = new THREE.Mesh(geom, material);
            scene.add(obj);
            obj.position.x = zpos;
    
            return obj;
        }
        const cubes = [
            makeInstance(geometry, "green",  5),
            makeInstance(geometry, "red",  2),
            makeInstance(geometry, "lightblue",  -2),
            makeInstance(geometry, "hotpink",  -5)
          ];
   
        let animate = function(){
            requestAnimationFrame(animate)
            cubes.forEach((cube ) =>{
                cube.rotation.x += 0.01
                cube.rotation.y += 0.01

            })
            renderer.render(scene, camera)
        }
        animate()

    });

    return(
        <div>Three js Scene Placeholder</div>
    )


}


export  {Cube}