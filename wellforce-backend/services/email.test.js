const EmailService = require("./email")
const { SENDGRID_API_KEY, EMAIL_SERVICE_ACTIVE } = require("../config");

const emailService = new EmailService({
  isActive: EMAIL_SERVICE_ACTIVE,
  apiKey: SENDGRID_API_KEY,
});

describe("Test EmailService", () => {
    test("Store is active config flag and nodemailer transport on instance", ()=> {
        expect(emailService).toHaveProperty("isActive")
        expect(emailService).toHaveProperty("transport")
    })

    test("Is inactive when testing", () => {
        expect(emailService.isActive).toBeFalsy()
        expect(emailService.transport).toBeTruthy()
    })

    describe("Test sendEmail", ()=> {
        test ("Returns 202 status code when all goes well", async () => {
            const email = {
                to: `abdirahman.2017792@gmail.com`,
                from: `rate.my.setup.app@gmail.com`,
                subject: `test subject email sending things`,
                html: `<h1>Test email </h1>`
            }
            const res = await emailService.sendEmail(email)
            expect(res).toEqual({status: 202, email, error: null})
        })
        test ("Returns 400 status code when all goes well", async () => {
            const email = {}
            const res = await emailService.sendEmail(email)
            expect(res).toEqual({status: 400, email, error: [{field: `to`, message: "Missing to field."}]})
        })
    })
})