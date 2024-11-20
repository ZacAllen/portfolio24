"use client";

import { Typography, Box, TextField, styled } from "@mui/material";

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

const InputText = styled("p")(({ theme }) => ({
  color: "white",
  fontFamily: theme.typography.textFont,
  fontSize: "1rem",
}));

const FormBox = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": {
    m: 1,
    width: "50%",
  },
}));

const Field = styled(TextField)(({ theme }) => ({}));

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
          <div className="col-span-6">
            <FormBox component="form" noValidate autoComplete="off">
              <div>
                <InputText>Full Name</InputText>
                <Field required id="outlined-required" label="Required" placeholder="Your name"></Field>
              </div>
              <div>
                <InputText>Email Address</InputText>
                <Field required id="outlined-required" label="Required" placeholder="email"></Field>
              </div>
              <div>
                <InputText>Message</InputText>
                <Field required id="outlined-required" label="Required" placeholder=""></Field>
              </div>
            </FormBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
