"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

interface QuestionnaireForm {
  structure: string;
  regName: string;
  regDate: string;
  regId: string;
  regCountry: string;
  regAddress: string;
  bsnsAddress: string;
  telephone: string;
  website: string;
  bankName: string;
  bankAddress: string;
  country: string;
  accNumber: string;
  swift: string;
  iban: string;
  beneficiaryAcc: string;
}

const QuestionnairePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<QuestionnaireForm>();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>You're required to complete Onboarding Questionnaire:</h2>
        </div>
        <div className="card-body">
          <form
            onSubmit={handleSubmit(async (data) => {
              //console.log(data);
              const response = await axios.post("/api/questionnaire", data);
              router.push(`/questionnaire/${response.data.id}`);
            })}
          >
            <div className="card py-1 my-3">
              <div className="card-header mb-1">Corporate Structure:</div>
              <select
                className="form-select"
                {...register("structure")}
                id="structure"
                name="structure"
              >
                <option value="">Select...</option>
                <option value="private">Private Company</option>
                <option value="public">Publicly Listed Company</option>
                <option value="government">
                  Government or State Owned Entity
                </option>
                <option value="sole">Sole Trader</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="card py-1 my-3 px-3">
              <div className="card-header mb-1">
                Company / Supplier Information:
              </div>
              <div className="form-group mb-3">
                <label htmlFor="regName" className="form-label">
                  Full Registered name:
                </label>
                <input
                  type="text"
                  {...register("regName")}
                  className="form-control"
                  id="regName"
                  name="regName"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="regDate" className="form-label">
                  Date of registration:
                </label>
                <input
                  type="date"
                  {...register("regDate")}
                  className="form-control"
                  id="regDate"
                  name="regDate"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="regId" className="form-label">
                  Company Registration ID:
                </label>
                <input
                  {...register("regId")}
                  type="text"
                  className="form-control"
                  id="regId"
                  name="regId"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="regCountry" className="form-label">
                  Country of Registration:
                </label>
                <select
                  className="form-select"
                  {...register("regCountry")}
                  id="regCountry"
                  name="regCountry"
                >
                  <option value="">Select...</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                  <option value="South Africa">SouthAfrica</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="regAddress" className="form-label">
                  Registered Address:
                </label>
                <input
                  type="text"
                  {...register("regAddress")}
                  className="form-control"
                  id="regAddress"
                  name="regAddress"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="bsnsAddress" className="form-label">
                  Business Address:
                </label>
                <input
                  type="text"
                  {...register("bsnsAddress")}
                  className="form-control"
                  id="bsnsAddress"
                  name="bsnsAddress"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="telephone" className="form-label">
                  Telephone Number:
                </label>
                <input
                  type="text"
                  {...register("telephone")}
                  className="form-control"
                  id="telephone"
                  name="telephone"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="website" className="form-label">
                  Website:
                </label>
                <input
                  type="text"
                  {...register("website")}
                  className="form-control"
                  id="website"
                  name="website"
                  required
                />
              </div>
            </div>

            <div className="card py-1 my-3 px-3">
              <div className="card-header mb-1">Bank Information:</div>
              <input
                type="text"
                {...register("bankName")}
                className="form-control"
                id="bankName"
                name="bankName"
                placeholder="Bank name"
                required
              />

              <input
                type="text"
                {...register("bankAddress")}
                className="form-control my-3"
                id="bankAddress"
                name="bankAddress"
                placeholder="Bank Address"
                required
              />

              <input
                type="text"
                {...register("country")}
                className="form-control my-3"
                id="country"
                name="country"
                placeholder="Country"
                required
              />

              <input
                type="text"
                {...register("accNumber")}
                className="form-control my-3"
                id="accNumber"
                name="accNumber"
                placeholder="Account Number"
                required
              />

              <input
                type="text"
                {...register("swift")}
                className="form-control my-3"
                id="swift"
                name="swift"
                placeholder="Swift Code"
                required
              />

              <input
                type="text"
                {...register("iban")}
                className="form-control my-3"
                id="iban"
                name="iban"
                placeholder="IBAN"
                required
              />

              <input
                type="text"
                {...register("beneficiaryAcc")}
                className="form-control my-3"
                id="beneficiaryAcc"
                name="beneficiaryAcc"
                placeholder="Beneficiary of the Account"
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;
