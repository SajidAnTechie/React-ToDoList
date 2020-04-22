const Contact = require("../model/contact");

exports.getAllcontacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length === 0) {
      res.status(400).json({ Nocontacterror: "No Contacts" });
    } else {
      res.status(200).json({
        success: true,
        data: contacts,
      });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.createcontact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getcontact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(400).json({ contactNotfounderror: "Contact Not found" });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletecontact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res
        .status(400)
        .json({ contactalredydeletederror: "Contact is alredy deleted" });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatecontact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
