const controller = require("../controllers/users");
const validateToken = require("../utils").validateToken;

module.exports = router => {
  router
    .route("/users")
    .get(validateToken, controller.getAll)
    .post(controller.add);
  router.route("/login").post(controller.login);
};
