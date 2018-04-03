import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { saveRepos } from '../actions/repos';

class Search extends React.Component {
  state = {
    search: ""
  };

  searchGithub = () => {
    fetch("https://api.github.com/search/repositories?q=" + this.state.search)
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveRepos(respJson.items));
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    return (
      <div className="container">
        <Header title="Search" subTitle="Search GitHub for a list of repositories" />
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
