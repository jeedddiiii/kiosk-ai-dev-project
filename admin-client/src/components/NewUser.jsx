import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

function NewUser() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  const [name, setName] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pictureUrls, setPictureUrls] = useState([]);
  const [croppedImages, setCroppedImages] = useState([]);
  const cropperRefs = useRef([]);

  const handleNameChange = (event) => setName(event.target.value);
  const handlePicturesChange = (event) => {
    const files = event.target.files;
    const fileDataURLs = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPictures(files);
    setPictureUrls(fileDataURLs);
  };
  const handleSave = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);

    if (croppedImages.length > 0) {
      croppedImages.forEach((croppedImage, index) => {
        const file = dataURItoBlob(croppedImage);
        formData.append(
          "file",
          file,
          `croppedPicture${index}.jpeg` // include the .jpeg extension
        );
      });
    }
    try {
      console.log("handleSave is called");
    } catch (error) {
      console.error("An error occurred before the fetch call:", error);
    }

    console.log("About to make the fetch call");
    const response = await fetch("http://localhost:8080/new-user", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const message = await response.text();
      console.error(`An error has occurred: ${response.status}, ${message}`);
      throw new Error(message);
    }

    const response2 = await fetch("http://localhost:5000/store_image", {
      method: "POST",
      body: formData,
    });

    if (response2.ok) {
      const deleteResponse = await fetch(
        "http://localhost:5000/delete_representations",
        {
          method: "POST",
        }
      );

      if (!deleteResponse.ok) {
        throw new Error("Failed to delete representations");
      }
    } else {
      throw new Error("Failed to store image");
    }

    if (!response2.ok) {
      const message2 = await response2.text();
      console.error(`An error has occurred: ${response2.status}, ${message2}`);
      throw new Error(message2);
    }

    navigate("/");
  };
  const onCrop = (index) => {
    event.preventDefault(); // Prevent the default button behavior

    const imageElement = cropperRefs.current[index];
    const cropper = imageElement?.cropper;
    const croppedDataURL = cropper
      .getCroppedCanvas({
        width: 300,
        height: 300,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 4096,
        maxHeight: 4096,
        fillColor: "#fff",
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high",
      })
      .toDataURL("image/jpeg");

    setCroppedImages((prev) => {
      const updatedCroppedImages = [...prev];
      updatedCroppedImages[index] = croppedDataURL;
      return updatedCroppedImages;
    });
  };
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    return new File([blob], "croppedImage.jpeg", { type: mimeString });
  }

  return (
    <div className="container-side">
      <Sidebar />

      <div className="content ">
        <div className="pt-4 shadow p-3 mb-5 bg-white rounded">
          <div className="d-flex justify-content-between pb-2 mx-3">
            <p className="fs-6 fw-bold">New User</p>
          </div>
          <form className="mx-3">
            <div class="mb-3 ">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control mb-3"
                multiple
                onChange={handlePicturesChange}
              />
              <div className="row">
                <div className="col">
                  {pictureUrls.map((url, index) => (
                    <div
                      key={index}
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                      className="mb-5"
                    >
                      <Cropper
                        src={url}
                        initialAspectRatio={1}
                        guides={false}
                        onCropEnd={() => onCrop(index)}
                        ref={(el) => (cropperRefs.current[index] = el)}
                        style={{ height: "200px", width: "200px" }}
                      />
                      <button onClick={(event) => onCrop(index, event)}>
                        Crop Image
                      </button>
                    </div>
                  ))}
                </div>
                <div className="col">
                  {croppedImages.map((croppedImage, index) => (
                    <img
                      key={index}
                      src={croppedImage}
                      alt={`Cropped Image ${index}`}
                      style={{ width: "200px", height: "200px" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn-dark ml-auto  fw-bold me-2"
                onClick={() => navigate("/")}
              >
                Back
              </button>

              <button
                className="btn btn-dark ml-auto  fw-bold"
                onClick={(event) => handleSave(event)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
