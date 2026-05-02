"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SoftAurora from "@/components/ui/SoftAurora";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    focus: "Strategic Advisory",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!scriptUrl || scriptUrl === "YOUR_APPS_SCRIPT_WEB_APP_URL_HERE") {
      setStatus("error");
      setErrorMessage("Apps Script URL is not configured. Please check .env.local");
      return;
    }

    try {
      // Use URLSearchParams for form-encoded data (best for Apps Script compatibility)
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("focus", formData.focus);
      formBody.append("message", formData.message);

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Required for Apps Script web apps
        cache: "no-cache",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // With mode: 'no-cors', we can't see the response body, but we can assume success if it doesn't throw
      setStatus("success");
      setFormData({ name: "", email: "", focus: "Strategic Advisory", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to send inquiry. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Aurora Background */}
      <div className="fixed inset-0 z-[0] opacity-30 mix-blend-screen pointer-events-none">
        <SoftAurora
          speed={0.4}
          scale={1.3}
          brightness={1.2}
          color1="#1A3B5C"
          color2="#F59E0B"
        />
      </div>

      <div className="container-main relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <span className="text-overline mb-6">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight">
            Begin your journey to <span className="italic text-[var(--accent)]">the top</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-20">

          {/* Left Column - Contact Info (Bento Style) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* HQ Card */}
            <div className="relative bg-white/[0.02] border border-white/5 p-8 rounded-3xl overflow-hidden group hover:border-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 via-transparent to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 transition-all duration-500 z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-6">
                  <span className="text-[var(--accent)] font-serif text-xl">HQ</span>
                </div>
                <h2 className="text-2xl text-white mb-2 font-serif group-hover:text-[var(--accent)] transition-colors">Global Headquarters</h2>
                <p className="text-[var(--text-secondary)] mb-1">Alpha Apex Advisory Service</p>
                <p className="text-[var(--text-tertiary)]">Doha, Qatar</p>
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="relative bg-white/[0.02] border border-white/5 p-8 rounded-3xl overflow-hidden group hover:border-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-[var(--accent)]/0 group-hover:from-blue-500/10 transition-all duration-500 z-0" />
              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <h2 className="text-xl text-white mb-4 font-serif">Direct Connect</h2>
                  <div className="space-y-3">
                    <a href="https://wa.me/97470079333" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-white transition-colors group/link">
                      <span className="w-8 h-px bg-white/20 group-hover/link:bg-[var(--accent)] transition-colors" />
                      WhatsApp: +974 7007 9333
                    </a>
                    <a href="mailto:apexgroupalpha@gmail.com" className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-white transition-colors group/link">
                      <span className="w-8 h-px bg-white/20 group-hover/link:bg-blue-400 transition-colors" />
                      apexgroupalpha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <h2 className="text-xl text-white mb-4 font-serif">Social Reach</h2>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/alpha_apex_group?igsh=d2J6end3dmwwcW9h&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all">
                      IG
                    </a>
                    <a href="https://www.facebook.com/share/r/1B4TDMTLwt/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
                      FB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Premium Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative bg-white/[0.01] border border-white/5 p-10 lg:p-12 rounded-3xl backdrop-blur-md overflow-hidden h-full flex flex-col justify-center">
              {/* Form glowing accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-[80px] pointer-events-none" />

              <h3 className="text-2xl font-serif text-white mb-8 relative z-10">Request a Private Consultation</h3>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl text-white font-serif mb-2">Inquiry Received</h4>
                    <p className="text-[var(--text-secondary)]">An executive will contact you shortly.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-[var(--accent)] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--accent)] focus:bg-white/5 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-2">Corporate Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--accent)] focus:bg-white/5 transition-all"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-2">Inquiry Focus</label>
                      <div className="relative">
                        <select
                          name="focus"
                          value={formData.focus}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--accent)] focus:bg-white/5 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Strategic Advisory" className="bg-neutral-900">Strategic Advisory</option>
                          <option value="Digital Transformation" className="bg-neutral-900">Digital Transformation</option>
                          <option value="Leadership & Governance" className="bg-neutral-900">Leadership & Governance</option>
                          <option value="Operational Enquiry" className="bg-neutral-900">Operational Enquiry</option>
                          <option value="Other" className="bg-neutral-900">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-tertiary)]">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--accent)] focus:bg-white/5 transition-all resize-none"
                        placeholder="Describe your operational objectives or challenges..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      variant="primary"
                      className="w-full py-5 text-sm tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(200,150,62,0.3)] transition-shadow disabled:opacity-50"
                    >
                      {status === "submitting" ? "Processing..." : "Submit Executive Inquiry"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

