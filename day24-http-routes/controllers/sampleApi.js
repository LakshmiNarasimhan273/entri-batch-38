const getMessage = (req, res) => {
    res.send("Welcome User");
}

const sendMessage = (req, res) => {
    res.send("User Created");
}

const editMessage = (req, res) => {
    res.send("User updated");
}

const deleteMessage = (req, res) => {
    res.send("User Deleted");
}

// export default getMessage
module.exports = { getMessage, sendMessage, editMessage, deleteMessage };