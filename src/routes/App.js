import Presentation from "components/Presentation";
import Questions from "components/Questions";
import Title from "components/Title";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Title />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="*" element={<Title />} />
      </Routes>
    );
  };
  
  export default memo(App);