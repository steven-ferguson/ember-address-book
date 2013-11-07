AddressBook.Contact = DS.Model.extend({
  name: DS.attr('string'),
  phones: DS.hasMany('phone')
});
