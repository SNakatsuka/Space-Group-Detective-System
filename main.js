// main.js

// ロジックファイルから必要な関数をインポート
import { generateNewProblem, checkAnswer } from './game-logic.js';

// DOM要素の取得
const problemTitleEl = document.getElementById('problem-title');
const choicesEl = document.getElementById('choices');
const checkBtn = document.getElementById('check-answer-btn'); // ボタンにIDを振っておく
// ... 他のDOM要素 ...

// 新しい問題を表示する関数
function displayProblem() {
    const problem = generateNewProblem();
    
    problemTitleEl.textContent = `この結晶の対称性を推定せよ (晶系: ${problem.spacegroup.system})`;
    
    // 選択肢をHTMLに描画
    choicesEl.innerHTML = '';
    problem.choices.forEach(choice => {
        choicesEl.innerHTML += `
            <div>
                <input type="checkbox" name="symmetry" value="${choice}">
                <label>${choice}</label>
            </div>
        `;
    });
    
    // ... 反射データも同様に描画 ...
}

// 回答ボタンが押されたときの処理
checkBtn.addEventListener('click', () => {
    const userAnswers = [];
    document.querySelectorAll('#choices input:checked').forEach(input => {
        userAnswers.push(input.value);
    });

    const isCorrect = checkAnswer(userAnswers);

    if (isCorrect) {
        alert("正解です！");
        displayProblem(); // 正解したら次の問題へ
    } else {
        alert("不正解です。");
    }
});


// ページが読み込まれたら、最初の問題を表示
window.addEventListener('DOMContentLoaded', displayProblem);
