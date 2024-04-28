import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const About = () => {
  const navigate = useNavigate();

  // Yapay bilgiler
  const aboutContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed ullamcorper, velit eget luctus viverra, turpis ligula 
    ultrices justo, a ultricies libero eros a neque. Vestibulum 
    varius turpis a orci lacinia posuere. Sed commodo nibh nec 
    elit eleifend, ut auctor arcu rhoncus. Duis consectetur 
    facilisis ultrices. Curabitur viverra, magna a dignissim 
    convallis, ligula dui gravida ex, ac vulputate dolor lectus 
    vitae erat. Maecenas id sapien justo. Sed in lorem lacus. 
    Nullam ut lorem eu sapien vehicula scelerisque in nec velit. 
    Pellentesque habitant morbi tristique senectus et netus et 
    malesuada fames ac turpis egestas. Vivamus et interdum nunc. 
    Etiam mattis metus eu quam sollicitudin rutrum. 
    Duis ut purus nec mi laoreet maximus. 
    Duis laoreet risus nec dolor gravida consequat. 
    Vestibulum eget eros ex. Nullam sit amet nunc bibendum, 
    cursus nulla id, fermentum magna. Vestibulum sodales, 
    libero et auctor efficitur, nulla est bibendum nisl, 
    eu vestibulum justo eros sed neque. Nam vel risus 
    condimentum, malesuada ipsum vel, fermentum dui. 
    Nulla scelerisque turpis ac tellus commodo, 
    et molestie nisi consectetur. 
    Sed ultrices felis vel mi finibus faucibus. 
    Suspendisse eu sagittis mi, in interdum elit. 
    Nullam suscipit mi vel odio ullamcorper lobortis. 
    Vivamus egestas, eros in hendrerit tempus, tortor 
    odio egestas nulla, sit amet venenatis odio leo vel turpis.
  `;

  return (
    <div className="container mt-5">
      <h1>Hakkımızda</h1>
      <p>{aboutContent}</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={() => navigate('/contact')}>Bize Ulaşın</button>
      </div>
    </div>
  );
}

export default About;
