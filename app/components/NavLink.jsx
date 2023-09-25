import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="font-sans block py-2 pl-3 pr-4 font-semibold text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
