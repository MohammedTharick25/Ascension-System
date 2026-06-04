// ════════════════════════════════════════════════════════
// FALLBACK QUEST BANK
// ════════════════════════════════════════════════════════
const QUEST_BANK = {
  Fitness: [
    {
      title: "Morning Workout",
      desc: "Complete 25 push-ups, 25 squats, 10 pull-ups.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "30-Min Cardio",
      desc: "Run, cycle, or jump rope continuously for 30 minutes.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Core Crusher",
      desc: "3 sets of planks (60s), leg raises (15), crunches (20).",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Flexibility Session",
      desc: "20-minute full-body stretch targeting tight muscle groups.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "10,000 Steps",
      desc: "Hit 10,000 steps throughout the day.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "HIIT Protocol",
      desc: "4 rounds: 40s on / 20s off — burpees, mountain climbers, jump squats.",
      xp: 50,
      difficulty: "Hard",
    },
    {
      title: "Upper Body Blast",
      desc: "Bench/push-up 4x12, rows 4x10, shoulder press 3x12.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Stair Challenge",
      desc: "Climb 20 flights of stairs throughout the day.",
      xp: 10,
      difficulty: "Easy",
    },
  ],
  Health: [
    {
      title: "Hydration Protocol",
      desc: "Drink at least 2.5L of water today. Track each glass.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Clean Eating Day",
      desc: "Zero processed food. Whole meals only. Track macros.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Sleep Optimization",
      desc: "In bed by 10:30 PM. No screens 30 min before sleep.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Meal Prep",
      desc: "Prepare 3 healthy meals in advance for tomorrow.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Eliminate Sugar",
      desc: "No added sugar for the entire day.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Posture Check",
      desc: "Set hourly reminders to correct posture. Log each check.",
      xp: 10,
      difficulty: "Easy",
    },
  ],
  Learning: [
    {
      title: "Deep Reading",
      desc: "Read 30 focused minutes in a non-fiction or skill book.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Skill Drill",
      desc: "Practice your primary skill for 45 focused minutes.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Online Course Module",
      desc: "Complete one full module of an online course.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Summary Notes",
      desc: "Write a 1-page summary of what you studied today.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Teach-Back Method",
      desc: "Explain today's learning topic to someone (or record yourself).",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Research Deep Dive",
      desc: "Spend 1 hour researching a topic in your target field.",
      xp: 25,
      difficulty: "Medium",
    },
  ],
  Career: [
    {
      title: "Deep Work Block",
      desc: "2 hours of uninterrupted work on your most important project. Phone off.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Portfolio Update",
      desc: "Add or improve one item in your portfolio/resume.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Skill Application",
      desc: "Apply a recently learned skill in a real work scenario.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Weekly Priority Planning",
      desc: "Write your 3 most important career tasks for the week.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Feedback Request",
      desc: "Ask a mentor or peer for honest feedback on your work.",
      xp: 25,
      difficulty: "Medium",
    },
  ],
  Discipline: [
    {
      title: "Morning Protocol",
      desc: "Wake up within 5 minutes of alarm. No snooze. Log time.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "No-Distraction Hour",
      desc: "1 hour with all notifications off. Single task only.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Cold Shower",
      desc: "Finish your shower with 60 seconds of cold water.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Evening Reflection",
      desc: "Write 3 wins, 1 failure, and 1 lesson from today.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Conquer the Avoided Task",
      desc: "Do the one thing you have been putting off. At least 45 minutes.",
      xp: 50,
      difficulty: "Hard",
    },
    {
      title: "Digital Detox Hour",
      desc: "No social media, no entertainment for 1 hour.",
      xp: 10,
      difficulty: "Easy",
    },
  ],
  Wealth: [
    {
      title: "Expense Audit",
      desc: "Review last 7 days of spending. Identify 1 cut.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Income Idea Session",
      desc: "Write 5 actionable ideas to increase your income this month.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Savings Transfer",
      desc: "Move any amount into savings/investment today.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Skill Monetization Research",
      desc: "Research 3 ways to monetize your primary skill.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "Budget Review",
      desc: "Update your monthly budget with actual vs planned.",
      xp: 25,
      difficulty: "Medium",
    },
  ],
  Social: [
    {
      title: "Meaningful Outreach",
      desc: "Send a genuine message to a mentor, peer, or potential connection.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Network Event",
      desc: "Attend an online or in-person industry event.",
      xp: 50,
      difficulty: "Hard",
    },
    {
      title: "Relationship Investment",
      desc: "Have a 30-minute focused conversation with someone important.",
      xp: 25,
      difficulty: "Medium",
    },
    {
      title: "LinkedIn/Profile Update",
      desc: "Post or engage meaningfully on a professional platform.",
      xp: 10,
      difficulty: "Easy",
    },
  ],
  Mindset: [
    {
      title: "Meditation",
      desc: "10 minutes of focused breathing or guided meditation.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Gratitude Log",
      desc: "Write 5 specific things you are grateful for. No repeats.",
      xp: 5,
      difficulty: "Tiny",
    },
    {
      title: "Visualization",
      desc: "Spend 10 minutes clearly visualizing your goal achieved.",
      xp: 10,
      difficulty: "Easy",
    },
    {
      title: "Affirmation Practice",
      desc: "Write and say aloud 5 identity-based affirmations.",
      xp: 5,
      difficulty: "Tiny",
    },
  ],
};

function buildFallbackQuests(profile) {
  const focus =
    profile.focusAreas && profile.focusAreas.length
      ? profile.focusAreas
      : ["Fitness", "Discipline", "Learning", "Career"];
  const pick = (cat, type, i) => {
    const pool = QUEST_BANK[cat] || QUEST_BANK.Discipline;
    const q = pool[i % pool.length];
    return {
      id: `${type}_${cat}_${i}`,
      type,
      title: q.title,
      desc: q.desc,
      xp: q.xp,
      difficulty: q.difficulty,
      category: cat,
    };
  };
  const quests = [];
  for (let i = 0; i < 4; i++)
    quests.push(pick(focus[i % focus.length], "mandatory", i));
  for (let i = 0; i < 3; i++)
    quests.push(pick(focus[(i + 1) % focus.length], "side", i + 4));
  quests.push({
    id: "challenge_0",
    type: "challenge",
    title: "Discomfort Challenge",
    desc: `Spend ${Math.min(2, parseFloat(profile.availableTime) || 2)} hours doing the task you avoid most. No distractions.`,
    xp: 50,
    difficulty: "Hard",
    category: "Discipline",
  });
  const weakness = (profile.weaknesses || "procrastination")
    .split(",")[0]
    .trim();
  quests.push({
    id: "boss_0",
    type: "boss",
    title: `BOSS: Defeat ${weakness}`,
    desc: `Your declared weakness is "${weakness}". Today you confront it directly. No excuses, no postponement. Full evidence required.`,
    xp: 250,
    difficulty: "Elite",
    category: "Discipline",
  });
  return quests;
}

function buildFallbackRoadmap() {
  return [
    {
      week: 1,
      title: "Foundation Protocol",
      tasks: [
        "Establish morning routine",
        "Build daily quest habit",
        "Identify and cut top time-wasters",
        "Hit 5/7 daily completion days",
      ],
    },
    {
      week: 2,
      title: "Momentum Build",
      tasks: [
        "Increase workout intensity",
        "Add 1 new learning session daily",
        "Optimize sleep to 7-8 hours",
        "Target 5-day streak",
      ],
    },
    {
      week: 3,
      title: "Compound Gains",
      tasks: [
        "Launch one career/income project",
        "Level up weakest stat area",
        "Expand network by 3 contacts",
        "Reach 7-day streak",
      ],
    },
    {
      week: 4,
      title: "First Milestone Review",
      tasks: [
        "Hit Level 3",
        "Unlock 3 achievements",
        "Complete weekly review",
        "Plan Month 2 focus areas",
      ],
    },
  ];
}

function buildFallbackAchievements() {
  return [
    {
      id: "a1",
      name: "First Blood",
      desc: "Complete your first quest",
      icon: "⚔️",
      unlocked: false,
    },
    {
      id: "a2",
      name: "7-Day Survivor",
      desc: "Maintain a 7-day streak",
      icon: "🔥",
      unlocked: false,
    },
    {
      id: "a3",
      name: "Fitness Initiate",
      desc: "Complete 10 fitness quests",
      icon: "💪",
      unlocked: false,
    },
    {
      id: "a4",
      name: "Deep Work Apprentice",
      desc: "Complete 5 career/learning quests",
      icon: "🧠",
      unlocked: false,
    },
    {
      id: "a5",
      name: "Income Generator",
      desc: "Complete your first wealth quest",
      icon: "💰",
      unlocked: false,
    },
    {
      id: "a6",
      name: "Iron Will",
      desc: "Earn 500 total XP",
      icon: "🛡️",
      unlocked: false,
    },
    {
      id: "a7",
      name: "Social Node",
      desc: "Complete 5 social quests",
      icon: "🤝",
      unlocked: false,
    },
    {
      id: "a8",
      name: "Consistency Master",
      desc: "Reach a 30-day streak",
      icon: "⚡",
      unlocked: false,
    },
    {
      id: "a9",
      name: "Discipline Warrior",
      desc: "Never miss 2 days in a row for 14 days",
      icon: "🗡️",
      unlocked: false,
    },
    {
      id: "a10",
      name: "Boss Slayer",
      desc: "Complete your first boss battle",
      icon: "👑",
      unlocked: false,
    },
  ];
}

// ════════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════════
let playerData = {};
let gameState = {
  name: "",
  level: 1,
  xp: 0,
  totalXP: 0,
  statPoints: 0,
  streak: 0,
  longestStreak: 0,
  penaltyCount: 0,
  stats: {
    Strength: 10,
    Endurance: 10,
    Intelligence: 10,
    Discipline: 10,
    Focus: 10,
    Communication: 10,
    Confidence: 10,
    Wealth: 10,
    Health: 10,
    Productivity: 10,
  },
  quests: [],
  roadmap: [],
  achievements: [],
  completedToday: [],
  lastReset: null,
  dailyStatAwarded: false,
  streakAwardedToday: false,
  questCounters: { fitness: 0, deep: 0, social: 0 },
  tempPenalties: {},
  daysCompleted: 0,
};

// ════════════════════════════════════════════════════════
// SCAN STEPS
// ════════════════════════════════════════════════════════
const scanSteps = [
  {
    id: "name",
    q: "What's your name?",
    hint: "Your player name in the system.",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    id: "age",
    q: "How old are you?",
    hint: "Age affects recommended training protocols.",
    type: "number",
    placeholder: "e.g. 24",
    min: 12,
    max: 80,
  },
  {
    id: "height",
    q: "Your height?",
    hint: "Used for fitness calibration.",
    type: "text",
    placeholder: "e.g. 175cm or 5ft 9in",
  },
  {
    id: "weight",
    q: "Your current weight?",
    hint: "Starting body metric.",
    type: "text",
    placeholder: "e.g. 72kg or 160lbs",
  },
  {
    id: "fitnessLevel",
    q: "Current fitness level?",
    hint: "Be honest — no one is watching.",
    type: "chips",
    options: [
      "Sedentary",
      "Lightly Active",
      "Moderately Active",
      "Very Active",
      "Athlete",
    ],
  },
  {
    id: "medicalLimitations",
    q: "Any medical limitations or injuries?",
    hint: "We will exclude contraindicated movements.",
    type: "text",
    placeholder: "e.g. bad knees, lower back pain, none",
  },
  {
    id: "education",
    q: "Highest education level?",
    hint: "Shapes the depth of learning quests.",
    type: "chips",
    options: [
      "High School",
      "Some College",
      "Bachelor's",
      "Master's",
      "PhD",
      "Self-Taught",
      "Other",
    ],
  },
  {
    id: "skills",
    q: "What are your top 3 current skills?",
    hint: "Things you are already decent at.",
    type: "textarea",
    placeholder: "e.g. Python, copywriting, video editing",
  },
  {
    id: "career",
    q: "Current career or field?",
    hint: "Personalizes career-track quests.",
    type: "text",
    placeholder: "e.g. Software Engineer, Student, Freelancer",
  },
  {
    id: "income",
    q: "Monthly income range?",
    hint: "Calibrates wealth-building quests.",
    type: "chips",
    options: [
      "$0",
      "$1–$500",
      "$500–$1500",
      "$1500–$3000",
      "$3000–$5000",
      "$5000–$10000",
      "$10000+",
    ],
  },
  {
    id: "sleepHours",
    q: "Average sleep hours per night?",
    hint: "Slide to your realistic average.",
    type: "range",
    min: 3,
    max: 12,
    step: 0.5,
    def: 7,
    unit: "hrs",
  },
  {
    id: "dailyRoutine",
    q: "Describe your typical daily routine:",
    hint: "Wake time, work/study hours, free windows.",
    type: "textarea",
    placeholder: "e.g. Wake 7am, office 9-6pm, free 7-10pm",
  },
  {
    id: "currentHabits",
    q: "List your current daily habits (good and bad):",
    hint: "Brutal honesty only.",
    type: "textarea",
    placeholder: "e.g. morning coffee ✓, 2h doom-scrolling ✗, gym 3x/wk ✓",
  },
  {
    id: "bigGoals",
    q: "What are your biggest goals in the next 12 months?",
    hint: "Be specific — vague goals get vague results.",
    type: "textarea",
    placeholder: "e.g. Lose 15kg, get promoted, launch side business",
  },
  {
    id: "weaknesses",
    q: "Your biggest personal weaknesses right now?",
    hint: "No self-censoring. This powers your boss battles.",
    type: "textarea",
    placeholder: "e.g. procrastination, poor diet, no consistency",
  },
  {
    id: "focusAreas",
    q: "Which areas do you want to prioritize MOST?",
    hint: "Pick up to 4.",
    type: "chips",
    options: [
      "Fitness",
      "Health",
      "Learning",
      "Career",
      "Wealth",
      "Discipline",
      "Social",
      "Mindset",
      "Productivity",
    ],
    multi: true,
    max: 4,
  },
  {
    id: "availableTime",
    q: "How many hours per day can you realistically invest?",
    hint: "Be honest — overcommitting kills streaks.",
    type: "range",
    min: 0.5,
    max: 8,
    step: 0.5,
    def: 2,
    unit: "hrs",
  },
  {
    id: "resources",
    q: "What resources do you have access to?",
    hint: "Pick all that apply.",
    type: "chips",
    options: [
      "Gym Access",
      "Home Weights",
      "Running Space",
      "Library",
      "Laptop/PC",
      "Smartphone",
      "Mentor",
      "None",
    ],
    multi: true,
  },
];

let currentStep = 0;
const scanAnswers = {};

function buildScanSteps() {
  const panel = document.getElementById("scanPanel");
  panel.innerHTML = scanSteps
    .map(
      (s, i) => `
  <div class="step ${i === 0 ? "active" : ""}" id="step_${i}">
    <div class="step-num">STEP ${i + 1} OF ${scanSteps.length}</div>
    <div class="step-q">${s.q}</div>
    <div class="step-hint">${s.hint}</div>
    ${buildInput(s)}
    <div class="step-nav">
      ${i > 0 ? '<button class="btn-nav" onclick="prevStep()">← BACK</button>' : ""}
      <button class="btn-nav primary" onclick="nextStep()">${i === scanSteps.length - 1 ? "INITIALIZE ▶" : "NEXT ▶"}</button>
    </div>
  </div>`,
    )
    .join("");
}

function buildInput(s) {
  if (s.type === "text")
    return `<input class="form-input" id="inp_${s.id}" placeholder="${s.placeholder || ""}">`;
  if (s.type === "number")
    return `<input class="form-input" type="number" id="inp_${s.id}" placeholder="${s.placeholder || ""}" min="${s.min || 0}" max="${s.max || 999}">`;
  if (s.type === "textarea")
    return `<textarea class="form-textarea" id="inp_${s.id}" placeholder="${s.placeholder || ""}"></textarea>`;
  if (s.type === "range")
    return `
    <div class="range-wrap">
      <input type="range" id="inp_${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.def}"
        oninput="document.getElementById('rv_${s.id}').textContent=this.value+'${s.unit || ""}'">
      <div class="range-val" id="rv_${s.id}">${s.def}${s.unit || ""}</div>
    </div>`;
  if (s.type === "chips")
    return `
    <div class="option-grid" id="chips_${s.id}">
      ${s.options.map((o) => `<div class="option-chip" onclick="selectChip(this,'${s.id}',${!!s.multi},${s.max || 99})">${o}</div>`).join("")}
    </div>`;
  return "";
}

function selectChip(el, id, multi, max) {
  if (!multi) {
    document
      .querySelectorAll(`#chips_${id} .option-chip`)
      .forEach((c) => c.classList.remove("selected"));
    el.classList.add("selected");
  } else {
    const sel = document.querySelectorAll(`#chips_${id} .option-chip.selected`);
    if (!el.classList.contains("selected") && sel.length >= max) {
      showToast(`Max ${max} selections`);
      return;
    }
    el.classList.toggle("selected");
  }
}

function getStepValue(s) {
  if (s.type === "chips") {
    const sel = [
      ...document.querySelectorAll(`#chips_${s.id} .option-chip.selected`),
    ].map((c) => c.textContent);
    return s.multi ? (sel.length ? sel : []) : sel[0] || "";
  }
  const el = document.getElementById(`inp_${s.id}`);
  return el ? el.value.trim() : "";
}

function nextStep() {
  const s = scanSteps[currentStep];
  const val = getStepValue(s);
  const empty = Array.isArray(val) ? val.length === 0 : !val;
  if (empty) {
    showToast("⚠ Please complete this field");
    return;
  }
  scanAnswers[s.id] = val;
  if (currentStep === scanSteps.length - 1) {
    startProcessing();
    return;
  }
  document.getElementById(`step_${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step_${currentStep}`).classList.add("active");
  document.getElementById("scanProgress").style.width =
    ((currentStep + 1) / scanSteps.length) * 100 + "%";
  document.querySelector(".scan-container").scrollTop = 0;
}

function prevStep() {
  document.getElementById(`step_${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step_${currentStep}`).classList.add("active");
  document.getElementById("scanProgress").style.width =
    ((currentStep + 1) / scanSteps.length) * 100 + "%";
}

// ════════════════════════════════════════════════════════
// PROCESSING
// ════════════════════════════════════════════════════════
const logMsgs = [
  "> Scanning biometric profile...",
  "> Analyzing career trajectory...",
  "> Mapping weakness nodes...",
  "> Calculating stat baseline...",
  "> Generating quest architecture...",
  "> Calibrating difficulty engine...",
  "> Constructing 30-day roadmap...",
  "> Initializing achievement tree...",
  "> Generating boss battle...",
  "> System online. Welcome, Ascendant.",
];

async function startProcessing() {
  playerData = Object.assign({}, scanAnswers);
  showScreen("processing");
  const log = document.getElementById("procLog");
  log.innerHTML = "";
  for (let i = 0; i < logMsgs.length; i++) {
    await delay(380);
    const line = document.createElement("div");
    line.className = "log-line";
    line.textContent = logMsgs[i];
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }
  await delay(300);
  await generateWithAI();
}

// ════════════════════════════════════════════════════════
// AI GENERATION — calls your Node.js backend /api/generate
// which securely talks to Groq with your API key
// ════════════════════════════════════════════════════════
async function generateWithAI() {
  const prompt = buildAIPrompt();
  let parsed = null;

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("API error:", err);
      throw new Error(err.error || "Server error");
    }

    const data = await res.json();
    console.log("Raw AI response:", data.result);
    parsed = JSON.parse(data.result);
  } catch (e) {
    console.warn("AI failed, using fallback quests:", e.message);
    parsed = null;
  }

  initGameState(parsed);
}

function buildAIPrompt() {
  return `Player profile:
Name: ${playerData.name}, Age: ${playerData.age}, Fitness: ${playerData.fitnessLevel}
Career: ${playerData.career}, Income: ${playerData.income}
Goals: ${playerData.bigGoals}
Weaknesses: ${playerData.weaknesses}
Focus areas: ${Array.isArray(playerData.focusAreas) ? playerData.focusAreas.join(", ") : playerData.focusAreas}
Available time: ${playerData.availableTime} hrs/day
Resources: ${Array.isArray(playerData.resources) ? playerData.resources.join(", ") : playerData.resources}

Return this exact JSON (no markdown, no extra text):
{
  "initialStats":{"Strength":10,"Endurance":10,"Intelligence":10,"Discipline":10,"Focus":10,"Communication":10,"Confidence":10,"Wealth":10,"Health":10,"Productivity":10},
  "quests":[
    {"id":"m1","type":"mandatory","title":"...","desc":"...","xp":25,"difficulty":"Medium","category":"Fitness"},
    {"id":"m2","type":"mandatory","title":"...","desc":"...","xp":25,"difficulty":"Medium","category":"Learning"},
    {"id":"m3","type":"mandatory","title":"...","desc":"...","xp":10,"difficulty":"Easy","category":"Discipline"},
    {"id":"m4","type":"mandatory","title":"...","desc":"...","xp":10,"difficulty":"Easy","category":"Health"},
    {"id":"s1","type":"side","title":"...","desc":"...","xp":10,"difficulty":"Easy","category":"Social"},
    {"id":"s2","type":"side","title":"...","desc":"...","xp":10,"difficulty":"Easy","category":"Wealth"},
    {"id":"s3","type":"side","title":"...","desc":"...","xp":10,"difficulty":"Easy","category":"Mindset"},
    {"id":"c1","type":"challenge","title":"...","desc":"...","xp":50,"difficulty":"Hard","category":"Discipline"},
    {"id":"b1","type":"boss","title":"BOSS: ...","desc":"...","xp":250,"difficulty":"Elite","category":"Discipline"}
  ],
  "roadmap":[
    {"week":1,"title":"...","tasks":["...","...","...","..."]},
    {"week":2,"title":"...","tasks":["...","...","...","..."]},
    {"week":3,"title":"...","tasks":["...","...","...","..."]},
    {"week":4,"title":"...","tasks":["...","...","...","..."]}
  ]
}
Make ALL quests specific to this player's goals and weaknesses. Roadmap tasks must be concrete actions. Replace all stat values with numbers between 8 and 13 based on the player profile.`;
}

// ════════════════════════════════════════════════════════
// REGENERATE QUESTS — also calls backend
// ════════════════════════════════════════════════════════
async function regenerateQuests() {
  const btn = document.getElementById("regenBtn");
  btn.disabled = true;
  btn.innerHTML = '<span class="spin-sm"></span>GENERATING...';

  const prompt = `Player level ${gameState.level}, focus: ${Array.isArray(playerData.focusAreas) ? playerData.focusAreas.join(",") : playerData.focusAreas || "Fitness,Discipline"}, weaknesses: ${playerData.weaknesses || ""}, time: ${playerData.availableTime || 2}hrs/day.
Generate 9 fresh quests harder than before. Return ONLY a JSON array (no markdown, no extra text):
[{"id":"x","type":"mandatory|side|challenge|boss","title":"...","desc":"...","xp":25,"difficulty":"Easy|Medium|Hard|Elite","category":"..."}]
4 mandatory, 3 side, 1 challenge, 1 boss. All specific to this player.`;

  let newQuests = null;

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    console.log("Regen AI response:", data.result);
    newQuests = JSON.parse(data.result);
  } catch (e) {
    console.warn("Regen failed, using fallback:", e.message);
    newQuests = buildFallbackQuests(playerData);
  }

  gameState.quests = newQuests;
  gameState.completedToday = [];
  gameState.dailyStatAwarded = false;
  gameState.streakAwardedToday = false;
  saveState();
  renderQuests();
  updateDailyBar();
  showToast("✦ New quests generated!");
  btn.disabled = false;
  btn.innerHTML = "✦ NEW QUESTS";
}

// ════════════════════════════════════════════════════════
// INIT GAME STATE
// ════════════════════════════════════════════════════════
function initGameState(data) {
  gameState.name = playerData.name || "Ascendant";
  if (data && data.initialStats) {
    gameState.stats = data.initialStats;
  } else {
    const fit = ["Very Active", "Athlete"].includes(playerData.fitnessLevel);
    const edu = ["Master's", "PhD"].includes(playerData.education);
    gameState.stats = {
      Strength: fit ? 12 : 9,
      Endurance: fit ? 12 : 9,
      Intelligence: edu ? 12 : 10,
      Discipline: 9,
      Focus: 9,
      Communication: 10,
      Confidence: 9,
      Wealth: ["$3000–$5000", "$5000–$10000", "$10000+"].includes(
        playerData.income,
      )
        ? 11
        : 9,
      Health: fit ? 12 : 9,
      Productivity: 9,
    };
  }
  gameState.quests =
    data && data.quests ? data.quests : buildFallbackQuests(playerData);
  gameState.roadmap =
    data && data.roadmap ? data.roadmap : buildFallbackRoadmap();
  gameState.achievements = buildFallbackAchievements();
  gameState.completedToday = [];
  gameState.dailyStatAwarded = false;
  gameState.streakAwardedToday = false;
  gameState.lastReset = todayStr();
  gameState.streak = 0;
  gameState.statPoints = 0;
  gameState.xp = 0;
  gameState.totalXP = 0;
  gameState.level = 1;
  gameState.penaltyCount = 0;
  saveState();
  buildDashboard();
  showScreen("dashboard");
}

// ════════════════════════════════════════════════════════
// DASHBOARD
// ════════════════════════════════════════════════════════
function buildDashboard() {
  updateStatusWindow();
  renderQuests();
  renderRoadmap();
  renderAchievements();
  updateDailyBar();
  checkAllocArea();
  startCountdownTimer();
}

function xpForLevel(lvl) {
  return lvl * 100;
}

function computeLevel(totalXP) {
  let lvl = 1,
    spent = 0;
  while (spent + xpForLevel(lvl) <= totalXP) {
    spent += xpForLevel(lvl);
    lvl++;
  }
  const xpInLevel = totalXP - spent;
  const xpNeeded = xpForLevel(lvl);
  return { level: lvl, xpInLevel, xpNeeded };
}

function updateStatusWindow() {
  const { level, xpInLevel, xpNeeded } = computeLevel(gameState.totalXP);
  gameState.level = level;

  document.getElementById("swName").textContent = gameState.name.toUpperCase();
  document.getElementById("swRank").textContent = getRank(level);
  document.getElementById("swLevel").textContent =
    `LEVEL ${level}  ·  ${gameState.totalXP} XP TOTAL`;
  document.getElementById("xpFrac").textContent = `${xpInLevel} / ${xpNeeded}`;
  document.getElementById("xpBar").style.width =
    Math.min(100, (xpInLevel / xpNeeded) * 100) + "%";
  document.getElementById("spVal").textContent = gameState.statPoints;
  document.getElementById("streakVal").textContent = gameState.streak;
  document.getElementById("penaltyVal").textContent = gameState.penaltyCount;

  const COLORS = [
    "#ff6b6b",
    "#ffd700",
    "#00d4aa",
    "#6c63ff",
    "#ff6b6b",
    "#ffa502",
    "#a78bfa",
    "#2ed573",
    "#00d4aa",
    "#ff9f43",
  ];
  const keys = Object.keys(gameState.stats);
  document.getElementById("statsGrid").innerHTML = keys
    .map(
      (k, i) => `
    <div class="stat-row">
      <div class="stat-name">${k.substring(0, 8)}</div>
      <div class="stat-bar-wrap">
        <div class="stat-bar-fill" style="width:${Math.min(100, gameState.stats[k])}%;background:${COLORS[i % COLORS.length]};"></div>
      </div>
      <div class="stat-val">${gameState.stats[k]}</div>
    </div>`,
    )
    .join("");

  const sel = document.getElementById("allocStat");
  sel.innerHTML = keys
    .map((k) => `<option value="${k}">${k}: ${gameState.stats[k]}</option>`)
    .join("");
}

function getRank(lvl) {
  if (lvl < 3) return "E RANK";
  if (lvl < 6) return "D RANK";
  if (lvl < 10) return "C RANK";
  if (lvl < 15) return "B RANK";
  if (lvl < 20) return "A RANK";
  if (lvl < 30) return "S RANK";
  if (lvl < 45) return "SS RANK";
  if (lvl < 60) return "SSS RANK";
  return "ASCENDANT";
}

function checkAllocArea() {
  const hasPoints = gameState.statPoints > 0;
  document.getElementById("allocArea").style.display = hasPoints
    ? "block"
    : "none";
  document.getElementById("noAllocMsg").style.display = hasPoints
    ? "none"
    : "block";
}

function allocateStat() {
  if (gameState.statPoints < 1) {
    showToast("No stat points available");
    return;
  }
  const stat = document.getElementById("allocStat").value;
  gameState.stats[stat]++;
  gameState.statPoints--;
  saveState();
  updateStatusWindow();
  checkAllocArea();
  showToast(`⬆ ${stat} increased to ${gameState.stats[stat]}!`);
}

// ════════════════════════════════════════════════════════
// DAILY TRACKER + COUNTDOWN TIMER
// ════════════════════════════════════════════════════════
function updateDailyBar() {
  const mandatory = gameState.quests.filter((q) => q.type === "mandatory");
  const done = mandatory.filter((q) =>
    gameState.completedToday.includes(q.id),
  ).length;
  const pct = mandatory.length ? (done / mandatory.length) * 100 : 0;
  document.getElementById("dailyFill").style.width = pct + "%";
  document.getElementById("dailyCount").textContent =
    `${done}/${mandatory.length} mandatory`;
}

let timerInterval = null;
function startCountdownTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 0);
    const diff = midnight - now;
    if (diff <= 0) {
      clearInterval(timerInterval);
      doDailyReset();
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const box = document.getElementById("timerBox");
    if (box)
      box.textContent = `⏳ ${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} left`;
  }, 1000);
}

// ════════════════════════════════════════════════════════
// QUESTS
// ════════════════════════════════════════════════════════
function renderQuests() {
  const mandatory = gameState.quests.filter((q) => q.type === "mandatory");
  const side = gameState.quests.filter((q) => q.type === "side");
  const boss = gameState.quests.filter(
    (q) => q.type === "boss" || q.type === "challenge",
  );
  document.getElementById("mandatoryList").innerHTML =
    mandatory.map(questCard).join("") || emptyMsg();
  document.getElementById("sideList").innerHTML =
    side.map(questCard).join("") || emptyMsg();
  document.getElementById("bossList").innerHTML =
    boss.map(questCard).join("") || emptyMsg();
}

function emptyMsg() {
  return "<div style=\"color:var(--text3);font-size:12px;padding:8px;font-family:'Share Tech Mono',monospace;\">No quests — generate new ones above.</div>";
}

function questCard(q) {
  const done = gameState.completedToday.includes(q.id);
  const badges = {
    mandatory: "badge-mandatory MANDATORY",
    side: "badge-side SIDE",
    challenge: "badge-challenge CHALLENGE",
    boss: "badge-boss BOSS BATTLE",
  };
  return `
  <div class="quest-card ${q.type} ${done ? "done" : ""}" id="qcard_${q.id}">
    <div class="quest-check">${done ? "✓" : ""}</div>
    <div class="quest-body">
      <span class="quest-type-badge ${badges[q.type] || "badge-side"}">${(q.type || "side").toUpperCase()}</span>
      <div class="quest-title">${q.title}</div>
      <div class="quest-desc">${q.desc}</div>
      <div class="quest-meta">
        <span class="xp-pill">+${q.xp} XP</span>
        <span class="diff-pill">${q.difficulty || "Medium"}</span>
        <span class="diff-pill" style="color:var(--accent3);">${q.category || ""}</span>
      </div>
      ${done ? "<div style=\"font-size:11px;color:var(--green);margin-top:8px;font-family:'Share Tech Mono',monospace;\">✓ COMPLETED — Evidence accepted</div>" : ""}
    </div>
    ${!done ? `<div class="quest-actions"><button class="quest-complete-btn" onclick="openEvidence('${q.id}')">COMPLETE</button></div>` : ""}
  </div>
  <div class="evidence-form" id="ev_${q.id}">
    <div style="font-size:13px;color:var(--text2);margin-bottom:8px;font-weight:600;">📋 Evidence required:</div>
    <textarea class="form-textarea" id="evtext_${q.id}" placeholder="Describe exactly what you did — duration, reps, results, screenshots..." style="min-height:70px;margin-bottom:8px;"></textarea>
    <div style="display:flex;gap:8px;">
      <button class="btn-nav primary" onclick="submitEvidence('${q.id}',${q.xp},'${q.type}','${q.category || ""}')">SUBMIT</button>
      <button class="btn-nav" onclick="closeEvidence('${q.id}')">CANCEL</button>
    </div>
  </div>`;
}

function openEvidence(id) {
  document.querySelectorAll(".evidence-form.open").forEach((f) => {
    if (f.id !== `ev_${id}`) f.classList.remove("open");
  });
  document.getElementById(`ev_${id}`).classList.toggle("open");
}
function closeEvidence(id) {
  document.getElementById(`ev_${id}`).classList.remove("open");
}

function submitEvidence(id, xp, type, category) {
  const txt = (document.getElementById(`evtext_${id}`).value || "").trim();
  if (!txt) {
    showToast("⚠ Evidence required — describe what you did.");
    return;
  }
  if (txt.split(/\s+/).length < 4) {
    showToast("⚠ Too vague. Add more detail.");
    return;
  }

  gameState.completedToday.push(id);
  closeEvidence(id);

  gameState.xp += xp;
  gameState.totalXP += xp;
  showToast(`+${xp} XP earned!`);

  checkLevelUp();

  if (category === "Fitness")
    gameState.questCounters.fitness =
      (gameState.questCounters.fitness || 0) + 1;
  if (category === "Career" || category === "Learning")
    gameState.questCounters.deep = (gameState.questCounters.deep || 0) + 1;
  if (category === "Social")
    gameState.questCounters.social = (gameState.questCounters.social || 0) + 1;

  const mandatory = gameState.quests.filter((q) => q.type === "mandatory");
  const allMandatoryDone =
    mandatory.length > 0 &&
    mandatory.every((q) => gameState.completedToday.includes(q.id));

  if (allMandatoryDone) {
    if (!gameState.dailyStatAwarded) {
      gameState.statPoints++;
      gameState.dailyStatAwarded = true;
      setTimeout(
        () => showToast("🏆 All mandatory quests done! +1 Stat Point earned!"),
        600,
      );
    }
    if (!gameState.streakAwardedToday) {
      gameState.streak++;
      gameState.streakAwardedToday = true;
      gameState.longestStreak = Math.max(
        gameState.longestStreak,
        gameState.streak,
      );
      gameState.daysCompleted = (gameState.daysCompleted || 0) + 1;
      setTimeout(
        () => showToast(`🔥 Streak increased! Current: ${gameState.streak}`),
        1000,
      );
    }
  }

  if (type === "boss") checkAchievements("boss_done", "");
  checkAchievements(type, category);
  saveState();
  renderQuests();
  updateStatusWindow();
  updateDailyBar();
  checkAllocArea();
}

// ════════════════════════════════════════════════════════
// LEVEL UP
// ════════════════════════════════════════════════════════
function checkLevelUp() {
  const { level } = computeLevel(gameState.totalXP);
  if (level > gameState.level) {
    gameState.level = level;
    document.getElementById("levelUpText").textContent =
      `You have reached Level ${level}! Harder quests are now available. Allocate your new stat point.`;
    document.getElementById("levelUpModal").classList.add("active");
  }
}

// ════════════════════════════════════════════════════════
// ACHIEVEMENTS
// ════════════════════════════════════════════════════════
function checkAchievements(type, category) {
  if (gameState.completedToday.length >= 1) unlockAchievement("a1");
  if (gameState.streak >= 7) unlockAchievement("a2");
  if ((gameState.questCounters.fitness || 0) >= 10) unlockAchievement("a3");
  if ((gameState.questCounters.deep || 0) >= 5) unlockAchievement("a4");
  if (category === "Wealth") unlockAchievement("a5");
  if (gameState.totalXP >= 500) unlockAchievement("a6");
  if ((gameState.questCounters.social || 0) >= 5) unlockAchievement("a7");
  if (gameState.streak >= 30) unlockAchievement("a8");
  if (type === "boss_done") unlockAchievement("a10");
}

function unlockAchievement(id) {
  const a = gameState.achievements.find((x) => x.id === id);
  if (a && !a.unlocked) {
    a.unlocked = true;
    setTimeout(() => showToast(`🏅 Achievement Unlocked: ${a.name}!`), 800);
    renderAchievements();
  }
}

// ════════════════════════════════════════════════════════
// DAILY RESET
// ════════════════════════════════════════════════════════
function doDailyReset() {
  const mandatory = gameState.quests.filter((q) => q.type === "mandatory");
  const allDone =
    mandatory.length > 0 &&
    mandatory.every((q) => gameState.completedToday.includes(q.id));

  if (!allDone && mandatory.length > 0) {
    gameState.streak = 0;
    gameState.penaltyCount++;

    const pb = document.getElementById("penaltyBanner");
    if (pb) {
      pb.classList.add("show");
      pb.textContent = `⚠ PENALTY #${gameState.penaltyCount}: Streak reset. You failed to complete mandatory quests yesterday.`;
    }

    if (gameState.penaltyCount >= 2) {
      gameState.stats.Discipline = Math.max(1, gameState.stats.Discipline - 1);
      gameState.stats.Focus = Math.max(1, gameState.stats.Focus - 1);
      setTimeout(
        () =>
          showToast("🔴 Penalty: Discipline & Focus -1 for repeated failure"),
        500,
      );
    }
    if (gameState.penaltyCount >= 3) {
      showToast("🔴 Severe penalty: Extra quest added today!");
      const extra = buildFallbackQuests(playerData).find(
        (q) => q.type === "challenge",
      );
      if (extra) {
        extra.id = "penalty_extra_" + Date.now();
        gameState.quests.push(extra);
      }
    }
  }

  gameState.completedToday = [];
  gameState.dailyStatAwarded = false;
  gameState.streakAwardedToday = false;
  gameState.lastReset = todayStr();
  saveState();
  buildDashboard();
}

function checkDailyReset() {
  if (!gameState.lastReset) return;
  if (gameState.lastReset !== todayStr()) doDailyReset();
}

// ════════════════════════════════════════════════════════
// ROADMAP & ACHIEVEMENTS RENDER
// ════════════════════════════════════════════════════════
function renderRoadmap() {
  document.getElementById("roadmapContent").innerHTML = (
    gameState.roadmap || []
  )
    .map(
      (w) => `
    <div class="week-block">
      <div class="week-label">WEEK ${w.week}</div>
      <div class="week-content">
        <div class="week-title">${w.title}</div>
        <div class="week-tasks">${(w.tasks || []).map((t) => `<div class="week-task">${t}</div>`).join("")}</div>
      </div>
    </div>`,
    )
    .join("");
}

function renderAchievements() {
  document.getElementById("achieveGrid").innerHTML = (
    gameState.achievements || []
  )
    .map(
      (a) => `
    <div class="achieve-card ${a.unlocked ? "unlocked" : "achieve-locked"}">
      <div class="achieve-icon">${a.icon}</div>
      <div class="achieve-name">${a.name}</div>
      <div class="achieve-desc">${a.desc}</div>
      ${a.unlocked ? "<div style=\"font-size:10px;color:var(--green);margin-top:6px;font-family:'Share Tech Mono',monospace;\">✓ UNLOCKED</div>" : ""}
    </div>`,
    )
    .join("");
}

// ════════════════════════════════════════════════════════
// TABS / SCREENS / UTILS
// ════════════════════════════════════════════════════════
function switchTab(name) {
  const names = ["quests", "roadmap", "achievements", "review"];
  document
    .querySelectorAll(".tab")
    .forEach((t, i) => t.classList.toggle("active", names[i] === name));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.toggle("active", c.id === `tab-${name}`));
  if (name === "review") buildReview();
}

function buildReview() {
  const days = gameState.daysCompleted || 0;
  const body = document.getElementById("reviewBody");
  if (days < 7) {
    body.innerHTML =
      "<div style=\"text-align:center;padding:30px 0;color:var(--text3);font-family:'Share Tech Mono',monospace;\">Complete 7 days to unlock your first review.</div>";
    return;
  }
  const rate = Math.round(
    (gameState.daysCompleted /
      Math.max(1, gameState.streak + gameState.penaltyCount)) *
      100,
  );
  body.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
      <div class="meta-chip"><div class="v">${gameState.totalXP}</div><div class="l">Total XP</div></div>
      <div class="meta-chip"><div class="v">${gameState.level}</div><div class="l">Current Level</div></div>
      <div class="meta-chip"><div class="v">${gameState.streak}</div><div class="l">Current Streak</div></div>
      <div class="meta-chip"><div class="v">${gameState.penaltyCount}</div><div class="l">Total Penalties</div></div>
    </div>
    <div style="font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--text2);line-height:2;">
      <div>> Days Completed: ${gameState.daysCompleted}</div>
      <div>> Completion Rate: ~${rate}%</div>
      <div>> Achievements Unlocked: ${(gameState.achievements || []).filter((a) => a.unlocked).length} / ${(gameState.achievements || []).length}</div>
      <div>> Longest Streak: ${gameState.longestStreak} days</div>
      <div style="color:${rate >= 70 ? "var(--green)" : "var(--red)"}"> ${rate >= 70 ? "> Status: ON TRACK ✓" : "> Status: NEEDS IMPROVEMENT — increase consistency"}</div>
    </div>`;
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function startScan() {
  buildScanSteps();
  showScreen("scan");
}

function loadExisting() {
  const saved = localStorage.getItem("ascensionState_v4");
  if (saved) {
    try {
      const s = JSON.parse(saved);
      gameState = Object.assign(gameState, s);
      playerData = s.playerData || {};
      checkDailyReset();
      buildDashboard();
      showScreen("dashboard");
    } catch (e) {
      showToast("No valid save found.");
    }
  } else {
    showToast("No save found — initialize new.");
  }
}

function saveState() {
  localStorage.setItem(
    "ascensionState_v4",
    JSON.stringify({ ...gameState, playerData }),
  );
}

function resetSystem() {
  if (confirm("Reset ALL progress? This cannot be undone.")) {
    localStorage.removeItem("ascensionState_v4");
    if (timerInterval) clearInterval(timerInterval);
    location.reload();
  }
}

function showToast(msg) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    if (t.parentNode) t.remove();
  }, 4200);
}

function toggleTheme() {
  const html = document.documentElement;
  const curr = html.getAttribute("data-theme");
  html.setAttribute("data-theme", curr === "dark" ? "light" : "dark");
  document.getElementById("themeBtn").textContent =
    curr === "dark" ? "🌙" : "☀";
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function todayStr() {
  return new Date().toDateString();
}

// ── On load: check daily reset ──
(function () {
  const saved = localStorage.getItem("ascensionState_v4");
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (s.lastReset && s.lastReset !== todayStr()) {
        const mandatory = (s.quests || []).filter(
          (q) => q.type === "mandatory",
        );
        const allDone =
          mandatory.length > 0 &&
          mandatory.every((q) => (s.completedToday || []).includes(q.id));
        if (!allDone && mandatory.length > 0) {
          s.streak = 0;
          s.penaltyCount = (s.penaltyCount || 0) + 1;
          if (s.penaltyCount >= 2) {
            s.stats.Discipline = Math.max(1, (s.stats.Discipline || 10) - 1);
            s.stats.Focus = Math.max(1, (s.stats.Focus || 10) - 1);
          }
        }
        s.completedToday = [];
        s.dailyStatAwarded = false;
        s.streakAwardedToday = false;
        s.lastReset = todayStr();
        localStorage.setItem("ascensionState_v4", JSON.stringify(s));
      }
    } catch (e) {}
  }
})();
