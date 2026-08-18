const Y12_QUESTIONS = [
  { id:1, emoji:"🚪", visual:"🏫", question:"What do you do when you enter the computing room?", options:["Run to a computer 🏃","Sit quietly on the rug 🧘","Start touching devices 👆"], correct:1, fact:"We always sit quietly so everyone is ready to learn together!" },
  { id:2, emoji:"💻", visual:"🤲", question:"How do we carry devices?", options:["With 2 hands 🤲","Above our head 🙌","Swinging them 🌀"], correct:0, fact:"Two hands keeps our Chromebook safe — just like carrying a precious book!" },
  { id:3, emoji:"🔔", visual:"👀", question:"What do you do when the bell rings?", options:["Keep clicking 🖱️","Hands off, eyes on teacher 👀 and close laptop a little bit","Talk to friends 💬"], correct:1, fact:"Hands off and eyes on teacher means we are ready for the next instruction!" },
  { id:4, emoji:"📱", visual:"🚶", question:"True or false: We walk with devices open.", options:["True ✅","False ❌"], correct:1, fact:"We always close our Chromebook before we walk — it keeps the screen safe!" },
  { id:5, emoji:"😤", visual:"🛑", question:"If your Laptop is not working, should you hit it?", options:["Yes 👊","No 🛑"], correct:1, fact:"Never hit devices! We ask a friend or a teacher nicely for help instead." },
  { id:6, emoji:"🙋", visual:"👫", question:"Before asking the teacher for help, what should you do?", options:["Cry 😢","Ask a friend first 👫","Give up 😞"], correct:1, fact:"Asking a friend first is called being independent — teachers love that!" },
  { id:7, emoji:"🎟️", visual:"3️⃣", question:"How many teacher tokens do Year 1 and 2 get?", options:["10 🔟","3 🎟️","0 🚫"], correct:1, fact:"You get 3 tokens! Use them wisely — try to solve problems yourself first." },
  { id:8, emoji:"🎫", visual:"🙋", question:"What happens when you use a teacher token?", options:["You can ask the teacher for help ✅","You get extra playtime ⏰","You swap computers 🔄"], correct:0, fact:"Tokens let you ask the teacher — but try everything else first!" },
  { id:9, emoji:"🌐", visual:"✅", question:"Should we stay on the correct website?", options:["Yes ✅","No ❌"], correct:0, fact:"Staying on the right website keeps us safe and focused on our learning!" },
  { id:10, emoji:"💝", visual:"🤲", question:"Which is respectful?", options:["Slamming the lid 💥","Carrying carefully 🤲","Pressing random buttons 🎹"], correct:1, fact:"Caring for our devices means everyone gets to use them — including you!" },
];

const Y34_QUESTIONS = [
  { id:1, emoji:"🚪", question:"What should you do first when entering the computing room?", options:["Sit on the carpet ✅","Run to the computer and turn it on 🌐","Talk loudly 📢"], correct:0, fact:"Sitting quietly on your assigned space means the lesson can start straight away — great habit!" },
  { id:2, emoji:"🔔", question:"What do you do when the bell rings?", options:["Finish your game 🎮","Hands off devices and close the laptop 45' 👀","Hide the Chromebook 🙈"], correct:1, fact:"Stopping immediately when the bell rings shows respect for your teacher and classmates." },
  { id:3, emoji:"💻", question:"How should you carry a Laptop?", options:["Closed with two hands ✅","By the screen 😬","One-handed while walking 🤷"], correct:0, fact:"Closed and two-handed protects both the screen and the hinge — the most common part that breaks!" },
  { id:4, emoji:"🌀", question:"If a website is not loading, what should you try first?", options:["Hit the Chromebook 💢","Refresh or ask a friend ✅","Shout 'sir!' 📣"], correct:1, fact:"Try refreshing first! Most loading problems fix themselves. That's great problem-solving." },
  { id:5, emoji:"🎟️", question:"Why do we have teacher tokens?", options:["To build independence and problem solving ✅","To decorate the table 🎨","To trade with friends 🔄"], correct:0, fact:"Tokens help you become a confident, independent learner — a skill you'll use forever!" },
  { id:6, emoji:"🙋", question:"Before using your teacher token, what should you do?", options:["Ask a friend first ✅","Immediately ask teacher 🚀","Stop working 😴"], correct:0, fact:"Trying a friend first means you might solve it together — and you both learn!" },
  { id:7, emoji:"🔢", question:"How many teacher tokens do Years 3–6 get?", options:["3","5 🖐️","Unlimited ♾️"], correct:0, fact:"Just 2 tokens — so choose wisely! The challenge makes you a stronger learner." },
  { id:8, emoji:"🎫", question:"If you use your teacher token, what happens?", options:["You can ask the teacher for help ✅","You leave the room 🚪","You get another token 🎟️"], correct:0, fact:"Your token is your lifeline — use it when you're really stuck after trying everything else." },
  { id:9, emoji:"😟", question:"What should you do if something online makes you uncomfortable?", options:["Ignore it 😶","Tell an adult ✅","Share it with friends 📤"], correct:1, fact:"Always tell a trusted adult. You will never get in trouble for reporting something that worried you." },
  { id:10, emoji:"🌟", question:"Which student is following the rules?", options:["Walking with an open Chromebook 🚶","Staying on the assigned website ✅","Changing settings for fun ⚙️"], correct:1, fact:"Staying on task means more time for actual learning — and it keeps everyone safe online." },
  { id:11, emoji:"🤝", question:"Should we touch another student's device?", options:["Yes 👆","No 🛑"], correct:1, fact:"Everyone's device is their responsibility. Respect their space, just like you'd want them to respect yours." },
  { id:12, emoji:"⏩", question:"What should you do if you finish early?", options:["Go on random websites 🌐","Wait quietly or follow extension task ✅","Distract others 🙃"], correct:1, fact:"Finishing early is great! Extension tasks are designed to stretch your thinking even further." },
];

const Y56_QUESTIONS = [
  { id:1, emoji:"🚪", question:"What is the correct routine when entering the computing room?", options:["Sit down on the rug quietly ✅","Sit at the laptop 📺","Move seats 🪑"], correct:0, fact:"A consistent entry routine means zero learning time is wasted — that's your time!" },
  { id:2, emoji:"🔔", question:"What happens when the bell rings?", options:["Hands off and close laptop slightly ✅","Finish typing first ⌨️","Keep talking 💬"], correct:0, fact:"Immediate compliance with the bell signal is a sign of maturity and respect for the learning environment." },
  { id:3, emoji:"💻", question:"Why do we carry devices with two hands?", options:["To keep them safe ✅","To look professional 👔","No reason 🤷"], correct:0, fact:"Dropping a Chromebook from just 30cm can crack the screen. Two hands eliminate that risk entirely." },
  { id:4, emoji:"❄️", question:"Your Chromebook freezes. What should you do first?", options:["Hit the keyboard ⌨️","Try basic troubleshooting or ask a peer ✅","Walk around the room 🚶"], correct:1, fact:"Basic troubleshooting (refresh, restart, check WiFi) solves around 80% of classroom tech issues." },
  { id:5, emoji:"🎟️", question:"Why do we use teacher tokens?", options:["To encourage resilience and independence ✅","To earn rewards 🏆","To skip work ⏩"], correct:0, fact:"Resilience — the ability to push through difficulty — is one of the most valuable skills you can develop." },
  { id:6, emoji:"🔎", question:"Before using your teacher token, what should you do?", options:["Re-read instructions and ask others first ✅","Instantly ask the teacher 🙋","Stop the lesson 🛑"], correct:0, fact:"Re-reading instructions carefully before asking for help often reveals the answer was right there all along!" },
  { id:7, emoji:"🔢", question:"How many teacher tokens do Years 3–6 get?", options:["3","2 🎟️","Unlimited ♾️"], correct:0, fact:"Two tokens per lesson. The constraint is intentional — it builds the habit of self-reliance." },
  { id:8, emoji:"😤", question:"What should you do if a classmate is distracting you online?", options:["Join in 🤦","Refocus yourself and continue working ✅","Slam the Chromebook shut 💥"], correct:1, fact:"Refocusing yourself rather than reacting shows emotional regulation — a key skill in and out of school." },
  { id:9, emoji:"🌟", question:"Which behaviour is responsible?", options:["Staying on the assigned task ✅","Opening random tabs 🌐","Changing Chromebook settings ⚙️"], correct:0, fact:"Digital responsibility means using technology purposefully and within agreed boundaries." },
  { id:10, emoji:"😟", question:"What should you do if a website makes you uncomfortable?", options:["Screenshot it 📸","Tell an adult immediately ✅","Keep exploring 🔍"], correct:1, fact:"Report it, don't share it. You'll never be in trouble for flagging something that concerned you." },
  { id:11, emoji:"👂", question:"Why is listening important in computing lessons?", options:["Instructions are often shown once before practical work ✅","So the room stays silent forever 🤫","It is not important 🤷"], correct:0, fact:"In computing, missing one step in an instruction can mean the whole task doesn't work. Active listening is a superpower." },
  { id:12, emoji:"💪", question:"Which student is showing resilience?", options:["Asking the teacher instantly 🙋","Trying different solutions first ✅","Giving up 😞"], correct:1, fact:"Resilience means sticking with a problem and trying multiple approaches before seeking help. That's real-world thinking." },
  { id:13, emoji:"🚶", question:"Should you walk around holding an open Chromebook?", options:["Yes 🚶","No 🛑"], correct:1, fact:"An open Chromebook while walking risks screen damage and bumping into others. Always close before moving." },
  { id:14, emoji:"🤝", question:"What should you do if your partner is stuck?", options:["Ignore them 😶","Help if you can before they use a teacher token ✅","Take over their work 🖐️"], correct:1, fact:"Peer support is powerful — explaining something to someone else actually deepens your own understanding." },
  { id:15, emoji:"📐", question:"What is the correct way to use devices?", options:["Respectfully and for learning ✅","As toys 🎮","However you want 🤷"], correct:0, fact:"Devices are tools for learning. Using them respectfully now prepares you for technology use in secondary school and beyond." },
];

const ALL_BADGES = [
  { id:"perfect", emoji:"🏆", name:"Gold Star", desc:"Answered every question correctly!" },
  { id:"nearly", emoji:"🥈", name:"Silver Scholar", desc:"Scored 80% or above — brilliant effort!" },
  { id:"routine", emoji:"🚪", name:"Routine Rockstar", desc:"Got the classroom routine question right!" },
  { id:"carry", emoji:"🤲", name:"Safe Carrier", desc:"Knows how to carry devices safely!" },
  { id:"token", emoji:"🎟️", name:"Token Thinker", desc:"Understands how teacher tokens work!" },
  { id:"online_safe", emoji:"🛡️", name:"Online Guardian", desc:"Knows what to do when something online is wrong!" },
  { id:"resilience", emoji:"💪", name:"Resilience Hero", desc:"Knows to try before asking for help!" },
  { id:"respect", emoji:"💝", name:"Tech Respecter", desc:"Understands how to treat devices with care!" },
  { id:"independence", emoji:"🧠", name:"Independent Learner", desc:"Understands the purpose of being independent!" },
  { id:"finish", emoji:"⏩", name:"Early Bird", desc:"Knows what to do when finishing early!" },
];

const YEAR_GROUPS = [
  { label:"Year 1 & 2", value:"Y1-2", color:"#F472B6", bg:"#FDF2F8", questions:Y12_QUESTIONS, emoji:"🌱", desc:"Ages 5–7", hasVisuals:true },
  { label:"Year 3 & 4", value:"Y3-4", color:"#60A5FA", bg:"#EFF6FF", questions:Y34_QUESTIONS, emoji:"🌿", desc:"Ages 7–9", hasVisuals:false },
  { label:"Year 5 & 6", value:"Y5-6", color:"#A78BFA", bg:"#F5F3FF", questions:Y56_QUESTIONS, emoji:"🌳", desc:"Ages 9–11", hasVisuals:false },
];

const SHEET_URL = "https://script.google.com/macros/s/AKfycby9ehnD3sXrTn6JAAPekgbH9hHEGPiZpmL9p5Wpom6mcKRPeraHqqVvc7fsQUzbq34U/exec";

const state = {
  screen: "welcome",
  studentName: "",
  selectedYG: null,
  currentQ: 0,
  answers: [],
  selected: null,
  answered: false,
  showFact: false,
  earnedBadges: [],
  teacherUnlocked: false,
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getYG() {
  return YEAR_GROUPS.find(y => y.value === state.selectedYG);
}

function getQuestions() {
  return getYG()?.questions || [];
}

function getScore() {
  return state.answers.filter((a, i) => a === getQuestions()[i]?.correct).length;
}

function computeBadges(answers, questions) {
  const earned = [];
  const correctIds = questions.filter((q,i) => answers[i] === q.correct).map(q => q.id);
  const pct = correctIds.length / questions.length;

  if (pct === 1) earned.push("perfect");
  else if (pct >= 0.8) earned.push("nearly");

  const matchCorrect = predicate => {
    const i = questions.findIndex(predicate);
    return i >= 0 && answers[i] === questions[i].correct;
  };

  if (matchCorrect(q => /entering|enter/i.test(q.question))) earned.push("routine");
  if (matchCorrect(q => /carry/i.test(q.question))) earned.push("carry");
  if (matchCorrect(q => /token/i.test(q.question) && /happen/i.test(q.question))) earned.push("token");
  if (matchCorrect(q => /uncomfortable/i.test(q.question))) earned.push("online_safe");
  if (matchCorrect(q => /resilience/i.test(q.question) || (/stuck/i.test(q.question) && !/partner/i.test(q.question)))) earned.push("resilience");
  if (matchCorrect(q => (/respect/i.test(q.question) && /device/i.test(q.question)) || /hit/i.test(q.question))) earned.push("respect");
  if (matchCorrect(q => /independence/i.test(q.question) || /why do we have teacher token/i.test(q.question))) earned.push("independence");
  if (matchCorrect(q => /finish early/i.test(q.question))) earned.push("finish");

  return [...new Set(earned)];
}

async function saveResult(name, yearGroup, score, total, badges) {
  const now = new Date();
  const badgeNames = badges
    .map(id => ALL_BADGES.find(b => b.id === id)?.name || id)
    .join(", ");

  const payload = {
    name,
    yearGroup,
    score,
    total,
    pct: Math.round((score / total) * 100),
    badges: badgeNames,
    date: now.toLocaleDateString("en-GB"),
    time: now.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit" }),
  };

  try {
    await fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error("Failed to save to Google Sheets:", err);
    return false;
  }
}

function render() {
  const app = document.getElementById("app");
  if (state.screen === "welcome") app.innerHTML = welcomeHtml();
  if (state.screen === "quiz") app.innerHTML = quizHtml();
  if (state.screen === "results") app.innerHTML = resultsHtml();
  if (state.screen === "teacher") app.innerHTML = teacherHtml();
  bindEvents();
}

function welcomeHtml() {
  return `
    <div class="page" style="max-width:500px">
      <div class="center" style="margin-bottom:16px">
        <div class="bob" style="font-size:60px;margin-bottom:4px">💻</div>
        <h1 style="font-size:28px;font-weight:900;margin:0 0 4px">Computing Quiz</h1>
        <p style="font-size:14px;color:#6B7280;margin:0">Enter your details to get started!</p>
      </div>

      <div class="card pop">
        <label style="display:block;font-weight:900;font-size:14px;color:#374151;margin-bottom:6px">Your name</label>
        <input id="studentName" type="text" placeholder="Type your name here..." value="${escapeHtml(state.studentName)}">

        <div style="margin:20px 0 8px">
          <label style="display:block;font-weight:900;font-size:14px;color:#374151;margin-bottom:10px">Choose your year group</label>
          <div class="yg-grid">
            ${YEAR_GROUPS.map(yg => `
              <button class="yg-card ${state.selectedYG === yg.value ? "selected" : ""}" data-yg="${yg.value}"
                style="border-color:${state.selectedYG === yg.value ? yg.color : "#E5E7EB"};background:${state.selectedYG === yg.value ? yg.bg : "#fff"}">
                <div style="font-size:28px">${yg.emoji}</div>
                <div class="year-label" style="font-weight:900;font-size:13px;color:${state.selectedYG === yg.value ? yg.color : "#374151"};margin-top:4px">${yg.label}</div>
                <div style="font-size:11px;color:#9CA3AF;font-weight:600">${yg.desc}</div>
              </button>
            `).join("")}
          </div>
        </div>

        <p id="nameError" style="display:none;color:#EF4444;font-size:13px;margin:4px 0 0;font-weight:700">Please enter your name first! 😊</p>

        <button id="startBtn" class="big-btn" ${state.selectedYG ? "" : "disabled"}
          style="width:100%;margin-top:16px;background:${state.selectedYG ? `linear-gradient(135deg,${getYG().color},#818CF8)` : "#D1D5DB"};color:${state.selectedYG ? "#fff" : "#9CA3AF"}">
          🚀 Start Quiz!
        </button>

        <div class="center" style="margin-top:12px">
          <button id="teacherViewBtn" class="teacher-link">🔑 Teacher View</button>
        </div>
      </div>
    </div>`;
}

function quizHtml() {
  const yg = getYG();
  const questions = getQuestions();
  const q = questions[state.currentQ];
  if (!q) return "";

  const score = getScore();
  const progress = (state.currentQ / questions.length) * 100;

  return `
    <div class="page">
      <div class="quiz-top">
        <button id="homeBtn" class="home-btn">🏠 Home</button>
        <span style="font-weight:900;font-size:13px;color:#6B7280">Q${state.currentQ + 1} of ${questions.length}</span>
        <span style="font-weight:900;font-size:13px;color:#F59E0B">⭐ ${score} / ${questions.length}</span>
      </div>

      <div class="progress">
        <div class="progress-bar" style="width:${progress}%;background:linear-gradient(90deg,${yg.color},#818CF8)"></div>
      </div>

      <div class="card slide" style="border-top:5px solid ${yg.color}">
        ${yg.hasVisuals && q.visual ? `<div class="center" style="font-size:64px;margin-bottom:8px;line-height:1">${q.visual}</div>` : ""}
        <div class="center" style="font-size:${yg.hasVisuals ? 36 : 44}px;margin-bottom:6px">${q.emoji}</div>
        <h2 style="font-size:${yg.hasVisuals ? 19 : 20}px;font-weight:900;margin:0 0 18px;text-align:center;line-height:1.35">${q.question}</h2>

        <div id="optionsWrap">
          ${q.options.map((opt, idx) => optionHtml(q, opt, idx)).join("")}
        </div>

        ${state.showFact ? factHtml(q, yg) : ""}
      </div>
    </div>`;
}

function optionHtml(q, opt, idx) {
  let border = "2.5px solid #E5E7EB";
  let bg = "#fff";
  let color = "#1F2937";
  let opacity = 1;
  let icon = ["🇦","🇧","🇨","🇩"][idx];

  if (state.answered) {
    if (idx === q.correct) {
      border = "2.5px solid #10B981";
      bg = "#D1FAE5";
      color = "#065F46";
      icon = "✅";
    } else if (idx === state.selected) {
      border = "2.5px solid #EF4444";
      bg = "#FEE2E2";
      color = "#7F1D1D";
      icon = "❌";
    } else {
      color = "#9CA3AF";
      opacity = .55;
      icon = "";
    }
  }

  return `
    <button class="opt-btn" data-answer="${idx}" ${state.answered ? "disabled" : ""}
      style="border:${border};background:${bg};color:${color};opacity:${opacity}">
      <span style="font-size:18px;flex-shrink:0;min-width:22px">${icon}</span>
      <span>${opt}</span>
    </button>`;
}

function factHtml(q, yg) {
  const correct = state.selected === q.correct;
  return `
    <div class="pop" style="background:${correct ? "#ECFDF5" : "#FFF7ED"};border:2px solid ${correct ? "#10B981" : "#F59E0B"};border-radius:16px;padding:14px 16px;margin-top:4px">
      <p style="margin:0 0 6px;font-weight:900;font-size:13px;color:${correct ? "#065F46" : "#92400E"}">
        ${correct ? "🎉 Correct! Did you know..." : "💡 Good try! The answer was..."}
      </p>
      <p style="margin:0 0 14px;font-size:14px;color:#374151;line-height:1.55">${q.fact}</p>
      <button id="nextBtn" class="big-btn"
        style="background:linear-gradient(135deg,${yg.color},#818CF8);color:#fff;width:100%;font-size:15px;padding:12px 20px">
        ${state.currentQ + 1 < getQuestions().length ? "Next Question →" : "See My Results 🎉"}
      </button>
    </div>`;
}

function resultsHtml() {
  const yg = getYG();
  const questions = getQuestions();
  const score = getScore();
  const pct = questions.length ? score / questions.length : 0;

  let r;
  if (pct === 1) r = { emoji:"🏆", title:"PERFECT SCORE!", msg:"Incredible! You got every single question right. You're a Computing champion!", color:"#D97706" };
  else if (pct >= .8) r = { emoji:"🌟", title:"Brilliant Work!", msg:"Amazing effort — you really know your classroom computing rules!", color:"#059669" };
  else if (pct >= .6) r = { emoji:"👍", title:"Good Job!", msg:"Well done! A few more to practise and you'll be an expert.", color:"#3B82F6" };
  else r = { emoji:"📚", title:"Keep Practising!", msg:"Great start! Have another go and see how much you improve.", color:"#7C3AED" };

  const earnedBadgeData = state.earnedBadges
    .map(id => ALL_BADGES.find(b => b.id === id))
    .filter(Boolean);

  return `
    <div class="page" style="max-width:520px">
      <div class="card pop center">
        <div style="font-size:64px;margin-bottom:8px">${r.emoji}</div>
        <div style="font-weight:900;font-size:13px;color:#9CA3AF;margin-bottom:4px">${escapeHtml(state.studentName)} · ${yg.label}</div>
        <h2 style="font-size:24px;font-weight:900;color:${r.color};margin:0 0 8px">${r.title}</h2>
        <p style="font-size:15px;color:#6B7280;margin:0 0 20px;line-height:1.55">${r.msg}</p>

        <div style="background:#F9FAFB;border-radius:18px;padding:16px 20px;margin-bottom:20px">
          <div style="font-size:48px;font-weight:900;line-height:1">${score}<span style="font-size:24px;color:#9CA3AF">/${questions.length}</span></div>
          <div style="font-size:14px;color:#6B7280;font-weight:700;margin-top:4px">${Math.round(pct * 100)}% correct</div>
        </div>

        ${earnedBadgeData.length ? `
          <div style="margin-bottom:20px">
            <p style="font-weight:900;font-size:15px;color:#374151;margin:0 0 12px">🏅 Badges Earned</p>
            <div class="badges">
              ${earnedBadgeData.map((b,i) => `
                <div class="badge badge-pop" style="animation-delay:${i * 120}ms">
                  <div style="font-size:28px">${b.emoji}</div>
                  <div style="font-weight:900;font-size:12px;color:#92400E;margin-top:4px">${b.name}</div>
                  <div style="font-size:10px;color:#B45309;margin-top:2px;line-height:1.3">${b.desc}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : `
          <div style="background:#F3F4F6;border-radius:14px;padding:12px 16px;margin-bottom:20px">
            <p style="margin:0;font-size:14px;color:#6B7280">💪 Keep practising to earn badges next time!</p>
          </div>
        `}

        <button id="restartBtn" class="big-btn" style="background:linear-gradient(135deg,#818CF8,#A78BFA);color:#fff;width:100%">
          🔄 Play Again
        </button>
      </div>
    </div>`;
}

function teacherHtml() {
  return `
    <div class="page teacher-page">
      <div class="card pop">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
          <h2 style="margin:0;font-weight:900;font-size:20px">🔑 Teacher Dashboard</h2>
          <button id="backBtn" class="home-btn">← Back</button>
        </div>

        ${!state.teacherUnlocked ? `
          <div style="max-width:320px;margin:0 auto;text-align:center">
            <div style="font-size:48px;margin-bottom:12px">🔒</div>
            <p style="color:#6B7280;font-size:14px;margin-bottom:16px">Enter the teacher password to view results.</p>
            <input id="teacherPw" type="password" placeholder="Password">
            <p id="pwError" style="display:none;color:#EF4444;font-size:12px;margin:6px 0 0;font-weight:700">Incorrect password</p>
            <button id="unlockBtn" class="big-btn" style="background:#1F2937;color:#fff;width:100%;margin-top:12px;font-size:15px">Unlock</button>
          </div>
        ` : `
          <div style="background:#F0FDF4;border:2px solid #86EFAC;border-radius:16px;padding:20px 24px;margin-bottom:20px;text-align:center">
            <div style="font-size:40px;margin-bottom:8px">📊</div>
            <p style="font-weight:900;font-size:16px;color:#166534;margin:0 0 6px">Results are saving to Google Sheets</p>
            <p style="font-size:13px;color:#4B7C5A;margin:0 0 16px;line-height:1.5">Every student submission is sent directly to your spreadsheet in real time.</p>
            <a href="https://docs.google.com/spreadsheets" target="_blank" rel="noopener noreferrer"
              style="display:inline-block;background:#16A34A;color:#fff;border-radius:14px;padding:12px 28px;font-weight:900;font-size:15px;text-decoration:none">
              📋 Open Google Sheets
            </a>
          </div>
          <div style="background:#FFF7ED;border:2px solid #FCD34D;border-radius:14px;padding:14px 18px">
            <p style="font-weight:900;font-size:13px;color:#92400E;margin:0 0 6px">💡 Tips for your sheet</p>
            <ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#78350F;line-height:1.8">
              <li>Columns: Name · Year Group · Score · Total · % · Badges · Date · Time</li>
              <li>Filter by Year Group to see each class separately</li>
              <li>File → Download → CSV to export anytime</li>
              <li>Results appear as students finish</li>
            </ul>
          </div>
        `}
      </div>
    </div>`;
}

function bindEvents() {
  if (state.screen === "welcome") {
    const nameInput = document.getElementById("studentName");
    nameInput?.addEventListener("input", e => { state.studentName = e.target.value; });

    document.querySelectorAll("[data-yg]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.studentName = document.getElementById("studentName")?.value || state.studentName;
        state.selectedYG = btn.dataset.yg;
        render();
      });
    });

    document.getElementById("startBtn")?.addEventListener("click", () => {
      state.studentName = document.getElementById("studentName")?.value.trim() || "";
      if (!state.studentName) {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("studentName").classList.add("error");
        return;
      }
      if (!state.selectedYG) return;

      state.currentQ = 0;
      state.answers = [];
      state.selected = null;
      state.answered = false;
      state.showFact = false;
      state.earnedBadges = [];
      state.screen = "quiz";
      render();
    });

    document.getElementById("teacherViewBtn")?.addEventListener("click", () => {
      state.screen = "teacher";
      render();
    });
  }

  if (state.screen === "quiz") {
    document.getElementById("homeBtn")?.addEventListener("click", restart);

    document.querySelectorAll("[data-answer]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (state.answered) return;
        state.selected = Number(btn.dataset.answer);
        state.answers[state.currentQ] = state.selected;
        state.answered = true;
        state.showFact = true;
        render();

        if (state.selected !== getQuestions()[state.currentQ].correct) {
          const wrap = document.getElementById("optionsWrap");
          wrap?.classList.add("shake-it");
        }
      });
    });

    document.getElementById("nextBtn")?.addEventListener("click", async () => {
      const questions = getQuestions();

      if (state.currentQ + 1 < questions.length) {
        state.currentQ += 1;
        state.selected = null;
        state.answered = false;
        state.showFact = false;
        render();
      } else {
        state.earnedBadges = computeBadges(state.answers, questions);
        const score = getScore();
        await saveResult(state.studentName, getYG().label, score, questions.length, state.earnedBadges);
        state.screen = "results";
        render();
      }
    });
  }

  if (state.screen === "results") {
    document.getElementById("restartBtn")?.addEventListener("click", restart);
  }

  if (state.screen === "teacher") {
    document.getElementById("backBtn")?.addEventListener("click", () => {
      state.screen = "welcome";
      render();
    });

    const unlock = () => {
      const input = document.getElementById("teacherPw");
      if (input?.value === "teacher123") {
        state.teacherUnlocked = true;
        render();
      } else {
        input?.classList.add("error");
        document.getElementById("pwError").style.display = "block";
      }
    };

    document.getElementById("unlockBtn")?.addEventListener("click", unlock);
    document.getElementById("teacherPw")?.addEventListener("keydown", e => {
      if (e.key === "Enter") unlock();
    });
  }
}

function restart() {
  state.screen = "welcome";
  state.studentName = "";
  state.selectedYG = null;
  state.currentQ = 0;
  state.answers = [];
  state.selected = null;
  state.answered = false;
  state.showFact = false;
  state.earnedBadges = [];
  render();
}

render();
