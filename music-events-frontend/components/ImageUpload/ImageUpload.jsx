import { useState } from "react";
import { API_URL } from "@/config/index";

import { AddEventForm as AddImageForm } from "../../pages/events/addEvent.styles";

const ImageUpload = ({ eventId, imageUploaded }) => {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "events");
    formData.append("refId", eventId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1>Upload event image</h1>
      <AddImageForm onSubmit={handleSubmit}>
        <div className="file">
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </AddImageForm>
    </div>
  );
};

export default ImageUpload;
