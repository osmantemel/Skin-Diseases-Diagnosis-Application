import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [resimVerisi, setResimVerisi] = useState({});

  useEffect(() => {
    const resimleriGetir = async () => {
      try {
        const cevap = await fetch('http://localhost:5225/api/images/15');
        const veri = await cevap.json();
        console.log(veri);
        setResimVerisi(veri);
      } catch (hata) {
        console.error('Getirme isteğinizde bir sorun oluştu:', hata);
      }
    };

    resimleriGetir();
  }, []);

  if (!resimVerisi.imgId) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div>
      <h2>Resim Detayları</h2>
      <p>Resim ID: {resimVerisi.imgId}</p>
      <p>Resim Adı: {resimVerisi.img}</p>
      <p>Açıklama: {resimVerisi.description}</p>
    </div>
  );
};

export default MyComponent;
