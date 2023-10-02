import { Navigate } from "react-router-dom";
import { Content } from "../components/Content";
import { PrivacyBar } from "../components/PrivacyBar";
import TopBar from "../components/TopBar";
import useCurrentUser from "../hooks/useCurrentUser";

const Home = () => {
  const { user } = useCurrentUser();

  if (!user) return <Navigate to="/" />;
  return (
    <>
      <TopBar />
      <PrivacyBar />
      <Content />
    </>
  );
};

export default Home;
