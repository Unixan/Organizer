import { Content } from "../components/Content";
import { PrivacyBar } from "../components/PrivacyBar";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <PrivacyBar />
      <Content />
    </>
  );
};

export default Home;
