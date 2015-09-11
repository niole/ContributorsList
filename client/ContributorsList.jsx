ContributorsList = React.createClass({
  propTypes: {
    contributors: React.PropTypes.array.isRequired
  },
  getUniqueCs(cs) {
    let uniqueCs = {};
    let flattenedCs = [];
    //returned array --> [{ amount: number, firstName: string, lastName: string, photo: string}]
    _.forEach(cs, c => {
      if (uniqueCs[c.contributor.id]) {
        uniqueCs[c.contributor.id].push(c);
      } else {
        uniqueCs[c.contributor.id] = [c];
      }
    });

   for (var id in uniqueCs) {
      let aggContribs = {};
      _.forEach(uniqueCs[id], c => {
        if (aggContribs.amount) {
          //add to amount
          aggContribs.amount += c.amount;
        } else {
          //created first object
          aggContribs.amount = c.amount;
          aggContribs.firstName = c.contributor.firstName;
          aggContribs.lastName = c.contributor.lastName;
          aggContribs.photo = c.contributor.photo;
        }
      });
    flattenedCs.push(aggContribs);
   }
  return flattenedCs;
  },
  displayContributors(cs) {
    const imgStyle = {height: "auto", width:"auto", display: "block"};
    if (cs.length > 0) {
      let contribs = this.getUniqueCs(cs);
      let contributors = [];
      _.forEach(contribs, (C,i) => {
                if (i<6) {
                  contributors.push(
                        <div className="col-sm-2 col-md-2">
                          <div className="thumbnail">
                            <img src={C.photo} style={imgStyle}/>
                            <div className="caption">
                              <p>{C.firstName+" "}{C.lastName}</p>
                              net contribution: <p>{C.amount}</p>
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
      contributors.push(
              <div className="col-sm-2 col-md-2 navbar-left">
                  <div className="thumbnail">
                    <a href='/'>
                      <img className="prof-image" src="http://cdn3.rd.io/user/no-user-image-square.jpg"/>
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
            {this.displayContributors(this.props.contributors)}
          </div>
        </nav>

      </span>
    );
  }
});
