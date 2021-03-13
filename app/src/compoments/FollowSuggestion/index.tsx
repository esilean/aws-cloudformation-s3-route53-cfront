import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface IProps {
  name: string;
  nick: string;
}

const FollowSuggestion: React.FC<IProps> = ({ name, nick }) => {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nick}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
