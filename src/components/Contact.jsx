const Contact = () => {
  return (
    <section className="py-24 text-gray-800 mx-48">
      <h2 className="text-3xl font-bold mb-12 text-center text-purple-700">Contact Us</h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Address:</h4>
            <p>123 Main St, City, Country</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Phone:</h4>
            <p>+1 234 567 890</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Email:</h4>
            <p>info@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            action="https://formspree.io/f/xdoqgadj"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              autoComplete="off"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              rows="5"
              required
              autoComplete="off"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded cursor-pointer hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="container mx-auto mt-16">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203530874!2d78.24323239564612!3d17.412281015627997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1707826035434!5m2!1sen!2sin" 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;


