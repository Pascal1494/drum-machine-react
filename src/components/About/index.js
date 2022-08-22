import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <h1>Lien du GitHub </h1>
      <a href="https://github.com/Pascal1494/drum-machine-react">
        <img
          className="logo-git"
          src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png"
          alt="logo"
        />
      </a>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  ${"" /* display: flex; */}
  align-items: center;

  h1 {
    width: 100%;
    color: lightgrey;
    font-size: 3rem;
    text-align: center;
    margin: 3rem auto;
    text-transform: uppercase;
  }

  .logo-git {
    display: flex;
    margin:  auto;
    width: 160px;
  }
`;
