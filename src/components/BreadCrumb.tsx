import { HashLink as Link } from "react-router-hash-link";
import { FaHouse } from "react-icons/fa6";

function BreadCrumb({ actualPath }: BreadCrumbProps) {
  return (
    <nav className="breadcrumb w-full h-full" aria-label="Breadcrumb">
      <ol className="flex items-center text-sm sm:text-md">
        <li className="breadcrumb--light flex items-center">
          <Link
            to="/"
            className="flex gap-2 breadcrumb__home bg-light dark:bg-dark"
          >
            <FaHouse size="1.2em" />
            Accueil
          </Link>
        </li>
        <li className="breadcrumb--light">
          <Link
            to="/#projects"
            className="flex items-center breadcrumb__projects bg-light dark:bg-dark"
          >
            Projets
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <div className="glass breadcrumb__actual-path glass--light glass--light--off dark:glass--dark dark:glass--dark--off bg-light dark:bg-dark">
            {actualPath}
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;

interface BreadCrumbProps {
  actualPath: string;
}
