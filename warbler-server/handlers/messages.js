const { User, Message } = require("../models");

exports.createMessage = async function (req, res, next) {

    try {
        let message = await Message.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser = await User.findById(req.params.id);
        foundUser.messages.push(message.id);
        await foundUser.save();
        let foundMessage = await Message.findById(message.id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundMessage);
    } catch (err) {
        return next(err);
    }
};

exports.getMessage = async function (req, res, next) {
    try {
        let message = await Message.findById(req.params.message._id);
        return res.status(200).json(message);
    } catch (err) {
        return next(err);
    }
};

exports.getAllMessages = async function (req, res, next) {
    try {
        let messages = await Message.find()
            .sort({ createdAt: "desc" })
            .populate("user", {
                username: true,
                profileImageUrl: true
            });
        return res.status(200).json(messages);
    } catch (err) {
        return next(err);
    }
}

exports.deleteMessage = async function (req, res, next) {           
    try {        
        let message = await Message.findById(req.params.message_id);       
        await message.remove();
        return res.status(200).json(message);
    } catch (err) {
        return next(err);
    }
};