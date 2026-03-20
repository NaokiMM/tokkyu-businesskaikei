export type LessonLevel = "初級" | "中級" | "上級";

export type Lesson = {
  id: string;
  title: string;
  level: LessonLevel;
  estimatedMin: number;
  topics: string[];
  summary: string;
  // 0-100
  progressPct: number;
  updatedAt: string; // YYYY-MM-DD
};

export type QuestionTag =
  | "会計の基礎"
  | "財務諸表"
  | "原価計算"
  | "税効果"
  | "決算";

export type Question = {
  id: string;
  numberLabel: string; // 例：問1
  tag: QuestionTag;
  prompt: string;
  options: string[];
  // options の index（0-based）
  answerIndex: number;
  explanation: string;
  level: LessonLevel;
};

export type Attempt = {
  id: string;
  questionId: string;
  date: string; // YYYY-MM-DD
  correct: boolean;
  selectedIndex?: number;
};

export type WeeklySummary = {
  weekLabel: string; // 例：2026-W09
  correctRate: number; // 0-1
  practiceCount: number;
  targetCorrectRate: number; // 0-1
};

export const site = {
  name: "特急ビジネス会計（UIサンプル）",
  examName: "ビジネス会計検定",
};

export const kpis = {
  todayMinutes: 25,
  weekCorrectRate: 0.78,
  completedLessons: 6,
  totalLessons: 10,
  nextLessonTitle: "財務諸表の読み方（演習）",
  nextLessonDueLabel: "明日まで",
  lastAttemptCorrectRate: 0.7,
  pendingReviewCount: 4,
};

export const lessons: Lesson[] = [
  {
    id: "l-101",
    title: "会計の基礎：取引と仕訳",
    level: "初級",
    estimatedMin: 15,
    topics: ["会計の基礎", "仕訳"],
    summary: "取引の判断から仕訳の組み立てまでの基本を確認します。",
    progressPct: 100,
    updatedAt: "2026-02-20",
  },
  {
    id: "l-102",
    title: "財務諸表：BS/PL/CFのつながり",
    level: "初級",
    estimatedMin: 20,
    topics: ["財務諸表", "分析"],
    summary: "勘定科目と財務諸表の関係を、全体像で理解します。",
    progressPct: 80,
    updatedAt: "2026-02-22",
  },
  {
    id: "l-201",
    title: "原価計算：直接費と間接費",
    level: "中級",
    estimatedMin: 18,
    topics: ["原価計算"],
    summary: "原価の考え方を整理し、典型論点を押さえます。",
    progressPct: 35,
    updatedAt: "2026-02-24",
  },
  {
    id: "l-202",
    title: "原価計算：標準原価と差異",
    level: "中級",
    estimatedMin: 22,
    topics: ["原価計算", "差異"],
    summary: "標準原価の差異を計算・解釈する視点を身につけます。",
    progressPct: 10,
    updatedAt: "2026-02-25",
  },
  {
    id: "l-301",
    title: "税効果：一時差異と繰延税金",
    level: "上級",
    estimatedMin: 25,
    topics: ["税効果"],
    summary: "税効果会計の考え方を、用語と仕組みから整理します。",
    progressPct: 20,
    updatedAt: "2026-02-26",
  },
  {
    id: "l-302",
    title: "決算：見積りと重要性",
    level: "上級",
    estimatedMin: 24,
    topics: ["決算", "見積り"],
    summary: "決算時の論点（見積り・重要性）を実務に沿って理解します。",
    progressPct: 5,
    updatedAt: "2026-02-27",
  },
  {
    id: "l-103",
    title: "財務諸表：指標（ROE/ROA等）",
    level: "初級",
    estimatedMin: 14,
    topics: ["財務諸表", "指標"],
    summary: "代表的な指標を用いて、読み取りの勘所を掴みます。",
    progressPct: 60,
    updatedAt: "2026-02-21",
  },
  {
    id: "l-104",
    title: "会計の基礎：現金主義と発生主義",
    level: "初級",
    estimatedMin: 16,
    topics: ["会計の基礎", "発生主義"],
    summary: "発生主義の考え方を短い演習で定着させます。",
    progressPct: 45,
    updatedAt: "2026-02-23",
  },
  {
    id: "l-203",
    title: "原価計算：損益分岐点（演習）",
    level: "中級",
    estimatedMin: 20,
    topics: ["原価計算", "CVP"],
    summary: "損益分岐点を使って、意思決定の流れを理解します。",
    progressPct: 25,
    updatedAt: "2026-02-28",
  },
  {
    id: "l-303",
    title: "税効果：税率と回収可能性（演習）",
    level: "上級",
    estimatedMin: 26,
    topics: ["税効果", "回収可能性"],
    summary: "繰延税金資産の考え方を、典型的な設問で確認します。",
    progressPct: 0,
    updatedAt: "2026-03-01",
  },
];

export const questions: Question[] = [
  {
    id: "q-001",
    numberLabel: "問1",
    tag: "会計の基礎",
    prompt: "発生主義では、収益は「いつ」認識しますか？",
    options: ["現金を受け取った時", "役務提供した時", "借入を行った時", "期末にまとめて"],
    answerIndex: 1,
    explanation:
      "発生主義では、取引が発生した時点（役務提供や実現）で収益を認識します。",
    level: "初級",
  },
  {
    id: "q-002",
    numberLabel: "問2",
    tag: "財務諸表",
    prompt: "PL（損益計算書）の主な目的として適切なのはどれですか？",
    options: ["資金の流れを示す", "一定期間の利益の構造を示す", "企業の資産・負債の状態を示す", "株主資本の増減を示す"],
    answerIndex: 1,
    explanation:
      "PLは一定期間の収益・費用を対応させ、利益の構造（儲け方）を示します。",
    level: "初級",
  },
  {
    id: "q-003",
    numberLabel: "問3",
    tag: "原価計算",
    prompt: "直接費の説明として正しいものはどれですか？",
    options: ["計算が不要な費用", "特定の製品に直接対応できる費用", "配賦して集計する費用", "期間費用として即時費用化する費用"],
    answerIndex: 1,
    explanation:
      "直接費は、特定の製品（または部門）に直接対応できる費用です。",
    level: "中級",
  },
  {
    id: "q-004",
    numberLabel: "問4",
    tag: "原価計算",
    prompt: "標準原価と実際原価の差は何を表しますか？",
    options: ["差異（バリアンス）", "売上総利益", "粗利益率", "回収可能性"],
    answerIndex: 0,
    explanation:
      "標準原価と実際原価の差は、差異（コストのブレ）として分析対象になります。",
    level: "中級",
  },
  {
    id: "q-005",
    numberLabel: "問5",
    tag: "税効果",
    prompt: "繰延税金資産の一般的な考え方として適切なのはどれですか？",
    options: ["回収できない場合は必ず計上する", "将来の課税所得で回収される見込みがあるものを計上する", "税率の変化のみで発生する", "確定申告と同じ意味である"],
    answerIndex: 1,
    explanation:
      "繰延税金資産は、将来の課税所得で回収される見込みがある場合に計上されます。",
    level: "上級",
  },
  {
    id: "q-006",
    numberLabel: "問6",
    tag: "決算",
    prompt: "決算時の見積りに関する説明で適切なのはどれですか？",
    options: ["見積りは行わない", "見積りは監査対象にならない", "見積りの不確実性は注記が必要になり得る", "見積りは将来の結果を無視する"],
    answerIndex: 2,
    explanation:
      "見積りには不確実性が伴うため、重要な場合は注記が必要になり得ます。",
    level: "上級",
  },
];

export const recentAttempts: Attempt[] = [
  { id: "a-001", questionId: "q-006", date: "2026-03-01", correct: true, selectedIndex: 2 },
  { id: "a-002", questionId: "q-005", date: "2026-02-28", correct: false, selectedIndex: 0 },
  { id: "a-003", questionId: "q-004", date: "2026-02-27", correct: true, selectedIndex: 0 },
  { id: "a-004", questionId: "q-003", date: "2026-02-26", correct: false, selectedIndex: 2 },
  { id: "a-005", questionId: "q-002", date: "2026-02-25", correct: true, selectedIndex: 1 },
  { id: "a-006", questionId: "q-001", date: "2026-02-24", correct: true, selectedIndex: 1 },
];

export const weeklySummaries: WeeklySummary[] = [
  { weekLabel: "2026-W09", correctRate: 0.65, practiceCount: 14, targetCorrectRate: 0.7 },
  { weekLabel: "2026-W10", correctRate: 0.74, practiceCount: 18, targetCorrectRate: 0.75 },
  { weekLabel: "2026-W11", correctRate: 0.78, practiceCount: 20, targetCorrectRate: 0.8 },
  { weekLabel: "2026-W12", correctRate: 0.72, practiceCount: 16, targetCorrectRate: 0.78 },
  { weekLabel: "2026-W13", correctRate: 0.82, practiceCount: 22, targetCorrectRate: 0.82 },
  { weekLabel: "2026-W14", correctRate: 0.0, practiceCount: 0, targetCorrectRate: 0.82 }, // 今週（ダミー）
];

export function formatMinutes(min: number) {
  return `${min}分`;
}

export function formatPercent01(value: number) {
  if (!Number.isFinite(value)) return "—";
  if (value === 0) return "0%";
  return new Intl.NumberFormat("ja-JP", {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
}

