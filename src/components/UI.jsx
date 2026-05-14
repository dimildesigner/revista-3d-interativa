export default function UI() {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        zIndex: 10,
      }}
    >
      {/* Título e Descrição */}
      <div style={{ position: "absolute", top: "40px", left: "40px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "2.5rem",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#ffffff", // Forçado branco para aparecer no fundo preto
            lineHeight: 1,
          }}
        >
          REVISTA <span style={{ color: "#fff71e" }}>3D</span>
        </h1>
        <p
          style={{
            color: "#6f6f6f",
            opacity: 0.7,
            marginTop: "10px",
            maxWidth: "300px",
            fontSize: "1.2rem",
            letterSpacing: "6px",
          }}
        >
          INTERATIVA
        </p>
      </div>

      {/* Instruções */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          color: "#666666",
          textAlign: "right",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          opacity: 0.6,
          pointerEvents: "none", // Garante que o clique passe através do texto para a revista
        }}
      >
        USE O MOUSE PARA ROTACIONAR
        <br />
        CLIQUE ESQUERDO: PRÓXIMA PÁG
        <br />
        CLIQUE DIREITO: PÁG ANTERIOR
      </div>
    </div>
  );
}
