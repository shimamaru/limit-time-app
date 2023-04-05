import React, { useState } from "react";
import TimeSelector from "./TimeSelector";
import LockScreen from "./LockScreen";
import styles from "../styles/TimeLimitSetting.module.css";

const TimeLimitSetting = () => {
  const [timeLimit, setTimeLimit] = useState(0); // 制限時間を保持
  const [remainingTime, setRemainingTime] = useState(0); // 残り時間を保持

  return (
    <div className={styles.timeLimitSetting}>
      {/* 時間設定用コンポーネント */}
      <TimeSelector
        timeLimit={timeLimit}
        setTimeLimit={setTimeLimit}
        setRemainingTime={setRemainingTime}
      />
      {/* 残り時間が0より大きい場合、ロック画面コンポーネントを表示 */}
      {remainingTime > 0 && <LockScreen remainingTime={remainingTime} />}
    </div>
  );
};

export default TimeLimitSetting;
