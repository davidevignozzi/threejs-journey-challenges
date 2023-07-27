import { Canvas } from '@react-three/fiber';
import Experience from './compontents/Experience';
import { Leva, useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

function App() {
  /**
   * Tweek it in leva to make Perf Visible
   */
  const { perfVisible } = useControls({
    perfVisible: true
  });

  return (
    <>
      <Leva collapsed />
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 30 }}>
        <color attach="background" args={['#333333']} />
        {perfVisible && <Perf position="top-left" />}
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
