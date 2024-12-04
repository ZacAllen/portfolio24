"use client";

import { useContext, useState, useEffect, useRef, useLayoutEffect } from "react";
import { MarginContext } from "@/utils/helpers/MarginContext";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import { validateFields } from "@/utils/helpers/contact";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Typography, Button, Box, TextField, IconButton, styled, useTheme } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Field = styled(TextField)(({ theme }) => ({}));

const Contact = () => {
  const { isDarkMode, textColor, lighttext, darktext } = useContext(DarkModeContext);

  const Title = styled(Typography)(({ theme }) => ({
    color: textColor,
    fontFamily: theme.typography.mainFont,
    fontSize: "4rem",
  }));

  const ContactText = styled(Typography)(({ theme }) => ({
    color: textColor,
    fontFamily: theme.typography.textFont,
    fontSize: "2rem",
  }));

  const InputText = styled("p")(({ theme }) => ({
    color: textColor,
    fontFamily: theme.typography.textFont,
    fontSize: "1rem",
  }));

  const FormBox = styled(Box)(({ theme }) => ({
    "& .MuiTextField-root": {
      width: "75%",
      "& .MuiInputBase-root": {
        backgroundColor: `${textColor}0D`,
        color: textColor,
      },

      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: textColor,
        },
        "&:hover fieldset": {
          borderColor: textColor,
        },
        "&.Mui-focused fieldset": {
          borderColor: textColor,
        },
      },
    },
    "& .mui-cgzel9-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      background: "transparent",
    },
  }));

  const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: textColor,
    color: isDarkMode ? darktext : lighttext,
    borderRadius: "32px",
    width: "120px",
    margin: "1rem",
    fontFamily: theme.typography.textFont,
    fontWeight: 600,
    ":hover": {
      color: isDarkMode ? darktext : lighttext,
      backgroundColor: textColor,
    },
  }));

  const theme = useTheme();
  const [margins, setMargins] = useContext(MarginContext);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setMargins({ edges: 2, center: 8 });
    setIsLoading(false);
  }, []);

  const formPlaceHolderStyles = {
    color: textColor,
    fontFamily: theme.typography.textFont,
    fontSize: "1.2rem",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.elements["from_name"].value;
    const email = e.target.elements["reply_to"].value;
    const message = e.target.elements["message"].value;
    const { errormsg, status } = validateFields({ name, email, message });
    if (!status) {
      Swal.fire({
        width: "400px",
        text: errormsg,
        confirmButtonText: "Ok",
        confirmButtonColor: theme.palette.primary.main,
        backdrop: `rgba(76, 240, 109, 0.1)`,
      });
    } else {
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID,
        })
        .then(
          () => {
            Swal.fire({
              width: "400px",
              text: "Message sent!",
              confirmButtonText: "Ok",
              confirmButtonColor: theme.palette.primary.main,
              backdrop: `rgba(76, 240, 109, 0.1)`,
            });
          },
          (error) => {
            console.error("Failed to send email, ", error.text);
          }
        );
    }
  };

  return (
    <>
      {/* Importing font for swal styling */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&family=Londrina+Solid:wght@100;300;400;900&display=swap"
        rel="stylesheet"
      />
      <div className="w-full h-screen">
        <Title className="w-full flex justify-center pt-12">Get In Touch</Title>
        {!isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-12 gap-4 mt-12">
              <div className="col-span-6">
                <div className="mt-4">
                  <ContactText>Interested in working together?</ContactText>
                  <ContactText>Send me a message and let's connect!</ContactText>
                </div>
                <div style={{ padding: "5%" }}></div>
                <div className="mt-4">
                  <ContactText className="!mb-4">Or, find me on LinkedIn!</ContactText>
                  <IconButton
                    target="_blank"
                    href="https://www.linkedin.com/in/zachsallen/"
                    disableFocusRipple
                    disableRipple
                    sx={{ padding: "0 16px 0 0" }}
                  >
                    <LinkedIn sx={{ fontSize: "36px", color: textColor }} />
                  </IconButton>
                  <IconButton
                    href="https://github.com/ZacAllen"
                    target="_blank"
                    disableFocusRipple
                    disableRipple
                    sx={{ padding: "0 16px 0 0" }}
                  >
                    <GitHub sx={{ fontSize: "36px", color: textColor }} />
                  </IconButton>
                </div>
              </div>
              <div className="col-span-6">
                <FormBox ref={form} component="form" noValidate autoComplete="off" onSubmit={sendEmail}>
                  <div>
                    <InputText>Full Name</InputText>
                    <Field
                      InputLabelProps={{
                        style: formPlaceHolderStyles,
                      }}
                      required
                      id="outlined-required"
                      label="Required"
                      placeholder="Your name"
                      name="from_name"
                    ></Field>
                  </div>
                  <div>
                    <InputText>Email Address</InputText>
                    <Field
                      InputLabelProps={{
                        style: formPlaceHolderStyles,
                      }}
                      required
                      id="outlined-required"
                      label="Required"
                      placeholder="Email"
                      name="reply_to"
                    ></Field>
                  </div>
                  <div>
                    <InputText>Message</InputText>
                    <Field
                      InputLabelProps={{
                        style: formPlaceHolderStyles,
                      }}
                      multiline={true}
                      rows={6}
                      required
                      id="outlined-required"
                      label="Required"
                      placeholder=""
                      name="message"
                    ></Field>
                  </div>
                  <SubmitButton type="submit">Submit</SubmitButton>
                </FormBox>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Contact;
