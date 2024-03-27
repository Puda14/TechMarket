const userService = require("../services/UserService");

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        if (!req.body || !req.body.email) {
            throw new Error("Email is required.");
        }
        const user = await userService.createUser(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};