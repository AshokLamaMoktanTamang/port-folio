import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { ContactFormData } from "../types";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Location</p>
                  <p className="text-slate-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-teal-600"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-teal-600"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="What is this about?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-all hover:shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
