// spacegroup-data.js
//
// 230種類の空間群すべての情報と消滅則（反射条件）を格納したデータベース。
// データは国際結晶学連合(IUCr)のInternational Tables for Crystallographyに基づいています。
//
// データ構造:
// {
//   number: 空間群番号 (1-230),
//   name: ヘルマン・モーガン記法による空間群名,
//   system: 晶系,
//   conditions: [ // この空間群が持つ消滅則のリスト
//     {
//       reflectionType: 反射の種類 (e.g., "hkl", "0kl", "h00"),
//       condition: 消滅則の条件 (e.g., "h+k+l=2n", "h=2n"),
//       reason: 原因となる対称要素 (日本語)
//     }
//   ]
// }

export const spaceGroups = [
  // Triclinic System (三斜晶系)
  { number: 1, name: "P1", system: "Triclinic", conditions: [] },
  { number: 2, name: "P-1", system: "Triclinic", conditions: [] },

  // Monoclinic System (単斜晶系)
  { number: 3, name: "P2", system: "Monoclinic", conditions: [] },
  { number: 4, name: "P2₁", system: "Monoclinic", conditions: [
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 5, name: "C2", system: "Monoclinic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" }
    ]
  },
  { number: 6, name: "Pm", system: "Monoclinic", conditions: [] },
  { number: 7, name: "Pc", system: "Monoclinic", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },
  { number: 8, name: "Cm", system: "Monoclinic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" }
    ]
  },
  { number: 9, name: "Cc", system: "Monoclinic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },
  { number: 10, name: "P2/m", system: "Monoclinic", conditions: [] },
  { number: 11, name: "P2₁/m", system: "Monoclinic", conditions: [
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 12, name: "C2/m", system: "Monoclinic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" }
    ]
  },
  { number: 13, name: "P2/c", system: "Monoclinic", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },
  { number: 14, name: "P2₁/c", system: "Monoclinic", conditions: [
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },
  { number: 15, name: "C2/c", system: "Monoclinic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },

  // Orthorhombic System (直方晶系)
  { number: 16, name: "P222", system: "Orthorhombic", conditions: [] },
  { number: 17, name: "P222₁", system: "Orthorhombic", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 18, name: "P2₁2₁2", system: "Orthorhombic", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 19, name: "P2₁2₁2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 20, name: "C222₁", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 21, name: "C222", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" }
    ]
  },
  { number: 22, name: "F222", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 23, name: "I222", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 24, name: "I2₁2₁2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 25, name: "Pmm2", system: "Orthorhombic", conditions: [] },
  { number: 26, name: "Pmc2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 27, name: "Pcc2", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 28, name: "Pma2", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 29, name: "Pca2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 30, name: "Pnc2", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" } // This implies n-glide on (100)
    ]
  },
  { number: 31, name: "Pmn2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 32, name: "Pba2", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 33, name: "Pna2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },
  { number: 34, name: "Pnn2", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "h+l=2n", reason: "a軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" }
    ]
  },
  { number: 35, name: "Cmm2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" }
    ]
  },
  { number: 36, name: "Cmc2₁", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 37, name: "Ccc2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 38, name: "Amm2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "k+l=2n", reason: "A面心格子" }
    ]
  },
  { number: 39, name: "Aem2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "k+l=2n", reason: "A面心格子" },
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 40, name: "Ama2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "k+l=2n", reason: "A面心格子" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 41, name: "Aea2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "k+l=2n", reason: "A面心格子" },
      { reflectionType: "hk0", condition: "h=2n, k=2n", reason: "c軸に垂直な a, b 映進面" } // simplified from n-glide
    ]
  },
  { number: 42, name: "Fmm2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 43, name: "Fdd2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "h0l", condition: "h+l=4n", reason: "a軸に垂直な d 映進面" },
      { reflectionType: "0kl", condition: "k+l=4n", reason: "b軸に垂直な d 映進面" }
    ]
  },
  { number: 44, name: "Imm2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 45, name: "Iba2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 46, name: "Ima2", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 47, name: "Pmmm", system: "Orthorhombic", conditions: [] },
  { number: 48, name: "Pnnn", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "h+l=2n", reason: "a軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" },
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" }
    ]
  },
  { number: 49, name: "Pccm", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 50, name: "Pban", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な a 映進面" },
      { reflectionType: "h0l", condition: "h=2n", reason: "a軸に垂直な b 映進面" }
    ]
  },
  { number: 51, name: "Pmma", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 52, name: "Pnna", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 53, name: "Pmna", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" },
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な n 映進面" } // This implies a-glide perp to b
    ]
  },
  { number: 54, name: "Pcca", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 55, name: "Pbam", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 56, name: "Pccn", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "h+l=2n", reason: "a軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" }
    ]
  },
  { number: 57, name: "Pbcm", system: "Orthorhombic", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 58, name: "Pnnm", system: "Orthorhombic", conditions: [
      { reflectionType: "h0l", condition: "h+l=2n", reason: "a軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" }
    ]
  },
  { number: 59, name: "Pmmn", system: "Orthorhombic", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" }, // Implied by n-glide
      { reflectionType: "0k0", condition: "k=2n", reason: "b軸に沿った 2₁ らせん軸" }  // Implied by n-glide
    ]
  },
  { number: 60, name: "Pbcn", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な n 映進面" }, // b-glide perp to c
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" }
    ]
  },
  { number: 61, name: "Pbca", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な c 映進面" }, // This is b-glide
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 62, name: "Pnma", system: "Orthorhombic", conditions: [
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 63, name: "Cmcm", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" }
    ]
  },
  { number: 64, name: "Cmce", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な a 映進面" } // This is b-glide in this setting
    ]
  },
  { number: 65, name: "Cmmm", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" }
    ]
  },
  { number: 66, name: "Cccm", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 67, name: "Cmma", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 68, name: "Ccca", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "C面心格子" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 69, name: "Fmmm", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 70, name: "Fddd", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "0kl", condition: "k+l=4n", reason: "b軸に垂直な d 映進面" },
      { reflectionType: "h0l", condition: "h+l=4n", reason: "a軸に垂直な d 映進面" },
      { reflectionType: "hk0", condition: "h+k=4n", reason: "c軸に垂直な d 映進面" }
    ]
  },
  { number: 71, name: "Immm", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 72, name: "Ibam", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 73, name: "Ibca", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な c 映進面" }, // This is b-glide
      { reflectionType: "h0l", condition: "l=2n", reason: "a軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 74, name: "Imma", system: "Orthorhombic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  // Tetragonal System (正方晶系)
  { number: 75, name: "P4", system: "Tetragonal", conditions: [] },
  { number: 76, name: "P4₁", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 77, name: "P4₂", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 78, name: "P4₃", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₃ らせん軸" }
    ]
  },
  { number: 79, name: "I4", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 80, name: "I4₁", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 81, name: "P-4", system: "Tetragonal", conditions: [] },
  { number: 82, name: "I-4", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 83, name: "P4/m", system: "Tetragonal", conditions: [] },
  { number: 84, name: "P4₂/m", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 85, name: "P4/n", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" }
    ]
  },
  { number: 86, name: "P4₂/n", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 87, name: "I4/m", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 88, name: "I4₁/a", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "h=2n, k=2n", reason: "c軸に垂直な a,b 映進面" }, // From a-glide
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 89, name: "P422", system: "Tetragonal", conditions: [] },
  { number: 90, name: "P42₁2", system: "Tetragonal", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 91, name: "P4₁22", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 92, name: "P4₁2₁2", system: "Tetragonal", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 93, name: "P4₂22", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 94, name: "P4₂2₁2", system: "Tetragonal", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 95, name: "P4₃22", system: "Tetragonal", conditions: [
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₃ らせん軸" }
    ]
  },
  { number: 96, name: "P4₃2₁2", system: "Tetragonal", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₃ らせん軸" }
    ]
  },
  { number: 97, name: "I422", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 98, name: "I4₁22", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 99, name: "P4mm", system: "Tetragonal", conditions: [] },
  { number: 100, name: "P4bm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 101, name: "P4₂cm", system: "Tetragonal", conditions: [
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 102, name: "P4₂nm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 103, name: "P4cc", system: "Tetragonal", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 104, name: "P4nc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 105, name: "P4₂mc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 106, name: "P4₂bc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 107, name: "I4mm", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 108, name: "I4cm", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 109, name: "I4₁md", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "0kl", condition: "2k+l=4n", reason: "b軸に垂直な d 映進面" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 110, name: "I4₁cd", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "0kl", condition: "2k+l=4n", reason: "b軸に垂直な d 映進面" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 111, name: "P-42m", system: "Tetragonal", conditions: [] },
  { number: 112, name: "P-42c", system: "Tetragonal", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 113, name: "P-42₁m", system: "Tetragonal", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 114, name: "P-42₁c", system: "Tetragonal", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 115, name: "P-4m2", system: "Tetragonal", conditions: [] },
  { number: 116, name: "P-4c2", system: "Tetragonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 117, name: "P-4b2", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 118, name: "P-4n2", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" }
    ]
  },
  { number: 119, name: "I-4m2", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 120, name: "I-4c2", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 121, name: "I-42m", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 122, name: "I-42d", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hhl", condition: "2h+l=4n", reason: "[1-10]方向に垂直な d 映進面" }
    ]
  },
  { number: 123, name: "P4/mmm", system: "Tetragonal", conditions: [] },
  { number: 124, name: "P4/mcc", system: "Tetragonal", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" }
    ]
  },
  { number: 125, name: "P4/nbm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な b 映進面" } // a-glide
    ]
  },
  { number: 126, name: "P4/nnc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 127, name: "P4/mbm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" }
    ]
  },
  { number: 128, name: "P4/mnc", system: "Tetragonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 129, name: "P4/nmm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" }
    ]
  },
  { number: 130, name: "P4/ncc", system: "Tetragonal", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" }
    ]
  },
  { number: 131, name: "P4₂/mmc", system: "Tetragonal", conditions: [
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 132, name: "P4₂/mcm", system: "Tetragonal", conditions: [
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 133, name: "P4₂/nbc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な b 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 134, name: "P4₂/nnm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k+l=2n", reason: "b軸に垂直な n 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 135, name: "P4₂/mbc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "k=2n", reason: "c軸に垂直な b 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 136, name: "P4₂/mnm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "k=2n", reason: "b軸に垂直な n 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 137, name: "P4₂/nmc", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 138, name: "P4₂/ncm", system: "Tetragonal", conditions: [
      { reflectionType: "hk0", condition: "h+k=2n", reason: "c軸に垂直な n 映進面" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 139, name: "I4/mmm", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 140, name: "I4/mcm", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "0kl", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 141, name: "I4₁/amd", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "h=2n, k=2n", reason: "c軸に垂直な a,b 映進面" },
      { reflectionType: "hhl", condition: "2h+l=4n", reason: "[1-10]方向に垂直な d 映進面" },
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 142, name: "I4₁/acd", system: "Tetragonal", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "h0l", condition: "l=2n", reason: "b軸に垂直な c 映進面" },
      { reflectionType: "hhl", condition: "2h+l=4n", reason: "[1-10]方向に垂直な d 映進面" },
      { reflectionType: "0kl", condition: "k=2n, l=2n", reason: "b,c 映進面" }, // simplified
      { reflectionType: "00l", condition: "l=4n", reason: "c軸に沿った 4₁ らせん軸" }
    ]
  },

  // Trigonal System (三方晶系)
  { number: 143, name: "P3", system: "Trigonal", conditions: [] },
  { number: 144, name: "P3₁", system: "Trigonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 3₁ らせん軸" }
    ]
  },
  { number: 145, name: "P3₂", system: "Trigonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 3₂ らせん軸" }
    ]
  },
  { number: 146, name: "R3", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" }
    ]
  },
  { number: 147, name: "P-3", system: "Trigonal", conditions: [] },
  { number: 148, name: "R-3", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" }
    ]
  },
  { number: 149, name: "P312", system: "Trigonal", conditions: [] },
  { number: 150, name: "P321", system: "Trigonal", conditions: [] },
  { number: 151, name: "P3₁12", system: "Trigonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 3₁ らせん軸" }
    ]
  },
  { number: 152, name: "P3₁21", system: "Trigonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 3₁ らせん軸" }
    ]
  },
  { number: 153, name: "P3₂12", system: "Trigonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 3₂ らせん軸" }
    ]
  },
  { number: 154, name: "P3₂21", system: "Trigonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 3₂ らせん軸" }
    ]
  },
  { number: 155, name: "R32", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" }
    ]
  },
  { number: 156, name: "P3m1", system: "Trigonal", conditions: [] },
  { number: 157, name: "P31m", system: "Trigonal", conditions: [] },
  { number: 158, name: "P3c1", system: "Trigonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" }
    ]
  },
  { number: 159, name: "P31c", system: "Trigonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 160, name: "R3m", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" }
    ]
  },
  { number: 161, name: "R3c", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" },
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" }
    ]
  },
  { number: 162, name: "P-31m", system: "Trigonal", conditions: [] },
  { number: 163, name: "P-31c", system: "Trigonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 164, name: "P-3m1", system: "Trigonal", conditions: [] },
  { number: 165, name: "P-3c1", system: "Trigonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" }
    ]
  },
  { number: 166, name: "R-3m", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" }
    ]
  },
  { number: 167, name: "R-3c", system: "Trigonal", conditions: [
      { reflectionType: "hkl", condition: "-h+k+l=3n", reason: "R菱面体格子 (六方晶設定)" },
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" }
    ]
  },

  // Hexagonal System (六方晶系)
  { number: 168, name: "P6", system: "Hexagonal", conditions: [] },
  { number: 169, name: "P6₁", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=6n", reason: "c軸に沿った 6₁ らせん軸" }
    ]
  },
  { number: 170, name: "P6₅", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=6n", reason: "c軸に沿った 6₅ らせん軸" }
    ]
  },
  { number: 171, name: "P6₂", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 6₂ らせん軸" }
    ]
  },
  { number: 172, name: "P6₄", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 6₄ らせん軸" }
    ]
  },
  { number: 173, name: "P6₃", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },
  { number: 174, name: "P-6", system: "Hexagonal", conditions: [] },
  { number: 175, name: "P6/m", system: "Hexagonal", conditions: [] },
  { number: 176, name: "P6₃/m", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },
  { number: 177, name: "P622", system: "Hexagonal", conditions: [] },
  { number: 178, name: "P6₁22", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=6n", reason: "c軸に沿った 6₁ らせん軸" }
    ]
  },
  { number: 179, name: "P6₅22", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=6n", reason: "c軸に沿った 6₅ らせん軸" }
    ]
  },
  { number: 180, name: "P6₂22", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 6₂ らせん軸" }
    ]
  },
  { number: 181, name: "P6₄22", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=3n", reason: "c軸に沿った 6₄ らせん軸" }
    ]
  },
  { number: 182, name: "P6₃22", system: "Hexagonal", conditions: [
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },
  { number: 183, name: "P6mm", system: "Hexagonal", conditions: [] },
  { number: 184, name: "P6cc", system: "Hexagonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" }
    ]
  },
  { number: 185, name: "P6₃cm", system: "Hexagonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },
  { number: 186, name: "P6₃mc", system: "Hexagonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },
  { number: 187, name: "P-6m2", system: "Hexagonal", conditions: [] },
  { number: 188, name: "P-6c2", system: "Hexagonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" }
    ]
  },
  { number: 189, name: "P-62m", system: "Hexagonal", conditions: [] },
  { number: 190, name: "P-62c", system: "Hexagonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 191, name: "P6/mmm", system: "Hexagonal", conditions: [] },
  { number: 192, name: "P6/mcc", system: "Hexagonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 193, name: "P6₃/mcm", system: "Hexagonal", conditions: [
      { reflectionType: "h-hl", condition: "l=2n", reason: "[110]方向に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },
  { number: 194, name: "P6₃/mmc", system: "Hexagonal", conditions: [
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" },
      { reflectionType: "00l", condition: "l=2n", reason: "c軸に沿った 6₃ らせん軸" }
    ]
  },

  // Cubic System (立方晶系)
  { number: 195, name: "P23", system: "Cubic", conditions: [] },
  { number: 196, name: "F23", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 197, name: "I23", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 198, name: "P2₁3", system: "Cubic", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 199, name: "I2₁3", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 2₁ らせん軸" }
    ]
  },
  { number: 200, name: "Pm-3", system: "Cubic", conditions: [] },
  { number: 201, name: "Pn-3", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "映進面" } // Generic
    ]
  },
  { number: 202, name: "Fm-3", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 203, name: "Fd-3", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "0kl", condition: "k+l=4n", reason: "b軸に垂直な d 映進面" }
    ]
  },
  { number: 204, name: "Im-3", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 205, name: "Pa-3", system: "Cubic", conditions: [
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 206, name: "Ia-3", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "h=2n", reason: "c軸に垂直な a 映進面" }
    ]
  },
  { number: 207, name: "P432", system: "Cubic", conditions: [] },
  { number: 208, name: "P4₂32", system: "Cubic", conditions: [
      { reflectionType: "h00", condition: "h=2n", reason: "a軸に沿った 4₂ らせん軸" }
    ]
  },
  { number: 209, name: "F432", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 210, name: "F4₁32", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "h00", condition: "h=4n", reason: "a軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 211, name: "I432", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 212, name: "P4₃32", system: "Cubic", conditions: [
      { reflectionType: "h00", condition: "h=4n", reason: "a軸に沿った 4₃ らせん軸" }
    ]
  },
  { number: 213, name: "P4₁32", system: "Cubic", conditions: [
      { reflectionType: "h00", condition: "h=4n", reason: "a軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 214, name: "I4₁32", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "h00", condition: "h=4n", reason: "a軸に沿った 4₁ らせん軸" }
    ]
  },
  { number: 215, name: "P-43m", system: "Cubic", conditions: [] },
  { number: 216, name: "F-43m", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 217, name: "I-43m", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 218, name: "P-43n", system: "Cubic", conditions: [
      { reflectionType: "hhl", condition: "h+l=2n", reason: "[1-10]方向に垂直な n 映進面" }
    ]
  },
  { number: 219, name: "F-43c", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 220, name: "I-43d", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hhl", condition: "2h+l=4n", reason: "[1-10]方向に垂直な d 映進面" }
    ]
  },
  { number: 221, name: "Pm-3m", system: "Cubic", conditions: [] },
  { number: 222, name: "Pn-3n", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "k+l=2n", reason: "映進面" }, // Simplified
      { reflectionType: "hhl", condition: "h+l=2n", reason: "[1-10]方向に垂直な n 映進面" }
    ]
  },
  { number: 223, name: "Pm-3n", system: "Cubic", conditions: [
      { reflectionType: "hhl", condition: "h+l=2n", reason: "[1-10]方向に垂直な n 映進面" }
    ]
  },
  { number: 224, name: "Pn-3m", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n", reason: "映進面" } // Simplified
    ]
  },
  { number: 225, name: "Fm-3m", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" }
    ]
  },
  { number: 226, name: "Fm-3c", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 227, name: "Fd-3m", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "0kl", condition: "k+l=4n", reason: "b軸に垂直な d 映進面" }
    ]
  },
  { number: 228, name: "Fd-3c", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k=2n, k+l=2n, h+l=2n", reason: "F面心格子" },
      { reflectionType: "0kl", condition: "k+l=4n", reason: "b軸に垂直な d 映進面" },
      { reflectionType: "hhl", condition: "l=2n", reason: "[1-10]方向に垂直な c 映進面" }
    ]
  },
  { number: 229, name: "Im-3m", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" }
    ]
  },
  { number: 230, name: "Ia-3d", system: "Cubic", conditions: [
      { reflectionType: "hkl", condition: "h+k+l=2n", reason: "I体心格子" },
      { reflectionType: "hk0", condition: "h=2n, k=2n", reason: "a,b 映進面" }, // from d-glide
      { reflectionType: "hhl", condition: "2h+l=4n", reason: "[1-10]方向に垂直な d 映進面" }
    ]
  }
];
