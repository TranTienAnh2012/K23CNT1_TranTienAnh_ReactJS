import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icon

const images = [
  "https://i.pinimg.com/736x/c5/21/81/c52181f5212108d03720d77bdc81955a.jpg",
  "https://i.pinimg.com/736x/08/43/c1/0843c18d3c4b9753019508274ca2704e.jpg",
  "https://i.pinimg.com/474x/e6/b9/c1/e6b9c1decfae8e63c78edf62d1328f3f.jpg",
];

export default function TtaHome() {
  const [index, setIndex] = useState(0);

  // Tự động chuyển ảnh sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* className="container mt-2 " */}
      <div >
        {/* Slider Ảnh */}
        <div className="position-relative d-flex justify-content-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="rounded shadow-lg"
            style={{
              backgroundImage: `url(${images[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              width: "80%",
              borderRadius: "12px",
              position: "relative",
            }}
          >
            {/* Dấu chấm chỉ báo số lượng hình */}
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
              }}
            >
              {images.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: i === index ? "white" : "gray",
                    borderRadius: "50%",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Nút Chuyển Ảnh */}
        <button
          className="btn btn-dark position-absolute"

          style={{
            left: "95px",
            top: "38%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={prevImage}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="btn btn-dark position-absolute"

          style={{
            right: "95px",
            top: "38%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={nextImage}
        >
          <ChevronRight size={24} />
        </button>

        {/* Nội dung giới thiệu */}
        <div className="mt-3 " >
          {/* <h3>Chào mừng đến với Hệ thống Quản Lý</h3>
        <p className="lead">
          Hệ thống giúp quản lý thông tin sinh viên dễ dàng, nhanh chóng và hiệu quả.
        </p> */}
          <h3 style={{
            paddingLeft: "19px"
          }}> New Book</h3>
          <div style={{ paddingLeft: "120px" }}>
            <img src="https://i.pinimg.com/474x/70/ad/7f/70ad7ff6f1679abdcb932594dde8f1f0.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />
            <img src="https://i.pinimg.com/474x/fa/a5/8d/faa58de7bd06ee08fbd642efadcc6c03.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />
            <img src="https://i.pinimg.com/474x/1e/2b/2d/1e2b2de936fe767ff7d6a24041358f92.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />
            <img src="https://i.pinimg.com/474x/cd/04/cc/cd04cc0220a8369daa01ca42df8b603b.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />
            <img src="https://i.pinimg.com/474x/85/3a/ff/853aff458ce4a29e3da6ba0505214dd9.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />
            <img src="https://i.pinimg.com/474x/a2/e6/48/a2e64811dd4eefd44a1a4a70cda6bde2.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />
            <img src="https://i.pinimg.com/474x/b9/89/2e/b9892e7dd93d753d6f912022a4b78e22.jpg" alt="" style={{ width: "150px", height: "150px", margin: "10px" }} />

          </div>
        </div>
      </div>

    </>
  );
}
