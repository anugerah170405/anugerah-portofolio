import { motion } from "motion/react";
import { useState } from "react";
import { Send } from "lucide-react";

import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/SectionHeader";
import emailjs from "@emailjs/browser";
import { AVAILABILITY, SOCIALS } from "@/data/ContactData";


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await emailjs.send("service_pk6hwih", "template_q07pnqu", formData, "l9TWCCLZXQLSo3ulz");
    setSent(true);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Simulate sending
  //   setSent(true);
  //   setTimeout(() => setSent(false), 4000);
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   window.location.href = `mailto:anugerahgari170405@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  // };



  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-foreground/10 bg-transparent text-foreground/80 text-sm placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors";

  return (
    <>
      <div className="min-h-screen px-6 pt-36 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionHeading
              label="Let's Talk"
              title="Get in Touch"
              description="Have a project in mind, a question, or just want to say hi? I'd love to hear from you."
            />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* LEFT — Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-xl p-8 border border-foreground/8"
                style={{ background: "rgba(128,128,128,0.025)" }}
              >
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                      ✓
                    </div>
                    <h3 className="text-xl mb-2 text-foreground/80">Email Sent!</h3>
                    <p className="text-sm"
                      style={{ color: "rgba(var(--text-secondary-rgb), 0.75)" }}>
                      Thanks for reaching out. I'll get back to you within 1–2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
                          Name
                        </label>
                        <input
                          required
                          className={inputClass}
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, name: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className={inputClass}
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, email: e.target.value }))
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
                        Subject
                      </label>
                      <input
                        required
                        className={inputClass}
                        placeholder="Project inquiry, collaboration, etc."
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, subject: e.target.value }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={6}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell me about your project, timeline, and budget..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, message: e.target.value }))
                        }
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm transition-colors border border-border hover:border-foreground/20 hover:text-blue-500 w-full"
                      style={{ background: "rgba(128,128,128,0.07)" }}

                    >
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* RIGHT — Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Direct email
              <div
                className="rounded-xl p-6 border border-foreground/8"
                style={{ background: "rgba(128,128,128,0.025)" }}
              >
                <p className="text-[10px] uppercase tracking-widest text-foreground/28 mb-3">
                  Direct Email
                </p>
                <a
                  href="mailto:hello@anugerahgari.com"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground/85 transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">hello@anugerahgari.com</span>
                </a>
                <div className="flex items-center gap-2 mt-3">
                  <MapPin className="w-3.5 h-3.5 text-foreground/25" />
                  <span className="text-xs text-foreground/30">Jakarta, Indonesia · Remote Available</span>
                </div>
              </div> */}

              {/* Availability */}
              <div
                className="rounded-xl p-6 border border-foreground/8"
                style={{ background: "rgba(128,128,128,0.025)" }}
              >
                <p className="text-[10px] uppercase tracking-widest text-foreground/28 mb-4">
                  Availability
                </p>
                <div className="space-y-2.5">
                  {AVAILABILITY.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm text-foreground/50">{item.label}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border ${item.available
                          ? "text-green-500/70 border-green-500/20"
                          : "text-foreground/28 border-foreground/8"
                          }`}
                        style={{
                          background: item.available
                            ? "rgba(34,197,94,0.06)"
                            : "rgba(128,128,128,0.04)",
                        }}
                      >
                        {item.available ? "Open" : "Closed"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div
                className="rounded-xl p-6 border border-foreground/8"
                style={{ background: "rgba(128,128,128,0.025)" }}
              >
                <p className="text-[10px] uppercase tracking-widest text-foreground/28 mb-4">
                  Social
                </p>
                <div className="space-y-3">
                  {SOCIALS.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 hover:text-blue-500 transition-colors"
                    >
                      <social.icon className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-foreground/28 uppercase tracking-widest">
                          {social.label}
                        </p>
                        <p className="text-sm">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
