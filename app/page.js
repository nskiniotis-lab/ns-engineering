export default function Home() {
  const services = [
    {
      title: "Πυρασφάλεια",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      description:
        "Μελέτες πυροπροστασίας, sprinkler, πυρανίχνευση και ολοκληρωμένες λύσεις ενεργητικής και παθητικής πυρασφάλειας."
    },
    {
      title: "Η/Μ Μελέτες",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Σχεδιασμός και μελέτες ηλεκτρομηχανολογικών εγκαταστάσεων με σύγχρονη προσέγγιση και τεχνική αξιοπιστία."
    },
    {
      title: "ΠΕΑ",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      description:
        "Έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης για κατοικίες και επαγγελματικούς χώρους."
    },
    {
      title: "ΥΔΕ",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Υπεύθυνες Δηλώσεις Ηλεκτρολόγου Εγκαταστάτη για κατοικίες, επαγγελματικούς χώρους και επιχειρήσεις."
    }
  ];

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, #071a44 0%, #020817 60%)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          backdropFilter: "blur(12px)",
          background: "rgba(2,8,23,0.75)",
          zIndex: 100
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "18px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}
          >
            <img
              src="https://i.imgur.com/Bm7Q2lR.png"
              alt="NS Engineering"
              style={{
                width: "70px",
                objectFit: "contain"
              }}
            />

            <h2
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: "bold"
              }}
            >
              NS Engineering
            </h2>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "35px",
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
                background: "#2563eb",
                padding: "14px 24px",
                borderRadius: "14px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Επικοινωνήστε μαζί μας
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "90px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
          alignItems: "center"
        }}
      >
        <div>
          <p
            style={{
              color: "#3b82f6",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "20px"
            }}
          >
            ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
          </p>

          <h1
            style={{
              fontSize: "84px",
              lineHeight: 1,
              marginBottom: "30px"
            }}
          >
            NS Engineering
          </h1>

          <p
            style={{
              fontSize: "28px",
              lineHeight: 1.7,
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
              marginTop: "45px",
              display: "flex",
              gap: "20px"
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
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              borderRadius: "28px",
              height: "650px",
              objectFit: "cover",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "30px 40px 100px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px"
          }}
        >
          <p
            style={{
              color: "#3b82f6",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </p>

          <h2
            style={{
              fontSize: "64px",
              margin: "10px 0 20px"
            }}
          >
            Υπηρεσίες
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "24px",
              lineHeight: 1.7
            }}
          >
            Ολοκληρωμένες υπηρεσίες μηχανολογικού
            σχεδιασμού και τεχνικών λύσεων με έμφαση
            στην ποιότητα, την ασφάλεια και την
            αξιοπιστία.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg,#0f172a,#07142d)",
                borderRadius: "28px",
                overflow: "hidden",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.3)"
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "35px"
                }}
              >
                <h3
                  style={{
                    fontSize: "38px",
                    marginBottom: "20px"
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.8,
                    fontSize: "22px"
                  }}
                >
                  {service.description}
                </p>

                <a
                  href="#contact"
                  style={{
                    display: "inline-block",
                    marginTop: "28px",
                    color: "#3b82f6",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "20px"
                  }}
                >
                  Περισσότερα →
                </a>
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
          margin: "0 auto",
          padding: "20px 40px 100px"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#07142d,#0f172a)",
            borderRadius: "30px",
            padding: "70px",
            border:
              "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <p
            style={{
              color: "#3b82f6",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ
          </p>

          <h2
            style={{
              fontSize: "54px",
              marginTop: "15px"
            }}
          >
            Μηχανική με ευθύνη
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              fontSize: "24px",
              maxWidth: "1000px"
            }}
          >
            Η NS Engineering προσφέρει σύγχρονες
            τεχνικές λύσεις με έμφαση στην ποιότητα,
            την ασφάλεια και την άμεση εξυπηρέτηση.
            Στόχος μας είναι η παροχή υπεύθυνων και
            αξιόπιστων υπηρεσιών για κατοικίες,
            επαγγελματικούς χώρους και επιχειρήσεις.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px 100px"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#07142d,#0f172a)",
            borderRadius: "30px",
            padding: "60px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "50px",
            alignItems: "center",
            border:
              "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "48px",
                marginBottom: "20px"
              }}
            >
              Επικοινωνήστε μαζί μας
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.8,
                fontSize: "22px"
              }}
            >
              Είμαστε στη διάθεσή σας για μελέτες,
              αδειοδοτήσεις και τεχνικές λύσεις.
            </p>
          </div>

          <div
            style={{
              color: "#cbd5e1",
              lineHeight: 2.2,
              fontSize: "22px"
            }}
          >
            <div>📞 +30 69XX XXX XXX</div>
            <div>✉️ nsengineering@email.com</div>
            <div>📍 Αθήνα, Ελλάδα</div>
          </div>

          <div
            style={{
              textAlign: "right"
            }}
          >
            <a href="mailto:nsengineering@email.com" style={primaryBtn}>
              Επικοινωνία
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          padding: "30px 40px",
          color: "#94a3b8",
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <div>
          © 2024 NS Engineering. Όλα τα δικαιώματα
          διατηρούνται.
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px"
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
  fontSize: "18px"
};

const primaryBtn = {
  background: "#2563eb",
  padding: "18px 34px",
  borderRadius: "16px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  fontSize: "20px"
};

const secondaryBtn = {
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "18px 34px",
  borderRadius: "16px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  fontSize: "20px"
};
