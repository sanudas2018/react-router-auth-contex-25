import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import FirebaseAuthProvider from "./contexts/FirebaseAuthProvider.jsx";

// React Routing setup
// Link: https://reactrouter.com/start/data/installation
// Step-1: এখানে router টিকে import করা হয়েছে- Routes.jsx থেকে। এখানে src > Routes > Routes.jsx টিকে আগে তৈরি করতে হবে। যাতে কাজটি আরো সাজান হয়।
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Step:3 (Context)- Context এর provider টি add করা হয়েছে। */}
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </StrictMode>
);
