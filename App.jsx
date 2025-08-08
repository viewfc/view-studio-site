import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Smartphone, Paintbrush, Image as ImageIcon, Rocket, ArrowRight, Palette, Wand2, Users, MessageCircle, Calendar, Clock, GraduationCap } from "lucide-react";

const presets = {
  view: {
    brand: "VIEW STUDIO",
    tagline: "เรียนรู้ AI แบบสนุก เข้าใจง่าย ใช้ได้จริง",
    primary: "#D4AF37",
    secondary: "#1F2937",
    accent: "#F59E0B",
    darkBg: "#0B0F16",
    lightBg: "rgba(212,175,55,0.15)",
  },
  default: {
    brand: "ห้องเรียนAiของฉัน",
    tagline: "เรียนรู้ AI แบบสนุก เข้าใจง่าย ใช้ได้จริง",
    primary: "#6D28D9",
    secondary: "#0EA5E9",
    accent: "#22C55E",
    darkBg: "#0B1020",
    lightBg: "#0ea5e920",
  },
};

const features = [
  { icon: Sparkles, title: "วิดีโอสั้น เข้าใจง่าย", desc: "เน้นตัวอย่างจริง เหมาะกับผู้เริ่มต้น" },
  { icon: Paintbrush, title: "โปรเจ็กต์ลงมือทำ", desc: "ทำงานจริง เช่น วิเคราะห์ข้อมูล/ใช้ AI สร้างคอนเทนต์" },
  { icon: ImageIcon, title: "เครื่องมือ AI พร้อมใช้", desc: "มีพร็อมพ์และโน้ตบุ๊กให้ดาวน์โหลด" },
  { icon: Smartphone, title: "เรียนได้ทุกที่", desc: "รองรับมือถือ แท็บเล็ต และเดสก์ท็อป" },
  { icon: Rocket, title: "เส้นทางอาชีพ", desc: "Roadmap ตั้งแต่พื้นฐานจนถึงทำงานได้" },
  { icon: Wand2, title: "ไลฟ์ Q&A + ชุมชน", desc: "ถามตอบรายสัปดาห์ มีคอมมูนิตี้ให้แลกเปลี่ยน" },
];

const plans = [
  { name: "Starter", price: "ฟรี", highlight: false, features: ["คอร์สพื้นฐาน", "ควิซ & โน้ต", "เข้าชุมชนเบื้องต้น"] },
  { name: "Pro", price: "฿490/เดือน", highlight: true, features: ["เข้าถึงคอร์สทั้งหมด", "โปรเจ็กต์จริง & แบบฝึกหัด", "ไลฟ์ Q&A รายสัปดาห์"] },
  { name: "Business", price: "฿1,490/เดือน", highlight: false, features: ["สำหรับทีม 5 ที่นั่ง", "แดชบอร์ดติดตามความก้าวหน้า", "เอกสารออกใบกำกับภาษี"] },
];

const steps = [
  { step: 1, title: "สมัครสมาชิก", desc: "สร้างบัญชีภายใน 1 นาที" },
  { step: 2, title: "เลือกคอร์ส/เส้นทาง", desc: "แนะนำตามเป้าหมายการเรียนของคุณ" },
  { step: 3, title: "เรียนและทำโปรเจ็กต์", desc: "ฝึกจากตัวอย่างจริง + รับฟีดแบ็ก" },
];

const courses = [
  { title: "AI พื้นฐาน", duration: "6 ชม.", level: "Beginner", price: "ฟรี", desc: "เข้าใจภาพรวม AI/LLM, ใช้อย่างปลอดภัยและมีประสิทธิภาพ" },
  { title: "Prompt Engineering", duration: "8 ชม.", level: "Intermediate", price: "฿1,290", desc: "ฝึกโครงสร้างพร็อมพ์ การไล่คำถาม และเทคนิคปรับจูนเอาต์พุต" },
  { title: "Python สำหรับ AI", duration: "12 ชม.", level: "Beginner–Intermediate", price: "฿1,990", desc: "พื้นฐาน Python, Pandas, การเตรียมข้อมูล และเรียกใช้โมเดล" },
];

const settings = {
  logoUrl: "/logo.png",
  lineLink: "https://line.me/ti/g/your-group",
  discordLink: "https://discord.gg/your-invite",
  liveQA: [
    { day: "พุธ", time: "20:00", tz: "ICT" },
    { day: "เสาร์", time: "10:00", tz: "ICT" },
  ],
};

export default function App() {
  const [presetKey, setPresetKey] = useState("view");
  const [biz, setBiz] = useState("เริ่มต้น AI / Data สำหรับงานของฉัน");
  const [logoUrlState, setLogoUrlState] = useState(settings.logoUrl || "");

  const theme = useMemo(() => presets[presetKey], [presetKey]);
  const gradient = `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`;

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 opacity-20" style={{ background: gradient }} />
      <nav className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {(logoUrlState || settings.logoUrl) ? (
              <img src={logoUrlState || settings.logoUrl} alt={theme.brand} className="h-7 w-7 rounded-xl object-cover" />
            ) : (<div className="h-7 w-7 rounded-xl" style={{ background: gradient }} />)}
            <span className="font-bold">{theme.brand}</span>
          </div>
          <div className="flex items-center gap-3">
            <select value={presetKey} onChange={(e) => setPresetKey(e.target.value)} className="bg-slate-900/60 border border-white/10 rounded-xl px-3 py-2 text-sm">
              <option value="view">🥇 โทนทอง-ดำ (VIEW Studio)</option>
              <option value="default">🎨 สไตล์เทค/ดีไซน์</option>
            </select>
            <a href="#templates" className="text-sm opacity-80 hover:opacity-100">คอร์ส</a>
            <a href="#roadmap" className="text-sm opacity-80 hover:opacity-100">โรดแมป</a>
            <a href="#schedule" className="text-sm opacity-80 hover:opacity-100">ตารางสด</a>
            <a href="#community" className="text-sm opacity-80 hover:opacity-100">ชุมชน</a>
            <a href="#pricing" className="text-sm opacity-80 hover:opacity-100">ราคา</a>
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100">ติดต่อ</a>
            <input id="logoInput" type="file" accept="image/*" className="hidden" onChange={(e) => {
              const file = e.target.files?.[0]; if (!file) return;
              const reader = new FileReader(); reader.onload = () => setLogoUrlState(String(reader.result || "")); reader.readAsDataURL(file);
            }} />
            <label htmlFor="logoInput" className="text-sm px-3 py-1.5 rounded-xl border border-white/10 hover:bg-white/5 cursor-pointer">อัปโหลดโลโก้</label>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              ห้องเรียน <span className="inline-block px-3 rounded-2xl" style={{ background: theme.lightBg }}>AI ของฉัน</span>
            </h1>
            <p className="mt-4 text-slate-300">{theme.tagline}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#templates" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold" style={{ background: gradient }}>
                <Sparkles className="h-4 w-4" /> เริ่มเรียนฟรี
              </a>
              <a href="#how" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold border border-white/10">
                ดูแผนการเรียน <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-slate-900/50">
              <div className="h-10" style={{ background: gradient }} />
              <div className="p-6 grid gap-4">
                <div className="h-40 rounded-2xl bg-black/30 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 opacity-60" />
                </div>
                <div className="h-4 w-2/3 bg-white/10 rounded" />
                <div className="h-4 w-1/2 bg-white/10 rounded" />
                <div className="grid grid-cols-3 gap-3">
                  {[1,2,3].map(i => (<div key={i} className="h-24 rounded-xl bg-white/5" />))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12" id="features">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">ครบทุกอย่างที่ต้องการ</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-white/5" style={{ color: theme.secondary }}>
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm opacity-80">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="templates">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">คอร์สยอดนิยม</h2>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Palette className="h-4 w-4" /> เหมาะทั้งผู้เริ่มต้นและมืออาชีพ
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden bg-slate-900/40">
              <div className="h-36" style={{ background: gradient }} />
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm opacity-80">{c.desc}</p>
                <div className="mt-2 text-xs opacity-70">{c.level} • {c.duration}</div>
                <div className="mt-1 font-semibold">{c.price}</div>
                <button className="mt-4 px-4 py-2 rounded-xl text-sm border border-white/10 hover:bg-white/5">ดูรายละเอียดคอร์ส</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="roadmap">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="h-5 w-5" />
          <h2 className="text-2xl md:text-3xl font-bold">โรดแมปการเรียน</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
            <h3 className="font-semibold">Beginner</h3>
            <ul className="mt-2 text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>AI พื้นฐาน & ความปลอดภัย</li>
              <li>Prompt เบื้องต้น</li>
              <li>โปรเจ็กต์: ใช้ AI สร้างคอนเทนต์</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
            <h3 className="font-semibold">Intermediate</h3>
            <ul className="mt-2 text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Prompt ขั้นสูง & Workflow</li>
              <li>Python สำหรับงานข้อมูล</li>
              <li>โปรเจ็กต์: Automation ด้วย AI</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
            <h3 className="font-semibold">Advanced</h3>
            <ul className="mt-2 text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>ทำแอปเล็ก ๆ เรียกใช้ API โมเดล</li>
              <li>ประเมินคุณภาพเอาต์พุต</li>
              <li>โปรเจ็กต์: Mini AI App</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="how">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">ทำงานอย่างไร</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
              <div className="text-5xl font-black opacity-20">{s.step}</div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="schedule">
        <div className="flex items-center gap-2 mb-6"><Calendar className="h-5 w-5" /><h2 className="text-2xl md:text-3xl font-bold">ตารางเรียนสด</h2></div>
        <div className="grid md:grid-cols-2 gap-5">
          {settings.liveQA.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
              <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /><span className="font-semibold">ทุก{item.day}</span></div>
              <div className="mt-2 flex items-center gap-2 text-sm opacity-80"><Clock className="h-4 w-4" /><span>{item.time} {item.tz}</span></div>
              <p className="mt-2 text-sm opacity-80">ถามตอบสด สรุปบทเรียน และรีวิวโปรเจ็กต์</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-6"><Star className="h-5 w-5" style={{ color: theme.accent }} /><h2 className="text-2xl md:text-3xl font-bold">ผู้ใช้ชอบอะไรบ้าง</h2></div>
        <div className="grid md:grid-cols-3 gap-5">
          {[{ q: "สวยและไวมาก กด 3 ครั้งได้หน้าเว็บเลย", a: "— เจ้าของสตูดิโอถ่ายภาพ" },
            { q: "แก้สีแบรนด์ง่าย ไม่ต้องแตะโค้ด", a: "— นักการตลาดฟรีแลนซ์" },
            { q: "มือถือดูสวย ไม่ต้องจ้างทำแพง", a: "— ร้านคาเฟ่" }].map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
              <p className="">“{t.q}”</p>
              <p className="text-sm opacity-70 mt-2">{t.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="community">
        <div className="flex items-center gap-2 mb-6"><Users className="h-5 w-5" /><h2 className="text-2xl md:text-3xl font-bold">ชุมชน & ช่องทางติดต่อ</h2></div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
            <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5" /><div><h3 className="font-semibold">LINE OpenChat</h3><p className="text-sm opacity-80">อัปเดตข่าวคอร์ส แจ้งเตือนไลฟ์</p></div></div>
            <a href={settings.lineLink || "#"} className="mt-4 inline-block px-4 py-2 rounded-xl text-sm border border-white/10 hover:bg-white/5">เข้าร่วม LINE</a>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-slate-900/40">
            <div className="flex items-center gap-3"><Users className="h-5 w-5" /><div><h3 className="font-semibold">Discord Community</h3><p className="text-sm opacity-80">คุยงาน แชร์พร็อมพ์ โค้ด</p></div></div>
            <a href={settings.discordLink || "#"} className="mt-4 inline-block px-4 py-2 rounded-xl text-sm border border-white/10 hover:bg-white/5">เข้าร่วม Discord</a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="pricing">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">แพ็กเกจเรียน</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border p-6 bg-slate-900/40 ${p.highlight ? "border-white/30 shadow-xl" : "border-white/10"}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                {p.highlight && (<span className="text-xs px-2 py-1 rounded-full border border-white/20">แนะนำ</span>)}
              </div>
              <div className="text-3xl font-black mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5" style={{ color: theme.accent }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full px-4 py-2 rounded-xl font-medium border border-white/10 hover:bg-white/5">เริ่มต้น</button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-3xl p-8 border border-white/10 bg-slate-900/60">
          <h3 className="text-2xl md:text-3xl font-bold">พร้อมเริ่มหรือยัง?</h3>
          <p className="opacity-80 mt-1">บอกเป้าหมายการเรียน แล้วรับแผนรายสัปดาห์</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold" style={{ background: gradient }}>
              เริ่มเรียนฟรี
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold border border-white/10">
              ปรึกษาเส้นทางอาชีพ
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center gap-2">
              {(logoUrlState || settings.logoUrl) ? (<img src={logoUrlState || settings.logoUrl} alt={theme.brand} className="h-7 w-7 rounded-xl object-cover" />) : (<div className="h-7 w-7 rounded-xl" style={{ background: gradient }} />)}
              <span className="font-bold">{theme.brand}</span>
            </div>
            <p className="text-sm opacity-70 mt-2">© {new Date().getFullYear()} {theme.brand}. All rights reserved.</p>
          </div>
          <form className="grid sm:grid-cols-3 gap-3">
            <input className="bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm" placeholder="ชื่อของคุณ" />
            <input className="bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm" placeholder="อีเมล" />
            <button className="px-4 py-2 rounded-xl font-medium" style={{ background: gradient }}>ส่งข้อความ</button>
          </form>
        </div>
      </footer>
    </div>
  );
}
