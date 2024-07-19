import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // console.log(this.props.name + "child constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "child mount");
  }

  render() {
    // console.log(this.props.name + "child render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Place: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
