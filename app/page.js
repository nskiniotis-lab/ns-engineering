export default function Home() {
  return (
    <main style={{color:'white'}}>
      <section style={{
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        padding:'40px',
        background:'linear-gradient(135deg,#0f172a,#111827,#1e293b)'
      }}>
        <h1 style={{fontSize:'72px',marginBottom:'10px'}}>NS Engineering</h1>
        <p style={{fontSize:'24px',color:'#cbd5e1',maxWidth:'900px'}}>
          Μηχανολόγος Μηχανικός • ΠΕΑ • ΥΔΕ • Πυρασφάλεια • Η/Μ Μελέτες • Ενεργειακές Λύσεις
        </p>

        <div style={{marginTop:'40px',display:'flex',gap:'20px',flexWrap:'wrap',justifyContent:'center'}}>
          <a href="#services" style={{
            padding:'16px 30px',
            background:'#22c55e',
            color:'white',
            borderRadius:'14px',
            textDecoration:'none',
            fontWeight:'bold'
          }}>
            Υπηρεσίες
          </a>

          <a href="#contact" style={{
            padding:'16px 30px',
            border:'2px solid white',
            color:'white',
            borderRadius:'14px',
            textDecoration:'none',
            fontWeight:'bold'
          }}>
            Επικοινωνία
          </a>
        </div>
      </section>

      <section id="services" style={{padding:'100px 20px',background:'#111827'}}>
        <h2 style={{textAlign:'center',fontSize:'48px',marginBottom:'60px'}}>Υπηρεσίες</h2>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
          gap:'25px',
          maxWidth:'1200px',
          margin:'0 auto'
        }}>
          {[
            'ΠΕΑ - Ενεργειακά Πιστοποιητικά',
            'ΥΔΕ',
            'Μελέτες Πυρασφάλειας',
            'Η/Μ Μελέτες',
            'Ενεργειακές Αναβαθμίσεις',
            'Τεχνική Υποστήριξη'
          ].map((item, i) => (
            <div key={i} style={{
              background:'#1e293b',
              padding:'35px',
              borderRadius:'20px',
              border:'1px solid #334155'
            }}>
              <h3 style={{fontSize:'24px'}}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{padding:'100px 20px',textAlign:'center'}}>
        <h2 style={{fontSize:'48px'}}>Επικοινωνία</h2>
        <p style={{fontSize:'20px',color:'#cbd5e1'}}>Τηλέφωνο: 69XXXXXXXX</p>
        <p style={{fontSize:'20px',color:'#cbd5e1'}}>Email: info@nsengineering.gr</p>
      </section>
    </main>
  )
}