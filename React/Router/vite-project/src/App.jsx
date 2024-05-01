// import { Home } from "./Components/home";
// import { Dashboard } from "./Components/dashboard";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./Components/home"));
const Dashboard = lazy(() => import("./Components/dashboard")); // This is the lazy load
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"...Loading"}>
              <Dashboard />
            </Suspense>
            // Here suspence is required if we lazy load all of the tabs
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={"...Loading"}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}

export default App;
