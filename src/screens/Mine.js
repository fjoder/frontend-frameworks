import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { saveRepos } from "../actions/AppActions";

class Mine extends React.Component {
  state = {
  };

  getMyRepos = () => {
    fetch("https://api.github.com/users/fjoder/repos")
      .then(response => response.json())
      .then(respJson => {
        this.props.dispatch(saveRepos(respJson.items));
      });
  };

  createListItems = () => {
    this.props.repos.map((r, index) => {
      <li key={index}><a href={r.html_url}>{r.name}</a></li>
    });
  };

  render() {
    return (
      <div className="container">
        <Header title="Mine" />
        <hr />
        <button
        onClick={this.getMyRepos()}>Load Repos
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
