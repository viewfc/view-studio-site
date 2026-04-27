import React from 'react';
import './index.css';

function App() {
  const appList = [
    { id: 1, name: 'สภาพอากาศ AI', icon: '⛅️', link: '#' },
    { id: 2, name: 'ข้อมูลและสถิติ', icon: '📊', link: '#' },
    { id: 3, name: 'ระบบบริหารโรงเรียน', icon: '🏫', link: '#' },
    { id: 4, name: 'ตั้งค่า AI ส่วนตัว', icon: '⚙️', link: '#' },
    { id: 5, name: 'AI ชุมชน', icon: '👥', link: '#' },
    { id: 6, name: 'แจ้งเหตุฉุกเฉิน AI', icon: '🚨', link: '#' }
  ];

  return (
    <div className="portal-container">
      <div className="portal-content">
        
        <div className="portal-header">
          <h1 className="portal-title">ศูนย์รวมแอปพลิเคชัน อ.ลี้</h1>
          <p className="portal-subtitle">ขับเคลื่อนด้วย AI</p>
        </div>

        <div className="app-grid">
          {appList.map((app) => (
            <div 
              key={app.id} 
              className="glass-card"
              onClick={() => alert(`กำลังเปิดแอป: ${app.name}`)}
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
