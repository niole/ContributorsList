ContributorsList = React.createClass({
  propTypes: {
    contributors: React.PropTypes.array.isRequired
  },
  displayContributors() {
    if (this.props.contributors.length > 0) {
          let contributors = [];
          _.forEach(this.props.contributors, (C,i) => {
            if (i<6) {
              contributors.push(
                <div className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src={C.photo}/>
                    <div className="caption">
                      <p>{C.firstName+" "}{C.lastName}</p>
                    </div>
                  </div>
                </div>
              );
          }
         });

        return (
               <div className="row">
                {contributors}
               </div>
               );
    } else {
      return (
              <div className="col-sm-2 col-md-2 navbar-left">
                  <div className="thumbnail">
                    <a href='/'>
                      <img src="http://cdn3.rd.io/user/no-user-image-square.jpg"/>
                    </a>
                    <div className="caption">
                        <p>invite contributors!</p>
                    </div>
                  </div>
              </div>
            );
    }
  },
  render() {
    return (
      <span>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {this.displayContributors()}
          </div>
        </nav>

      </span>
    );
  }
});
