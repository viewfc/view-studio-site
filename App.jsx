import React from 'react';
import './index.css';

function App() {
  const appList = [
    // 3 แอพแรกที่ใช้งานได้ (มีลิงก์จริง)
    { id: 1, name: 'สภาพอากาศ AI', icon: '☁️', link: 'https://gemini.google.com/share/254df72f0da1' },
    { id: 2, name: 'ดูดวง', icon: '🔮', link: 'https://gemini.google.com/share/c1b52e9c1241' },
    { id: 3, name: 'ติวสอบครู', icon: '📝', link: 'https://gemini.google.com/share/4f6389a8e027' },
    
    // แอพที่เหลือ (ใส่ลิงก์ '#' ไว้ก่อน)
    { id: 4, name: 'ตั้งค่า AI ส่วนตัว', icon: '⚙️', link: '#' },
    { id: 5, name: 'AI ชุมชน', icon: '👥', link: '#' },
    { id: 6, name: 'แจ้งเหตุฉุกเฉิน AI', icon: '🚨', link: '#' },
    { id: 7, name: 'เขียนแผนหน้าเดียวจบ', icon: '📑', link: '#' }, 
    { id: 8, name: 'ระบบรวบรวม PA', icon: '📊', link: '#' }, 
    { id: 9, name: 'จัดการข้อมูลโรงเรียน', icon: '🏫', link: '#' }, 
    { id: 10, name: 'ผู้ช่วยวิเคราะห์หุ้น', icon: '📈', link: '#' }, 
    { id: 11, name: 'ข้อมูลสเปคยานยนต์', icon: '🚗', link: '#' }, 
    { id: 12, name: 'คำนวณค่าไฟ/แอร์', icon: '⚡', link: '#' }, 
    { id: 13, name: 'สร้างภาพ AI', icon: '🎨', link: '#' }, 
    { id: 14, name: 'สร้างเพลงและเสียง', icon: '🎵', link: '#' }, 
    { id: 15, name: 'แปลภาษาอัจฉริยะ', icon: '🌐', link: '#' },
    { id: 16, name: 'ผู้ช่วยตรวจข้อสอบ', icon: '✅', link: '#' },
    { id: 17, name: 'สรุปข่าวสารรายวัน', icon: '📰', link: '#' },
    { id: 18, name: 'ทำสไลด์นำเสนอ', icon: '🖥️', link: '#' },
    { id: 19, name: 'จัดการเอกสาร PDF', icon: '📄', link: '#' },
    { id: 20, name: 'แชทบอทให้คำปรึกษา', icon: '💬', link: '#' }
  ];

  return (
    <div className="portal-container" style={{ minHeight: '100vh', width: '100%' }}>
      {/* แก้ตรงนี้: บังคับให้ความกว้างขยายเต็มจอ (95% ของหน้าจอ) */}
      <div className="portal-content" style={{ maxWidth: '95%', width: '100%', margin: '0 auto', padding: '20px' }}>
        <div className="portal-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="portal-title">ศูนย์รวมแอปพลิเคชัน อ.ลี้</h1>
          <p className="portal-subtitle">ขับเคลื่อนด้วยเทคโนโลยี AI</p>
        </div>
        
        {/* โซนแสดงปุ่มแอปพลิเคชันทั้งหมด */}
        <div className="app-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', /* ปรับขนาดกล่องขั้นต่ำให้กว้างขึ้นเป็น 200px */
          gap: '24px', 
          width: '100%' 
        }}>
          {appList.map((app) => (
            <a 
              key={app.id} 
              href={app.link} 
              target={app.link !== '#' ? "_blank" : "_self"} 
              rel="noopener noreferrer"
              className="app-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '30px 20px', 
                backgroundColor: 'white', 
                borderRadius: '16px', 
                textDecoration: 'none', 
                color: '#333', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>{app.icon}</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>{app.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
