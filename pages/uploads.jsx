import UploadLayout from "../components/UploadLayout";
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import requests from "../agent";

const  FileUploads =(props)=> {
    const router = useRouter();
  const user = useSelector((state) => state.user);
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {  
        setFiles(acceptedFiles);
      }, [])
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({    
    maxFiles:10,onDrop,
    accept: {
        'image/*': ['.jpeg','.jpg','.gif', '.png']
      }
   
  });
  const handleUpLoad = () => { 
    const formData = new FormData();
    formData.append("files", files[0]);
    for (var x = 1; x < files.length; x++) {
      formData.append("files", files[x]);
    }
    requests.post("/uploads/"+user?.user?.email, formData).then((res) => {
      router.push('/bio')
    });
  }; 
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   ) 
  });
  

  return (
    <>
    <section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop farm images here, or click to select files</p>
        <em>(10 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
    <div className="d-grid text-center">
          <button onClick={()=>handleUpLoad()} className="btn btn-primary">
           upload
          </button>
        </div>
    </>
  );
}
<FileUploads />

export default FileUploads;
