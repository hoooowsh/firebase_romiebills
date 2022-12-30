const db = require("../configs/firebase_config");
const ResponseBody = require("../Utils/respBody");
const ServerError = require("../Utils/serverError");
const ErrorBody = require("../Utils/errorResp");

/**get user function */
async function get_user(req, res) {
  const user_id = req.body.user_id;
}

/**get user function */
async function create_user(req, res) {
  const user_id = req.body.user_id;
  db.collection("users")
    .add({
      email: "test@gmail",
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      console.log("You can now also access this. as expected: ");
      const status = 200;
      const resp = new ResponseBody(
        200,
        200,
        "Success: create user successful~",
        true
      );
      res.status(status).send(resp);
    })
    .catch((error) => console.error("Error adding document: ", error));
}

module.exports = {
  get_user,
  create_user,
};
