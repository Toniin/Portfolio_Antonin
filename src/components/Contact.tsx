import { FunctionComponent } from "react";
import {
  FaEnvelope,
  FaPhoneFlip,
  FaRegFilePdf,
  FaDownload,
  FaRegPaste,
} from "react-icons/fa6";

const Contact: FunctionComponent = () => {
  const contact = {
    email: "antonin.chaudiere@hotmail.fr",
    phone: "0660361110",
  };

  const copyText: (text: string) => void = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      console.log("Copier ;)");
    });
  };

  return (
    <section className="contact flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl">Vous souhaitez me contacter ?</h2>
      <div className="flex justify-evenly items-center w-full py-10 flex-wrap">
        <p className="flex items-center gap-2">
          <FaEnvelope />{" "}
          <span className="font-bold">antonin.chaudiere@hotmail.fr</span>
          <button className="group p-2 rounded bg-blue-400 hover:bg-blue-500" onClick={() => copyText(contact.email)}>
            <FaRegPaste className="group-hover:fill-white" />
          </button>
        </p>
        <p className="flex items-center gap-2">
          <FaPhoneFlip /> <span className="font-bold">0660361110</span>
          <button className="group p-2 rounded bg-blue-400 hover:bg-blue-500" onClick={() => copyText(contact.phone)}>
            <FaRegPaste className="group-hover:fill-white" />
          </button>
        </p>
        <button className="flex items-center gap-2">
          Télécharger le CV
          <div className="group flex flex-col gap-2 p-2 rounded bg-blue-400 hover:bg-blue-500">
            <FaRegFilePdf className="group-hover:fill-white" />
            <FaDownload className="group-hover:fill-white" />
          </div>
        </button>
      </div>
      <p className="text-lg">
        Ou bien sur mes réseaux sociaux en bas de page 👇
      </p>
    </section>
  );
};
export default Contact;