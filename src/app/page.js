"use client";

import Image from "next/image";
import { IoLogoWhatsapp, IoLogoTiktok, IoLogoInstagram, IoMailUnreadOutline, IoShareOutline } from "react-icons/io5";

export default function Home() {
  const handleCopyLink = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link).then(() => {
      alert("Enlace copiado al portapapeles / Link copied to clipboard");
    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  };

  return (
    <>
      <div className="image-background"></div>

      <div className="container">
        <div className="img-container">
          <Image 
            className="img_logo" 
            src="/Logo Pagina.png" 
            alt="Logo Full Accesorios" 
            width={100} 
            height={100} 
            priority
          />
        </div>
        <h2 className="TitleFull">Full Accesorios</h2>
        
        <div className="links-container">
          <a href="https://wa.me/584249731823" target="_blank" rel="noopener noreferrer" className="link-card whatsapp">
            <IoLogoWhatsapp className="icons" />
            <p>Whatsapp</p>
            <div className="share-icon" title="Copiar enlace" onClick={(e) => handleCopyLink(e, "https://wa.me/584249731823")}>
              <IoShareOutline className="icons" />
            </div>
          </a>
          
          <a href="https://www.tiktok.com/@full_accesorios?_t=ZS-8srvsbo9cwi&_r=1" target="_blank" rel="noopener noreferrer" className="link-card tiktok">
            <IoLogoTiktok className="icons" />
            <p>TikTok</p>
            <div className="share-icon" title="Copiar enlace" onClick={(e) => handleCopyLink(e, "https://www.tiktok.com/@full_accesorios?_t=ZS-8srvsbo9cwi&_r=1")}>
              <IoShareOutline className="icons" />
            </div>
          </a>
          
          <a href="https://www.instagram.com/fullaccesoriosccs?utm_source=qr&igsh=NWdvdnh4c3VnMzRx" target="_blank" rel="noopener noreferrer" className="link-card instagram">
            <IoLogoInstagram className="icons" />
            <p>Instagram</p>
            <div className="share-icon" title="Copiar enlace" onClick={(e) => handleCopyLink(e, "https://www.instagram.com/fullaccesoriosccs?utm_source=qr&igsh=NWdvdnh4c3VnMzRx")}>
              <IoShareOutline className="icons" />
            </div>
          </a>     
          
          <a href="mailto:ccsfullaccesorios@gmail.com" target="_blank" rel="noopener noreferrer" className="link-card email">
            <IoMailUnreadOutline className="icons" />
            <p>Correo</p>
            <div className="share-icon" title="Copiar enlace" onClick={(e) => handleCopyLink(e, "mailto:ccsfullaccesorios@gmail.com")}>
              <IoShareOutline className="icons" />
            </div>
          </a>
        </div>
      </div>
      
      <footer className="footer">Copyright ©2025 Full Accesorios P&E, C.A.</footer>
    </>
  );
}
