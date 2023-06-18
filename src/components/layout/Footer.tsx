function Footer() {
  return (
    <footer
      style={{
        height: "70px",
        background: "#fbf6d6",
        width: "100%",
        position: "fixed",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "50px" }}>
        <div className="footer-left">
          <p>Bom prato restaurante </p>
        </div>
        <div className="footer-left">
          <p>Telefone: (47) 9973-30597</p>
        </div>
        <div className="footer-right">
          <p>Email: contato@bomprato.com.br</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
