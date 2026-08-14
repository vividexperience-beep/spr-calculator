// スプレッドシートのマスタタブ(マスタ / 裏込材マスタ / 品質管理マスタ / 座屈限界圧マスタ)を
// そのままJSONに書き出したものです。
// マスタの数値を修正したいときは、このファイルの該当箇所だけを書き換えてください。
// (元のスプレッドシートを直した後、この形式に合わせて書き写す運用を想定しています)

const MASTER_DATA = {
  profile: [
    { profile: "#90S",  min: 210,  max: 360,  h: 9,    w: 90 },
    { profile: "#87S",  min: 370,  max: 550,  h: 11.9, w: 87 },
    { profile: "#80S",  min: 560,  max: 850,  h: 16.3, w: 80 },
    { profile: "#79S",  min: 860,  max: 1360, h: 21.5, w: 79 },
    { profile: "#79SW", min: 1361, max: 2130, h: 21.5, w: 79 }
  ],

  backfill: {
    "12A": { materialKg: 867,  waterKg: 433, totalKg: 1300, waterRatio: 50, mixWeight: 300, mixWater: 150 },
    "21A": { materialKg: 916,  waterKg: 384, totalKg: 1300, waterRatio: 42, mixWeight: 300, mixWater: 125 },
    "35A": { materialKg: 1838, waterKg: 312, totalKg: 2150, waterRatio: 17, mixWeight: 600, mixWater: 102 }
  },

  quality: {
    "12A": {
      management:  { density: "1.250以上", flow: "225～315", temp: "10～35", strength: "12.0以上", waterRatio: "50" },
      companySpec: { density: "1.260以上", flow: "225～305", temp: "10～35", strength: "12.0以上", waterRatio: "54" }
    },
    "21A": {
      management:  { density: "1.300以上", flow: "210～280", temp: "10～30", strength: "21.0以上", waterRatio: "42" },
      companySpec: { density: "1.320以上", flow: "210～270", temp: "10～30", strength: "21.0以上", waterRatio: "44" }
    },
    "35A": {
      management:  { density: "2.100以上", flow: "250～380", temp: "10～35", strength: "35.0以上", waterRatio: "17" },
      companySpec: { density: "2.110以上", flow: "250～370", temp: "10～35", strength: "35.0以上", waterRatio: "20" }
    }
  },

  // 「支保なし」の座屈限界圧(210〜730mm)
  buckling: [
    { dia: 210, profile: "#90S", pressure: "0.191" },
    { dia: 260, profile: "#90S", pressure: "0.103" },
    { dia: 310, profile: "#90S", pressure: "0.061" },
    { dia: 340, profile: "#90S", pressure: "0.047" },
    { dia: 360, profile: "#90S", pressure: "0.04" },
    { dia: 410, profile: "#87S", pressure: "0.055" },
    { dia: 460, profile: "#87S", pressure: "0.039" },
    { dia: 550, profile: "#87S", pressure: "0.023" },
    { dia: 640, profile: "#80S", pressure: "0.038" },
    { dia: 730, profile: "#80S", pressure: "0.026" }
  ],

  // 820mm以降はウエイトによる浮上防止が適用外となり、支保工(6点支保／8点支保)が必要になる範囲。
  // ここには支保工ありの座屈限界圧を登録する。(資料編-6 P.81 座屈限界圧マスタより)
  bucklingSupport: {
    six: [
      { dia: 820,  profile: "#80S", pressure: "0.091" },
      { dia: 910,  profile: "#79S", pressure: "0.136" },
      { dia: 1000, profile: "#79S", pressure: "0.103" },
      { dia: 1100, profile: "#79S", pressure: "0.078" },
      { dia: 1230, profile: "#79S", pressure: "0.056" },
      { dia: 1360, profile: "#79S", pressure: "0.041" }
    ],
    eight: [
      { dia: 820,  profile: "#80S", pressure: "0.382" },
      { dia: 910,  profile: "#79S", pressure: "0.571" },
      { dia: 1000, profile: "#79S", pressure: "0.432" },
      { dia: 1100, profile: "#79S", pressure: "0.326" },
      { dia: 1230, profile: "#79S", pressure: "0.234" },
      { dia: 1360, profile: "#79S", pressure: "0.174" }
    ]
  }
};
