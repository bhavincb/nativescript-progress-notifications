var ProgressNotification = require("nativescript-progress-notification").ProgressNotification;
var progressNotification = new ProgressNotification();

describe("greet function", function() {
    it("exists", function() {
        expect(progressNotification.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(progressNotification.greet()).toEqual("Hello, NS");
    });
});