import theme from "@/theme";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const validateFields = ({ name, email, message }) => {
  let errormsg = "";
  let status = true;
  if (!/\S/.test(name) || !/\S/.test(email) || !/\S/.test(message)) {
    //if any fields empty
    errormsg = "Please fill in all fields.";
    status = false;
  } else if (!/@/.test(email)) {
    errormsg = "Please include a valid email address.";
    status = false;
  }
  return { errormsg, status };
};

export const sendEmail = (e, form) => {
  e.preventDefault();
  const isMobile = window.innerWidth < 640;
  const name = e.target.elements["from_name"].value;
  const email = e.target.elements["reply_to"].value;
  const message = e.target.elements["message"].value;
  const { errormsg, status } = validateFields({ name, email, message });
  if (!status) {
    Swal.fire({
      width: isMobile ? "280px" : "400px",
      text: errormsg,
      confirmButtonText: "Ok",
      confirmButtonColor: theme.palette.primary.main,
      backdrop: `rgba(76, 240, 109, 0.1)`,
    });
  } else {
    console.log(
      "*** Ok",
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
    );
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID,
      })
      .then(
        () => {
          Swal.fire({
            width: isMobile ? "280px" : "400px",
            text: "Message sent!",
            confirmButtonText: "Ok",
            confirmButtonColor: theme.palette.primary.main,
            backdrop: `rgba(76, 240, 109, 0.1)`,
          });
        },
        (error) => {
          console.error("Failed to send email, ", error);
        }
      );
  }
};
