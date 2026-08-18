import { useState, useEffect, useRef } from "react";

// ─── QUESTION BANKS ───────────────────────────────────────────────────────────

const Y12_QUESTIONS = [
  { id:1, emoji:"🚪", visual:"🏫", question:"What do you do when you enter the computing room?", options:["Run to a computer 🏃","Sit quietly on the rug 🧘","Start touching devices 👆"], correct:1, fact:"We always sit quietly so everyone is ready to learn together!" },
  { id:2, emoji:"💻", visual:"🤲", question:"How do we carry devices?", options:["With 2 hands 🤲","Above our head 🙌","Swinging them 🌀"], correct:0, fact:"Two hands keeps our Chromebook safe — just like carrying a precious book!" },
  { id:3, emoji:"🔔", visual:"👀", question:"What do you do when the bell rings?", options:["Keep clicking 🖱️","Hands off, eyes on teacher 👀","Talk to friends 💬"], correct:1, fact:"Hands off and eyes on teacher means we are ready for the next instruction!" },
  { id:4, emoji:"📱", visual:"🚶", question:"True or false: We walk with devices open.", options:["True ✅","False ❌"], correct:1, fact:"We always close our Chromebook before we walk — it keeps the screen safe!" },
  { id:5, emoji:"😤", visual:"🛑", question:"If your Chromebook is not working, should you hit it?", options:["Yes 👊","No 🛑"], correct:1, fact:"Never hit devices! We ask a friend or a teacher nicely for help instead." },
  { id:6, emoji:"🙋", visual:"👫", question:"Before asking the teacher for help, what should you do?", options:["Cry 😢","Ask a friend first 👫","Give up 😞"], correct:1, fact:"Asking a friend first is called being independent — teachers love that!" },
  { id:7, emoji:"🎟️", visual:"3️⃣", question:"How many teacher tokens do Year 1 and 2 get?", options:["10 🔟","3 🎟️","0 🚫"], correct:1, fact:"You get 3 tokens! Use them wisely — try to solve problems yourself first." },
  { id:8, emoji:"🎫", visual:"🙋", question:"What happens when you use a teacher token?", options:["You can ask the teacher for help ✅","You get extra playtime ⏰","You swap computers 🔄"], correct:0, fact:"Tokens let you ask the teacher — but try everything else first!" },
  { id:9, emoji:"🌐", visual:"✅", question:"Should we stay on the correct website?", options:["Yes ✅","No ❌"], correct:0, fact:"Staying on the right website keeps us safe and focused on our learning!" },
  { id:10, emoji:"💝", visual:"🤲", question:"Which is respectful?", options:["Slamming the lid 💥","Carrying carefully 🤲","Pressing random buttons 🎹"], correct:1, fact:"Caring for our devices means everyone gets to use them — including you!" },
];

const Y34_QUESTIONS = [
  { id:1, emoji:"🚪", question:"What should you do first when entering the computing room?", options:["Sit on your assigned space quietly ✅","Open random websites 🌐","Talk loudly 📢"], correct:0, fact:"Sitting quietly on your assigned space means the lesson can start straight away — great habit!" },
  { id:2, emoji:"🔔", question:"What do you do when the bell rings?", options:["Finish your game 🎮","Hands off devices and eyes on teacher 👀","Hide the Chromebook 🙈"], correct:1, fact:"Stopping immediately when the bell rings shows respect for your teacher and classmates." },
  { id:3, emoji:"💻", question:"How should you carry a Chromebook?", options:["Closed with two hands ✅","By the screen 😬","One-handed while walking 🤷"], correct:0, fact:"Closed and two-handed protects both the screen and the hinge — the most common part that breaks!" },
  { id:4, emoji:"🌀", question:"If a website is not loading, what should you try first?", options:["Hit the Chromebook 💢","Refresh or ask a friend ✅","Shout 'sir!' 📣"], correct:1, fact:"Try refreshing first! Most loading problems fix themselves. That's great problem-solving." },
  { id:5, emoji:"🎟️", question:"Why do we have teacher tokens?", options:["To build independence and problem solving ✅","To decorate the table 🎨","To trade with friends 🔄"], correct:0, fact:"Tokens help you become a confident, independent learner — a skill you'll use forever!" },
  { id:6, emoji:"🙋", question:"Before using your teacher token, what should you do?", options:["Ask a friend first ✅","Immediately ask teacher 🚀","Stop working 😴"], correct:0, fact:"Trying a friend first means you might solve it together — and you both learn!" },
  { id:7, emoji:"🔢", question:"How many teacher tokens do Years 3–6 get?", options:["2 ✅","5 🖐️","Unlimited ♾️"], correct:0, fact:"Just 2 tokens — so choose wisely! The challenge makes you a stronger learner." },
  { id:8, emoji:"🎫", question:"If you use your teacher token, what happens?", options:["You can ask the teacher for help ✅","You leave the room 🚪","You get another token 🎟️"], correct:0, fact:"Your token is your lifeline — use it when you're really stuck after trying everything else." },
  { id:9, emoji:"😟", question:"What should you do if something online makes you uncomfortable?", options:["Ignore it 😶","Tell an adult ✅","Share it with friends 📤"], correct:1, fact:"Always tell a trusted adult. You will never get in trouble for reporting something that worried you." },
  { id:10, emoji:"🌟", question:"Which student is following the rules?", options:["Walking with an open Chromebook 🚶","Staying on the assigned website ✅","Changing settings for fun ⚙️"], correct:1, fact:"Staying on task means more time for actual learning — and it keeps everyone safe online." },
  { id:11, emoji:"🤝", question:"Should we touch another student's device?", options:["Yes 👆","No 🛑"], correct:1, fact:"Everyone's device is their responsibility. Respect their space, just like you'd want them to respect yours." },
  { id:12, emoji:"⏩", question:"What should you do if you finish early?", options:["Go on random websites 🌐","Wait quietly or follow extension task ✅","Distract others 🙃"], correct:1, fact:"Finishing early is great! Extension tasks are designed to stretch your thinking even further." },
];

const Y56_QUESTIONS = [
  { id:1, emoji:"🚪", question:"What is the correct routine when entering the computing room?", options:["Sit at your assigned place and wait for instructions ✅","Open YouTube immediately 📺","Move seats 🪑"], correct:0, fact:"A consistent entry routine means zero learning time is wasted — that's your time!" },
  { id:2, emoji:"🔔", question:"What happens when the bell rings?", options:["Devices are closed or hands off immediately ✅","Finish typing first ⌨️","Keep talking 💬"], correct:0, fact:"Immediate compliance with the bell signal is a sign of maturity and respect for the learning environment." },
  { id:3, emoji:"💻", question:"Why do we carry devices with two hands?", options:["To keep them safe ✅","To look professional 👔","No reason 🤷"], correct:0, fact:"Dropping a Chromebook from just 30cm can crack the screen. Two hands eliminate that risk entirely." },
  { id:4, emoji:"❄️", question:"Your Chromebook freezes. What should you do first?", options:["Hit the keyboard ⌨️","Try basic troubleshooting or ask a peer ✅","Walk around the room 🚶"], correct:1, fact:"Basic troubleshooting (refresh, restart, check WiFi) solves around 80% of classroom tech issues." },
  { id:5, emoji:"🎟️", question:"Why do we use teacher tokens?", options:["To encourage resilience and independence ✅","To earn rewards 🏆","To skip work ⏩"], correct:0, fact:"Resilience — the ability to push through difficulty — is one of the most valuable skills you can develop." },
  { id:6, emoji:"🔎", question:"Before using your teacher token, what should you do?", options:["Re-read instructions and ask others first ✅","Instantly ask the teacher 🙋","Stop the lesson 🛑"], correct:0, fact:"Re-reading instructions carefully before asking for help often reveals the answer was right there all along!" },
  { id:7, emoji:"🔢", question:"How many teacher tokens do Years 3–6 get?", options:["2 ✅","3 🎟️","Unlimited ♾️"], correct:0, fact:"Two tokens per lesson. The constraint is intentional — it builds the habit of self-reliance." },
  { id:8, emoji:"😤", question:"What should you do if a classmate is distracting you online?", options:["Join in 🤦","Refocus yourself and continue working ✅","Slam the Chromebook shut 💥"], correct:1, fact:"Refocusing yourself rather than reacting shows emotional regulation — a key skill in and out of school." },
  { id:9, emoji:"🌟", question:"Which behaviour is responsible?", options:["Staying on the assigned task ✅","Opening random tabs 🌐","Changing Chromebook settings ⚙️"], correct:0, fact:"Digital responsibility means using technology purposefully and within agreed boundaries." },
  { id:10, emoji:"😟", question:"What should you do if a website makes you uncomfortable?", options:["Screenshot it 📸","Tell an adult immediately ✅","Keep exploring 🔍"], correct:1, fact:"Report it, don't share it. You'll never be in trouble for flagging something that concerned you." },
  { id:11, emoji:"👂", question:"Why is listening important in computing lessons?", options:["Instructions are often shown once before practical work ✅","So the room stays silent forever 🤫","It is not important 🤷"], correct:0, fact:"In computing, missing one step in an instruction can mean the whole task doesn't work. Active listening is a superpower." },
  { id:12, emoji:"💪", question:"Which student is showing resilience?", options:["Asking the teacher instantly 🙋","Trying different solutions first ✅","Giving up 😞"], correct:1, fact:"Resilience means sticking with a problem and trying multiple approaches before seeking help. That's real-world thinking." },
  { id:13, emoji:"🚶", question:"Should you walk around holding an open Chromebook?", options:["Yes 🚶","No 🛑"], correct:1, fact:"An open Chromebook while walking risks screen damage and bumping into others. Always close before moving." },
  { id:14, emoji:"🤝", question:"What should you do if your partner is stuck?", options:["Ignore them 😶","Help if you can before they use a teacher token ✅","Take over their work 🖐️"], correct:1, fact:"Peer support is powerful — explaining something to someone else actually deepens your own understanding." },
  { id:15, emoji:"📐", question:"What is the correct way to use devices?", options:["Respectfully and for learning ✅","As toys 🎮","However you want 🤷"], correct:0, fact:"Devices are tools for learning. Using them respectfully now prepares you for technology use in secondary school and beyond." },
];

// ─── BADGES ───────────────────────────────────────────────────────────────────

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

function computeBadges(answers, questions, yearGroup) {
  const earned = [];
  const correctIds = questions.filter((q,i) => answers[i] === q.correct).map(q => q.id);
  const score = correctIds.length;
  const pct = score / questions.length;

  if (pct === 1) earned.push("perfect");
  else if (pct >= 0.8) earned.push("nearly");

  // Universal badge triggers by question content keywords
  const routineQ = questions.findIndex(q => q.question.toLowerCase().includes("entering") || q.question.toLowerCase().includes("enter"));
  if (routineQ >= 0 && answers[routineQ] === questions[routineQ].correct) earned.push("routine");

  const carryQ = questions.findIndex(q => q.question.toLowerCase().includes("carry"));
  if (carryQ >= 0 && answers[carryQ] === questions[carryQ].correct) earned.push("carry");

  const tokenQ = questions.findIndex(q => q.question.toLowerCase().includes("token") && q.question.toLowerCase().includes("happen"));
  if (tokenQ >= 0 && answers[tokenQ] === questions[tokenQ].correct) earned.push("token");

  const safeQ = questions.findIndex(q => q.question.toLowerCase().includes("uncomfortable") || q.question.toLowerCase().includes("makes you uncomfortable"));
  if (safeQ >= 0 && answers[safeQ] === questions[safeQ].correct) earned.push("online_safe");

  const resilQ = questions.findIndex(q => q.question.toLowerCase().includes("resilience") || q.question.toLowerCase().includes("stuck") && !q.question.toLowerCase().includes("partner"));
  if (resilQ >= 0 && answers[resilQ] === questions[resilQ].correct) earned.push("resilience");

  const respectQ = questions.findIndex(q => q.question.toLowerCase().includes("respect") && q.question.toLowerCase().includes("device") || q.question.toLowerCase().includes("hit"));
  if (respectQ >= 0 && answers[respectQ] === questions[respectQ].correct) earned.push("respect");

  const indepQ = questions.findIndex(q => q.question.toLowerCase().includes("independence") || q.question.toLowerCase().includes("why do we have teacher token"));
  if (indepQ >= 0 && answers[indepQ] === questions[indepQ].correct) earned.push("independence");

  const finishQ = questions.findIndex(q => q.question.toLowerCase().includes("finish early"));
  if (finishQ >= 0 && answers[finishQ] === questions[finishQ].correct) earned.push("finish");

  return [...new Set(earned)];
}

// ─── STORAGE HELPERS ─────────────────────────────────────────────────────────

const SHEET_URL = "https://script.google.com/macros/s/AKfycby9ehnD3sXrTn6JAAPekgbH9hHEGPiZpmL9p5Wpom6mcKRPeraHqqVvc7fsQUzbq34U/exec";

async function saveResult(name, yearGroup, score, total, badges) {
  const now = new Date();
  const badgeNames = badges.map(id => ALL_BADGES.find(b => b.id === id)?.name || id).join(", ");
  const payload = {
    name,
    yearGroup,
    score,
    total,
    pct: Math.round((score / total) * 100),
    badges: badgeNames,
    date: now.toLocaleDateString("en-GB"),
    time: now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
  };
  try {
    await fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { success: true };
  } catch(e) {
    console.error("Failed to save to Google Sheets:", e);
    return { success: false };
  }
}

function toCSV(rows) {
  const headers = ["Name","Year Group","Score","Total","Percentage","Badges Earned","Date","Time"];
  const lines = rows.map(r => {
    const d = new Date(r.timestamp);
    const badgeNames = r.badges ? r.badges.split("|").map(id => ALL_BADGES.find(b=>b.id===id)?.name||id).join(", ") : "";
    return [
      `"${r.name}"`, `"${r.yearGroup}"`, r.score, r.total, `${r.pct}%`,
      `"${badgeNames}"`,
      `"${d.toLocaleDateString("en-GB")}"`,
      `"${d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}"`,
    ].join(",");
  });
  return [headers.join(","), ...lines].join("\n");
}

function downloadCSV(rows) {
  const csv = toCSV(rows);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "quiz_results.csv"; a.click();
  URL.revokeObjectURL(url);
}

// ─── YEAR GROUP CONFIG ────────────────────────────────────────────────────────

const YEAR_GROUPS = [
  { label:"Year 1 & 2", value:"Y1-2", color:"#F472B6", bg:"#FDF2F8", questions: Y12_QUESTIONS, emoji:"🌱", desc:"Ages 5–7", hasVisuals: true },
  { label:"Year 3 & 4", value:"Y3-4", color:"#60A5FA", bg:"#EFF6FF", questions: Y34_QUESTIONS, emoji:"🌿", desc:"Ages 7–9", hasVisuals: false },
  { label:"Year 5 & 6", value:"Y5-6", color:"#A78BFA", bg:"#F5F3FF", questions: Y56_QUESTIONS, emoji:"🌳", desc:"Ages 9–11", hasVisuals: false },
];

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState("welcome"); // welcome | quiz | results | teacher
  const [studentName, setStudentName] = useState("");
  const [selectedYG, setSelectedYG] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showFact, setShowFact] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [shake, setShake] = useState(false);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [teacherPw, setTeacherPw] = useState("");
  const [teacherUnlocked, setTeacherUnlocked] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const yg = YEAR_GROUPS.find(y => y.value === selectedYG);
  const questions = yg?.questions || [];
  const q = questions[currentQ];

  const startQuiz = () => {
    if (!studentName.trim()) { setNameError(true); return; }
    if (!selectedYG) return;
    setNameError(false);
    setCurrentQ(0); setAnswers([]); setSelected(null);
    setShowFact(false); setAnswered(false); setResultsSaved(false);
    setScreen("quiz");
  };

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (idx !== q.correct) { setShake(true); setTimeout(() => setShake(false), 500); }
    setTimeout(() => setShowFact(true), 300);
  };

  const handleNext = async () => {
    setShowFact(false); setSelected(null); setAnswered(false);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(c => c + 1);
    } else {
      const badges = computeBadges(answers, questions, selectedYG);
      setEarnedBadges(badges);
      const score = answers.filter((a,i) => a === questions[i].correct).length;
      await saveResult(studentName.trim(), yg.label, score, questions.length, badges);
      setScreen("results");
    }
  };

  const restart = () => {
    setStudentName(""); setSelectedYG(null);
    setCurrentQ(0); setAnswers([]); setSelected(null);
    setShowFact(false); setAnswered(false); setEarnedBadges([]);
    setScreen("welcome");
  };

  const score = answers.filter((a,i) => a === questions[i]?.correct).length;
  const pct = questions.length > 0 ? score / questions.length : 0;

  const getResult = () => {
    if (pct === 1) return { emoji:"🏆", title:"PERFECT SCORE!", msg:"Incredible! You got every single question right. You're a Computing champion!", color:"#D97706" };
    if (pct >= 0.8) return { emoji:"🌟", title:"Brilliant Work!", msg:"Amazing effort — you really know your classroom computing rules!", color:"#059669" };
    if (pct >= 0.6) return { emoji:"👍", title:"Good Job!", msg:"Well done! A few more to practise and you'll be an expert.", color:"#3B82F6" };
    return { emoji:"📚", title:"Keep Practising!", msg:"Great start! Have another go and see how much you improve.", color:"#7C3AED" };
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(145deg,#EEF2FF 0%,#FDF4FF 50%,#ECFDF5 100%)", fontFamily:"'Nunito','Arial Rounded MT Bold',sans-serif", padding:"16px 12px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap');
        @keyframes popIn{0%{transform:scale(0.7);opacity:0}70%{transform:scale(1.06)}100%{transform:scale(1);opacity:1}}
        @keyframes slideUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
        @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes badgePop{0%{transform:scale(0) rotate(-20deg);opacity:0}60%{transform:scale(1.15) rotate(5deg)}100%{transform:scale(1) rotate(0deg);opacity:1}}
        .pop{animation:popIn 0.4s cubic-bezier(.36,.07,.19,.97) both}
        .slide{animation:slideUp 0.35s ease both}
        .shake-it{animation:shake 0.4s ease}
        .bob{animation:bob 2.5s ease-in-out infinite}
        .badge-pop{animation:badgePop 0.5s cubic-bezier(.36,.07,.19,.97) both}
        .card{background:#fff;border-radius:24px;padding:24px 20px;box-shadow:0 8px 32px rgba(0,0,0,0.09)}
        .big-btn{border:none;border-radius:18px;padding:14px 32px;font-size:17px;font-family:inherit;font-weight:900;cursor:pointer;transition:all 0.18s ease;letter-spacing:0.3px}
        .big-btn:hover{transform:scale(1.04);box-shadow:0 6px 20px rgba(0,0,0,0.18)}
        .big-btn:active{transform:scale(0.98)}
        .opt-btn{width:100%;border:2.5px solid #E5E7EB;border-radius:14px;padding:13px 16px;font-size:15px;font-family:inherit;font-weight:700;cursor:pointer;text-align:left;transition:all 0.16s ease;background:#fff;color:#1F2937;margin-bottom:9px;display:flex;align-items:center;gap:10px}
        .opt-btn:hover:not(:disabled){border-color:#94A3B8;background:#F8FAFC;transform:translateX(4px)}
        .opt-btn:disabled{cursor:default}
        .yg-card{border:3px solid transparent;border-radius:20px;padding:16px;cursor:pointer;transition:all 0.2s ease;text-align:center;background:#fff}
        .yg-card:hover{transform:scale(1.03);box-shadow:0 4px 20px rgba(0,0,0,0.12)}
        .yg-card.selected{transform:scale(1.04)}
        input[type=text]{width:100%;box-sizing:border-box;border:2.5px solid #E5E7EB;border-radius:14px;padding:14px 16px;font-size:16px;font-family:inherit;font-weight:700;color:#1F2937;outline:none;transition:border 0.2s}
        input[type=text]:focus{border-color:#818CF8}
        input[type=text].error{border-color:#EF4444}
        .teacher-row:hover{background:#F9FAFB}
        .tab-btn{border:none;padding:10px 20px;font-family:inherit;font-weight:700;font-size:14px;cursor:pointer;border-radius:12px;transition:all 0.15s}
      `}</style>

      {/* ── WELCOME ── */}
      {screen === "welcome" && (
        <div style={{ maxWidth:500, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:16 }}>
            <div className="bob" style={{ fontSize:60, marginBottom:4 }}>💻</div>
            <h1 style={{ fontSize:28, fontWeight:900, margin:"0 0 4px", color:"#1F2937" }}>Computing Quiz</h1>
            <p style={{ fontSize:14, color:"#6B7280", margin:0 }}>Enter your details to get started!</p>
          </div>

          <div className="card pop">
            <label style={{ display:"block", fontWeight:900, fontSize:14, color:"#374151", marginBottom:6 }}>Your name</label>
            <input type="text" className={nameError ? "error" : ""} placeholder="Type your name here..." value={studentName}
              onChange={e => { setStudentName(e.target.value); setNameError(false); }} />
            {nameError && <p style={{ color:"#EF4444", fontSize:13, margin:"4px 0 0", fontWeight:700 }}>Please enter your name first! 😊</p>}

            <div style={{ margin:"20px 0 8px" }}>
              <label style={{ display:"block", fontWeight:900, fontSize:14, color:"#374151", marginBottom:10 }}>Choose your year group</label>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
                {YEAR_GROUPS.map(yg => (
                  <div key={yg.value} className={`yg-card${selectedYG===yg.value?" selected":""}`}
                    style={{ borderColor: selectedYG===yg.value ? yg.color : "#E5E7EB", background: selectedYG===yg.value ? yg.bg : "#fff" }}
                    onClick={() => setSelectedYG(yg.value)}>
                    <div style={{ fontSize:28 }}>{yg.emoji}</div>
                    <div style={{ fontWeight:900, fontSize:13, color: selectedYG===yg.value ? yg.color : "#374151", marginTop:4 }}>{yg.label}</div>
                    <div style={{ fontSize:11, color:"#9CA3AF", fontWeight:600 }}>{yg.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <button className="big-btn" disabled={!selectedYG} onClick={startQuiz}
              style={{ width:"100%", marginTop:16, background: selectedYG ? `linear-gradient(135deg, ${YEAR_GROUPS.find(y=>y.value===selectedYG)?.color||"#818CF8"}, #818CF8)` : "#D1D5DB", color: selectedYG ? "#fff" : "#9CA3AF" }}>
              🚀 Start Quiz!
            </button>

            <div style={{ textAlign:"center", marginTop:12 }}>
              <button onClick={() => setScreen("teacher")} style={{ background:"none", border:"none", color:"#9CA3AF", fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
                🔑 Teacher View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── QUIZ ── */}
      {screen === "quiz" && q && (
        <div style={{ maxWidth:540, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
            <button onClick={restart} style={{ background:"#F3F4F6", border:"none", borderRadius:10, padding:"7px 14px", cursor:"pointer", fontFamily:"inherit", fontWeight:900, fontSize:13, color:"#374151", display:"flex", alignItems:"center", gap:5 }}>🏠 Home</button>
            <span style={{ fontWeight:900, fontSize:13, color:"#6B7280" }}>Q{currentQ+1} of {questions.length}</span>
            <span style={{ fontWeight:900, fontSize:13, color:"#F59E0B" }}>⭐ {score} / {questions.length}</span>
          </div>
          <div style={{ background:"#E5E7EB", borderRadius:999, height:10, overflow:"hidden", marginBottom:12 }}>
            <div style={{ height:"100%", width:`${((currentQ)/questions.length)*100}%`, background:`linear-gradient(90deg, ${yg.color}, #818CF8)`, borderRadius:999, transition:"width 0.5s ease" }} />
          </div>

          <div key={currentQ} className="card slide" style={{ borderTop:`5px solid ${yg.color}` }}>
            {/* Visual for Y1-2 */}
            {yg.hasVisuals && q.visual && (
              <div style={{ textAlign:"center", fontSize:64, marginBottom:8, lineHeight:1 }}>{q.visual}</div>
            )}
            <div style={{ fontSize: yg.hasVisuals ? 36 : 44, textAlign:"center", marginBottom:6 }}>{q.emoji}</div>
            <h2 style={{ fontSize: yg.hasVisuals ? 19 : 20, fontWeight:900, color:"#1F2937", margin:"0 0 18px", textAlign:"center", lineHeight:1.35 }}>{q.question}</h2>

            <div className={shake ? "shake-it" : ""}>
              {q.options.map((opt, idx) => {
                let border="2.5px solid #E5E7EB", bg="#fff", color="#1F2937";
                if (answered) {
                  if (idx === q.correct) { border=`2.5px solid #10B981`; bg="#D1FAE5"; color="#065F46"; }
                  else if (idx === selected) { border=`2.5px solid #EF4444`; bg="#FEE2E2"; color="#7F1D1D"; }
                  else { color="#9CA3AF"; }
                }
                return (
                  <button key={idx} className="opt-btn" disabled={answered} onClick={() => handleAnswer(idx)}
                    style={{ border, background:bg, color, opacity: answered && idx!==q.correct && idx!==selected ? 0.55 : 1 }}>
                    <span style={{ fontSize:18, flexShrink:0 }}>
                      {answered ? (idx===q.correct?"✅":idx===selected?"❌":"  ") : ["🇦","🇧","🇨","🇩"][idx]}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {showFact && (
              <div className="pop" style={{ background: selected === q.correct ? "#ECFDF5" : "#FFF7ED", border:`2px solid ${selected===q.correct?"#10B981":"#F59E0B"}`, borderRadius:16, padding:"14px 16px", marginTop:4 }}>
                <p style={{ margin:"0 0 6px", fontWeight:900, fontSize:13, color: selected===q.correct?"#065F46":"#92400E" }}>
                  {selected===q.correct ? "🎉 Correct! Did you know..." : "💡 Good try! The answer was..."}
                </p>
                <p style={{ margin:"0 0 14px", fontSize:14, color:"#374151", lineHeight:1.55 }}>{q.fact}</p>
                <button className="big-btn" onClick={handleNext}
                  style={{ background:`linear-gradient(135deg,${yg.color},#818CF8)`, color:"#fff", width:"100%", fontSize:15, padding:"12px 20px" }}>
                  {currentQ+1 < questions.length ? "Next Question →" : "See My Results 🎉"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── RESULTS ── */}
      {screen === "results" && (() => {
        const r = getResult();
        const earnedBadgeData = earnedBadges.map(id => ALL_BADGES.find(b=>b.id===id)).filter(Boolean);
        return (
          <div style={{ maxWidth:520, margin:"0 auto" }}>
            <div className="card pop" style={{ textAlign:"center" }}>
              <div style={{ fontSize:64, marginBottom:8 }}>{r.emoji}</div>
              <div style={{ fontWeight:900, fontSize:13, color:"#9CA3AF", marginBottom:4 }}>{studentName} · {yg?.label}</div>
              <h2 style={{ fontSize:24, fontWeight:900, color:r.color, margin:"0 0 8px" }}>{r.title}</h2>
              <p style={{ fontSize:15, color:"#6B7280", margin:"0 0 20px", lineHeight:1.55 }}>{r.msg}</p>

              <div style={{ background:"#F9FAFB", borderRadius:18, padding:"16px 20px", marginBottom:20 }}>
                <div style={{ fontSize:48, fontWeight:900, color:"#1F2937", lineHeight:1 }}>{score}<span style={{ fontSize:24, color:"#9CA3AF" }}>/{questions.length}</span></div>
                <div style={{ fontSize:14, color:"#6B7280", fontWeight:700, marginTop:4 }}>{Math.round(pct*100)}% correct</div>
                <div style={{ display:"flex", justifyContent:"center", gap:4, marginTop:10 }}>
                  {questions.map((_,i) => <span key={i} style={{ fontSize:18, filter: i < score ? "none" : "grayscale(1) opacity(0.3)" }}>⭐</span>)}
                </div>
              </div>

              {earnedBadgeData.length > 0 && (
                <div style={{ marginBottom:20 }}>
                  <p style={{ fontWeight:900, fontSize:15, color:"#374151", margin:"0 0 12px" }}>🏅 Badges Earned</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
                    {earnedBadgeData.map((b, i) => (
                      <div key={b.id} className="badge-pop" style={{ animationDelay:`${i*120}ms`, background:"#FFF7ED", border:"2px solid #FCD34D", borderRadius:14, padding:"10px 14px", textAlign:"center", minWidth:100 }}>
                        <div style={{ fontSize:28 }}>{b.emoji}</div>
                        <div style={{ fontWeight:900, fontSize:12, color:"#92400E", marginTop:4 }}>{b.name}</div>
                        <div style={{ fontSize:10, color:"#B45309", marginTop:2, lineHeight:1.3 }}>{b.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {earnedBadgeData.length === 0 && (
                <div style={{ background:"#F3F4F6", borderRadius:14, padding:"12px 16px", marginBottom:20 }}>
                  <p style={{ margin:0, fontSize:14, color:"#6B7280" }}>💪 Keep practising to earn badges next time!</p>
                </div>
              )}

              <div style={{ display:"flex", gap:10, flexDirection:"column" }}>
                <button className="big-btn" onClick={restart}
                  style={{ background:"linear-gradient(135deg,#818CF8,#A78BFA)", color:"#fff", width:"100%" }}>
                  🔄 Play Again
                </button>
              </div>
                    </div>
          </div>
        );
      })()}

      {/* ── TEACHER VIEW ── */}
      {screen === "teacher" && (
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <div className="card pop">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
              <h2 style={{ margin:0, fontWeight:900, fontSize:20, color:"#1F2937" }}>🔑 Teacher Dashboard</h2>
              <button onClick={() => setScreen("welcome")} style={{ background:"#F3F4F6", border:"none", borderRadius:10, padding:"8px 14px", cursor:"pointer", fontFamily:"inherit", fontWeight:700, fontSize:13, color:"#374151" }}>← Back</button>
            </div>

            {!teacherUnlocked ? (
              <div style={{ maxWidth:320, margin:"0 auto", textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:12 }}>🔒</div>
                <p style={{ color:"#6B7280", fontSize:14, marginBottom:16 }}>Enter the teacher password to view results.</p>
                <input type="text" placeholder="Password" value={teacherPw}
                  className={pwError ? "error" : ""}
                  onChange={e => { setTeacherPw(e.target.value); setPwError(false); }}
                  onKeyDown={e => { if(e.key==="Enter"){ if(teacherPw==="teacher123"){setTeacherUnlocked(true)}else{setPwError(true)} } }} />
                {pwError && <p style={{ color:"#EF4444", fontSize:12, margin:"6px 0 0", fontWeight:700 }}>Incorrect password</p>}
                <button className="big-btn" onClick={() => { if(teacherPw==="teacher123") setTeacherUnlocked(true); else setPwError(true); }}
                  style={{ background:"#1F2937", color:"#fff", width:"100%", marginTop:12, fontSize:15 }}>Unlock</button>
              </div>
            ) : (
              <>
                <div style={{ background:"#F0FDF4", border:"2px solid #86EFAC", borderRadius:16, padding:"20px 24px", marginBottom:20, textAlign:"center" }}>
                  <div style={{ fontSize:40, marginBottom:8 }}>📊</div>
                  <p style={{ fontWeight:900, fontSize:16, color:"#166534", margin:"0 0 6px" }}>Results are saving to Google Sheets</p>
                  <p style={{ fontSize:13, color:"#4B7C5A", margin:"0 0 16px", lineHeight:1.5 }}>Every student submission is sent directly to your spreadsheet in real time. Click below to open it.</p>
                  <a href="https://docs.google.com/spreadsheets" target="_blank" rel="noopener noreferrer"
                    style={{ display:"inline-block", background:"#16A34A", color:"#fff", borderRadius:14, padding:"12px 28px", fontWeight:900, fontSize:15, textDecoration:"none", fontFamily:"inherit" }}>
                    📋 Open Google Sheets
                  </a>
                </div>
                <div style={{ background:"#FFF7ED", border:"2px solid #FCD34D", borderRadius:14, padding:"14px 18px" }}>
                  <p style={{ fontWeight:900, fontSize:13, color:"#92400E", margin:"0 0 6px" }}>💡 Tips for your sheet</p>
                  <ul style={{ margin:0, padding:"0 0 0 18px", fontSize:13, color:"#78350F", lineHeight:1.8 }}>
                    <li>Columns: Name · Year Group · Score · Total · % · Badges · Date · Time</li>
                    <li>Filter by Year Group to see each class separately</li>
                    <li>File → Download → CSV to export anytime</li>
                    <li>Results appear instantly as students finish</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
