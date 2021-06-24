import React from "react";
import '../App.css'

import { PageHeader } from "antd";
import { YoutubeFilled, TwitterOutlined } from "@ant-design/icons";
import { SignOut } from "./AuthButton";

const Header = () => (
  <header>
    <PageHeader
      title="Gem Chat App (0.0.1 beta-4)"
      extra={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "110%",
          }}
        >
          <a
            href="https://www.youtube.com/c/TheGemDev?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeFilled style={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://twitter.com/TheGemDev"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterOutlined style={{ fontSize: "40px" }} />
          </a>
          <SignOut />
        </div>
      }
    />
  
  </header>
);

export default Header;
