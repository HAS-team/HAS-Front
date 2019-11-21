import styled from 'styled-components';
import Logo from '../../../Assets/Logo.png';

export const headerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.625rem;
  width: 100%;
  height: 6.375rem;
  background-color: #f5f5f5;
`;

export const LogoIcon = styled.img`
  margin-left: 8.938rem;
  width: 7.25rem;
  height: 4.188rem;
`;

export const UserInfoText = styled.p`
  margin-right: 10.38rem;
  font-size: 1.875rem;
  font-weight: 800;
  color: #bdbdbd;
`;

export const NavItem = styled.span`
  color: #bdbdbd;
  font-size: 1.563rem;
  font-weight: 700;
`;
