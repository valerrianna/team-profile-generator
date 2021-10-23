const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    var staff = new Intern("Rednir", 1, "rednir@email.com", "OttawaU")
    expect(staff.name).toEqual(expect.any(String))
    expect(staff.id).toEqual(expect.any(Number))
    expect(staff.email).toEqual(expect.any(String))
    expect(staff.email).toEqual(expect.any(String))
});