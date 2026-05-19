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
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
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
          "radial-gradient(circle at top,#081633 0%,#020617 70%)",
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
          padding: "18px 45px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(2,6,23,0.92)",
          position: "sticky",
          top: 0,
          zIndex: 999,
          backdropFilter: "blur(10px)"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px"
          }}
        >
          <img
            src="https://i.imgur.com/o6K8l2D.png"
            alt="logo"
            style={{
              width: "105px",
              objectFit: "contain"
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: "34px",
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
          <a href="#services" style={navLink}>
            Υπηρεσίες
          </a>

          <a href="#about" style={navLink}>
            Σχετικά
          </a>

          <a href="#contact" style={navLink}>
            Επικοινωνία
          </a>

          <a href="#contact" style={headerBtn}>
            Επικοινωνήστε μαζί μας
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1450px",
          margin: "auto",
          padding: "70px 45px",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "55px",
          alignItems: "center"
        }}
      >
        <div>
          <div
            style={{
              color: "#4f7dff",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "18px",
              fontSize: "14px"
            }}
          >
            ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
          </div>

          <h1
            style={{
              fontSize: "88px",
              lineHeight: "0.95",
              marginTop: 0,
              marginBottom: "30px"
            }}
          >
            NS Engineering
          </h1>

          <p
            style={{
              fontSize: "28px",
              lineHeight: "1.8",
              color: "#cbd5e1",
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
            <a href="#services" style={mainBtn}>
              Οι Υπηρεσίες μας →
            </a>

            <a href="#contact" style={outlineBtn}>
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
              borderRadius: "30px",
              objectFit: "cover",
              boxShadow: "0 25px 70px rgba(0,0,0,0.45)"
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1450px",
          margin: "auto",
          padding: "20px 45px 100px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "65px"
          }}
        >
          <div
            style={{
              color: "#4f7dff",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "10px"
            }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </div>

          <h2
            style={{
              fontSize: "68px",
              marginTop: 0,
              marginBottom: "25px"
            }}
          >
            Υπηρεσίες
          </h2>

          <p
            style={{
              fontSize: "23px",
              lineHeight: "1.8",
              color: "#cbd5e1",
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
                  "linear-gradient(180deg,#09132d 0%, #050b1c 100%)",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 15px 45px rgba(0,0,0,0.35)"
              }}
            >
              <img
                src={service.image}
                alt=""
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "34px" }}>
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
                    lineHeight: "1.9",
                    fontSize: "21px"
                  }}
                >
                  {service.text}
                </p>

                <div
                  style={{
                    marginTop: "28px",
                    color: "#4f7dff",
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
          maxWidth: "1450px",
          margin: "auto",
          padding: "0 45px 80px"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#0b132f 0%, #060d22 100%)",
            borderRadius: "30px",
            padding: "45px 50px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr auto",
            gap: "40px",
            alignItems: "center",
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
              fontSize: "20px"
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
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "25px 45px",
          display: "flex",
          justifyContent: "space-between",
          color: "#94a3b8",
          fontSize: "17px"
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

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500"
};

const headerBtn = {
  background: "#4361ee",
  color: "white",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px"
};

const mainBtn = {
  background: "#4361ee",
  color: "white",
  padding: "18px 30px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "19px"
};

const outlineBtn = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "18px 30px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "19px"
};

const contactBtn = {
  background: "#4361ee",
  color: "white",
  padding: "20px 34px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "19px"
};
