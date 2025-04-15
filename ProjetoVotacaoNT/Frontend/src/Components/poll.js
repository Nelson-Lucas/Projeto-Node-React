import styled from 'styled-components';

const PollCard = styled.div`
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const Poll = ({ title, votes }) => (
  <PollCard>
    <h3>{title}</h3>
    <p>Votes Yes: {votes.yes} | No: {votes.no}</p>
  </PollCard>
);

export default Poll;

