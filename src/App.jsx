// import MainLayout from "./layout/MainLayout";
// import Home from "./components/Home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./pages/About";
// import ChatPage from "./components/Chatbot";
// function App() {
//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainLayout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//           path: "chatpage",
//           element: <ChatPage />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={routes} />;
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home";
import About from "./pages/About";
import ChatPage from "./components/Chatbot";

// 👉 Yangi sahifalar


import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "chatpage",
          element: <ChatPage />,
        },
        {
          path: "login",
          element: <LoginForm />,
        },
        {
          path: "register",
          element: <RegisterForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
