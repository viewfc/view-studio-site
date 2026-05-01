import React from 'react';
import './index.css';

function App() {
  // รายชื่อแอปทั้งหมด 20 อัน
  const appList = [
    // 3 แอปที่ใช้งานได้จริง (มีลิงก์)
    { id: 1, name: 'สภาพอากาศ AI', icon: '☁️', link: 'https://gemini.google.com/share/254df72f0da1' },
    { id: 2, name: 'ดูดวง', icon: '🔮', link: 'https://gemini.google.com/share/c1b52e9c1241' },
    { id: 3, name: 'ติวสอบครู', icon: '📝', link: 'https://gemini.google.com/share/4f6389a8e027' },
    { id: 4, name: 'AI ส่วนตัว', icon: '🤖', link: 'https://url.in.th/dIYSj' },
    
    // แอปที่เหลือ (ใส่ '#' ไว้ก่อนเพื่อให้เป็นสีเทา)
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
    <div className="portal-container" style={{ 
      minHeight: '100vh', 
      width: '100%', 
      backgroundColor: '#e0f7ef', // พื้นหลังสีเขียวอ่อนตามธีมเดิม
      padding: '40px 0'
    }}>
      {/* ส่วนเนื้อหาหลัก ปรับความกว้างเป็น 95% เพื่อให้เต็มจอ */}
      <div className="portal-content" style={{ 
        maxWidth: '95%', 
        width: '100%', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        
        {/* ส่วนหัวข้อ */}
        <div className="portal-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="portal-title" style={{ color: '#006d4e', fontSize: '2.5rem', marginBottom: '10px' }}>
            ศูนย์รวมแอปพลิเคชัน 
          </h1>
          <p className="portal-subtitle" style={{ color: '#2d5a4c', fontSize: '1.2rem' }}>
            ขับเคลื่อนด้วยเทคโนโลยี AI
          </p>
        </div>
        
        {/* ตารางแสดงแอป (Grid System) */}
        <div className="app-grid" style={{ 
          display: 'grid', 
          // ปรับจำนวนคอลัมน์อัตโนมัติ ขนาดขั้นต่ำ 200px
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '25px', 
          width: '100%' 
        }}>
          {appList.map((app) => {
            // เช็คว่าแอปไหนใช้งานไม่ได้ (link คือ #)
            const isAppDisabled = app.link === '#';

            return (
              <a 
                key={app.id} 
                href={app.link} 
                target={!isAppDisabled ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '40px 20px', 
                  backgroundColor: isAppDisabled ? '#f5f5f5' : 'white', 
                  borderRadius: '20px', 
                  textDecoration: 'none', 
                  color: isAppDisabled ? '#aaa' : '#333', 
                  boxShadow: isAppDisabled ? 'none' : '0 10px 20px rgba(0,0,0,0.05)',
                  cursor: isAppDisabled ? 'default' : 'pointer',
                  // เอฟเฟกต์สีเทา
                  filter: isAppDisabled ? 'grayscale(100%)' : 'none', 
                  opacity: isAppDisabled ? 0.6 : 1,
                  border: isAppDisabled ? '1px solid #ddd' : 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                // เพิ่มเอฟเฟกต์ตอนเอาเมาส์วาง (เฉพาะอันที่ใช้งานได้)
                onMouseEnter={(e) => {
                  if(!isAppDisabled) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if(!isAppDisabled) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                  }
                }}
              >
                <div style={{ fontSize: '55px', marginBottom: '20px' }}>{app.icon}</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>{app.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
