// import"./UploadSection.css"

// function UploadSection() {
//   return (
//     <div>
// <div className="file-upload-container">
//   <div className="file-upload">
//     <input multiple="" className="file-input" id="fileInput" type="file" />
//     <label className="file-label" htmlFor="fileInput">
//       <i className="upload-icon">📁</i>
//       <p>Drag &amp; Drop your files here or click to upload</p>
//     </label>
//   </div>
// </div>

// <div className="input-div">
//   <input className="input" name="file" type="file"/>
// <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
// </div>
//     </div>
//   )
// }

// export default UploadSection



import { useState } from "react";
import "./UploadSection.css";

function UploadSection() {
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // دالة للتحقق من حجم الملف
  const validateFile = (file) => {
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      setErrorMessage("الملف كبير جدًا. الحد الأقصى للحجم هو 50MB.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  // دالة عند اختيار الملف
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && validateFile(file)) {
      setFileName(`تم اختيار الملف: ${file.name}`);
    } else {
      setFileName("");
    }
  };

  // دالة لسحب وإفلات الملفات
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && validateFile(file)) {
      setFileName(`تم اختيار الملف: ${file.name}`);
    } else {
      setFileName("لم يتم اختيار ملف");
    }
  };

  // منع السلوك الافتراضي للسحب
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  

  return (
    <div>
      <div className="file-upload-container">
        <div className="file-upload">
          <input   multiple className="file-input"   id="fileInput"  type="file"  onChange={handleFileChange} /><label
            className="file-label"
            htmlFor="fileInput"
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <i className="upload-icon">📁</i>
            <p> Drag & Drop your files here or click to upload</p>
          </label>
        </div>
        <p className="file-name">{fileName}</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
    </div>
    );
}

export default UploadSection;





// import { useState } from "react";
// import "./UploadSection.css";

// function UploadSection() {
//   const [fileName, setFileName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [player, setPlayer] = useState("");
//   const [manualPlayer, setManualPlayer] = useState("");
//   const [stadium, setStadium] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [playerExists, setPlayerExists] = useState(false);

//   const players = [" Sarah Said", "Mohamed Ahmed ", "Ahmed Mohamed"]; // قائمة اللاعبين
//   const stadiums = [" Cairo ", " Alexandria", "Kafr elshiekh"]; // قائمة الملاعب

//   // دالة للتحقق من حجم الملف
//   const validateFile = (file) => {
//     const maxSize = 50 * 1024 * 1024; // 50MB
//     if (file.size > maxSize) {
//       setErrorMessage("الملف كبير جدًا. الحد الأقصى للحجم هو 50MB.");
//       return false;
//     }
//     setErrorMessage("");
//     return true;
//   };

//   // دالة عند اختيار الملف
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && validateFile(file)) {
//       setFileName(`تم اختيار الملف: ${file.name}`);
//     } else {
//       setFileName("");
//     }
//   };

//   // دالة لسحب وإفلات الملفات
//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file && validateFile(file)) {
//       setFileName(`تم اختيار الملف: ${file.name}`);
//     } else {
//       setFileName("لم يتم اختيار ملف");
//     }
//   };

//   // منع السلوك الافتراضي للسحب
//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   // دالة للتحقق من وجود اللاعب على السيرفر
//   const checkPlayerExists = async () => {
//     if (!manualPlayer) {
//       alert("الرجاء إدخال اسم اللاعب");
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/check-player?name=${manualPlayer}`);
//       const data = await response.json();
//       if (data.exists) {
//         setPlayerExists(true);
//         setPlayer(manualPlayer);
//         alert("اللاعب موجود على السيرفر");
//       } else {
//         setPlayerExists(false);
//         alert("اللاعب غير موجود على السيرفر");
//       }
//     } catch (error) {
//       console.error("حدث خطأ أثناء التحقق من اللاعب:", error);
//       alert("حدث خطأ أثناء التحقق من اللاعب");
//     }
//   };

//   // دالة لتحميل الملف وإرسال البيانات
//   const handleUpload = async () => {
//     if (!fileName || !player || !stadium) {
//       alert("الرجاء اختيار ملف وملء جميع الحقول");
//       return;
//     }

//     const file = document.querySelector(".file-input").files[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("player", player);
//     formData.append("stadium", stadium);

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       setResult(data);
//     } catch (error) {
//       console.error("حدث خطأ أثناء التحميل:", error);
//       alert("حدث خطأ أثناء معالجة الملف");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="file-upload-container">
//         <div className="file-upload">
//           <input
//             multiple
//             className="file-input"
//             id="fileInput"
//             type="file"
//             onChange={handleFileChange}
//           />
//           <label
//             className="file-label"
//             htmlFor="fileInput"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//           >
//             <i className="upload-icon">📁</i>
//             <p> Drag & Drop your files here or click to upload</p>
//           </label>
//         </div>
//         <p className="file-name">{fileName}</p>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </div>

//       <div className="form-group">
//         <label>Choose Player</label>
//         <select value={player} onChange={(e) => setPlayer(e.target.value)}>
//           <option value=""> Choose Player</option>
//           {players.map((player, index) => (
//             <option key={index} value={player}>
//               {player}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="form-group">
//         <label> Add Player</label>
//         <input
//           type="text"
//           value={manualPlayer}
//           onChange={(e) => setManualPlayer(e.target.value)}
//           placeholder="Add Player"
//         />
//         <button onClick={checkPlayerExists}> Check Player</button>
//       </div>

//       <div className="form-group">
//         <label>Choose Court</label>
//         <select value={stadium} onChange={(e) => setStadium(e.target.value)}>
//           <option value=""> Choose Court</option>
//           {stadiums.map((stadium, index) => (
//             <option key={index} value={stadium}>
//               {stadium}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button onClick={handleUpload} disabled={loading}>
//         {loading ? "Loading ..." : "Upload and Analyze"}
//       </button>

//       {result && (
//         <div className="result">
//           <h2>النتيجة:</h2>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}

//       <div className="input-div">
//         <input
//           className="input"
//           name="file"
//           type="file"
//           onChange={handleFileChange}
//         />
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           strokeLinejoin="round"
//           strokeLinecap="round"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           fill="none"
//           stroke="currentColor"
//           className="icon"
//         >
//           <polyline points="16 16 12 12 8 16"></polyline>
//           <line y2="21" x2="12" y1="12" x1="12"></line>
//           <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
//           <polyline points="16 16 12 12 8 16"></polyline>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default UploadSection;