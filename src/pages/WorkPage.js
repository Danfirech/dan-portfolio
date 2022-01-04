import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BoxContainerTop } from "../styles/WorkBoxes.Style";
import { BoxContainerCenter } from "../styles/WorkBoxes.Style";
import { BoxContainerBottom } from "../styles/WorkBoxes.Style";
import { TextBox } from "../styles/WorkBoxes.Style";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function WorkPage() {
  return (
    <>
      <div>
        <TextBox />
        <BoxContainerTop></BoxContainerTop>
        <BoxContainerCenter></BoxContainerCenter>
        <BoxContainerBottom></BoxContainerBottom>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default WorkPage;
