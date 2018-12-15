import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  background: #f5f5f5;
  color: #888181b8;
  padding-top: 30px;

  @media (max-width: 760px) {
    position: relative;
  }
  .footer {
    margin: auto;
    width: 90%;
    text-align: left;

    ul {
      padding: 0;
      list-style: none;
    }
  }
`;
