App = React.createClass({
  getInitialState() {
    return {
            CL: [{ firstName: "Carl", lastName: "Jung", photo:"http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2MjY4NjkzMDAz.jpg"},
                { firstName: "Jordan", lastName: "Salinger", photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAN3AAAAJDNiMmJkZDMyLTBjNDAtNDExZi1hMjE1LTQ5ZjE3ZDQ0OTFhNg.jpg"},
                { firstName: "Mark", lastName: "Spencer", photo:"https://pbs.twimg.com/profile_images/16706532/marknew_400x400.jpg"}],
            empty: []
           };
  },
  render() {
    return <ContributorsList
            contributors={this.state.CL}
            />;
  }
});
