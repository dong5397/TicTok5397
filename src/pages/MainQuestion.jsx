import Question from "../components/Qustion/Question";
import Question2 from "../components/Qustion/Question2";
import LastPage from "../components/LastPage";
import React, { useEffect } from "react";
function MainQuestion() {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Question />
      <Question2 />
      <LastPage />
    </div>
  );
}

export default MainQuestion;
