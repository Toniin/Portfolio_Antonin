import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ErrorPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <p className="text-9xl tracking-widest">404</p>
        <h1 className="text-5xl tracking-wider mt-16">PAGE INTROUVABLE</h1>
        <p className="text-xl mt-5">
          Désolé, nous ne trouvons pas la page que vous recherchez.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            to="/"
            className="neomorphism--light dark:neomorphism--dark flex p-3 rounded-lg font-bold"
          >
            Retour à la page d'accueil
          </Link>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
