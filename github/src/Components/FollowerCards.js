import React from 'react';
import FollowerCard from './FollowerCard';

function FollowerCards({myFollowers}) {
  return (
    <div className='followers-group'>
      {myFollowers.map(follower =>
        <FollowerCard follower={follower} />
        )}
    </div>
  )
}

export default FollowerCards;