// game-logic.js

// 別のファイルからデータをインポートする
import { spaceGroups } from './spacegroup-data.js';
import { POSSIBLE_ELEMENTS_BY_SYSTEM } from './symmetry-elements-by-system.js';

let currentProblem = null;

/**
 * ランダムに空間群を選び、問題として設定する関数
 */
export function generateNewProblem() {
    // データからランダムに1つの空間群を選択
    const spacegroup = spaceGroups[Math.floor(Math.random() * spaceGroups.length)];
    const correctAnswers = spacegroup.conditions.map(c => c.reason);

    // 晶系に合ったダミー候補リストを取得
    const dummyPool = POSSIBLE_ELEMENTS_BY_SYSTEM[spacegroup.system] || [];
    
    const dummyChoices = [];
    const neededDummies = Math.max(0, 5 - correctAnswers.length);
    
    const shuffledDummies = dummyPool.sort(() => 0.5 - Math.random());
    for (const dummy of shuffledDummies) {
        if (dummyChoices.length >= neededDummies) break;
        if (!correctAnswers.includes(dummy)) {
            dummyChoices.push(dummy);
        }
    }

    const finalChoices = [...correctAnswers, ...dummyChoices].sort(() => 0.5 - Math.random());

    currentProblem = {
        spacegroup,
        correctAnswers,
        choices: finalChoices,
        reflections: generateMockReflections(spacegroup.conditions) // 反射リストもここで生成
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

/**
 * displayReflections 関数を追加
 * 反射リストをフィルタリングして表示する関数
 * @param {string} filter - 'all', 'h00', '0k0', '00l', 'h0l'など
 */
export function displayReflections(filter) {
    if (!currentProblem) return;

    // main.jsからDOM要素を直接操作するために取得
    const reflectionDataEl = document.getElementById('reflection-data');
    if (!reflectionDataEl) return;

    const reflections = currentProblem.reflections;
    let filtered = [];

    switch (filter) {
        case 'h00':
            filtered = reflections.filter(([h, k, l]) => k === 0 && l === 0);
            break;
        case '0k0':
            filtered = reflections.filter(([h, k, l]) => h === 0 && l === 0);
            break;
        case '00l':
            filtered = reflections.filter(([h, k, l]) => h === 0 && k === 0);
            break;
        case 'h0l':
            filtered = reflections.filter(([h, k, l]) => k === 0);
            break;
        default: // 'all'
            filtered = reflections;
    }

    // 表示用に整形
    let output = '  h   k   l   Intensity\n';
    output += '-------------------------\n';
    filtered.forEach(([h, k, l, intensity]) => {
        output += `${String(h).padStart(3, ' ')} ${String(k).padStart(3, ' ')} ${String(l).padStart(3, ' ')}   ${intensity.toFixed(1)}\n`;
    });
    reflectionDataEl.textContent = output;
}

// 消滅則に基づいて模擬的な反射データを生成するヘルパー関数（簡易版）
function generateMockReflections(conditions) {
    // TODO: この関数を本格的に実装する必要がある
    // 現状は、どの問題でも同じダミーデータを返す
    const mockData = [
        [2, 0, 0, 150.0], [4, 0, 0, 80.0],  // h00 (h=2n)
        [0, 2, 0, 250.0], [0, 4, 0, 180.0],  // 0k0 (k=2n)
        [0, 0, 2, 300.0], [0, 0, 4, 120.0],  // 00l (l=2n)
        [1, 0, 2, 90.0],  [2, 0, 4, 110.0],   // h0l (l=2n)
        [1, 1, 1, 500.0], [2, 1, 3, 220.0], [1, 2, 3, 180.0] // general
    ];
    return mockData;
}
