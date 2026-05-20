import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeading } from "../../../components/ui/SectionHeader";
import emailjs from "@emailjs/browser";
import { AVAILABILITY, SOCIALS } from "@/data/ContactData";
import { TextAreaField, TextField } from "@/app/components/ui/TextField";


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await emailjs.send(
        "service_pk6hwih",
        "template_q07pnqu",
        formData,
        "l9TWCCLZXQLSo3ulz"
      );

      setSent(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen px-6 pt-36 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div
            className="mb-16"
          >
            <SectionHeading
              label="Let's Talk"
              title="Get in Touch"
              description="Have a project in mind, a question, or just want to say hi? I'd love to hear from you."
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* LEFT — Form */}
            <div
              className="lg:col-span-3"
            >
              <div
                className="rounded-xl p-8 border border-foreground/8"
                style={{ background: "rgba(128,128,128,0.025)" }}
              >
                {sent ? (
                  <div
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
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <TextField
                        label="Name"
                        placeholder="Your Name"
                        value={formData.name}
                        isSubmitting={isSubmitting}
                        onChange={(value) =>
                          setFormData((p) => ({ ...p, name: value }))
                        }
                      />
                      <TextField
                        type="email"
                        label="Email"
                        placeholder="your@email.com"
                        value={formData.email}
                        isSubmitting={isSubmitting}
                        onChange={(value) =>
                          setFormData((p) => ({ ...p, email: value }))
                        }
                      />
                    </div>

                    <TextField
                      label="Subject"
                      placeholder="Project inquiry, collaboration, etc."
                      value={formData.subject}
                      isSubmitting={isSubmitting}
                      onChange={(value) =>
                        setFormData((p) => ({ ...p, subject: value }))
                      }
                    />

                    <TextAreaField
                      label="Message"
                      placeholder="Tell me about your project, timeline, and budget..."
                      value={formData.message}
                      isSubmitting={isSubmitting}
                      onChange={(value) =>
                        setFormData((p) => ({ ...p, message: value }))
                      }
                    />

                    <button
                      type="submit"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm transition-colors border border-border hover:border-foreground/20 hover:text-blue-500 w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:text-current"
                      style={{ background: "rgba(128,128,128,0.07)" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting && (
                        <div
                          aria-hidden="true"
                          className="h-3.5 w-3.5 border-2 border-current rounded-full border-t-transparent animate-spin ">
                        </div>
                      )}
                      {isSubmitting ? "Submitting..." : "Send Message"}
                      {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT — Info */}
            <div
              className="lg:col-span-2 space-y-5"
            >
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
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-3 hover:text-blue-500 transition-colors"
                    >
                      <social.icon className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-foreground/28 uppercase tracking-widest">
                          {social.label}
                        </p>
                        <p className="text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
