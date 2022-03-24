import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Page is not found</p>
      <Link to="/">Back to home page...</Link>
    </div>
  );
};

export default NotFound;
