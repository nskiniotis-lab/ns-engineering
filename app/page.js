export default function Home() {
  const services = [
    "Πυρασφάλεια",
    "Η/Μ Μελέτες",
    "ΠΕΑ",
    "ΥΔΕ",
    "Ενεργειακές Λύσεις",
    "Αυτοματισμοί Κτιρίων"
  ];

  return (
    <main
      style={{
        background:
          "linear-gradient(135deg,#050816,#0f172a,#111827,#1e293b)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "82px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          NS Engineering
        </h1>

        <p
          style={{
            maxWidth: "900px",
            fontSize: "24px",
            color: "#cbd5e1",
            lineHeight: "1.7",
          }}
        >
          Μηχανολόγος Μηχανικός • Πυρασφάλεια • Η/Μ Μελέτες •
          ΠΕΑ • ΥΔΕ • Ενεργειακές Λύσεις
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#services"
            style={{
              background: "#22c55e",
              padding: "18px 36px",
              borderRadius: "14px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Υπηρεσίες
          </a>

          <a
            href="#contact"
            style={{
              border: "2px solid white",
              padding: "18px 36px",
              borderRadius: "14px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Επικοινωνία
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "120px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "70px",
          }}
        >
          Υπηρεσίες
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "40px",
                backdropFilter: "blur(10px)",
                transition: "0.3s",
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                {service}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                Επαγγελματικές λύσεις με αξιοπιστία,
                σύγχρονη τεχνογνωσία και πλήρη
                τεχνική υποστήριξη.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          Επικοινωνία
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          nsengineering@email.com
        </p>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "22px",
          }}
        >
          +30 69XX XXX XXX
        </p>
      </section>
    </main>
  );
}
