const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    var staff = new Employee("Rednir", 1, "rednir@email.com")
    expect(staff.name).toEqual(expect.any(String))
    expect(staff.id).toEqual(expect.any(Number))
    expect(staff.email).toEqual(expect.any(String))
});