Meteor.startup(function() {
  if (Conts.find({}).fetch().length === 0) {
    _.map(_.range(20), function(n) {
      Conts.insert(
      { amount: 700, contributor: { id: n, firstName: n, lastName: "Bauer", photo: "http://www.wheresourmoney.org/archive/wp-content/uploads/2010/01/jack-bauer.jpg" } }
      );
    });
  }
});
