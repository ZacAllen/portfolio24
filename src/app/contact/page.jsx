"use client";

import { Typography, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: theme.typography.mainFont,
  fontSize: "4rem",
}));

const ContactText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: theme.typography.textFont,
  fontSize: "2rem",
}));

const Contact = () => {
  const bruh = [];
  return (
    <>
      <div className="w-full h-screen">
        <Title className="w-full flex justify-center pt-12">Get In Touch</Title>
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-6">
            <ContactText>
              Interested in working together? <br></br> Have some cool project ideas?
            </ContactText>
            <ContactText>Lorem ipsum</ContactText>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
