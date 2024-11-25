export const validateFields = ({ name, email, message }) => {
  let errormsg = "";
  let status = true;
  console.log("*** Stuff", name, email, message);
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
