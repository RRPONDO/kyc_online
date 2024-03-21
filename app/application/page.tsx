"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ApplicationForm {}

const ApplicationPage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationForm>();

  const [isLoading, setIsLoading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("certOfInc", data.certOfInc[0]); // Assuming single file upload
      formData.append("cr14", data.cr14[0]);
      formData.append("cr6", data.cr6[0]);
      formData.append("idsDirectors", data.idsDirectors[0]);

      const response = await axios.post("/api/application", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle successful response (e.g., display success message)
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError((error as any).message); // Set error message for display
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>Documents Upload</h2>
            </div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit(async (data) => {
                  //await axios.post("/api/application", data);
                  router.push("/consent");
                })}
              >
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-body row g-3">
                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            Certificate of incorporation:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            CR 14:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            CR 6:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            Memorandum & Articles of Association:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            Return of Allotment:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            IDs for Directors:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            Proof of Residence for Directors:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="formFile" className="form-label">
                            Tax clearance Certificate:
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <button type="submit" className="btn btn-success col-3">
                          Submit Documents
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
