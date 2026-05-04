export default function Home() {
  return (
    <main style={{
      background:"#0F3D3E",
      color:"white",
      minHeight:"100vh",
      textAlign:"center",
      padding:"40px"
    }}>

      <div style={{
        width:"120px",
        height:"6px",
        margin:"20px auto",
        borderRadius:"10px",
        background:"linear-gradient(to right, black, white, green, red)"
      }}/>

      <h1 style={{color:"#C8A96A",fontSize:"40px"}}>WELPCO</h1>

      <p>فخامة بمعايير عالية</p>
      <p style={{opacity:0.6}}>Refined by Standards</p>

      <a href="https://wa.me/905XXXXXXXXX"
         style={{
           display:"inline-block",
           marginTop:"20px",
           padding:"10px 20px",
           background:"#1F7A63",
           borderRadius:"8px",
           color:"white",
           textDecoration:"none"
         }}>
         اطلب عبر واتساب
      </a>

    </main>
  );
}
