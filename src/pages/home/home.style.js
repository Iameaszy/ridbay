import styled from 'styled-components';

export const HomeStyle = styled.div`
  .jumbotron-img-wrapper {
    @media (max-width: 760px) {
      img {
        width: 100%;
      }
    }
  }
  .jumbotron {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em;
    text-align: center;

    @media (max-width: 760px) {
      display: none;
    }
    .jumbotron-text {
      opacity: 0.5;
    }
    .btn {
      color: #5e942d;
      border: solid 1px;
      border-radius: 5px;
      margin: 0 0.5em;
      width: 8em;

      &:hover,
      &:focus {
        background: #5e942d;
        color: white;
      }
    }
  }
`;
