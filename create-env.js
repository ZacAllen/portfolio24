const fs = require("fs");
const path = `./.env`;
const vars = `
NEXT_PUBLIC_EMAILJS_SERVICE_ID=${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}\n
NEXT_PUBLIC_EMAILJS_TEMPLATE_IDD=${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}\n
NEXT_PUBLIC_EMAIL_JS_USER_ID=${process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID}
`;
fs.writeFileSync(path, vars);
