const ApprovalController = require("./ApprovalController")
// @ponicode
describe("ApprovalController.store", () => {
    test("0", async () => {
        let object = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot", "https://twitter.com/path?abc"], ["https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/", "Www.GooGle.com"], ["ponicode.com", "http://www.example.com/route/123?foo=bar", "https://accounts.google.com/o/oauth2/revoke?token=%s"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, false, false], io: { to: () => "./path/to/file" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("1", async () => {
        let object = [["https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/bot", "http://www.croplands.org/account/confirm?t="], ["www.google.com", "http://base.com", "https://api.telegram.org/bot"], ["http://www.example.com/route/123?foo=bar", "ponicode.com", "https://twitter.com/path?abc"]]
        await ApprovalController.store({ params: object, connectedUsers: [true, true, true], io: { to: () => "C:\\\\path\\to\\file.ext" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("2", async () => {
        let object = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["ponicode.com", "Www.GooGle.com", "www.google.com"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "ponicode.com", "ponicode.com"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, false, true], io: { to: () => "./path/to/file" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("3", async () => {
        let object = [["https://api.telegram.org/", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://twitter.com/path?abc"], ["https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc", "https://croplands.org/app/a/reset?token="], ["http://www.example.com/route/123?foo=bar", "https://twitter.com/path?abc", "Www.GooGle.com"]]
        await ApprovalController.store({ params: object, connectedUsers: [true, true, true], io: { to: () => "C:\\\\path\\to\\file.ext" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("4", async () => {
        let object = [["http://www.example.com/route/123?foo=bar", "http://www.croplands.org/account/confirm?t=", "http://www.croplands.org/account/confirm?t="], ["http://base.com", "http://base.com", "http://base.com"], ["https://croplands.org/app/a/reset?token=", "www.google.com", "https://"]]
        await ApprovalController.store({ params: object, connectedUsers: [true, false, true], io: { to: () => "C:\\\\path\\to\\folder\\" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("5", async () => {
        await ApprovalController.store(undefined, undefined)
    })
})
