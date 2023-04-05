import React, { useState, useEffect } from "react";
import styles from "../styles/TimeLimitSetting.module.css";

const LockScreen = ({ remainingTime }) => {
  const [displayedRemainingTime, setDisplayedRemainingTime] =
    useState(remainingTime); // 表示用の残り時間を保持

  // 残り時間が変更された場合の処理
  useEffect(() => {
    setDisplayedRemainingTime(remainingTime); // 表示用の残り時間を更新
    const startTime = Date.now(); // 開始時間を取得
    const timer = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000; // 経過時間を取得
      const remaining = Math.ceil(remainingTime - elapsedTime); // 残り時間を計算

      if (remaining <= 0) {
        clearInterval(timer); // 残り時間が0以下の場合、タイマーを停止
      } else {
        setDisplayedRemainingTime(remaining); // それ以外の場合、表示用の残り時間を更新
      }
    }, 1000);

    return () => clearInterval(timer); // コンポーネントがアンマウントされる際にタイマーをクリア
  }, [remainingTime]);

  return (
    <div className={styles.screenLock}>
      <h1>画面がロックされました</h1>
      {/* 残り時間を表示 */}
      <h2>
        残り時間: {Math.floor(displayedRemainingTime / 60)}分{" "}
        {displayedRemainingTime % 60}秒
      </h2>
    </div>
  );
};

export default LockScreen;
