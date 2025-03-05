"use client";
import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { TfiCommentAlt } from "react-icons/tfi";

const CommentSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)}>
        <TfiCommentAlt className="icon" />
      </span>
      <Drawer
        title="Full Screen Drawer"
        placement="bottom"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
        height="100vh"
      >
        <p>Content inside the drawer...</p>
      </Drawer>
    </>
  );
};

export default CommentSection;
