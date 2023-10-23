import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>{error.message}</h1>
    </>
  );
}
