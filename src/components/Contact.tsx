import { FunctionComponent, useRef, useLayoutEffect } from "react";
import {
  FaEnvelope,
  FaPhoneFlip,
  FaRegFilePdf,
  FaDownload,
  FaRegPaste,
} from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const contactSection: React.RefObject<HTMLElement> =
    useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (contactSection.current != null && self.selector) {
        const timelineMainMerge = self.selector(
          ".contact__timeline__main--merge"
        );

        const timelineDotBranch = self.selector(
          ".contact__timeline__dot--branch"
        );

        const timelineMainCheckout = self.selector(
          ".contact__timeline__main--checkout"
        );

        const timelineDotCheckout = self.selector(
          ".contact__timeline__dot--checkout"
        );

        const timelineSecondary = self.selector(
          ".contact__timeline__secondary"
        );

        const timelineDotMerge = self.selector(
          ".contact__timeline__dot--merge"
        );

        gsap
          .timeline()
          .to(timelineMainMerge, {
            scrollTrigger: {
              trigger: contactSection.current,
              start: "top bottom",
              end: "80% 20%",
              scrub: 0.5,
            },
            scaleY: 1,
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotBranch, {
            scrollTrigger: {
              trigger: contactSection.current,
              start: "15% center",
              end: "20% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineMainCheckout, {
            scrollTrigger: {
              trigger: contactSection.current,
              start: "top 40%",
              end: "center center",
              scrub: 1,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotCheckout, {
            scrollTrigger: {
              trigger: contactSection.current,
              start: "33% center",
              end: "38% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineSecondary, {
            scrollTrigger: {
              trigger: contactSection.current,
              start: "top top",
              end: "85% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotMerge, {
            scrollTrigger: {
              trigger: contactSection.current,
              start: "83% 60%",
              end: "90% 65%",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          });
      }
    }, contactSection); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      ref={contactSection}
      className="contact flex flex-col items-center h-screen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="contact__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 100 250"
      >
        <path
          className="contact__timeline__main contact__timeline__main--merge stroke-branch-first-light dark:stroke-branch-first-dark"
          d="M0,0 L 0,250"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="contact__timeline__main contact__timeline__main--checkout stroke-branch-second-light"
          d="M0,10 C 0,25 10,35 50,35"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="contact__timeline__secondary stroke-branch-second-light"
          d="M50,35 L 50,210 C 50,220 50,230 0,240"
          fill="transparent"
          strokeWidth="1"
        />
        <circle
          className="contact__timeline__dot contact__timeline__dot--branch fill-branch-second-light"
          cx="0"
          cy="10"
          r="2"
          fill="transparent"
        />
        <circle
          className="contact__timeline__dot contact__timeline__dot--checkout fill-branch-second-light"
          cx="50"
          cy="35"
          r="2"
          fill="transparent"
        />
        <circle
          className="contact__timeline__dot contact__timeline__dot--merge fill-branch-second-light"
          cx="0"
          cy="240"
          r="2"
          fill="transparent"
        />
      </svg>

      <div className="contact__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">Vous souhaitez me contacter ?</h2>

        <ul className="flex gap-5 py-10 flex-wrap items-center">
          <li className="basis-full lg:basis-auto">
            <p className="flex justify-center items-center gap-2">
              <FaEnvelope />{" "}
              <span className="font-bold">antonin.chaudiere@hotmail.fr</span>
              <button
                className="group p-2 rounded bg-blue-400 hover:bg-blue-500"
                onClick={() => copyText(contact.email)}
              >
                <FaRegPaste className="group-hover:fill-white" />
              </button>
            </p>
          </li>
          <li className="basis-full lg:basis-auto">
            <p className="flex justify-center items-center gap-2">
              <FaPhoneFlip /> <span className="font-bold">0660361110</span>
              <button
                className="group p-2 rounded bg-blue-400 hover:bg-blue-500"
                onClick={() => copyText(contact.phone)}
              >
                <FaRegPaste className="group-hover:fill-white" />
              </button>
            </p>
          </li>
          <li className="basis-full lg:basis-auto">
            <p className="flex justify-center items-center gap-2">
              <span className="font-bold">Télécharger le CV</span>
              <button className="group flex flex-col gap-2 p-2 rounded bg-blue-400 hover:bg-blue-500">
                <FaRegFilePdf className="group-hover:fill-white" />
                <FaDownload className="group-hover:fill-white" />
              </button>
            </p>
          </li>
        </ul>

        <p className="text-lg">
          Ou bien sur mes réseaux sociaux en bas de page 👇
        </p>
      </div>
    </section>
  );
};
export default Contact;
