import React, { useCallback,useState } from "react";
import { useDropzone } from "react-dropzone";
import requests from "../agent";
import { useSelector, useDispatch } from "react-redux";

function MyDropzone({text, name, setInputs }) {
  const [isloading,setLoading] = useState(false)
  const user = useSelector((state) => state.user);
  const onDrop = useCallback(async (acceptedFiles) => {   
 
    setInputs((inputs) => ({
          ...inputs,
          [name]: acceptedFiles[0],
        }));     
  }, []);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
  });
  const files = acceptedFiles.map((file) => (
    <span style={{ color: "blue", fontSize: 12, margin: 1 }} key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ));
  return (
    <div className="col-sm mr-2 mt-2">
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <p>Drag and drop pastoralist <span style ={{color:'blue'}}>{text}</span>, or click to select file</p>
                            <em>
                              (only one file can be uploaded.) <br/> { <em>{files}</em>}
                            </em>
                          </div>
                        </div>
  );
}
export default MyDropzone;
