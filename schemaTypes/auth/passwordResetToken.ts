export default {
  name: "passwordResetToken",
  type: "document",
  fields: [
    { name: "email", type: "string" },
    { name: "token", type: "string" },
    { name: "expires", type: "datetime" },
  ],
};
