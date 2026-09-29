import { Navigate, useParams } from "react-router-dom";

/** /progetti/:id è diventato /portfolio/:id — lo slug non cambia. */
export const RedirectProgettiId = () => {
  const { id } = useParams();
  return <Navigate to={`/portfolio/${id}`} replace />;
};

export default RedirectProgettiId;
