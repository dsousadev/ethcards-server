const handleIpn = (req, res) => {
    console.log("REQUEST RECEIVED");
    console.log(req);
    res.end();
}

module.exports = {
    handleIpn
}