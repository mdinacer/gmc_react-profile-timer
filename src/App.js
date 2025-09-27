import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate web developer.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      show: false,
      secondsSinceMount: 0,
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, secondsSinceMount } = this.state;
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div style={{ marginTop: "20px" }}>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          <p>Time since component mounted: {secondsSinceMount} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
