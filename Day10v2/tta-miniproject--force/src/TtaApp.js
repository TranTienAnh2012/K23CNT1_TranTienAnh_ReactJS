import React, { useState, useEffect } from 'react';
import { TtaThemeProvider } from './Contexts/TtaThemeContexts';
import TtaThemeToggle from './components/TtaThemeToggle';
import TtaToDoList from './components/TtaToDoList';

const TtaApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập quá trình tải dữ liệu
    const timer = setTimeout(() => {
      setLoading(false); // Tắt trạng thái loading sau 2 giây
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị unmount
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Đang tải, vui lòng chờ...</p>
      </div>
    );
  }

  return (
    <TtaThemeProvider>
      <div>
        <TtaThemeToggle />
        <TtaToDoList />      
      </div>
    </TtaThemeProvider>
  );
};

export default TtaApp;
