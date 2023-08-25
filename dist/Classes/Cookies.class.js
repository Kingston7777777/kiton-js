"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cookies {
    static setCookie(name, value, daysTolive) {
        const date = new Date();
        if (typeof daysTolive == "number") {
            date.setTime(date.getTime() * daysTolive * 24 * 60 * 60 * 1000);
            let expires = "expires=" + date.toUTCString();
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        }
        return -1;
    }
    static getCookie(name) {
        Cookies.setCookie(name, null, null);
    }
    static deleteCookie(name) {
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ");
        let result = null;
        cArray.forEach(element => {
            if (element.indexOf(name) == 0) {
                result = element.substring(name.length + 1);
            }
        });
        return result;
    }
}
exports.default = Cookies;
//# sourceMappingURL=Cookies.class.js.map