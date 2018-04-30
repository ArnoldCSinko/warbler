const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxlength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

messageSchema.pre("remove", async function (next) {
    try {
        // Find a User
        let user = await User.findById(this.user);
        // Remove the message with given id from User's message list
        user.messages.remove(this.message);
        // Save User
        await user.save();
        // return next
        return next();
    } catch (err) {
        return next(err);
    }
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;