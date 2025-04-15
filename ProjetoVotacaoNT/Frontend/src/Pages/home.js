import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import PollItem from '../Components/pollItem';

const Home = () => {
  const [cpf, setCpf] = useState('');
  const [eligible, setEligible] = useState(null);
  const [polls, setPolls] = useState([]);
  const [votes, setVotes] = useState([]);

  const formatCPF = (value) => {
    let cpf = value.replace(/\D/g, '').slice(0, 11);
    return cpf
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const validateCPF = async (value) => {
    const formattedCPF = formatCPF(value);
    setCpf(formattedCPF);

    try {
      const response = await api.get(`/users/validate/${value.replace(/\D/g, '')}`);
      setEligible(response.data.message.includes('eligible'));
    } catch {
      setEligible(false);
    }
  };

  useEffect(() => {
    api.get('/polls') // 🔥 Corrected API call to match backend setup
      .then(response => setPolls(response.data.slice(0, 10))) 
      .catch(error => console.error("❌ Error fetching polls:", error));
  }, []);

  return (
    <div>
        <h1>Online Voting</h1>

        <input 
          type="text" 
          placeholder="Enter your CPF" 
          value={cpf} 
          onChange={(e) => validateCPF(e.target.value)}
          maxLength={14}
        />

        {eligible !== null && (
          <div className={`validation-message ${eligible ? 'eligible' : 'not-eligible'}`}>
            {eligible ? "✅ Eligible to vote!" : "❌ Not eligible to vote"}
          </div>
        )}

        {eligible && (
          <>
            <h2>Available Polls:</h2>
            <div className="poll-container">
              {polls.map(poll => (
                <PollItem key={poll.id} poll={poll} setVotes={setVotes} />
              ))}
            </div>

            <h2>Registered Votes:</h2>
            {votes.map((vote, index) => (
              <div key={index} className="poll-item">
                <strong>{vote.title}</strong> → {vote.option === 'yes' ? '✅ Yes' : '❌ No'}
              </div>
            ))}
          </>
        )}
    </div>
  );
};

export default Home;
