````markdown
# 🚀 React Router Configuration (Single Page Application)

This guide explains how to set up **React Router** in a Single Page Application (SPA) using **React Router DOM (v6)**.

---

## 🧩 Step 1 – `main.jsx`

Import the `BrowserRouter` component from **react-router-dom** and wrap the root `<App />` component inside it.

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
````

---

## 🧭 Step 2 – `App.jsx`

Import `Routes` and `Route` components from **react-router-dom**.
Then define your routes inside the `<Routes>` wrapper.

```jsx
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
```

---

## 🧭 Step 3 – `Navbar.jsx`

Use the `Link` component from **react-router-dom** to navigate between pages
without refreshing the browser (SPA behavior).

```jsx
// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

---

## 📁 Suggested Folder Structure

```plaintext
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Jobs.jsx
│   └── Profile.jsx
├── App.jsx
└── main.jsx
```

---

## ✅ Summary

* **`BrowserRouter`** → Wraps the entire application (enables routing).
* **`Routes`** → Acts as a container for all route definitions.
* **`Route`** → Defines individual paths and their components.
* **`Link`** → Enables navigation without full page reload.

---

🧠 *Now your React app is fully configured for client-side routing!*

---
