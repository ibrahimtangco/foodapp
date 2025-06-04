import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav({ showMenu, setShowMenu }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-screen w-full bg-green-500 p-8 z-50 transform transition-transform duration-300 ease-in-out ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="w-full flex justify-end"
        onClick={() => setShowMenu(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="text-white text-4xl" />
      </button>
      <ul className=" text-xl text-white font-medium mt-4">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Others</li>
      </ul>
    </nav>
  );
}

export default Nav;
