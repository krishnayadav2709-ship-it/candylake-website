"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General enquiry", message: "" });
  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <section className="contact-section" id="contact">
    <motion.span className="contact-candy contact-candy-one" aria-hidden="true" animate={reduce ? undefined : { y: [0, -18, 0], rotate: [-14, 8, -14] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>🍬</motion.span>
    <motion.span className="contact-candy contact-candy-two" aria-hidden="true" animate={reduce ? undefined : { y: [0, 14, 0], rotate: [10, -12, 10] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: .4 }}>🍭</motion.span>
    <motion.span className="contact-candy contact-candy-three" aria-hidden="true" animate={reduce ? undefined : { y: [0, -12, 0], rotate: [-8, 12, -8] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: .8 }}>🍬</motion.span>
    <div className="section contact-layout"><motion.div className="contact-copy" data-reveal="left" initial={reduce ? false : { x: -30 }} whileInView={{ x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, ease: "easeOut" }}><div className="eyebrow light-eyebrow">Have a question? <span>✳</span></div><h1>Let&apos;s make<br /><em>something</em><br />sweet happen.</h1><p>For product enquiries, partnerships or just to say hello, drop us a message.</p>
      <div className="contact-details"><a href="mailto:info@candylake.in"><Mail size={18} /> info@candylake.in</a><a href="tel:+916263460660"><Phone size={18} /> +91 62634 60660</a><div><MapPin size={18} /> Indore, Madhya Pradesh, India</div></div>
    </motion.div>
    <motion.form className="contact-form" data-reveal="right" onSubmit={submit} initial={reduce ? false : { y: 34, scale: .98 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease: "easeOut", delay: .1 }}><div className="form-heading">YOUR MESSAGE</div>
      {sent ? <div className="form-success"><CheckCircle2 size={36} /><h3>Thanks for reaching out!</h3><button type="button" className="text-link" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "General enquiry", message: "" }); }}>Send another message</button></div> : <>
        <label>Your name<input name="name" value={form.name} onChange={update} placeholder="What should we call you?" required /></label>
        <div className="form-two"><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91" /></label></div>
        <label>What&apos;s this about?<select name="subject" value={form.subject} onChange={update}><option>General enquiry</option><option>Product enquiry</option><option>Export / Partnership</option><option>Careers</option></select></label>
        <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little more..." rows={4} required /></label>
        <button className="button button-yellow" type="submit">Send message </button>
        
      </>}
    </motion.form></div>
  </section>;
}
