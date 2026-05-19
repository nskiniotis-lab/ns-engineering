export default function Home() {
  const services = [
    {
      title: "Πυρασφάλεια",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      text:
        "Μελέτες πυροπροστασίας, sprinkler, πυρανίχνευση και ολοκληρωμένες λύσεις ενεργητικής και παθητικής πυρασφάλειας."
    },
    {
      title: "Η/Μ Μελέτες",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      text:
        "Σχεδιασμός και μελέτες ηλεκτρομηχανολογικών εγκαταστάσεων με σύγχρονη προσέγγιση και τεχνική αξιοπιστία."
    },
    {
      title: "ΠΕΑ",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      text:
        "Έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης για κατοικίες και επαγγελματικούς χώρους."
    },
    {
      title: "ΥΔΕ",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
      text:
        "Υπεύθυνες Δηλώσεις Ηλεκτρολόγου Εγκαταστάτη για κατοικίες, επαγγελματικούς χώρους και επιχειρήσεις."
    }
  ];

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top,#08122f 0%,#020617 70%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          background: "rgba(2,6,23,0.9)",
          backdropFilter: "blur(10px)",
          zIndex: 100
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src="https://i.imgur.com/o6K8l2D.png"
            alt="logo"
            style={{
              width: "90px",
              objectFit: "contain"
            }}
          />

          <h2
            style={{
              fontSize: "34px",
              margin: 0,
              fontWeight: "bold"
            }}
          >
            NS Engineering
          </h2>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px"
          }}
        >
          <a href="#services" style={navStyle}>
            Υπηρεσίες
          </a>

          <a href="#about" style={navStyle}>
            Σχετικά
          </a>

          <a href="#contact" style={navStyle}>
            Επικοινωνία
          </a>

          <a href="#contact" style={topBtn}>
            Επικοινωνήστε μαζί μας
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "auto",
          padding: "70px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "50px",
          alignItems: "center"
        }}
      >
        <div>
          <div
            style={{
              color: "#4b7cff",
              fontWeight: "bold",
              marginBottom: "18px",
              letterSpacing: "2px",
              fontSize: "15px"
            }}
          >
            ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
          </div>

          <h1
            style={{
              fontSize: "86px",
              lineHeight: "0.95",
              marginBottom: "30px",
              marginTop: 0
            }}
          >
            NS Engineering
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "28px",
              lineHeight: "1.8",
              maxWidth: "700px"
            }}
          >
            Σύγχρονες μηχανολογικές, ενεργειακές και
            πυροπροστασίας λύσεις με επαγγελματισμό,
            αξιοπιστία και τεχνική ευθύνη.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px"
            }}
          >
            <a href="#services" style={heroBtn}>
              Οι Υπηρεσίες μας →
            </a>

            <a href="#contact" style={heroOutline}>
              Επικοινωνία
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              borderRadius: "28px",
              objectFit: "cover",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5)"
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1500px",
          margin: "auto",
          padding: "20px 40px 120px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px"
          }}
        >
          <div
            style={{
              color: "#4b7cff",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "10px"
            }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </div>

          <h2
            style={{
              fontSize: "64px",
              marginTop: 0,
              marginBottom: "25px"
            }}
          >
            Υπηρεσίες
          </h2>

          <p
            style={{
              fontSize: "24px",
              color: "#cbd5e1",
              lineHeight: "1.8",
              maxWidth: "950px",
              margin: "auto"
            }}
          >
            Ολοκληρωμένες υπηρεσίες μηχανολογικού σχεδιασμού
            και τεχνικών λύσεων με έμφαση στην ποιότητα,
            την ασφάλεια και την αξιοπιστία.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "35px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg,rgba(10,18,40,0.98),rgba(6,12,30,0.98))",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 15px 50px rgba(0,0,0,0.35)"
              }}
            >
              <img
                src={service.image}
                alt=""
                style={{
                  width: "100%",
                  height: "270px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "35px" }}>
                <h3
                  style={{
                    fontSize: "42px",
                    marginTop: 0,
                    marginBottom: "22px"
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "22px",
                    lineHeight: "1.9"
                  }}
                >
                  {service.text}
                </p>

                <div
                  style={{
                    marginTop: "28px",
                    color: "#4b7cff",
                    fontWeight: "bold",
                    fontSize: "20px"
                  }}
                >
                  Περισσότερα →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "1500px",
          margin: "auto",
          padding: "0 40px 80px"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,rgba(17,24,39,0.95),rgba(9,15,35,0.95))",
            borderRadius: "30px",
            padding: "45px 50px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr auto",
            alignItems: "center",
            gap: "40px",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "40px",
                marginTop: 0,
                marginBottom: "15px"
              }}
            >
              Επικοινωνήστε μαζί μας
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "22px",
                lineHeight: "1.8"
              }}
            >
              Είμαστε στη διάθεσή σας για μελέτες,
              αδειοδοτήσεις και τεχνικές λύσεις.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              color: "#cbd5e1",
              fontSize: "21px"
            }}
          >
            <div>📞 +30 69XX XXX XXX</div>
            <div>✉️ nsengineering@email.com</div>
            <div>📍 Αθήνα, Ελλάδα</div>
          </div>

          <a href="#" style={contactBtn}>
            Επικοινωνία →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "25px 40px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "#94a3b8",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "18px"
        }}
      >
        <div>© 2024 NS Engineering. Όλα τα δικαιώματα διατηρούνται.</div>

        <div style={{ display: "flex", gap: "25px" }}>
          <span>Πολιτική Απορρήτου</span>
          <span>Όροι Χρήσης</span>
        </div>
      </footer>
    </main>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500"
};

const topBtn = {
  background: "#4361ee",
  color: "white",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "17px"
};

const heroBtn = {
  background: "#4361ee",
  color: "white",
  padding: "18px 30px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "20px"
};

const heroOutline = {
  border: "1px solid rgba(255,255,255,0.25)",
  color: "white",
  padding: "18px 30px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "20px"
};

const contactBtn = {
  background: "#4361ee",
  color: "white",
  padding: "20px 34px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "20px"
};
