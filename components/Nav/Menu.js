import React from "react";
import Link from 'next/link';

const Menu = () => {
  return (
    <ul className="nav-link-menu">
      <li className="nav-link">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
      </li>
      <li className="nav-link">
        <Link href="/jobs">
          <a className="link">Jobs</a>
        </Link>
      </li>
      <li className="nav-link">
        <Link href="/stories">
          <a className="link">Stories</a>
        </Link>
      </li>
      <li className="nav-link">
        <Link href="/post-job">
          <a className="link">Post a Jobs</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
