import Image from "next/image";
import React from "react";
import { DotWave } from "@uiball/loaders";

const Loader = () => {
  return (
    <div className="h-screen w-screen fixed top-0 z-30 bg-white flex flex-col gap-2 items-center justify-center">
      <Image src="/UK.png" alt="My personal logo" width={100} height={100} priority/>

      <DotWave size={47} speed={1} color="#2563eb" />
    </div>
  );
};

export default Loader;
