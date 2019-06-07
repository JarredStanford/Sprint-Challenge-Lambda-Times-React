import React from "react";

import TopBar from "./TopBar";
import Header from "./Header";
import Content from "./Content/Content";

const ContentPage = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

export default ContentPage;
