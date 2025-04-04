import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../../config/particles-config";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles init={particlesInit} options={particlesConfig} />
    </div>
  );
};

export default ParticlesBg;
