# React Router + Authentication + Context

### যে যে কাজ করা হয়েছেঃ

    - Password দেখান হয়েছে- Toggle করে
    - regular expression টা মাধ্যমে password check করা হয়েছে।
    - Terms & Condition - CheckBosk এর মাধ্যমে করা হয়েছে।
    - Create user & SingUp user
    - Email Verification
    - Forget Password
    - Update User Profile (name, photo)
    - Context
    - CreateUser
    - SignInUser
    - onAuthStateChanged (Observer)
    - signOut
    - Condition অনুজাই user বা menu access গুলি দেখাবে। (PrivetRoutes)

### React Router Setup:

    [link](https://reactrouter.com/home)
    [1] Router setup - Doc অনু জাই
    [2] Root: src > layouts > Root.jsx = এর ভিতরে <NavBar> এবং <Outlet> থাকবে। এর উপরে navbar থাকবে।
    [3] Routes:
        src > Routes > Routes.jsx = এখান থেকে Data load হবে এবং
        PrivateRoute.jsx

    [4] PrivetRoutes: gitHub > examples > auth > src > App.tsx

### Firebase:

    1. Firebase install and Config
    2. src > firebase.init.js
    3. export auth
    4. Enable Auth Method(Build > Authentication > google, facebook, email password)
    5. got to firebase doc (web > Get Started (import এবং initialize করতে হবে))
    6. google, password authentication e.t.c.
    7. crateUserWithEmailAndPassword(auth,email,password)
    8.

### Context: For Shared Authentication-

    - (Link Document:)[https://react.dev/learn/scaling-up-with-reducer-and-context]
    - Managing State > Scaling Up with Reducer and Context
    - 1st system: (
        main.jsx - const AuthContext = createContext(null); এখানে route টা কে context এর ভিতরে রাখতে হবে। এবং value={userInfo} কে পাঠিয়ে দিতে হবে। এবং একে ব্যাবহার করার জন্য - use(AuthContext) দিয়ে হবে।
    )
    - 2nd system: (
        - src > context > AuthContext.jsx এবং  AuthProvider.jsx. এখানে AuthProvider এর ভিতরে AuthContext টি কে import করে নিতে হবে।

    AuthContext.jsx এর ভিতরে:
        ```
        export const AuthContext = createContext(null);
        ```
    AuthProvider.jsx এর ভিতরে:
       ```
        <AuthContext value = {userInfo}>
            {children}
        </AuthContext>
       ```
       এবং main.jsx এর ভিতরে এভাবে করতে হবে যাতে context টি ভালভাবে reuse করা যাই।
       ```
       <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}>
        </AuthProvider>
       </StrictMode>
       ```
    )
    - crateUserWithEmailAndPassword এটি এখান থেকে করতে হবে।
    - onAuthStateChanged (Observer) এখানে একটি sideEffect আছে, এই জন্য useEffect() ব্যাবহার করতে হবে।
    - signOut

### Install All Item:

    - React Router
    - Tailwind
    - Daisyui
    - Firebase
    - React Icons
