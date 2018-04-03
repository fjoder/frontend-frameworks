import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { saveRepos } from "../actions/repos";

class Mine extends React.Component {
  
  getMyRepos = () => {
    fetch("https://api.github.com/users/fjoder/repos")
      .then(response => response.json())
      .then(respJson => {
        this.props.dispatch(saveRepos(respJson.items));
      });
  };

  createListItems = () => {
    // this.props.repos.map((r, index) => {
    //   <li key={index}><a href={r.html_url}>{r.name}</a></li>
    // });
  };

  handleClick = e => {
    this.getMyRepos();
  };

  render() {
    return (
      <div className="container">
        <Header title="Mine" />
        <button
        onClick={this.handleClick}>Load Repos
        </button>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

export default connect(mapStateToProps)(Mine);
