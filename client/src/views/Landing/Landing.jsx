import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigation = useNavigate();
  const handleGoToHome = () => {
    navigation("/home");
  };
  return (
    <div>
      <h1>Esta es la vista de Landing</h1>
      <button onClick={handleGoToHome}>Home</button>
    </div>
  );
};
export default Landing;
