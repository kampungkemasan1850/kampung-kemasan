"use client";

import { motion, AnimatePresence } from "framer-motion";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSFREE_PROJECT_ID || "contactForm",
  );

  return (
    <div className="min-h-screen bg-[#F6F6EC] py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            {t("contact.title")}
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A051] mb-6">
                1. {t("contact.address_label")}
              </h3>
              <p className="text-2xl font-medium text-zinc-900 leading-tight">
                Jl. Nyai Ageng Arem-Arem No.3 <br />
                Pekelingan, Gresik, East Java <br />
                Indonesia, 61114
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A051] mb-6">
                02. {t("contact.contact_label")}
              </h3>
              <div className="space-y-2">
                <p className="text-xl font-medium">
                  Nino Hartono +62 822 3113 5937
                </p>
                <p className="text-xl font-medium">
                  Mualim (pokdarwis) +62 812-3245-430
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A051] mb-6">
                03. {t("contact.social_label")}
              </h3>
              <div className="flex gap-6">
                {[
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/kampungkemasanheritage/",
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/profile.php?id=61590609142929&ref=ig_profile_ac&target=61590609142929&funlid=R7tf7HGT3q67DzDQ",
                  },
                  { name: "Email", url: "mailto:kampungkemasan1850@gmail.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-sm font-bold uppercase border-b border-black pb-1 hover:text-[#C9A051] hover:border-[#C9A051] transition-all"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
                >
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tighter">
                    {t("contact.success_title")}
                  </h2>
                  <p className="text-zinc-500 font-light">
                    {t("contact.success_desc")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-[#C9A051] transition-colors"
                    >
                      {t("contact.form_name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors text-zinc-900 placeholder:text-zinc-200"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-xs text-red-600 mt-1 block"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-[#C9A051] transition-colors"
                    >
                      {t("contact.form_email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors text-zinc-900 placeholder:text-zinc-200"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-xs text-red-600 mt-1 block"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-[#C9A051] transition-colors"
                    >
                      {t("contact.form_message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={t("contact.form_message_placeholder")}
                      className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors text-zinc-900 placeholder:text-zinc-200 resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-xs text-red-600 mt-1 block"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#C9A051] transition-all duration-500 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : t("contact.form_submit")}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
