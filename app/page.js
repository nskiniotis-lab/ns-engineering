export default function Home() {
  const services = [
    {
      title: "Πυρασφάλεια",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Μελέτες πυροπροστασίας, sprinkler, πυρανίχνευση και ολοκληρωμένες λύσεις ενεργητικής και παθητικής πυρασφάλειας για επαγγελματικούς χώρους και κτίρια.",
    },

    {
      title: "Η/Μ Μελέτες",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Σχεδιασμός και μελέτες ηλεκτρομηχανολογικών εγκαταστάσεων με σύγχρονη προσέγγιση και τεχνική αξιοπιστία.",
    },

    {
      title: "ΠΕΑ",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης για κατοικίες και επαγγελματικούς χώρους με γρήγορη και αξιόπιστη εξυπηρέτηση.",
    },

    {
      title: "ΥΔΕ",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Υπεύθυνες Δηλώσεις Ηλεκτρολόγου Εγκαταστάτη για κατοικίες, επαγγελματικούς χώρους και επιχειρήσεις.",
    },

    {
      title: "Ενεργειακές Λύσεις",
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Σύγχρονες ενεργειακές εφαρμογές, αντλίες θερμότητας και λύσεις εξοικονόμησης ενέργειας υψηλής απόδοσης.",
    },

    {
      title: "Αυτοματισμοί",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Έξυπνα συστήματα αυτοματισμού και τεχνικές λύσεις για σύγχρονες εγκαταστάσεις και κτίρια.",
    },
  ];

  return (
    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
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
          background: "rgba(5,8,22,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "22px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#2563eb,#38bdf8)",
              }}
            />

            <h2 style={{ margin: 0 }}>
              NS Engineering
            </h2>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "28px",
            }}
          >
            <a href="#services" style={linkStyle}>
              Υπηρεσίες
            </a>

            <a href="#projects" style={linkStyle}>
              Έργα
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
          padding: "140px 20px 100px",
          background:
            "radial-gradient(circle at top right, rgba(37,99,235,0.25), transparent 25%), linear-gradient(135deg,#050816,#0f172a)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                color: "#38bdf8",
                fontWeight: "bold",
                marginBottom: "18px",
                letterSpacing: "1px",
              }}
            >
              ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
            </div>

            <h1
              style={{
                fontSize: "84px",
                lineHeight: 1,
                marginBottom: "28px",
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
                lineHeight: 1.8,
                maxWidth: "650px",
              }}
            >
              Σύγχρονες μηχανολογικές, ενεργειακές και
              πυροπροστασίας λύσεις με επαγγελματισμό,
              αξιοπιστία και τεχνική υπευθυνότητα.
            </p>

            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "45px",
                flexWrap: "wrap",
              }}
            >
              <a href="#services" style={primaryButton}>
                Υπηρεσίες
              </a>

              <a href="#contact" style={secondaryButton}>
                Επικοινωνία
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              style={{
                height: "560px",
                borderRadius: "32px",
                overflow: "hidden",
                position: "relative",
                background:
                  "url('https://images.unsplash.com/photo-1581092919535-7146ff1a590b?q=80&w=1200&auto=format&fit=crop') center/cover",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(5,8,22,0.7), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "20px",
                    padding: "22px",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>
                    Smart Engineering
                  </h3>

                  <p
                    style={{
                      color: "#dbeafe",
                      marginBottom: 0,
                    }}
                  >
                    ΠΕΑ • Πυρασφάλεια • Η/Μ Μελέτες
                  </p>
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
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <h2
            style={{
              fontSize: "58px",
              marginBottom: "20px",
            }}
          >
            Υπηρεσίες
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              maxWidth: "750px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Ολοκληρωμένες υπηρεσίες μηχανολογικού
            σχεδιασμού, πυρασφάλειας και ενεργειακών
            εφαρμογών.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(135deg,#111827,#0f172a)",
                borderRadius: "28px",
                overflow: "hidden",
                border:
                  "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  height: "240px",
                  background: `url(${service.image}) center/cover`,
                }}
              />

              <div style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "30px",
                    marginBottom: "16px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.9,
                    marginBottom: "30px",
                  }}
                >
                  {service.desc}
                </p>

                <button style={cardButton}>
                  Περισσότερα
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          background: "#0b1220",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "58px",
              marginBottom: "70px",
              textAlign: "center",
            }}
          >
            Πρόσφατα Έργα
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "28px",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  background: "#111827",
                }}
              >
                <div
                  style={{
                    height: "260px",
                    background:
                      "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop') center/cover",
                  }}
                />

                <div style={{ padding: "28px" }}>
                  <h3>Τεχνικό Έργο #{item}</h3>

                  <p
                    style={{
                      color: "#94a3b8",
                      lineHeight: 1.8,
                    }}
                  >
                    Σύγχρονη τεχνική μελέτη και
                    επαγγελματική υποστήριξη με έμφαση
                    στην ποιότητα και ασφάλεια.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "58px",
              marginBottom: "30px",
            }}
          >
            Σύγχρονη Μηχανική
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.9,
              color: "#cbd5e1",
            }}
          >
            Η NS Engineering προσφέρει ολοκληρωμένες
            τεχνικές υπηρεσίες με σύγχρονη τεχνογνωσία,
            επαγγελματισμό και υπεύθυνη προσέγγιση σε
            κάθε έργο.
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
            borderRadius: "36px",
            padding: "70px 40px",
            background:
              "linear-gradient(135deg,#111827,#0f172a)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            Επικοινωνία
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              marginBottom: "50px",
            }}
          >
            Επικοινωνήστε μαζί μας για μελέτες,
            αδειοδοτήσεις και τεχνικές λύσεις.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "22px",
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
  padding: "18px 34px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "18px 34px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const cardButton = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "14px 24px",
  borderRadius: "12px",
  fontWeight: "bold",
  cursor: "pointer",
};
