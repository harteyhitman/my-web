import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bigtext from "./components/Bigtext";
import DescText from "./components/DescText";
import ScrollableContainer from "./components/ScrollableContainer";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import CommunityContribution from "./components/CommunityContribution";
import Gmail from "./components/Gmail";
import SmallProjects from "./smallProjects/SmallProjects";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Bigtext />
          <DescText />
          <ScrollableContainer />
          <Tools />
          <Projects />
          <SmallProjects />
          <CommunityContribution />
          <Gmail />
        </>
      )}
    </div>
  );
};

export default App;
