const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    var staff = new Manager("Rednir", 1, "rednir@email.com", 613-613-1111)
    expect(staff.name).toEqual(expect.any(String))
    expect(staff.id).toEqual(expect.any(Number))
    expect(staff.email).toEqual(expect.any(String))
    expect(staff.id).toEqual(expect.any(Number))
});