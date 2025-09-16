// game-logic.js

// 別のファイルからデータをインポートする
import { spaceGroups } from './spacegroup-data.js';

let currentProblem = null;

/**
 * ランダムに空間群を選び、問題として設定する関数
 */
export function generateNewProblem() {
    // データからランダムに1つの空間群を選択
    const randomIndex = Math.floor(Math.random() * spaceGroups.length);
    const selectedSpaceGroup = spaceGroups[randomIndex];

    // ここで、選択肢を生成するロジックなども実装する
    // (例: 正解の対称要素 + いくつかのダミー選択肢)
    const correctReasons = selectedSpaceGroup.conditions.map(c => c.reason);
    
    // ダミーの選択肢を用意（実際にはもっと賢い方法で生成する）
    const dummyReasons = [
        "a軸に沿った 2₁ らせん軸",
        "c軸に垂直な b 映進面",
        "体心格子 (I)"
    ];
    
    // 正解とダミーを混ぜてシャッフルする
    const allChoices = [...new Set([...correctReasons, ...dummyReasons])]; // 重複を削除
    // ... シャッフル処理 ...

    currentProblem = {
        spacegroup: selectedSpaceGroup,
        correctAnswers: correctReasons,
        choices: allChoices,
        // この消滅則に従う反射データを動的に生成するロジック
        // (これは高度な実装なので、ここでは省略)
        reflections: generateMockReflections(selectedSpaceGroup.conditions) 
    };
    
    return currentProblem;
}

/**
 * ユーザーの回答をチェックする関数
 * @param {string[]} userAnswers - ユーザーが選択した対称要素の配列
 * @returns {boolean} - 正解かどうか
 */
export function checkAnswer(userAnswers) {
    if (!currentProblem) return false;

    const correct = currentProblem.correctAnswers;
    // ユーザーの回答と正解が完全に一致するかを判定
    return correct.length === userAnswers.length && correct.every(ans => userAnswers.includes(ans));
}


// 消滅則に基づいて模擬的な反射データを生成するヘルパー関数（簡易版）
function generateMockReflections(conditions) {
    // ここで、与えられた消滅則(conditions)を満たすような
    // 反射のリストを動的に作成する。
    // 例: { reflectionType: "0k0", condition: "k=2n" } があれば、
    // [0,1,0], [0,3,0] などを生成しないようにする。
    // この部分はゲームのリアリティを高める重要な部分です。
    return [ [0, 2, 0, 100.0], [1, 1, 1, 150.0] /* ...など */ ];
}
