"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { Modal, Button, styled, CircularProgress, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#3B7A9E",
  color: "white",
  borderRadius: "32px",
  width: "120px",
  margin: "0 8px",
  fontFamily: theme.typography.textFont,
  fontWeight: 600,
  ":hover": {
    color: "white",
    backgroundColor: "#3B7A9E",
  },
  position: "absolute",
  top: "92%",
  left: "50px",
}));

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});

const ResumeModal = ({ open, setOpen, resume }) => {
  const [scope, animate] = useAnimate();
  const onDocumentLoadSuccess = () => {
    animate(scope.current, { translateY: "100vh" }, { ease: "linear", duration: 0.2 });
  };
  const closeModal = () => {
    animate(scope.current, { translateY: "0vh" }, { ease: "linear", duration: 0.2 }).then(() => {
      setOpen(false);
    });
  };

  const Loading = () => {
    <>
      <CircularProgress />
    </>;
  };

  return (
    <>
      <StyledModal open={open} onClose={() => closeModal()}>
        <motion.div ref={scope}>
          <div className="flex justify-center items-center bottom-[100vh] relative bg-white rounded-xl p-4">
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} loading={Loading}>
              <Page key={`page_1`} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
            <a href={resume} download="ZAllenResume" target="_blank">
              <DownloadButton>
                Download
                <DownloadIcon sx={{ color: "white", paddingLeft: "5px" }} />
              </DownloadButton>
            </a>

            <CloseButton onClick={() => closeModal()}>
              <CloseIcon sx={{ color: "gray" }} />
            </CloseButton>
          </div>
        </motion.div>
      </StyledModal>
    </>
  );
};

export default ResumeModal;
