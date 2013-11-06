AddressBook.Contact = DS.Model.extend({
  name: DS.attr('string')
});

AddressBook.Contact.FIXTURES = [
  {
    id: 1,
    name: 'Bobby'
  },
  {
    id: 2,
    name: 'Mac'
  },
  {
    id: 3,
    name: 'Reggie'
  }
];