import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { saveRepos } from '../actions/repos';

class Search extends React.Component {
  state = {
    search: "",
    listItems: []
  };

  searchGithub = () => {
    fetch("https://api.github.com/search/repositories?q=" + this.state.search)
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveRepos(respJson.items));
        this.setState({ listItems: this.createList() });
      });
  };

  createList = () => {
    let list = [];
    for (const r of this.props.repos) {
      const item = (
        <a className="list-group-item list-group-item-action" href={r.html_url} key={r.id}>{r.name}</a>
      )
      list.push(item);
    };

    return list;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <Header title="Search" subTitle="Search GitHub for a list of repositories" />
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="search"
                value={this.state.search}
                onChange={search => {
                  this.setState({ search: search.target.value });
                }}
              />
              <input type="submit" value="submit" />
            </form>
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

export default connect(mapStateToProps)(Search);
