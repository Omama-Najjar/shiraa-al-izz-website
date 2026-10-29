import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { navItems } from '../data/content';
import '../styles/header.css';

export default function Header({lang,setLang,active}) {
 const [open,setOpen]=useState(false); const ar=lang==='ar'; const rightItems=navItems.slice(0,3); const leftItems=navItems.slice(3);
 return <header className="site-header">
  <div className="header-top">
   <div className="language-switch" aria-label="Language selector"><button className={lang==='ar'?'selected':''} onClick={()=>setLang('ar')}>عربي</button><button className={lang==='en'?'selected':''} onClick={()=>setLang('en')}>EN</button></div>
   <div className="header-contact"><a href="https://wa.me/966534648751" target="_blank" rel="noreferrer"><MessageCircle size={17}/><span>0534648751</span></a><i></i><a href="tel:+966575253084"><Phone size={17}/><span>0575253084</span></a></div>
  </div>
  <div className="header-main">
   <button className="mobile-menu" aria-label={ar?'فتح القائمة':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   <a className="brand-lockup" href="/" aria-label={ar?'مؤسسة شراع العز للخيام':'Sharaa Al-Izz Tents'}><img src="/images/brand-lockup.png" alt="مؤسسة شراع العز للخيام"/></a>
   <nav className="nav-links nav-left">{leftItems.map(item=><a key={item.key} className={active===item.key?'active':''} href={item.path}>{ar?item.ar:item.en}</a>)}</nav><nav className="nav-links nav-right">{rightItems.map(item=><a key={item.key} className={active===item.key?'active':''} href={item.path}>{ar?item.ar:item.en}</a>)}</nav><nav className={open?'nav-mobile open':'nav-mobile'}>{navItems.map(item=><a key={item.key} className={active===item.key?'active':''} href={item.path} onClick={()=>setOpen(false)}>{ar?item.ar:item.en}</a>)}</nav>
   <a className="mobile-whatsapp" href="https://wa.me/966534648751" target="_blank" rel="noreferrer"><MessageCircle size={18}/></a>
  </div>
 </header>
}
