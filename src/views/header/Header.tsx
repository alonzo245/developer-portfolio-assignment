import styled from "@emotion/styled";
import { useThemeState } from "../../context/useThemeState";
import { Hero } from "../../pages/home/hero";
import { ThemeType } from "../../theme";
import { Nav } from "./nav";

const Header: React.FC = () => {
  const { theme } = useThemeState();

  return (
    <Container theme={theme}>
      <Nav />
      <Hero />
    </Container>
  );
};

export default Header;

const Container = styled.header<{ theme: ThemeType }>`
  background-color: ${(p) => p.theme.heroBackground};
  height: 100vh;
  color: white;
  font-size: 40px;
  background-image: url("/developer-portfolio-assignment/blob-black.svg"),
    url("/developer-portfolio-assignment/blob-light-blue.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-position: -300px center, -300px center;
`;
