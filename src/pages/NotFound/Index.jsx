import NotFoundImage from "./NotFound.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <div className="mt-5 bg-white border-4 border-gray-800 border-dotted rounded-lg shadow px-5 py-6 sm:px-6">
        <h1
          className="font-bold text-center text-gray-800"
          style={{ fontSize: "10vw" }}
        >
          404
        </h1>
        <h2 className="text-2xl text-center">Looks like you are lost ;) </h2>
        <h3 className="text-center">
          Back to{" "}
          <Link to="/" className="font-bold underline">
            home.
          </Link>
        </h3>
        <img src={NotFoundImage} alt="" srcset="" />
      </div>
    </main>
  );
}
