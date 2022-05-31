const router = require("express").Router();
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

//Add message
router.post("/", async (req, res) => {
    const message = new Message(req.body);
    try {
        const savedMessage = await message.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get message
router.get("/:conversationId", async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId:req.params.conversationId,
        });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
