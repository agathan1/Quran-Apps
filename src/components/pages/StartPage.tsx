import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
    console.log("start");
  };

  return (
    <>
      <section className="relative flex flex-col min-h-screen bg-[url(/src/assets/project/bg_quran.jpg)] bg-cover bg-center">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6a4724] to-blue-500/20"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center flex-grow text-primary text-center px-6 z-10">
          <h3 className="text-4xl font-bold">Quran App</h3>
          <p className="text-lg">Learn Quran and Recite once everyday</p>
        </div>

        {/* Button */}
        <div className="relative z-10 p-6 bottom-8">
          <button
            onClick={handleStart}
            className="w-full bg-amber-800 text-primary font-bold rounded-2xl p-2 hover:cursor-pointer hover:bg-amber-900 hover:text-yellow-400"
          >
            Get Started
          </button>
        </div>
      </section>
    </>

    // <>
    //   <section className="flex flex-col min-h-screen justify-center bg-[url(/src/assets/project/bg_quran.jpg)] bg-cover bg-center">
    //     <div className="min-h-screen flex flex-col justify-center bg-linear-to-r from-[#6a4724] to-blue-500/2">
    //       <section className="px-6 flex flex-col min-h-screen justify-center">
    //         {/* content */}
    //         <div className="text-center text-primary mb-auto">
    //           <h3 className="text-2xl font-bold">Quran App</h3>
    //           <p className="text-sm">Learn Quran and Recite once everyday</p>
    //         </div>
    //         {/* content */}

    //         {/* button */}
    //         <div className="mt-auto">
    //           <button
    //             onClick={handleStart}
    //             className="w-full bg-amber-800 font-bold text-primary rounded-2xl p-2"
    //           >
    //             Get Started
    //           </button>
    //         </div>
    //         {/* button */}
    //       </section>
    //     </div>
    //   </section>
    // </>
  );
}
