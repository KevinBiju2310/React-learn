import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Page Not Found !!</h2>
    </div>
  );
};

export default Error;
