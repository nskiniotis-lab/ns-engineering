export default function Home() {
  const services = [
    "Πυρασφάλεια",
    "Η/Μ Μελέτες",
    "ΠΕΑ",
    "ΥΔΕ",
    "Ενεργειακές Λύσεις",
    "Αυτοματισμοί",
  ];

  return (
    <main
      style={{
        background: "#060b16",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          backdropFilter: "blur(12px)",
          background: "rgba(6,11,22,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h2 style={{ margin: 0 }}>NS Engineering</h2>

          <nav
            style={{
              display: "flex",
              gap: "28px",
              fontSize: "15px",
            }}
          >
            <a href="#services" style={linkStyle}>
              Υπηρεσίες
            </a>

            <a href="#about" style={linkStyle}>
              Σχετικά
            </a>

            <a href="#contact" style={linkStyle}>
              Επικοινωνία
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "140px 20px 80px",
          background:
            "radial-gradient(circle at top right, rgba(59,130,246,0.25), transparent 30%), linear-gradient(135deg,#060b16,#0f172a)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: "#60a5fa",
                marginBottom: "18px",
                letterSpacing: "1px",
                fontWeight: "bold",
              }}
            >
              ΜΗΧΑΝΟΛΟΓΙΚΕΣ & ΕΝΕΡΓΕΙΑΚΕΣ ΛΥΣΕΙΣ
            </div>

            <h1
              style={{
                fontSize: "72px",
                lineHeight: 1,
                marginBottom: "24px",
              }}
            >
              NS
              <br />
              Engineering
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "22px",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Σύγχρονες μελέτες, πυρασφάλεια, Η/Μ λύσεις και ενεργειακές
              υπηρεσίες με επαγγελματισμό και αξιοπιστία.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <a href="#services" style={primaryButton}>
                Οι Υπηρεσίες μας
              </a>

              <a href="#contact" style={secondaryButton}>
                Επικοινωνία
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.9))",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "40px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div style={statCard}>
                  <h3 style={statNumber}>10+</h3>
                  <p style={statText}>Χρόνια Εμπειρίας</p>
                </div>

                <div style={statCard}>
                  <h3 style={statNumber}>300+</h3>
                  <p style={statText}>Ολοκληρωμένα Έργα</p>
                </div>

                <div style={statCard}>
                  <h3 style={statNumber}>24/7</h3>
                  <p style={statText}>Υποστήριξη</p>
                </div>

                <div style={statCard}>
                  <h3 style={statNumber}>100%</h3>
                  <p style={statText}>Επαγγελματισμός</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <h2 style={{ fontSize: "52px", marginBottom: "20px" }}>
            Υπηρεσίες
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Ολοκληρωμένες λύσεις μηχανολογικών, ενεργειακών και
            πυροπροστασίας μελετών.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: "35px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: "rgba(59,130,246,0.15)",
                  marginBottom: "25px",
                }}
              />

              <h3 style={{ fontSize: "26px", marginBottom: "14px" }}>
                {service}
              </h3>

              <p style={{ color: "#94a3b8", lineHeight: 1.7 }}>
                Επαγγελματικές λύσεις με αξιοπιστία, σύγχρονη τεχνογνωσία και
                πλήρη τεχνική υποστήριξη.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "120px 20px",
          background: "#0b1220",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "52px", marginBottom: "30px" }}>
            Μηχανική με Υπευθυνότητα
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.9,
              color: "#cbd5e1",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            Η NS Engineering παρέχει σύγχρονες τεχνικές λύσεις με έμφαση στην
            ποιότητα, την αξιοπιστία και την άμεση εξυπηρέτηση κάθε έργου.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background:
              "linear-gradient(135deg,#111827,#0f172a)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            padding: "60px 40px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "52px", marginBottom: "20px" }}>
            Επικοινωνία
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              marginBottom: "40px",
            }}
          >
            Επικοινωνήστε μαζί μας για μελέτες, αδειοδοτήσεις και τεχνικές
            λύσεις.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              fontSize: "20px",
            }}
          >
            <div>📞 +30 69XX XXX XXX</div>
            <div>✉️ nsengineering@email.com</div>
            <div>📍 Αθήνα, Ελλάδα</div>
          </div>
        </div>
      </section>
    </main>
  );
}

const linkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
};

const primaryButton = {
  background: "#2563eb",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const statCard = {
  background: "rgba(255,255,255,0.03)",
  borderRadius: "20px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
};

const statNumber = {
  fontSize: "42px",
  margin: "0 0 10px",
  color: "#60a5fa",
};

const statText = {
  color: "#cbd5e1",
  margin: 0,
};
