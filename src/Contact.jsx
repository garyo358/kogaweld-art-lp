import React from "react";

export default function Contact() {
  return (
    <div className="section" style={{maxWidth:600, margin:"60px auto 0 auto", background:'#fff', borderRadius:14, boxShadow:'0 2px 18px rgba(0,0,0,0.07)', padding:'40px 24px'}}>
      <h2 className="section-title" style={{marginBottom:24}}>お問い合わせ先</h2>
      <div style={{fontSize:'1.08rem', lineHeight:2, color:'#444'}}>
        <p>ご依頼・ご相談・ご質問は下記メールアドレスまでご連絡ください。</p>
        <p style={{fontWeight:'bold', color:'#b89f5b', fontSize:'1.15rem', marginTop:20, marginBottom:20}}>
          koga.misakihome@gmail.com
        </p>
        <p>※ご希望内容・ご予算・納期などもお気軽にご相談ください。</p>
      </div>
      <div style={{marginTop:32}}>
        <a href="/" style={{color:'#b89f5b', fontWeight:'bold', textDecoration:'underline'}}>トップページへ戻る</a>
      </div>
    </div>
  );
}
