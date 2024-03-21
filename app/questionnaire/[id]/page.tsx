import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

interface Props {
  params: { id: string };
}

const QuestDetailPage = async ({ params }: Props) => {
  const quest = await prisma?.questionnaire.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-8">
            <div className="card border-success mb-3">
              <div className="card-header">
                <div className="flex justify-between">
                  <span className=" flex">{quest?.regName} </span>
                  <span className=" flex">
                    <Link href={`/upload/${quest?.id}`}>Upload Documents</Link>
                  </span>
                </div>
              </div>
              <div className="card-body text-success">
                <h6 className="card-title">Company details:</h6>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span>Corporate structure: </span>
                    {quest?.structure}
                  </li>

                  <li className="list-group-item">
                    <span>Registration name: </span>
                    {quest?.regName}
                  </li>

                  <li className="list-group-item">
                    <span>Registration date: </span>
                    {quest?.regDate}
                  </li>

                  <li className="list-group-item">
                    <span>Registration ID: </span>
                    {quest?.regId}
                  </li>

                  <li className="list-group-item">
                    <span>Country of Registration: </span>
                    {quest?.regCountry}
                  </li>

                  <li className="list-group-item">
                    <span>Registered Address: </span>
                    {quest?.regAddress}
                  </li>

                  <li className="list-group-item">
                    <span>Business Address: </span>
                    {quest?.bsnsAddress}
                  </li>

                  <li className="list-group-item">
                    <span>Telephone: </span>
                    {quest?.telephone}
                  </li>

                  <li className="list-group-item">
                    <span>Website: </span>
                    {quest?.website}
                  </li>
                </ul>

                <h6 className="card-title mt-4">Bank Information:</h6>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span>Bank name: </span>
                    {quest?.bankName}
                  </li>

                  <li className="list-group-item">
                    <span>Bank Address: </span>
                    {quest?.bankAddress}
                  </li>

                  <li className="list-group-item">
                    <span>Country: </span>
                    {quest?.country}
                  </li>

                  <li className="list-group-item">
                    <span>Account Number: </span>
                    {quest?.accNumber}
                  </li>

                  <li className="list-group-item">
                    <span>Swift code: </span>
                    {quest?.swift}
                  </li>

                  <li className="list-group-item">
                    <span>IBAN: </span>
                    {quest?.iban}
                  </li>

                  <li className="list-group-item">
                    <span>Benefiary of account: </span>
                    {quest?.beneficiaryAcc}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-secondary mb-3">
              <div className="card-body text-secondary">
                <button type="button" className="btn btn-secondary">
                  Edit
                </button>
                <hr />
                <h5 className="card-title">Upload company Documents:</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestDetailPage;
