import React from "react";

const TimeSelector = ({ timeLimit, setTimeLimit, setRemainingTime }) => {
  const minuteOptions = []; // 選択可能な分数のオプションを保持
  for (let i = 1; i <= 99; i++) {
    minuteOptions.push(i);
  }

  // 設定ボタンがクリックされた際の処理
  const handleSelectSave = () => {
    setRemainingTime(timeLimit * 60); // 残り時間を計算してセット
    localStorage.setItem("timeLimit", timeLimit); // 制限時間をローカルストレージに保存
    alert(`制限時間を${timeLimit}分に設定しました。`); // 制限時間が設定された旨をアラート表示
  };

  return (
    <div>
      <label htmlFor="timeLimit">制限時間: </label>
      {/* 分数選択ドロップダウン */}
      <select
        id="timeLimit"
        value={timeLimit}
        onChange={(event) => setTimeLimit(parseInt(event.target.value))}
      >
        {minuteOptions.map((minute) => (
          <option key={minute} value={minute}>
            {minute}分
          </option>
        ))}
      </select>
      {/* 設定ボタン */}
      <button onClick={handleSelectSave}>設定する</button>
    </div>
  );
};

export default TimeSelector;
