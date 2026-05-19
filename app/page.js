const services = [
  {
    title: "Πυρασφάλεια",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    text:
      "Μελέτες πυροπροστασίας, sprinkler, πυρανίχνευση και ολοκληρωμένες λύσεις ενεργητικής και παθητικής πυρασφάλειας.",
  },
  {
    title: "Η/Μ Μελέτες",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    text:
      "Μελέτες ηλεκτρομηχανολογικών εγκαταστάσεων με σύγχρονη προσέγγιση και τεχνική αξιοπιστία.",
  },
  {
    title: "ΠΕΑ",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    text:
      "Έκδοση Πιστοποιητικών Ενεργειακής Απόδοσης για κατοικίες και επαγγελματικούς χώρους.",
  },
  {
    title: "ΥΔΕ",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    text:
      "Υπεύθυνες Δηλώσεις Ηλεκτρολόγου Εγκαταστάτη για κατοικίες και επαγγελματικούς χώρους.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top,#0b1738 0%,#020617 70%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(2,6,23,0.9)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "16px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="https://i.imgur.com/o6K8l2D.png"
              alt="logo"
              style={{
                width: "80px",
                objectFit: "contain",
              }}
            />

            <h2 style={{ margin: 0 }}>NS Engineering</h2>
          </div>

          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <a href="#services" style={nav}>
              Υπηρεσίες
            </a>

            <a href="#about" style={nav}>
              Σχετικά
            </a>

            <a href="#contact" style={nav}>
              Επικοινωνία
            </a>

            <a href="#contact" style={buttonTop}>
              Επικοινωνήστε μαζί μας
            </a>
          </div>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "70px 30px",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: "#4b7cff",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "18px",
            }}
          >
            ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "0.95",
              marginTop: 0,
              marginBottom: "24px",
            }}
          >
            NS Engineering
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "24px",
              lineHeight: "1.8",
            }}
          >
            Σύγχρονες μηχανολογικές, ενεργειακές και
            πυροπροστασίας λύσεις με επαγγελματισμό,
            αξιοπιστία και τεχνική ευθύνη.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "35px",
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
              height: "520px",
              objectFit: "cover",
              borderRadius: "26px",
            }}
          />
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 30px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              color: "#4b7cff",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Υπηρεσίες
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "22px",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
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
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg,#09132d 0%, #050b1c 100%)",
                borderRadius: "26px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src={service.image}
                alt=""
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    fontSize: "38px",
                    marginTop: 0,
                    marginBottom: "18px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.9",
                    fontSize: "20px",
                  }}
                >
                  {service.text}
                </p>

                <div
                  style={{
                    marginTop: "24px",
                    color: "#4b7cff",
                    fontWeight: "bold",
                  }}
                >
                  Περισσότερα →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px 80px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#0b132f 0%, #060d22 100%)",
            borderRadius: "28px",
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "36px",
                marginTop: 0,
                marginBottom: "14px",
              }}
            >
              Επικοινωνήστε μαζί μας
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "20px",
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
              gap: "14px",
              color: "#cbd5e1",
              fontSize: "19px",
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
    </main>
  );
}

const nav = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
};

const buttonTop = {
  background: "#4361ee",
  color: "white",
  padding: "14px 20px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
};

const mainBtn = {
  background: "#4361ee",
  color: "white",
  padding: "18px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const outlineBtn = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "18px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const contactBtn = {
  background: "#4361ee",
  color: "white",
  padding: "18px 30px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};
