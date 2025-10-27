import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeOrbs({ className = '' }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const group = new THREE.Group();
    scene.add(group);

    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color('#8b5cf6'), wireframe: true, transparent: true, opacity: 0.5 });

    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 1),
      new THREE.DodecahedronGeometry(0.9, 0),
      new THREE.IcosahedronGeometry(0.7, 0),
    ];

    const meshes = geometries.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, material.clone());
      mesh.position.x = (i - 1) * 2.2;
      mesh.position.y = i === 1 ? 0.4 : -0.3;
      mesh.material.opacity = 0.25 + i * 0.2;
      group.add(mesh);
      return mesh;
    });

    const light = new THREE.PointLight('#a78bfa', 1.5, 30);
    light.position.set(2, 2, 4);
    scene.add(light);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      group.rotation.y += 0.003;
      group.rotation.x += 0.0015;
      meshes.forEach((m, idx) => {
        m.rotation.x += 0.002 + idx * 0.001;
        m.rotation.y += 0.003 + idx * 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      while (container.firstChild) container.removeChild(container.firstChild);
      geometries.forEach((g) => g.dispose());
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className={className} role="img" aria-label="Animated decorative orbs" />;
}
