import React, { useState } from 'react';

const PollItem = ({ poll, setVotes }) => {
  const [vote, setVote] = useState(null);

  const castVote = (option) => {
    if (vote === option) return; // Prevents reselecting the same option

    setVote(option);
    setVotes(prev => [...prev, { title: poll.title, option }]);
  };

  return (
    <div className="poll-item">
      <h3>{poll.title}</h3>
      <label>
        <input type="checkbox" checked={vote === 'yes'} onChange={() => castVote('yes')} />
        ✅ Yes
      </label>
      <label>
        <input type="checkbox" checked={vote === 'no'} onChange={() => castVote('no')} />
        ❌ No
      </label>
    </div>
  );
};

export default PollItem;
