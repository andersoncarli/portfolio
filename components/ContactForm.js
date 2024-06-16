export default function ContactForm() {
  return (
    <form className="bg-white shadow-md p-6 rounded-lg">
      <div className="mb-4">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="mb-4">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="mb-4">
        <label>Message</label>
        <textarea></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
