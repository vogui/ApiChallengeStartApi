const superAdmin = {
  name: "Guillermo",
  password: "GoJiraf",
};

const error = {
  server: { code: 500, error: { status: false, message: "Server error" } },
  unauthorized: { code: 403, error: { status: false, message: "Unauthorized" }},
};


module.exports = { superAdmin, error };
