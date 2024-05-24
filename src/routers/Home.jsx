import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/Choices">
        <section className="Keyvisual">
          <div>
            <img src="/logo.svg" alt="今日の空模様のロゴ" />
            <img src="/mapofjapan.png" alt="日本地図の画像" />
            <h1>»スタート«</h1>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Home;
