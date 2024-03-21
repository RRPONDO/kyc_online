import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <main>
        {session && (
          <div className="row my-3 mx-3 ">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Welcome {session.user?.name}</h3>
                  <p className="card-text">
                    You're logged in to Zuva's Online KYC Portal.
                  </p>
                  <p className="card-text">
                    Please click the button below to complete the registration
                    process and become a legible Zuva Supplier or Customer.
                  </p>
                  {session && (
                    <Link
                      href="/questionnaire"
                      className="btn btn-outline-success"
                    >
                      Complete registration
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Your status is -{" "}
                    <span className="text-danger">Pending</span>
                  </h5>
                  <p className="card-text">
                    After submitting all the required information. You're
                    expected to wait for maximum of 14 working days to get the
                    response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!session && (
          <div className="row my-3 mx-3 h">
            <div className="card ">
              <h5 className="card-header">Zuva Online KYC Portal</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Instructions & Expections from our Suppliers & Customers
                </h5>
                <div className="card-text">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cupiditate ullam explicabo, dignissimos ipsa modi
                      accusamus?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt, eum!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit qui nobis facilis. Ad.
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="/registration" className="btn btn-outline-success">
                    Register
                  </a>

                  <a
                    href="/api/auth/signin"
                    className="btn btn-outline-secondary mx-5"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
