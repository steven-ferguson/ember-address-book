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

describe("Deleting a contact", function() {
  it("deletes a contact", function() {
    create('contact')
    .then(function(contact) {
      visit('/contacts/' + contact.id)
      .then(function() {
        click('#delete')
        .then(function() {
          find('.side-nav li').length.should.equal(1);
        });
      });
    });
  });
});