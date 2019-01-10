import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';

const User = props => {
    const { currentUserData, userRepos } = props;
    const { userData } = currentUserData;
    const { repos, isFetching } = userRepos;
    console.log(currentUserData);
    return (
        <div className="search-results">

          <div class="photo">
		        <img className="main-image" src={userData.avatar_url} alt="user-image"/>
            <h2 className="user-name">'{userData.login}'</h2>
	        </div>

            {!currentUserData.isFetching &&
                !userRepos.isFetching &&
                repos.length === 0 && (
                    <h2>No repos found for user {userData.login}</h2>
                )}
            {!isFetching &&
                repos.length > 0 && (
                    <div>
                        <h2 className="repos-header">Repositories</h2>
                        <Repos repos={repos}/>
                    </div>
                )}
        </div>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
