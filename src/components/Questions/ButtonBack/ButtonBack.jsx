import { Link } from "react-router-dom";

export function ButtonBack() {
  return (
    <div>
      <Link to="/welcome">
        <button>Strona główna</button>
      </Link>
    </div>
  );
}
