import React, { useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendDatabase = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5225/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 0,
          fullName: fullName,
          email: email,
          phone: phone,
          message: message,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        console.error('Feedback gönderme işleminde bir hata oluştu.');
      }
    } catch (error) {
      console.error('Feedback gönderme isteğinizde bir sorun oluştu:', error);
    }
  };

  return (
    <div className='container mt-5'>
      <h1>İletişim Sayfası</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={sendDatabase}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">İsim Soyisim</label>
              <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Telefon Numarası</label>
              <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mesaj</label>
              <textarea className="form-control" id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Gönder</button>
            </div>
            {submitSuccess && <p className="text-success mt-3 text-center fs-5">Geri bildiriminiz başarıyla gönderildi!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
