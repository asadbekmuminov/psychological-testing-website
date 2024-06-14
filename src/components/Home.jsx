import ForTest from "../pages/ForTest";
import { useState } from "react";

function Home() {
  const [startTesting, setStartTesting] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="rounded-2xl mt-10">
          <img
            className="rounded-2xl"
            src="/hero-image.jpg"
            alt="miya va turli hil yo'nalishlar"
          />
        </div>
        {!startTesting && (
          <div className="bg-white w-64 md:w-[700px] sm:w-[500px]  rounded-2xl   mb-2 ">
            <h1 className="font-bold text-2xl sm:text-3xl p-5 w-full text-center">
              Sizning qaysi yo'nalishga moyilligingiz ko'proqligini bilishni
              xohlasangiz, testni yechib ko'ring!
            </h1>
            <div className="w-full p-5 text-right">
              <button
                onClick={() => setStartTesting(!startTesting)}
                className="btn btn-outline btn-accent mr-7"
              >
                Testni boshlash
              </button>
            </div>
          </div>
        )}
        <div>{startTesting && <ForTest />}</div>
      </div>
    </>
  );
}

export default Home;
