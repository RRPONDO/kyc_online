"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface RegistrationForm {
  companyName: string;
  email: string;
  counterParty: string;
  password: string;
  cpassword: string;
}

const RegistrationPage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationForm>();

  const password = watch("password");

  return (
    <div className="container mt-5 mb-10">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2>Registration Form</h2>
            </div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit(async (data) => {
                  await axios.post("/api/registration", data);
                  router.push("/api/auth/signin");
                })}
              >
                <div className="form-group mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...register("companyName")}
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="counterParty" className="form-label">
                    Nature of Counterparty
                  </label>
                  <select
                    className="form-select"
                    {...register("counterParty")}
                    id="counterParty"
                    name="counterParty"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="customer">Customer</option>
                    <option value="supplier">Supplier</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 chars",
                      },
                    })}
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("cpassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    required
                  />
                  {errors.cpassword && (
                    <span className="text-danger">
                      {errors.cpassword.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-success">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
