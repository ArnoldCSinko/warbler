require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const errorHandler = require("./handlers/error");
const PORT = 8081;
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const allMessagesRoute = require("./routes/allMessages");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth")

app.use(cors());
app.use(json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages",
    loginRequired,
    ensureCorrectUser,
    messagesRoutes
);

app.use("/api/messages", loginRequired, allMessagesRoute);

// ROUTES NOT REACHED
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
