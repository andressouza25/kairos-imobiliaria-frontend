import FeaturedProperties from "../components/FeaturedProperties";
import SearchBar from "../components/SearchBar";
import {
  HomeContainer,
  FeaturedSection,
} from "../components/styles/HomeStyles";

export default function Home() {
  return (
    <HomeContainer>
      <SearchBar />

      <FeaturedSection>
        <FeaturedProperties />
      </FeaturedSection>
    </HomeContainer>
  );
}
