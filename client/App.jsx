App = React.createClass({
  getInitialState() {
    return {
          startInd: 0,
          contributions: [
            { amount: 100, contributor: { id: 2, firstName: "Carl", lastName: "Spencer", photo: "http://www.expressandstar.com/wpmvc/wp/wp-content/uploads/2012/01/WD4178673@Carl-Spencer-.thumb.jpg" } },
            { amount: 700, contributor: { id: 9, firstName: "Jack", lastName: "Bauer", photo: "http://www.wheresourmoney.org/archive/wp-content/uploads/2010/01/jack-bauer.jpg" } },
            { amount: 200, contributor: { id: 2, firstName: "Carl", lastName: "Spencer", photo: "http://www.expressandstar.com/wpmvc/wp/wp-content/uploads/2012/01/WD4178673@Carl-Spencer-.thumb.jpg"} }
          ]
           };
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {contributions: Conts.find({"contributor.id": {$gte: this.state.startInd, $lte: this.state.startInd+6}}).fetch()};
  },
  render() {
    return <ContributorsList
            contributors={this.data.contributions}
            />;
  }
});
