export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contactez-nous</h1>
      <form action="https://formspree.io/f/your_form_id" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" rows="5" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
