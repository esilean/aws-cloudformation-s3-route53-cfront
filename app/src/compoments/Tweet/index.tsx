import React from 'react';

import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Voce retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Leandro Bevilaqua</strong>
            <span>@bevilaqua_le</span>
            <Dot />
            <time>8 de jul</time>
          </Header>

          <Description>Estou estudando css com a Rocketseat</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 18
            </Status>
            <Status>
              <RetweetIcon /> 2
            </Status>
            <Status>
              <LikeIcon /> 99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
