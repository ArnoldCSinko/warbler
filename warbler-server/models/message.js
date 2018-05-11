const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true, maxlength: 160 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

messageSchema.pre("remove", async function (next) {
    try {
        // Find a User by id
        let user = await User.findById(this.userId);
        // Remove the message with given id from User's message list
        user.messages.remove(this.id);
        // Save User
        await user.save();
        // return next
        return next();
    } catch (err) {
        return next(err);
    }
});

module.exports = mongoose.model("Message", messageSchema);
 