const controller = require("../controllers/bookQueue.controller");

module.exports = function (app){
    app.get("/getqueue", controller.getQueue)
    app.get("/getLastQueue", controller.getLastQueue)

    app.post("/BookQueue", controller.BookQueue);
};