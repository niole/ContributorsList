App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {contributions: Conts.find(
                            {"contributor.id": {$gte: this.state.startInd,
                              $lte: this.state.startInd+6 }}
                                     ).fetch().sort(
                            function(a,b) { return a.contributor.id - b.contributor.id; } ),
            maxInd: this.biggest.length > 0 ? this.biggest[0].contributor.id : this.biggest

            };
  },
  getInitialState() {
    this.biggest = Conts.find({}, {limit: 1, sort: {"contributor.id": -1}}).fetch();
    return { startInd: 0};

  },
  componentDidMount() {

    $('#contributor-list').bind('mousewheel', function(event){
      event.preventDefault();
      this.getNewData(event.originalEvent.wheelDeltaX);
    }.bind(this));
  },
  render() {
    return <ContributorsList
            contributors={this.data.contributions}
            startInd={this.state.startInd}
            />;
  },
  getNewData(dir) {
    if ( dir < 0) {
      this.setState({startInd:
                      (this.state.startInd <= this.data.maxInd-6) ?
                       this.state.startInd+1 : this.state.startInd });
    }
    if ( dir > 0) {
      this.setState({startInd: (this.state.startInd-1 > -1) ? this.state.startInd-1 : 0});
    }
  }
});
