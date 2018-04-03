import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { saveRepos } from "../actions/repos";
import { reposSelector } from "../selectors/repos";

class Mine extends React.Component {
  state = {
    listItems: []
  };
  
  getMyRepos = () => {
    fetch("https://api.github.com/users/fjoder/repos")
      .then(response => response.json())
      .then(data => {
        this.props.dispatch(saveRepos(data));
        this.setState({ listItems: this.createList() });
      });
  };

  createList = () => {
    let list = [];
    for (const r of this.props.repos) {
      const item = (
        <li key={r.id}><a href={r.html_url}>{r.name}</a></li>
      )
      list.push(item);
    };

    return list;
  };

  render() {
    return (
      <div className="container">
        <Header title="Mine" subTitle="My list of repositories on GitHub" />
        <button
        onClick={this.getMyRepos}>Load Repos
        </button>
        <ul>
          {this.listItems}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos // reposSelector(state)
  };
};

export default connect(mapStateToProps)(Mine);
