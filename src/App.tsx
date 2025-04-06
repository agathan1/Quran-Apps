import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Layouts from "./components/templates/Layouts";
import StartPage from "./components/pages/StartPage";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import DetailSurah from "./components/pages/DetailSurah";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layouts>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="detail-surah/:id" element={<DetailSurah />} />

        {/* <Route path="about" element={<About />} />

<Route element={<AuthLayout />}>
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />
</Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </Layouts>
    // <>
    //   <Layouts>
    //     <StartPage />
    //     <div className="">Hello Guys</div>
    //     <Profile />
    //   </Layouts>
    // </>
  );
}

export default App;
