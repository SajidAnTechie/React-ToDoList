const router = require("express").Router();
const {
  getAllcontacts,
  getcontact,
  createcontact,
  deletecontact,
  updatecontact,
} = require("../controller/contact");

router.route("/").get(getAllcontacts);
router.route("/post").post(createcontact);
router.route("/:id").get(getcontact);
router.route("/delete/:id").delete(deletecontact);
router.route("/update/:id").put(updatecontact);

module.exports = router;
