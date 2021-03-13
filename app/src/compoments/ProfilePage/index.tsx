import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Leandro Bevilaqua</h1>
        <h2>@bevilaqua_le</h2>

        <p>
          Developer at <a href="/#">@bevilaqua_le</a>
        </p>

        <ul>
          <li>
            <LocationIcon /> São Paulo, Brasil
          </li>
          <li>
            <CakeIcon /> Nascido(a) em 22 de agosto de 1987
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>98</strong>
          </span>
          <span>
            <strong>972</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
