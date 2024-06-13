import Link from "next/link";
import React from "react";

function NavBar() {
    const navLinksObject = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Contact",
            href: "/contact",
        }
    ]
  return (
    <div className="navbar  py-4 px-0 ">
      <div className="flex-1">
        <Link className=" text-2xl font-inter font-extrabold" href={"/"}>
          AchieveAlly
        </Link>
      </div>
      <div className="flex-none gap-2 items-center">
        <ul className="menu menu-horizontal px-1 items-center ">
          {navLinksObject.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-semibold">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
