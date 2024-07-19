import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor")
  }

  componentDidMount() {
    console.log("parent mount");
  }

  render() {
    console.log("parent render")
    return (
      <div>
        <h1>Welcome to About page</h1>
        <UserClass name={"First (class)"} location={"location"} />
        <UserClass name={"Second (class)"} location={"location"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>Welcome to About page</h1>
//       {/* <User name={"Kevin (function)"} location={"Manjoor"}/> */}

//       <UserClass name={"Abhinav (class)"} location={"Thrisur"}/>
//     </div>
//   );
// };

export default About;
