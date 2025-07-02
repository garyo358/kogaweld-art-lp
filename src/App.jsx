import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";

const works = [
  {
    src: "./images/category-Japanese.jpeg",
    title: "和の調べ",
    desc: "日本の伝統美をモチーフにした重厚な鉄アート。空間に静かな存在感を与えます。"
  },
  {
    src: "./images/hawk-2.jpeg",
    title: "鷹の羽ばたき",
    desc: "羽を広げる躍動感を、溶接技術で立体的に仕上げました。空間を引き締める存在です。"
  },
  {
    src: "./images/sk24-owl-Large-1.jpeg",
    title: "フクロウの静寂",
    desc: "夜の静けさと知恵を象徴するフクロウを、金属の立体感で表現。見る角度で表情が変わります。"
  },
  {
    src: "./images/gallery%20preview2.jpg",
    title: "ギャラリープレビュー",
    desc: "様々なオーダーメイド作品の一部。お客様の想いを形にしています。"
  },
  {
    src: "./images/shigeyoshi-preview.jpg",
    title: "作家近影",
    desc: "制作現場での一コマ。金属と向き合う真摯な姿勢を感じてください。"
  },
];

export default function App() {
  return (
    <HashRouter>,
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

const navTabStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.08rem',
  padding: '0 26px',
  height: 44,
  display: 'flex',
  alignItems: 'center',
  borderRadius: 22,
  margin: '0 2px',
  position: 'relative',
  background: 'none',
  transition: 'background 0.18s, color 0.18s',
  boxShadow: 'none',
  cursor: 'pointer',
};

function HeaderNav() {
  return (
    <nav style={{
      width: '100%',
      background: 'rgba(35,35,35,0.96)',
      boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
      borderBottom: 'none',
      padding: '0',
      marginBottom: 0,
      zIndex: 20,
      position: 'relative',
    }}>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        gap: 0
      }}>
        {/* 新しいタブ構成 */}
        {[
          { label: 'トップ', to: '/', type: 'route' },
          { label: 'Story', to: '#story', type: 'anchor' },
          { label: 'Gallery', to: '#gallery', type: 'anchor' },
          { label: 'お問い合わせ', to: '/contact', type: 'route' },
          { label: 'アトリエ', to: 'https://koga-atelier.com/', type: 'external' }
        ].map(tab => {
          if (tab.type === 'external') {
            return (
              <a
                key={tab.label}
                href={tab.to}
                target="_blank"
                rel="noopener noreferrer"
                style={navTabStyle}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#b89f5b44';
                  e.currentTarget.style.color = '#b89f5b';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                {tab.label}
              </a>
            );
          } else if (tab.type === 'route') {
            return (
              <Link
                key={tab.label}
                to={tab.to}
                style={navTabStyle}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#b89f5b44';
                  e.currentTarget.style.color = '#b89f5b';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                {tab.label}
              </Link>
            );
          } else if (tab.type === 'anchor') {
            return (
              <a
                key={tab.label}
                href={tab.to}
                style={navTabStyle}
                onClick={e => {
                  e.preventDefault();
                  const id = tab.to.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
                  }
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#b89f5b44';
                  e.currentTarget.style.color = '#b89f5b';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                {tab.label}
              </a>
            );
          }
          return null;
        })}

      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <div className="hero" style={{
        position: 'relative',
        width: '100%',
        minHeight: '54vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden',
        marginBottom: 0
      }}>
        <img
          src="images/shigeyoshi-home.jpg"
          alt="古賀茂好 作家写真"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.55)'
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          padding: '64px 20px 64px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '2.7rem',
            marginBottom: 18,
            textShadow: '0 6px 24px rgba(0,0,0,0.27), 0 1px 0 #222'
          }}>
            金属に、温もりと物語を。
          </h1>
          <div className="hero-sub" style={{
            fontSize: '1.25rem',
            color: '#f7e8c8',
            fontWeight: 500,
            marginBottom: 24,
            textShadow: '0 2px 8px rgba(0,0,0,0.20)'
          }}>
            福岡発・溶接工芸作家<br />完全一点ものアート
          </div>
          <div style={{
            fontSize: '1.07rem',
            color: '#fff',
            opacity: 0.97,
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            marginBottom: 0
          }}>
            40年以上の経験で、<b>世界に一つ</b>の金属工芸を。
          </div>
        </div>
      </div>

      {/* ストーリー＆自己紹介 */}
      <section id="story" className="section" style={{marginTop: 0}}>
        <h2 className="section-title">Story ― 作家の想い</h2>
        <div className="story" style={{background: '#f9f7f3'}}>
          <p style={{fontSize: '1.12rem', lineHeight: 2}}>
            金属という冷たく無機質な素材に、<b>温かみ</b>や<b>物語</b>を吹き込む。<br />
            それが私の信念です。<br /><br />
            鉄やステンレスを自在に操り、
            <span style={{color:'#b89f5b'}}>一点もの</span>の工芸品を生み出してきました。<br />
            <span style={{fontWeight:500}}>「手仕事の温度」を感じる作品を、あなたの暮らしに。</span>
          </p>
        </div>
      </section>

      {/* 技術・作品ギャラリー */}
      <section id="gallery" className="section">
        <h2 className="section-title">Gallery ― 技術と作品</h2>
        <div className="story" style={{background:'#fff', padding:'32px 12px'}}>
          <div style={{display:'flex', flexWrap:'wrap', gap:32, justifyContent:'center'}}>
            {works.map((w, i) => (
              <div key={i} style={{width:220, background:'#f6f0e6', borderRadius:16, boxShadow:'0 2px 12px rgba(0,0,0,0.06)', overflow:'hidden', marginBottom:16}}>
                <img src={w.src} alt={w.title} style={{width:'100%', height:140, objectFit:'cover', borderBottom:'2px solid #b89f5b'}} />
                <div style={{padding:'14px 14px 10px 14px'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.08rem', color:'#b89f5b', marginBottom:4}}>{w.title}</div>
                  <div style={{fontSize:'0.98rem', color:'#444'}}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声・エピソード（後から追加可能） */}
      <section className="section">
        <h2 className="section-title">Voice ― お客様の声・制作エピソード</h2>
        <div className="story" style={{background:'#fff'}}>
          <p style={{color:'#888'}}>実際にご依頼いただいた方の声や、制作秘話などは今後追加予定です。</p>
        </div>
      </section>

      {/* アトリエ */}
      <section className="section">
        <h2 className="section-title">アトリエ</h2>
        <div className="story" style={{background:'#f9f7f3'}}>
          <p style={{fontSize:'1.08rem', lineHeight:2}}>
            福岡県内の工房にて、金属工芸作品を一点一点丁寧に制作しています。<br />
            ご見学やご相談もお気軽にどうぞ。<br />
            <a href="https://koga-atelier.com/" target="_blank" rel="noopener noreferrer" style={{color:'#b89f5b', fontWeight:'bold', textDecoration:'underline'}}>アトリエ公式サイトはこちら</a>
          </p>
        </div>
      </section>

      {/* CTA・問い合わせ導線 */}
      <div className="cta" style={{marginBottom:48}}>
        <div style={{fontSize:'1.1rem', marginBottom:32}}>作品のご購入等、ご要望があれば<br />下記よりお気軽にお問い合わせください。</div>
        <Link to="/contact" className="cta-btn" style={{fontSize:'1.15rem', marginTop:32, display:'inline-block'}}>お問い合わせ</Link>
      </div>

      {/* SNS・フッター */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} 古賀茂好｜溶接工芸アート</div>
      </footer>
    </>
  );
}
