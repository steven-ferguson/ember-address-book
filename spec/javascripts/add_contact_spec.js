//=require spec_helper


describe("Adding a contact", function() {
  it("should successfully create a contact", function() {  
    visit('/contacts').then(function() {
      click('#new-contact').then(function() {
        fillIn('#new-contact-name', 'Ricky Bobby')
        .click('.submit')
        .then(function() {
          find('.contact').text().should.equal('Ricky Bobby');
        });
      });
    });
  });
});