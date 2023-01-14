import { Container, Avatar, Logo } from './styles';

import LogoImg from '@assets/logo.png';
import AvatarImg from '@assets/capa.png';

export function Header() {
  return (
    <Container>
      <Logo source={LogoImg}/>
      <Avatar source={AvatarImg}/>
    </Container>
  );
}
