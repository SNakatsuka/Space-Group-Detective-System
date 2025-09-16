// main.js

// game-logic.js から必要な関数をインポート
import { generateNewProblem, checkAnswer, displayReflections } from './game-logic.js';

// HTMLの要素がすべて読み込まれてから実行するための定型句
window.addEventListener('DOMContentLoaded', () => {

    // --- DOM要素の取得 ---
    const problemTitleEl = document.getElementById('problem-title');
    const choicesEl = document.getElementById('choices');
    const feedbackEl = document.getElementById('feedback');
    const reflectionDataEl = document.getElementById('reflection-data'); // 反射データ表示用の要素も取得しておく
    
    // ボタン要素を取得
    const btnFilterAll = document.getElementById('btn-filter-all');
    const btnFilterH00 = document.getElementById('btn-filter-h00');
    const btnFilter0k0 = document.getElementById('btn-filter-0k0');
    const btnFilter00l = document.getElementById('btn-filter-00l');
    const btnFilterH0l = document.getElementById('btn-filter-h0l');
    const btnCheckAnswer = document.getElementById('btn-check-answer');
    const btnNextProblem = document.getElementById('btn-next-problem');

    // --- ゲームの初期化 ---
    // 新しい問題を表示する関数
    function displayProblem() {
        // game-logic.jsから新しい問題データを生成してもらう
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

        // フィードバックと「次の問題へ」ボタンを隠す
        feedbackEl.classList.add('hidden');
        btnNextProblem.classList.add('hidden');

        // 最初にすべての反射データを表示
        displayReflections('all');
    }

    // --- イベントリスナーの登録 ---
    // どのボタンがクリックされたら、どの関数を実行するかを設定
    
    btnFilterAll.addEventListener('click', () => displayReflections('all'));
    btnFilterH00.addEventListener('click', () => displayReflections('h00'));
    btnFilter0k0.addEventListener('click', () => displayReflections('0k0'));
    btnFilter00l.addEventListener('click', () => displayReflections('00l'));
    btnFilterH0l.addEventListener('click', () => displayReflections('h0l'));

    // 回答ボタンが押されたときの処理    
    btnCheckAnswer.addEventListener('click', () => {
        const userAnswers = [];
        document.querySelectorAll('#choices input:checked').forEach(input => {
            userAnswers.push(input.value);
        });
    
        // game-logic.jsの判定関数を呼び出す
        const isCorrect = checkAnswer(userAnswers);
    
        // 結果をフィードバックとして表示
        feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
        if (isCorrect) {
            feedbackEl.classList.add('correct');
            feedbackEl.textContent = '正解です！';
            btnNextProblem.classList.remove('hidden'); // 正解したら「次の問題へ」ボタンを表示
        } else {
            feedbackEl.classList.add('incorrect');
            feedbackEl.textContent = '不正解です。もう一度よく見てみましょう。';
        }
    });
    
    // 「次の問題へ」ボタンがクリックされたら「{}」の中の処理を実行する
    btnNextProblem.addEventListener('click', () => {
        // 次の問題を表示する（これも game-logic ではなく main.js の責務）
        displayProblem();
    });

    // --- ゲームの初期化 ---
    // ★ 修正点: 最初に一度だけ呼び出す
    displayProblem();

});
