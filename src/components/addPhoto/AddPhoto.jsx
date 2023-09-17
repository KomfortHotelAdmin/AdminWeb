/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Wrap } from "./AddPhoto.styled";

const base_url = "http://localhost:3000/";

const AddPhoto = ({ setEventPhoto, eventPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    selectedFile && setEventPhoto(selectedFile);
  }, [selectedFile, setEventPhoto]);

  return (
    <Wrap>
      <div>
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt={selectedFile.name}
          />
        )}
        {!selectedFile && eventPhoto && (
          <img src={`${base_url}${eventPhoto}`} />
        )}
      </div>
      <div>
        <input {...getInputProps()} />
        <button {...getRootProps()} type="button">
          {selectedFile || eventPhoto ? "Change Photo" : "Choose Photo"}
        </button>
      </div>
    </Wrap>
  );
};
export default AddPhoto;
