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
        <a className="list-group-item list-group-item-action" href={r.html_url} key={r.id}>
          <strong>{r.name}</strong> - {r.description}
        </a>
      )
      list.push(item);
    };

    return list;
  };

  componentWillMount() {
    this.getMyRepos();
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <Header title="Mine" subTitle="My list of repositories on GitHub" />
          <div className="card-body">
            <div className="list-group">
              {this.state.listItems}
            </div>
          </div>
        </div>
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
