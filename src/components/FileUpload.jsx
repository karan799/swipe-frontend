// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//     const [file, setFile] = useState(null);
//     const [data, setData] = useState(null);

//     const handleFileChange = (e) => setFile(e.target.files[0]);

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const response = await axios.post('http://localhost:5000/upload', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             setData(response.data.data);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         }
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload</button>
//             {data && (
//                 <div>
//                     <h2>Extracted Data</h2>
//                     <pre>{JSON.stringify(data, null, 2)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FileUpload;

// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [extractedData, setExtractedData] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   // Handle file selection
//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   // Handle form submission
//   const handleUpload = async () => {
//     if (!file) {
//       alert('Please select a file to upload');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     setIsUploading(true); // Show loading status

//     try {
//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log(response)
//       setExtractedData(response.data.data); // Update extracted data state
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('Error uploading the file');
//     } finally {
//       setIsUploading(false); // Hide loading status
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Invoice File</h1>
//       <input
//         type="file"
//         name="file"
//         onChange={handleFileChange}
//         required
//       />
//       <button onClick={handleUpload} disabled={isUploading}>
//         {isUploading ? 'Uploading...' : 'Upload'}
//       </button>

//       {extractedData && (
//         <div>
//           <h2>Extracted Data</h2>
//           <pre>{JSON.stringify(extractedData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;
// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  setInvoices } from '../redux/invoiceSlice';
import '../css/FileUpload.css';


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const dispatch = useDispatch();

  // Handle file selection
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Handle form submission
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true); // Show loading status

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      
      // Dispatch the action to update Redux state with extracted data
      dispatch(setInvoices(response.data));
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading the file');
    } finally {
      setIsUploading(false); // Hide loading status
    }
  };

  return (
    <div>
      <h1>Upload Invoice File</h1>
      <input
        type="file"
        name="file"
        onChange={handleFileChange}
        required
      />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default FileUpload;
