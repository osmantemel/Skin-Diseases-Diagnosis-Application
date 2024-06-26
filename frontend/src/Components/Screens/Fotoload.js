import React, { useState } from 'react';
import '../../css/Fotoload.css';
import { useNavigate } from 'react-router-dom';

const FotoLoad = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    setLoading(true); // Butona basıldığında loading state'ini true yap
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        console.log(base64Image);
        sendBase64ToApi(base64Image);
        setTimeout(() => {
          navigate('/pie-chart'); // Programatik olarak PieChart rotasına gitme
          setLoading(false); // Rotaya yönlendirme yapıldığında loading state'ini false yap
        }, 15000); // 5 saniye bekletme süresi
      };
      reader.readAsDataURL(file);
    }
  };


  const sendBase64ToApi = async (base64Image) => {
    try {
      const cevap = await fetch('http://localhost:5225/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imgId: 0,
          img: base64Image,
          disease: "null",
          diseaserates: "null",
          description: "null",
        }),
      });

      if (cevap.ok) {
        console.log('Resim başarıyla gönderildi!');
      } else {
        console.error('Resim gönderme işleminde bir hata oluştu.');
      }
    } catch (hata) {
      console.error('Resim gönderme isteğinizde bir sorun oluştu:', hata);
    }
  };

  return (
    <div
      className={`photo-upload ${dragging ? 'active' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h1>Fotoğraf Yükleme</h1>
      <div className="upload-area">
        <label htmlFor="fileInput" className="file-label">
          Fotoğraf Seç
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={handleChange}
          className="file-input"
        />
        <p>veya</p>
        <p className="drop-text">Dosyayı sürükleyip bırakın</p>
      </div>
      {file && (
        <div className="uploaded-file">
          <p>Yüklenen Dosya: {file.name}</p>
        </div>
      )}
      {loading ? (
        <div className="loading-spinner">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <button onClick={handleSubmit} className="upload-button">
          Gönder
        </button>
      )}
    </div>
  );
};

export default FotoLoad;
