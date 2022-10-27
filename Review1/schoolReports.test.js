const SchoolReport = require('./schoolReports')

describe("School Report", () => {
    // it("Returns entire string", () => {
    //     const report = new SchoolReport
    //     expect(report.showString()).toBe('Green, Amber, Amber, Red')
    // })

    it("Returns first value in given string", () => {
        const report = new SchoolReport
        expect(report.splitString()).toBe('Green Amber Amber Red')
    })
})