import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { saveRepos } from "../actions/repos";

class Mine extends React.Component {
  
  getMyRepos = () => {
    fetch("https://api.github.com/users/fjoder/repos")
      .then(response => response.json())
      .then(data => {
        this.props.dispatch(saveRepos(data));
      });
  };

  createListItems = () => {
    // this.props.repos.map((r, index) => {
    //   <li key={index}><a href={r.html_url}>{r.name}</a></li>
    // });
  };

  render() {
    return (
      <div className="container">
        <Header title="Mine" subTitle="My list of repositories on GitHub" />
        <button
        onClick={this.getMyRepos}>Load Repos
        </button>
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
