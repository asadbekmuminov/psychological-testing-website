
// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Home() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showLoginPrompt, setShowLoginPrompt] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const updateUser = () => {
//       const user = JSON.parse(localStorage.getItem("currentUser"));
//       setCurrentUser(user);
//     };
//     updateUser();
//     window.addEventListener("focus", updateUser);
//     return () => window.removeEventListener("focus", updateUser);
//   }, []);

//   const handleStartTest = () => {
//     if (currentUser) {
//       navigate("/test");
//     } else {
//       setShowLoginPrompt(true);
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center gap-5">
//       {/* Qimirlovchi Emoji Background */}
//       <motion.div
//         className="absolute left-4 top-10 text-4xl text-accent z-0"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//       >
//         🧠
//       </motion.div>
//       <motion.div
//         className="absolute right-6 top-24 text-3xl text-accent z-0"
//         animate={{ x: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 3 }}
//       >
//         💡
//       </motion.div>
//       <motion.div
//         className="absolute left-10 bottom-10 text-4xl text-accent z-0"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 3 }}
//       >
//         ✨
//       </motion.div>

//       {/* Typing Title */}
//       <motion.h1
//         className="text-2xl sm:text-3xl font-bold text-center text-accent mt-6 relative z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 1 }}
//       >
//         <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-accent pr-3 block max-w-[90vw]">
//           Keling, imkoniyatlaringizni birgalikda aniqlaymiz...
//         </span>
//       </motion.h1>

//       {/* Hero Image */}
//       <div className="rounded-2xl mt-10 z-10">
//         <img
//           className="rounded-2xl"
//           src="/hero-image.jpg"
//           alt="miya va turli hil yo'nalishlar"
//         />
//       </div>

//       {/* Test Card */}
//       <motion.div
//         className="bg-white w-64 sm:w-[500px] md:w-[700px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden z-10"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <img
//           src="/test_image.jpg"
//           alt="Test boshlanishi"
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-6 flex flex-col gap-4 items-center text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-accent">
//             Qaysi yo'nalishga moyilligingizni bilmoqchimisiz?
//           </h2>
//           <p className="text-gray-600">
//             Unda siz uchun mo'ljallangan psixologik testni yeching va o'z imkoniyatlaringiz haqida yaqindan bilib oling✨
//           </p>
//           <button
//             onClick={handleStartTest}
//             className="btn btn-accent btn-wide mt-2"
//           >
//             Testni boshlash
//           </button>
//         </div>
//       </motion.div>

//       {/* Gradient Line Separator */}
//       <motion.div
//         className="h-10 w-1 bg-gradient-to-b from-accent to-transparent my-5 z-10"
//         initial={{ opacity: 0, scaleY: 0 }}
//         whileInView={{ opacity: 1, scaleY: 1 }}
//         transition={{ duration: 0.7 }}
//       ></motion.div>

//       {/* Cards Section */}
//       <motion.div
//         className="flex flex-col gap-6 px-4 pb-10 w-full max-w-3xl z-10"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         {/* About Card */}
//         <Link to="/about">
//           <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
//             <img
//               src="/about.jpg"
//               alt="Biz haqimizda"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h2 className="text-xl font-bold text-accent mb-2">Biz haqimizda</h2>
//               <p className="text-gray-600">
//                 Jobetest platformasi haqida ko‘proq bilmoqchimisiz? Maqsadimiz,
//                 foydalanuvchilarga kasb tanlashda psixologik yondashuv asosida
//                 yordam berishdir.
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Gradient Line */}
//         <motion.div
//           className="h-10 w-1 bg-gradient-to-b from-accent to-transparent mx-auto"
//           initial={{ opacity: 0, scaleY: 0 }}
//           whileInView={{ opacity: 1, scaleY: 1 }}
//           transition={{ duration: 0.7 }}
//         ></motion.div>

//         {/* AI Assistant Card */}
//         <Link to="/chatpage">
//           <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
//             <img
//               src="/ai.jpg"
//               alt="AI yordamchi"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h2 className="text-xl font-bold text-accent mb-2">AI yordamchi</h2>
//               <p className="text-gray-600">
//                 Savollaringiz bormi? Bizning sun'iy intellekt yordamchimiz sizga
//                 kerakli yo‘nalishni aniqlashda ko‘mak beradi.
//               </p>
//             </div>
//           </div>
//         </Link>
//       </motion.div>

//       {/* Login Prompt Modal */}
//       {showLoginPrompt && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
//             <p className="mb-4 text-lg font-semibold">
//               Siz ro'yxatdan o'tmagansiz. Iltimos, ro'yxatdan o'ting!
//             </p>
//             <button
//               onClick={() => setShowLoginPrompt(false)}
//               className="btn btn-outline btn-accent"
//             >
//               Yopish
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(user);
    };
    updateUser();
    window.addEventListener("focus", updateUser);
    return () => window.removeEventListener("focus", updateUser);
  }, []);

  const handleStartTest = () => {
    if (currentUser) {
      navigate("/test");
    } else {
      setShowLoginPrompt(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-5">
      {/* Typing Title */}
      <motion.h1
        className="text-2xl sm:text-3xl font-bold text-center text-accent mt-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <span className="animate-typing text-black overflow-hidden whitespace-nowrap border-r-2 border-accent pr-3 block max-w-[90vw]">
          Keling, imkoniyatlaringizni birgalikda aniqlaymiz...✨
        </span>
      </motion.h1>

      {/* Hero Image */}
      <div className="rounded-2xl mt-10 z-10">
        <img
          className="rounded-2xl"
          src="/hero-image.jpg"
          alt="miya va turli hil yo'nalishlar"
        />
      </div>

      {/* Test Card */}
      <motion.div
        className="bg-white w-64 sm:w-[500px] md:w-[700px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/test_image.jpg"
          alt="Test boshlanishi"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent">
            Qaysi yo'nalishga moyilligingizni bilmoqchimisiz?
          </h2>
          <p className="text-gray-600">
            Unda siz uchun mo'ljallangan psixologik testni yeching va o'z imkoniyatlaringiz haqida yaqindan bilib oling✨
          </p>
          <button
            onClick={handleStartTest}
            className="btn btn-accent btn-wide mt-2"
          >
            Testni boshlash
          </button>
        </div>
      </motion.div>

      {/* Emojilar cardlar orasida */}
      <div className="flex justify-center gap-20 my-6 z-20 relative">
        <motion.div
          className="text-4xl text-accent"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          🧠
        </motion.div>
        <motion.div
          className="text-3xl text-accent"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          💡
        </motion.div>
        <motion.div
          className="text-4xl text-accent"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ✨
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="flex flex-col gap-6 px-4 pb-10 w-full max-w-3xl z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* About Card */}
        <Link to="/about">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
            <img
              src="/about.jpg"
              alt="Biz haqimizda"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-accent mb-2">Biz haqimizda</h2>
              <p className="text-gray-600">
                Jobetest platformasi haqida ko‘proq bilmoqchimisiz? Maqsadimiz,
                foydalanuvchilarga kasb tanlashda psixologik yondashuv asosida
                yordam berishdir.
              </p>
            </div>
          </div>
        </Link>
<div className="flex justify-center gap-20 my-6 z-20 relative">
        <motion.div
          className="text-4xl text-accent"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          🧠
        </motion.div>
        <motion.div
          className="text-3xl text-accent"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          💡
        </motion.div>
        <motion.div
          className="text-4xl text-accent"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ✨
        </motion.div>
      </div>
        {/* AI Assistant Card */}
        <Link to="/chatpage">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
            <img
              src="/ai.jpg"
              alt="AI yordamchi"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-accent mb-2">AI yordamchi</h2>
              <p className="text-gray-600">
                Savollaringiz bormi? Bizning sun'iy intellekt yordamchimiz sizga
                kerakli yo‘nalishni aniqlashda ko‘mak beradi.
              </p>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <p className="mb-4 text-lg font-semibold">
              Siz ro'yxatdan o'tmagansiz. Iltimos, ro'yxatdan o'ting!
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
  );
}

export default Home;
