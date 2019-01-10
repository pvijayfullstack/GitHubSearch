import React from 'react';
import PropTypes from 'prop-types';

const Picker = props => {
    let input;
    const { onSubmit } = props;
    return (
        <div className="home">

          <div>
            <img className="logo" src={'./images/githubsearch.png'} alt="git-search-logo"/>
          </div>

          <div>
            <h1 className="title">GitHub Search</h1>
          </div>

          <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input.value !== '') {
                        onSubmit(input.value);
                    }
                }}
            >
                <input className="searchbar"
                    type="text"
                    placeholder="🔍 Enter GitHub username"
                    ref={node => {
                        input = node;
                    }}
                />
                <input className="go-button" type="submit" value="Go" />
            </form>
          </div>

        </div>
    );
};

Picker.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Picker;
