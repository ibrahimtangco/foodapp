import React, { useState } from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="md:py-4 md:shadow ">
      <section className="hidden md:block container mx-auto">
        {/* logo */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faBowlFood}
            className="text-4xl text-green-700"
          />
          <span className="font-semibold text-xl">
            Food <span className="text-green-700">App</span>
          </span>
        </div>
      </section>
      <section className="md:hidden px-4 pt-4">
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl"
            onClick={() => setShowMenu(true)}
          />
        </div>
        <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
      </section>
    </header>
  );
}

export default Header;
