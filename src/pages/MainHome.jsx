import React, { useEffect } from "react";
import Home1 from "../components/Home/Home1";
import Home2 from "../components/Home/Home2";
import Home3 from "../components/Home/Home3";
import Home4 from "../components/Home/Home4";
import Home5 from "../components/Home/Home5";
import Home6 from "../components/Home/Home6";
import Home7 from "../components/Home/Home7";
import Home8 from "../components/Home/Home8";
import Home10 from "../components/Home/Home10";
import Home11 from "../components/Home/Home11";
import LastPage from "../components/LastPage";

function MainHome() {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
      <Home11 />
      <Home10 />
      <LastPage />
    </div>
  );
}

export default MainHome;
