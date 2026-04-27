import React from 'react';
import './index.css';

function App() {
  // 1. ใส่ URL ของแต่ละแอปในช่อง link ครับ
  const appList = [
    { id: 1, name: 'สภาพอากาศ AI', icon: '⛅️', link: 'https://weather-app-yourlink.vercel.app' },
    { id: 2, name: 'ข้อมูลและสถิติ', icon: '📊', link: 'https://google.com' },
    { id: 3, name: 'ระบบบริหารโรงเรียน', icon: '🏫', link: 'https://school-system.vercel.app' },
    { id: 4, name: 'ตั้งค่า AI ส่วนตัว', icon: '⚙️', link: '#' },
    { id: 5, name: 'AI ชุมชน', icon: '👥', link: '#' },
    { id: 6, name: 'แจ้งเหตุฉุกเฉิน AI', icon: '🚨', link: '#' }
  ];

  return (
    <div className="portal-container">
      <div className="portal-content">
        
        <div className="portal-header">
          <h1 className="portal-title">ศูนย์รวมแอปพลิเคชัน อ.ลี้</h1>
          <p className="portal-subtitle">ขับเคลื่อนด้วยเทคโนโลยี AI</p>
        </div>

        <div className="app-grid">
          {appList.map((app) => (
            <div 
              key={app.id} 
              className="glass-card"
              // 2. คำสั่งวาร์ปไปตามลิงก์ที่ใส่ไว้ข้างบน
              onClick={() => {
                if(app.link !== '#') {
                  window.location.href = app.link;
                } else {
                  alert('แอปนี้กำลังอยู่ระหว่างการพัฒนาครับลูกพี่!');
                }
              }}
            >
              <div className="glass-icon">{app.icon}</div>
              <div className="glass-title">{app.name}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
