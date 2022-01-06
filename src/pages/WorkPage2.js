import React from "react";
import { useState } from "react";
import { TextBox } from "../styles/WorkBoxes.Style";
import { WorkBoxTop } from "../styles/WorkBoxes.Style";
import { WorkBoxBottom } from "../styles/WorkBoxes.Style";
import { FaBeer } from "react-icons/fa";
import { ContentBox } from "../styles/WorkBoxes.Style";
import { WorkBoxWhole } from "../styles/WorkBoxes.Style";
import Footer from "../components/Footer";

function WorkPage() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <>
      <WorkBoxWhole>
        <div>
          {/* TOP SECTION */}
          <WorkBoxTop
            style={{ alignItems: "center", fontSize: 50, paddingLeft: 50 }}
          >
            <FaBeer onClick={() => setToggle(!toggle)} />
          </WorkBoxTop>
          {toggle && (
            <WorkBoxBottom>
              <ContentBox>Test</ContentBox>
              <ContentBox>Test</ContentBox>
              <ContentBox>Test</ContentBox>
            </WorkBoxBottom>
          )}
          {/* MIDDLE SECTION */}
          <WorkBoxTop
            style={{
              paddingLeft: 1750,
              alignItems: "center",
              fontSize: 50,
            }}
          >
            <FaBeer onClick={() => setToggle2(!toggle2)} />
          </WorkBoxTop>
          {toggle2 && (
            <WorkBoxBottom>
              <ContentBox>Test</ContentBox>
              <ContentBox>Test</ContentBox>
              <ContentBox>Test</ContentBox>
            </WorkBoxBottom>
          )}
          {/* BOTTOM SECTION */}
          <WorkBoxTop
            style={{ alignItems: "center", fontSize: 50, paddingLeft: 50 }}
          >
            <FaBeer onClick={() => setToggle3(!toggle3)} />
          </WorkBoxTop>
          {toggle3 && (
            <WorkBoxBottom>
              <ContentBox>Test</ContentBox>
              <ContentBox>Test</ContentBox>
              <ContentBox>Test</ContentBox>
            </WorkBoxBottom>
          )}
          <Footer />
        </div>
      </WorkBoxWhole>
    </>
  );
}

export default WorkPage;
