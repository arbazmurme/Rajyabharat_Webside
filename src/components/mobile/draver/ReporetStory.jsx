import React from "react";
import { Button, Drawer } from "antd";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBookmark, FaDownload } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const ReportStory = ({ isOpen, setIsOpen }) => {
  const showDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <span onClick={showDrawer}>
        <CiMenuKebab className="icon" style={{ paddingRight: "5px" }} />
      </span>
      <Drawer
        placement="bottom"
        onClose={onClose}
        open={isOpen}
        height={200}
        closable={false}
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
        >
        </Button>

        <div className="d-flex flex-column align-items-start pt-4">
          <Button
            type="primary"
            ghost
            className="mb-2"
            style={{ width: "100%" }}
          >
            <MdReportProblem className="me-2" />
            Report Story
          </Button>
          <Button
            type="primary"
            ghost
            className="mb-2"
            style={{ width: "100%" }}
          >
            <FaDownload className="me-2" />
            Download
          </Button>
          <Button
            type="primary"
            ghost
            className="mb-2"
            style={{ width: "100%" }}
          >
            <FaBookmark className="me-2" />
            Bookmark
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default ReportStory;
