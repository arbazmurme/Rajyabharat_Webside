"use client";
import React from "react";
import { Button, Drawer } from "antd";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { TfiShare } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ShareThisStory = ({ showShareModal, setshowShareModal }) => {
  const showDrawer = () => {
    setshowShareModal(true);
  };

  const onClose = () => {
    setshowShareModal(false);
  };

  return (
    <>
      {/* Share Button */}
      <span onClick={showDrawer}>
        <TfiShare className="icon extar_icon" size={24} />
      </span>

      {/* Bottom Drawer */}
      <Drawer
        placement="bottom"
        onClose={onClose}
        open={showShareModal}
        height={320}
        closable={false}
        className="p-4"
      >
        <Button
          type="text"
          className="btn-close"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "24px",
          }}
          onClick={onClose}
          icon={<AiOutlineCloseCircle />}
        ></Button>

        {/* Title */}
        <h5 className=" text-center fw-bold text-dark">🔗 Share This Story</h5>

        {/* Social Media Buttons (Each on a New Row) */}
        <div className="d-flex flex-column align-items-center">
          <a
            href="https://wa.me/?text=Check this out!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success w-100 d-flex align-items-center justify-content-center shadow-sm px-4 my-1 py-2 rounded-pill"
          >
            <FaWhatsapp size={20} className="me-2 mr-2" /> WhatsApp
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center shadow-sm px-4 py-2 my-1 rounded-pill"
          >
            <FaFacebook size={20} className="me-2 mr-2" /> Facebook
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Check this out!&url=https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info text-white w-100 d-flex align-items-center justify-content-center shadow-sm my-1 px-4 py-2 rounded-pill"
          >
            <FaTwitter size={20} className="me-2 mr-4" /> Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-100 d-flex align-items-center justify-content-center shadow-sm px-4 py-2 rounded-pill"
          >
            <FaLinkedin size={20} className="me-2 mr-2" /> LinkedIn
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default ShareThisStory;
