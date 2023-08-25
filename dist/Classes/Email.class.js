"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const python_shell_1 = require("python-shell");
class Email {
    static sendEmail(senderEmail, senderPassword, subject, body, receiverEmail, senderName, receiverName) {
        try {
            const option = {
                scriptPath: "C:/Users/KINGSLEY/Documents/GitHub/kiton-js/python-src",
                pythonOptions: ['-u'],
                args: [senderEmail, senderPassword, subject, body, receiverEmail, senderName, receiverName]
            };
            python_shell_1.PythonShell.run("Email.py", option).then(result => {
                if (result) {
                    console.log("Successful");
                    return;
                }
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }
}
exports.default = Email;
//# sourceMappingURL=Email.class.js.map