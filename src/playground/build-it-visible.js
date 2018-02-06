class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAppDetails = this.toggleAppDetails.bind(this);
    this.state = {
      visibility: false
    };
  }

  toggleAppDetails() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Build it visible</h1>
      <button onClick={this.toggleAppDetails}>{!this.state.visibility ? 'Show details' : 'Hide Details'}</button>
        <p hidden={!this.state.visibility}>Showing some details</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   'title': 'Build it Visible',
//   'details': 'Showing some details'
// };
//
// let hideAppDetails = true;
//
// const toggleAppDetails = () => {
//   hideAppDetails = !hideAppDetails;
//   render();
// };
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleAppDetails}>{hideAppDetails ? 'Show details' : 'Hide Details'}</button>
//       <p hidden={hideAppDetails}>{app.details}</p>
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// render();
