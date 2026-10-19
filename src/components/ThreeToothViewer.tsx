import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Layers, ShieldCheck } from 'lucide-react';

type ViewMode = 'crown' | 'layers' | 'implant';

export const ThreeToothViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('crown');
  const [isRotating, setIsRotating] = useState(true);
  const [activeFeature, setActiveFeature] = useState<string>('Custom Glazed Ceramic');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const crownMeshRef = useRef<THREE.Mesh | null>(null);
  const dentinMeshRef = useRef<THREE.Mesh | null>(null);
  const implantMeshRef = useRef<THREE.Mesh | null>(null);
  const rootMeshRef = useRef<THREE.Mesh | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaf0, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.2);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xc5a059, 1.5);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Root Group
    const toothGroup = new THREE.Group();
    groupRef.current = toothGroup;
    scene.add(toothGroup);

    // 1. Procedural Crown Geometry (Smooth anatomical molar/premolar shape)
    const crownGeo = new THREE.CylinderGeometry(0.85, 0.65, 0.95, 32, 16);
    // Deform top vertices to create natural dental cusps
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (y > 0.2) {
        // Cusp shaping
        const r = Math.sqrt(x * x + z * z);
        const cuspOffset = Math.sin(x * 3.5) * Math.cos(z * 3.5) * 0.18;
        pos.setY(i, y + cuspOffset - r * 0.08);
      }
    }
    crownGeo.computeVertexNormals();

    // Crown Materials
    const porcelainMat = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbfa,
      roughness: 0.15,
      metalness: 0.05,
      transmission: 0.35, // ceramic translucency
      ior: 1.52, // realistic porcelain refractive index
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
    });

    const crownMesh = new THREE.Mesh(crownGeo, porcelainMat);
    crownMesh.position.y = 0.45;
    crownMeshRef.current = crownMesh;
    toothGroup.add(crownMesh);

    // 2. Dentin / Internal core
    const dentinGeo = new THREE.CylinderGeometry(0.65, 0.45, 0.75, 24);
    const dentinMat = new THREE.MeshStandardMaterial({
      color: 0xf3e8c9,
      roughness: 0.4,
      metalness: 0.1,
    });
    const dentinMesh = new THREE.Mesh(dentinGeo, dentinMat);
    dentinMesh.position.y = 0.4;
    dentinMesh.visible = false;
    dentinMeshRef.current = dentinMesh;
    toothGroup.add(dentinMesh);

    // 3. Natural Double Root Geometry
    const rootGeo1 = new THREE.ConeGeometry(0.32, 1.4, 24);
    rootGeo1.rotateZ(0.12);
    const rootGeo2 = new THREE.ConeGeometry(0.3, 1.35, 24);
    rootGeo2.rotateZ(-0.12);

    const rootMat = new THREE.MeshStandardMaterial({
      color: 0xede4d3,
      roughness: 0.5,
      metalness: 0.05,
    });

    const root1 = new THREE.Mesh(rootGeo1, rootMat);
    root1.position.set(-0.24, -0.65, 0);
    const root2 = new THREE.Mesh(rootGeo2, rootMat);
    root2.position.set(0.24, -0.62, 0);

    const naturalRootGroup = new THREE.Group();
    naturalRootGroup.add(root1);
    naturalRootGroup.add(root2);
    rootMeshRef.current = naturalRootGroup as unknown as THREE.Mesh;
    toothGroup.add(naturalRootGroup);

    // 4. Titanium Precision Implant Fixture
    const implantGroup = new THREE.Group();
    const screwGeo = new THREE.CylinderGeometry(0.35, 0.22, 1.5, 32);
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.35,
      metalness: 0.85,
    });
    const screwMesh = new THREE.Mesh(screwGeo, titaniumMat);
    screwMesh.position.y = -0.65;

    // Abutment collar (champagne/gold anodized titanium)
    const collarGeo = new THREE.CylinderGeometry(0.48, 0.35, 0.3, 32);
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      roughness: 0.25,
      metalness: 0.7,
    });
    const collarMesh = new THREE.Mesh(collarGeo, collarMat);
    collarMesh.position.y = 0.05;

    implantGroup.add(screwMesh);
    implantGroup.add(collarMesh);
    implantGroup.visible = false;
    implantMeshRef.current = implantGroup as unknown as THREE.Mesh;
    toothGroup.add(implantGroup);

    // Mouse Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !toothGroup) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      toothGroup.rotation.y += deltaX * 0.008;
      toothGroup.rotation.x += deltaY * 0.008;
      toothGroup.rotation.x = Math.max(-0.6, Math.min(0.6, toothGroup.rotation.x));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !toothGroup || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      toothGroup.rotation.y += deltaX * 0.01;
      toothGroup.rotation.x += deltaY * 0.01;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging && toothGroup) {
        toothGroup.rotation.y += delta * 0.35;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  // Handle mode switches
  useEffect(() => {
    if (!crownMeshRef.current || !dentinMeshRef.current || !implantMeshRef.current || !rootMeshRef.current) return;

    if (viewMode === 'crown') {
      crownMeshRef.current.visible = true;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).opacity = 1.0;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).transparent = false;
      dentinMeshRef.current.visible = false;
      rootMeshRef.current.visible = true;
      implantMeshRef.current.visible = false;
      setActiveFeature('Translucent Monolithic Porcelain with Natural Light Reflection');
    } else if (viewMode === 'layers') {
      crownMeshRef.current.visible = true;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).transparent = true;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).opacity = 0.45;
      dentinMeshRef.current.visible = true;
      rootMeshRef.current.visible = true;
      implantMeshRef.current.visible = false;
      setActiveFeature('Biocompatible Dentin Core & Root Canal Preservation');
    } else if (viewMode === 'implant') {
      crownMeshRef.current.visible = true;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).opacity = 0.95;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).transparent = false;
      dentinMeshRef.current.visible = false;
      rootMeshRef.current.visible = false;
      implantMeshRef.current.visible = true;
      setActiveFeature('Grade-4 Medical Titanium Root Fixture with Precision Abutment');
    }
  }, [viewMode]);

  return (
    <div className="relative w-full h-[440px] md:h-[500px] rounded-2xl bg-gradient-to-b from-[#F7F6F2] to-[#ECEAE3] border border-[#E4E0D5] overflow-hidden shadow-xs flex flex-col justify-between">
      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 p-4 border-b border-[#E4E0D5]/60 bg-white/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#17222B]">
            Interactive 3D Restoration Model
          </span>
          <span className="text-xs text-[#7B8590]">· Drag to Rotate</span>
        </div>

        {/* View mode segmented switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#ECEAE3] rounded-lg">
          <button
            onClick={() => setViewMode('crown')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'crown'
                ? 'bg-white text-[#17222B] shadow-xs'
                : 'text-[#64748B] hover:text-[#17222B]'
            }`}
          >
            Aesthetic Crown
          </button>
          <button
            onClick={() => setViewMode('layers')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'layers'
                ? 'bg-white text-[#17222B] shadow-xs'
                : 'text-[#64748B] hover:text-[#17222B]'
            }`}
          >
            Internal Layers
          </button>
          <button
            onClick={() => setViewMode('implant')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'implant'
                ? 'bg-white text-[#17222B] shadow-xs'
                : 'text-[#64748B] hover:text-[#17222B]'
            }`}
          >
            Implant Foundation
          </button>
        </div>
      </div>

      {/* 3D Canvas Mounting Area */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Floating Bottom Explanatory Card */}
      <div className="relative z-10 p-4 m-4 bg-white/85 backdrop-blur-md border border-[#E4E0D5] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#E5E0D4] text-[#B38E46] shrink-0 mt-0.5">
            {viewMode === 'crown' && <Sparkles className="w-4 h-4" />}
            {viewMode === 'layers' && <Layers className="w-4 h-4" />}
            {viewMode === 'implant' && <ShieldCheck className="w-4 h-4" />}
          </div>
          <div>
            <div className="text-xs font-semibold text-[#17222B]">{activeFeature}</div>
            <div className="text-xs text-[#64748B] mt-0.5">
              Custom-fabricated in partnership with master ceramists for natural light dispersion and lifelong biocompatibility.
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#52606D] hover:text-[#17222B] bg-[#F4F3EF] hover:bg-[#EAE8E1] rounded-md transition-colors shrink-0"
          title="Toggle Auto-Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isRotating ? 'Pause Spin' : 'Spin 3D'}</span>
        </button>
      </div>
    </div>
  );
};
