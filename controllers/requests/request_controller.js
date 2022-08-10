const Request = require("../../models/requests/request");
// const Users = require("../../models/users/users");

const controller = {
    newRequest: (req, res) => {
        res.render("requests/request");
    },

    // create a new item request
    createRequest: async (req, res) => {
        const requestData = req.body;

        console.log("requestData.username: ", requestData.username);
        console.log("requestData: ", requestData);

        const newItemRequest = await Request.create({
            ...requestData,
            user: req.session.user.id,
        });
        res.redirect("/");
    },

    showUpdateRequestForm: (req, res) => {
        res.render("requests/update");
    },

    update: async (req, res) => {
        console.log("req.session: ", req.session);

        const editItemRequest = await Request.findByIdAndUpdate();
        res.redirect("/");
    },

    delete: async (req, res) => {
        const delItemRequest = await Request.findByIdAndDelete();
        res.redirect("/");
    },
};

module.exports = controller;
