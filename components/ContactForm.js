export default function ContactForm() {
  return (
    <form className="bg-white shadow-md p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full mt-2 p-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full mt-2 p-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea className="w-full mt-2 p-2 border rounded-md"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
    </form>
  );
}
