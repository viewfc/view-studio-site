# VIEW STUDIO — ห้องเรียน AI ของฉัน

โปรเจ็กต์เว็บไซต์ React + Vite + Tailwind พร้อม deploy

## รันบนเครื่อง
```bash
npm i
npm run dev
# เปิด http://localhost:5173
```

## Build และ Deploy
```bash
npm run build
# ได้โฟลเดอร์ dist/
```

### Vercel
1) สมัคร/ล็อกอินที่ vercel.com
2) สร้างโปรเจ็กต์ใหม่จาก repo หรืออัปโหลดโฟลเดอร์นี้
3) Framework: **Vite**, Build command: `npm run build`, Output: `dist`
4) กด Deploy

### Netlify
1) สมัคร/ล็อกอินที่ app.netlify.com
2) New site from Git หรือ Drag&Drop โฟลเดอร์ `dist`
3) Build command: `npm run build`, Publish directory: `dist`

### GitHub Pages (ผ่าน Actions)
1) สร้าง repo และ push โค้ดขึ้น
2) เปิด GitHub Actions เลือก workflow `Deploy to Pages` (หรือใช้ Vite template)
3) เซ็ต Pages ให้ใช้ `gh-pages`

## โลโก้
ใส่ไฟล์โลโก้เป็น `public/logo.png` (มีตัวอย่างจากคุณแล้ว)
