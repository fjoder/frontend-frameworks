import React from 'react';
import { createSelector } from 'reselect';

const resultsSelector = state => state.repos;

const reposSelector = createSelector(
  resultsSelector,
  (repos) => {
    if (repos) {
      repos.map((r) => {
        return (
          <li key={r.id}>
            <a href={r.html_url}>{r.name}</a>
          </li>
        )
      });
    }
  }
);

export { reposSelector };
