"use client";
import { useRef, useState } from "react";
import React from "react";

interface Props {
  params: { id: string };
}

const UploadPage = ({ params }: Props) => {
  const [file, setFile] = useState<File>();
  const ref = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch(`/api/upload/${params.id}`, {
        method: "PUT",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());

      ref.current && (ref.current.value = "");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="card ml-5">
        <div className="card-header">Upload All Required documents:</div>
        <div className="card-body">
          <h6 className="card-title text-danger">
            Attach all documents as one pdf file:
          </h6>
          <hr />
          <h6>Below are required docs for each corporate structure:</h6>

          <p className="card-text">
            *Private Company* - Certificate of incorporation, CR14, CR6,
            Memorandum & Articles of Association, Return of allortment, IDs of
            directors, Proof of Residence, Tax clearance
          </p>
          <p className="card-text">
            *Public Company* - Certificate of incorporation, CR14, CR6,
            Memorandum & Articles of Association, Return of allortment, IDs of
            directors, Proof of Residence, Tax clearance
          </p>
          <hr />

          <form onSubmit={submit}>
            <input
              type="file"
              className="file"
              onChange={(e) => setFile(e.target.files?.[0])}
              ref={ref}
            />
            <input type="submit" value="Upload" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
