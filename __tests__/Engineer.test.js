const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    var staff = new Engineer("Rednir", 1, "rednir@email.com", "valerrianna")
    expect(staff.name).toEqual(expect.any(String))
    expect(staff.id).toEqual(expect.any(Number))
    expect(staff.email).toEqual(expect.any(String))
    expect(staff.email).toEqual(expect.any(String))
});