export default function Home() {
  return (
    <main
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#030b1a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="https://i.imgur.com/o6K8l2D.png"
            alt="logo"
            style={{
              width: "90px",
            }}
          />

          <h2 style={{ margin: 0 }}>NS Engineering</h2>
        </div>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#" style={nav}>
            Υπηρεσίες
          </a>

          <a href="#" style={nav}>
            Σχετικά
          </a>

          <a href="#" style={nav}>
            Επικοινωνία
          </a>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "70px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: "#4b7cff",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            ΜΗΧΑΝΟΛΟΓΟΣ ΜΗΧΑΝΙΚΟΣ
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "0.95",
              marginTop: 0,
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
            <a href="#" style={mainBtn}>
              Οι Υπηρεσίες μας
            </a>

            <a href="#" style={outlineBtn}>
              Επικοινωνία
            </a>
          </div>
        </div>

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
      </section>

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 40px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              color: "#4b7cff",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginTop: 0,
            }}
          >
            Υπηρεσίες
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "30px",
          }}
        >
          <Card
            title="Πυρασφάλεια"
            image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            text="Μελέτες πυροπροστασίας, sprinkler και πυρανίχνευση."
          />

          <Card
            title="Η/Μ Μελέτες"
            image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
            text="Μελέτες ηλεκτρομηχανολογικών εγκαταστάσεων."
          />

          <Card
            title="ΠΕΑ"
            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
            text="Πιστοποιητικά ενεργειακής απόδοσης."
          />

          <Card
            title="ΥΔΕ"
            image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
            text="Υπεύθυνες δηλώσεις ηλεκτρολόγου."
          />
        </div>
      </section>
    </main>
  );
}

function Card({ title, image, text }) {
  return (
    <div
      style={{
        background: "#081225",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "230px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "28px" }}>
        <h3
          style={{
            fontSize: "36px",
            marginTop: 0,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.8",
            fontSize: "20px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

const nav = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
};

const mainBtn = {
  background: "#4361ee",
  color: "white",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const outlineBtn = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};
