import React from 'react';
import PropTypes from 'prop-types';

const Hover = ({ onHover, children }) => (
    <div className="hover">
        <div className="hover__no-hover">{children}</div>
        <div className="hover__hover">{onHover}</div>
    </div>
)

const Repos = props => (
    <li classname="repo-detail">
        {props.repos.map(repo => (

            <li className="repo-info" key={repo.id}>
                <h3>"{repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}"</h3>
                <p>Language: {repo.language}</p>
                <p>Description: {repo.description}</p>
                <p>
                  <a className="link-text" href={repo.clone_url} target="new">
                  <img className="link" src="./images/githubicon.png"/>click to view
                  </a>
                </p>
                <p>Last Updated: {repo.updated_at}</p>
                <p>👀:{repo.watchers}  ⑂:{repo.forks}  ⭐️:{repo.stargazers_count}</p>
            </li>
        ))}
    </li>
);

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;
