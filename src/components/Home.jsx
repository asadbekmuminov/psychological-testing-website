
import ForTest from "../pages/ForTest";
import { useState, useEffect } from "react";

function Home() {
  const [startTesting, setStartTesting] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Sahifa yuklanganda va har focusga qaytganda currentUser-ni yangilash
  useEffect(() => {
    const updateUser = () => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(user);
    };

    updateUser(); // ilk ochilganda chaqiramiz

    window.addEventListener("focus", updateUser); // sahifaga fokus qaytganda

    return () => {
      window.removeEventListener("focus", updateUser);
    };
  }, []);

  const handleStartTest = () => {
    if (currentUser) {
      setStartTesting(true);
      setShowLoginPrompt(false);
    } else {
      setShowLoginPrompt(true);
    }
  };

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
          <div className="bg-white w-64 md:w-[700px] sm:w-[500px] flex-col rounded-2xl flex items-center justify-center mb-2">
            <h1 className="font-bold text-2xl sm:text-3xl p-5 w-full text-center">
              Sizning qaysi yo'nalishga moyilligingiz ko'proqligini bilishni
              xohlasangiz, testni yechib ko'ring!
            </h1>
            <div className="w-full p-5 text-right">
              <button
                onClick={handleStartTest}
                className="btn btn-outline btn-accent mr-7"
              >
                Testni boshlash
              </button>
            </div>
          </div>
        )}

        {startTesting && <ForTest />}

        {showLoginPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
              <p className="mb-4 text-lg font-semibold">
                Siz bizda ro'yxatdan o'tmagansiz. Iltimos, ro'yxatdan o'ting! ☺️
              </p>
              <button
                onClick={() => setShowLoginPrompt(false)}
                className="btn btn-outline btn-accent"
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
