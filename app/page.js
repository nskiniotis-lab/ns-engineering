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
        "Μελέτες ηλεκτρομηχανολογικών εγκαταστάσεων με σύγχρονη τεχνική προσέγγιση και αξιοπιστία."
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
          "radial-gradient(circle at top, #0d1b4d 0%, #020617 70%)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          background: "rgba(2,6,23,0.9)",
          backdropFilter: "blur(10px)",
          zIndex: 10
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="https://i.imgur.com/o6K8l2D.png"
            alt="NS Engineering"
            style={{
              width: "70px",
              objectFit: "contain"
            }}
          />

          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold"
            }}
          >
            NS Engineering
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
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

          <a
            href="#contact"
            style={{
              background: "#4361ee",
              padding: "12px 20px",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Επικοινωνήστε μαζί μας
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "100px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
          alignItems: "center"
        }}
      >
        <div>
          <div
            style={{
              color: "#4ea1ff",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "20px"
            }}
          >
            ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
          </div>

          <h1
            style={{
              fontSize: "82px",
              lineHeight: "1",
              marginBottom: "30px"
            }}
          >
            NS Engineering
          </h1>

          <p
            style={{
              fontSize: "25px",
              lineHeight: "1.8",
              color: "#cbd5e1",
              maxWidth: "700px"
            }}
          >
            Σύγχρονες μηχανολογικές, ενεργειακές και πυροπροστασίας
            λύσεις με επαγγελματισμό, αξιοπιστία και τεχνική ευθύνη.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px"
            }}
          >
            <a href="#services" style={primaryBtn}>
              Οι Υπηρεσίες μας
            </a>

            <a href="#contact" style={secondaryBtn}>
              Επικοινωνία
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              borderRadius: "30px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.45)"
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "40px 60px 120px"
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
              color: "#4ea1ff",
              fontWeight: "bold",
              marginBottom: "10px",
              letterSpacing: "2px"
            }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </div>

          <h2
            style={{
              fontSize: "60px",
              marginBottom: "20px"
            }}
          >
            Υπηρεσίες
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "22px",
              maxWidth: "850px",
              margin: "auto",
              lineHeight: "1.8"
            }}
          >
            Ολοκληρωμένες υπηρεσίες μηχανολογικού σχεδιασμού και τεχνικών
            λύσεων με έμφαση στην ποιότητα, την ασφάλεια και την αξιοπιστία.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(15,23,42,0.85)",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "0.3s"
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

              <div style={{ padding: "35px" }}>
                <h3
                  style={{
                    fontSize: "36px",
                    marginBottom: "20px"
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.9",
                    fontSize: "20px"
                  }}
                >
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "0 60px 120px"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
            borderRadius: "35px",
            padding: "70px",
            border: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <div
            style={{
              color: "#4ea1ff",
              fontWeight: "bold",
              marginBottom: "10px",
              letterSpacing: "2px"
            }}
          >
            ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ
          </div>

          <h2
            style={{
              fontSize: "54px",
              marginBottom: "30px"
            }}
          >
            Τεχνικές υπηρεσίες με υπευθυνότητα
          </h2>

          <p
            style={{
              fontSize: "23px",
              lineHeight: "2",
              color: "#cbd5e1",
              maxWidth: "1000px"
            }}
          >
            Η NS Engineering παρέχει σύγχρονες και αξιόπιστες τεχνικές
            υπηρεσίες σε ιδιώτες και επαγγελματίες, με έμφαση στην ποιότητα,
            την ασφάλεια και τη σωστή τεχνική υποστήριξη κάθε έργου.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "0 60px 120px"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(17,24,39,0.95), rgba(15,23,42,0.95))",
            borderRadius: "35px",
            padding: "60px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
            border: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "42px",
                marginBottom: "15px"
              }}
            >
              Επικοινωνήστε μαζί μας
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "21px",
                lineHeight: "1.8"
              }}
            >
              Είμαστε στη διάθεσή σας για μελέτες,
              <br />
              αδειοδοτήσεις και τεχνικές λύσεις.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "21px",
              color: "#cbd5e1"
            }}
          >
            <div>📞 +30 69XX XXX XXX</div>
            <div>✉️ nsengineering@email.com</div>
            <div>📍 Αθήνα, Ελλάδα</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "30px 60px",
          color: "#94a3b8",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>© 2024 NS Engineering</div>

        <div
          style={{
            display: "flex",
            gap: "25px"
          }}
        >
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
  fontWeight: "500"
};

const primaryBtn = {
  background: "#4361ee",
  padding: "18px 30px",
  borderRadius: "14px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px"
};

const secondaryBtn = {
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "18px 30px",
  borderRadius: "14px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px"
};
