"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/logozuva.png";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Avatar, DropdownMenu, Text } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/logozuva.png" alt="KYC Online" width="150" height="50" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {status === "authenticated" && (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active  text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="/upload">
                    Application
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">
                    Status
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link  text-white" href="#">
                        {session.user!.email}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-white" href="#">
                        |
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link  text-white"
                        href="/api/auth/signout"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </>
              </ul>
            </div>
          )}

          {status === "unauthenticated" && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link  text-white" href="/registration">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  |
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  text-white" href="/api/auth/signin">
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
