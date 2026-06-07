/* ============================ CONTENT: Chapters 1–7 ============================ */
const CH = [
{
  id:1, title:"Overview of the PLC", en:"Chapter 1",
  lessons:[
    {h:"What is a PLC?", points:[
      "A programmable industrial computer for control functions, originally designed to replace relay logic.",
      "It works in real time: its output depends on its input conditions moment by moment."
    ], ex:"NEMA definition: a digitally operating electronic device that uses a programming memory to store instructions performing functions (logic, sequencing, timing, counting, arithmetic) to control machines via digital or analog modules."},
    {h:"Advantages over relays", points:[
      "Higher reliability — logic lives in memory, not in wiring.",
      "Greater flexibility — changes are made by programming, not rewiring.",
      "Lower cost — rule of thumb: once an application exceeds ~6 relays, the PLC is cheaper.",
      "Communication capability, plus easier diagnostics and testing."
    ]},
    {h:"Main parts", points:[
      "Power Supply.",
      "Processor (CPU) — executes the program and makes decisions.",
      "I/O Section — the interface with field devices.",
      "Programming Device — writes and downloads the program (handheld or PC)."
    ]},
    {h:"The program scan", points:[
      "Read inputs → execute program → update outputs → housekeeping, and repeat.",
      "Outputs are updated together at the end of the scan to keep the logic consistent."
    ]},
    {h:"Size classification", points:[
      "Based on number of I/O points and memory size: small (Nano/Micro) → medium → large.",
      "Example: 1500 points and 20 KB = medium (within up to 2048 points and 32 KB)."
    ]}
  ]
},
{
  id:2, title:"PLC Hardware Components", en:"Chapter 2",
  lessons:[
    {h:"The I/O section", points:[
      "Input module: converts field signals to a level the processor understands.",
      "Output module: converts processor commands to signals that drive loads."
    ]},
    {h:"Chassis vs Rack", points:[
      "Chassis: the housing that holds the modules, processor, and power supply (4/8/12/16 slots).",
      "Logical Rack: an addressing unit = 128 input points + 128 output points (8 words each)."
    ]},
    {h:"Module types & isolation", points:[
      "Discrete: ON/OFF signals · Analog: continuously variable values (4–20mA, 0–10V).",
      "Opto-isolation: electrically isolates the processor from high field voltage to protect it.",
      "The triac is the switching element for a 120VAC output."
    ]},
    {h:"Sinking / Sourcing", points:[
      "Sourcing: supplies current (associated with +).",
      "Sinking: draws/receives current (associated with −).",
      "A sourcing output connects to a sinking input to complete the current path."
    ]},
    {h:"Memory types & addressing", points:[
      "RAM is volatile (needs a battery) · ROM/EPROM/EEPROM/Flash are non-volatile.",
      "Three addressing systems: Rack/Slot (SLC 500) · Tag-based (ControlLogix) · PC-based."
    ], ex:"SLC 500 addressing example: I:1/2 = input, slot 1, bit 2. And O:2/11 = output, slot 2, bit 11."}
  ]
},
{
  id:3, title:"Number Systems & Codes", en:"Chapter 3",
  lessons:[
    {h:"The four systems", points:[
      "Decimal (10) · Binary (2) · Octal (8) · Hexadecimal (16: 0–9 and A–F).",
      "Each digit's weight = the base raised to its position power."
    ], code:"10101101₂ = 128+0+32+0+8+4+0+1 = 173₁₀"},
    {h:"The codes", points:[
      "BCD: each decimal digit in 4 bits (9 = 1001) — for displays and thumbwheel inputs.",
      "Gray Code: only one bit changes between consecutive numbers — for encoders to reduce errors.",
      "ASCII: represents characters and symbols in binary code."
    ]},
    {h:"Terms", points:[
      "Bit = one binary digit · Byte = 8 bits · Word = 16 bits (usually).",
      "LSB = least significant bit (right) · MSB = most significant bit (left)."
    ]},
    {h:"Full conversion example", points:["The number 18 in different systems:"],
      code:"18₁₀ = 10010₂ = 22₈ = 12₁₆ = 0001 1000 (BCD)"}
  ]
},
{
  id:4, title:"Logic & Logic Gates", en:"Chapter 4",
  lessons:[
    {h:"The golden rule of ladder", points:[
      "Series = AND.",
      "Parallel = OR.",
      "An NC contact = NOT."
    ], code:"--[ ]-- NO contact (XIC)\n--[/]-- NC contact (XIO)\n--( )-- output coil (OTE)"},
    {h:"The basic gates", points:[
      "Two NO contacts in series = AND · in parallel = OR.",
      "Two NC contacts in series = NOR · in parallel = NAND (De Morgan's laws).",
      "XOR: output is 1 only when the two inputs differ."
    ]},
    {h:"Boolean equations", points:["Example of converting an equation to a rung:"],
      code:"Q = (A + B)·C'\n|----[ A ]--+--[/ C ]----( Q )----|\n|----[ B ]--+"},
    {h:"Hardwired vs programmed logic", points:[
      "Hardwired: logic is built in wiring (changing it = rewiring).",
      "Programmed: logic is in the program (changing it = a software edit only)."
    ]}
  ]
},
{
  id:5, title:"Basics of PLC Programming", en:"Chapter 5",
  lessons:[
    {h:"Memory map (SLC 500)", points:[
      "Program files: 0 system · 2 main program · 3–255 subroutines.",
      "Data files: 0 output image · 1 input image · 2 Status · 3 Bit · 4 Timer · 5 Counter · 7 Integer."
    ]},
    {h:"Relay-type instructions", points:[
      "XIC (Examine If Closed) = NO contact, passes when the bit = 1.",
      "XIO (Examine If Open) = NC contact, passes when the bit = 0.",
      "OTE (Output Energize) = the output coil."
    ], ex:"XIC/XIO examine memory bits — not actual physical contacts."},
    {h:"Addressing & the scan", points:[
      "Address format: I:1/2 (input, slot 1, bit 2) and O:2/11.",
      "Scan: checks input-image bits → solves logic → updates the output image → copies to terminals.",
      "Internal relays (Bit file): bits for logical storage not tied to a physical output."
    ]},
    {h:"Rung example", points:["Meaning of the following rung:"],
      code:"|--[ XIC I:1/0 ]--[ XIO I:1/1 ]--( OTE O:2/0 )--|\n\nEnergize O:2/0 if I:1/0 = 1  AND  I:1/1 = 0"}
  ]
},
{
  id:6, title:"Wiring Diagrams & Basic Ladder", en:"Chapter 6",
  lessons:[
    {h:"Electrical devices", points:[
      "Relay: a magnetic switch (coil + NO/NC contacts), drawn in the de-energized state.",
      "Contactor: a special relay for heavy loads (motors/heaters).",
      "Motor Starter: a contactor + overload protection (OL)."
    ]},
    {h:"Sensors", points:[
      "Proximity · Magnetic reed · Photoelectric · Ultrasonic.",
      "Strain/weight · Temperature · Flow · Velocity/position."
    ]},
    {h:"The seal-in (holding) circuit", points:[
      "An auxiliary output contact in parallel with the start button keeps the output energized after the button is released."
    ], code:"|--[ STOP ]--[ START ]--------( M )--|\n|------------[ M ]-----------|  (holding)"},
    {h:"Latch / Unlatch & the fail-safe principle", points:[
      "Latch (L) / Unlatch (U): the output stays in its state until reversed → retentive.",
      "Seal-in loses its state on power loss, while Latch retains it.",
      "Fail-safe: STOP, E-STOP, and OL are physically NC but programmed NO, so a fault forces a safe shutdown."
    ]}
  ]
},
{
  id:7, title:"Programming Timers", en:"Chapter 7",
  lessons:[
    {h:"The three types", points:[
      "TON (On-Delay): output (DN) activates after the delay from input start — nonretentive (resets when the input drops).",
      "TOF (Off-Delay): output stays, then turns off after the delay once the input drops.",
      "RTO (Retentive): accumulates time and keeps it when the input drops — needs RES to reset."
    ]},
    {h:"Timer bits", points:[
      "EN (Enable) · TT (Timer Timing) · DN (Done).",
      "PRE = the required value · ACC = elapsed time · Time Base = 1s or 0.01s.",
      "During timing: EN=1, TT=1, DN=0 — after it finishes: EN=1, TT=0, DN=1."
    ]},
    {h:"Reset", points:[
      "TON: resets by making the input false.",
      "TOF: resets by making the input true.",
      "RTO: resets by a RES instruction only."
    ]},
    {h:"Example: lamp after 15 seconds", points:["When S1 turns on, the TON starts counting; when DN=1 the lamp lights:"],
      code:"|--[ S1 ]--------------( TON T4:0, PRE=15s )--|\n|--[ T4:0/DN ]--------( PL )-----------------|"}
  ]
}
];

/* ============================ QUESTION BANKS ============================ */
const QB = {
1:[
 {q:"What is the best description of a PLC?",o:["A mechanical switch for heavy loads","A programmable industrial computer for control functions","A regulated power supply only","A display screen for machine status"],a:1,e:"A PLC is a programmable industrial computer for control functions, originally designed to replace relay logic."},
 {q:"Which of the following is NOT an advantage of the PLC over relays?",o:["Higher reliability","Difficulty of modification","Easy maintenance","Tolerance of harsh environments"],a:1,e:"The opposite is true: a PLC advantage is that modification is easy via software, not rewiring."},
 {q:"Put the scan-cycle steps in the correct order:",o:["Program -> Inputs -> Outputs","Inputs -> Outputs -> Program","Inputs -> Program -> Outputs -> Housekeeping","Outputs -> Inputs -> Program"],a:2,e:"Scan: read inputs -> execute program -> update outputs -> housekeeping, then repeat."},
 {q:"Why are outputs updated at the end of the scan rather than instantly?",o:["To read faster","To keep logic consistent and prevent unstable intermediate results","To save power","Because the processor is slow"],a:1,e:"Updating together at the end ensures logic consistency and prevents unstable states while solving rungs."},
 {q:"A PLC has 1500 I/O points and 20 KB of memory. Its classification:",o:["Small","Medium","Large","Cannot be classified"],a:1,e:"It falls within (up to 2048 points and 32 KB) = medium."},
 {q:"The main parts of a PLC are:",o:["The processor only","Power Supply, CPU, I/O, Programming Device","Relays and wiring","The screen and battery"],a:1,e:"The four: power supply, CPU, I/O section, and programming device."},
 {q:"Describing a PLC as 'real-time' means:",o:["It shows the clock","Its output responds immediately to changes in field inputs","It needs internet","It stores data forever"],a:1,e:"Real-time: the output responds immediately to changes in field input conditions."}
],
2:[
 {q:"The function of an input module is to:",o:["Drive loads directly","Convert field signals to a level the processor understands","Store the program","Generate 120V"],a:1,e:"The input module converts field-device signals to a logic level the processor understands."},
 {q:"A logical rack equals:",o:["64 inputs only","128 input points + 128 output points","256 outputs only","16 physical slots"],a:1,e:"The logical rack is an addressing unit = 128 inputs + 128 outputs (8 words each)."},
 {q:"What is the difference between sinking and sourcing?",o:["Both supply current","Sourcing supplies current and sinking draws it","Sinking is for high voltage only","No difference"],a:1,e:"Sourcing supplies current (+) and sinking draws it (-); a sourcing output connects to a sinking input."},
 {q:"The purpose of opto-isolation is to:",o:["Amplify the signal","Electrically isolate the processor from field voltage to protect it","Store data","Speed up the scan"],a:1,e:"Opto-isolation separates the high-voltage field circuit from the processor to protect it."},
 {q:"The switching element in a 120VAC output module is the:",o:["Transistor","Triac","Relay only","Diode"],a:1,e:"The triac is the output switching element for 120VAC."},
 {q:"The address O:2/11 means:",o:["Input slot 2 bit 11","Output slot 2 bit 11","Output slot 11 bit 2","Timer number 11"],a:1,e:"O = output, slot 2, bit 11."},
 {q:"Which memory is volatile and needs a battery?",o:["ROM","EEPROM","RAM","Flash"],a:2,e:"RAM is volatile and loses its contents on power loss, so it needs a backup battery."}
],
3:[
 {q:"Convert 11001₂ to decimal:",o:["19","25","21","27"],a:1,e:"16+8+0+0+1 = 25."},
 {q:"The most important property of Gray Code is:",o:["Only one bit changes between consecutive numbers","It always uses 8 bits","It represents characters","It is faster than binary"],a:0,e:"Only one bit changes between consecutive numbers, reducing reading errors in encoders."},
 {q:"The representation of the number 9 in BCD:",o:["1001","1010","0110","1111"],a:0,e:"BCD represents each decimal digit in 4 bits: 9 = 1001."},
 {q:"How many bits are in a Word (usually)?",o:["4","8","16","32"],a:2,e:"Byte = 8 bits, and a Word = 16 bits usually."},
 {q:"Convert 2F₁₆ to binary:",o:["0010 1111","0011 1110","0010 1110","0001 1111"],a:0,e:"2 = 0010, F = 1111 -> 0010 1111."},
 {q:"The LSB is:",o:["The most significant bit (left)","The least significant bit (right)","The sign bit","The parity bit"],a:1,e:"LSB = Least Significant Bit, the far right."},
 {q:"The number 18₁₀ in BCD:",o:["10010","0001 1000","12","0001 0010"],a:1,e:"18 -> the two digits 1 and 8 -> 0001 1000 (not the binary 10010)."}
],
4:[
 {q:"Two NO contacts in series form which gate?",o:["OR","AND","NOR","NAND"],a:1,e:"Series = AND."},
 {q:"Two contacts in parallel form which gate?",o:["AND","OR","XOR","NAND"],a:1,e:"Parallel = OR."},
 {q:"Two NC contacts in series form (De Morgan):",o:["AND","OR","NOR","XOR"],a:2,e:"A'·B' = (A+B)' = NOR."},
 {q:"An XOR gate outputs 1 when:",o:["The inputs are equal","The two inputs differ","Always","Never"],a:1,e:"XOR = 1 only when the inputs differ."},
 {q:"In ladder, an NC contact is logically equivalent to:",o:["AND","NOT","OR","Buffer"],a:1,e:"An NC contact = NOT."},
 {q:"The equation Q = A·B' + C means:",o:["A parallel B' then C in series","(A series B') parallel C","A, B, and C all in series","C in series with A only"],a:1,e:"Multiply = series, add = parallel -> (A series B') parallel C."},
 {q:"Hardwired logic differs from programmed logic in that:",o:["Changing it needs rewiring","It can never be changed","It is always faster","It needs no power"],a:0,e:"Hardwired logic is built in wiring, so changing it requires rewiring; programmed logic changes via software."}
],
5:[
 {q:"The XIC instruction is equivalent to:",o:["An NC contact","An NO contact, passes when the bit = 1","An output coil","A timer"],a:1,e:"XIC = Examine If Closed = an NO contact, passes when the bit = 1."},
 {q:"The XIO instruction passes current when:",o:["The bit = 1","The bit = 0","Always","At DN"],a:1,e:"XIO = an NC contact, passes when the bit = 0."},
 {q:"In the SLC 500 memory map, data file 4 is for:",o:["Counters","Timers","Inputs","Status"],a:1,e:"Data file 4 = Timer, and 5 = Counter."},
 {q:"The address I:1/2 means:",o:["Output slot 1 bit 2","Input slot 1 bit 2","Input slot 2 bit 1","Timer 1 bit 2"],a:1,e:"I = input, slot 1, bit 2."},
 {q:"The OTE instruction is:",o:["An NO contact","An NC contact","The output coil (Output Energize)","A counter"],a:2,e:"OTE = Output Energize = the output coil."},
 {q:"An internal relay (Bit file) is used to:",o:["Drive a physical load directly","Store logic not tied to a physical output","Read voltage","Amplify the signal"],a:1,e:"Internal bits for logical storage, not tied to a physical output."},
 {q:"The rung |--[XIC I:1/0]--[XIO I:1/1]--(OTE O:2/0)--| energizes the output when:",o:["I:1/0=1 and I:1/1=1","I:1/0=1 and I:1/1=0","I:1/0=0 and I:1/1=0","Always"],a:1,e:"XIC needs I:1/0=1 and XIO needs I:1/1=0 (series = AND)."}
],
6:[
 {q:"What is the difference between a contactor and a motor starter?",o:["No difference","Motor Starter = contactor + overload protection (OL)","A contactor is for lighting only","A starter has no coil"],a:1,e:"A motor starter = a contactor plus overload protection (OL)."},
 {q:"The function of the seal-in (holding) circuit is to:",o:["Turn the output off instantly","Keep the output energized after the start button is released","Count pulses","Delay the start"],a:1,e:"An auxiliary output contact in parallel with START keeps the output running after the button is released."},
 {q:"Why is a STOP button programmed as an NO contact even though it is physically NC?",o:["A common mistake","For the fail-safe principle","To save a wire","Randomly"],a:1,e:"Fail-safe: STOP is physically NC, so if the wire breaks the system stops safely; hence it is programmed NO."},
 {q:"What makes Latch/Unlatch 'retentive'?",o:["It loses its state on power loss","It keeps its state until explicitly reversed","It works on time only","It stores nothing"],a:1,e:"Latch/Unlatch stores the state in memory and keeps it until reversed -> retentive."},
 {q:"The difference between seal-in and latch:",o:["No difference","Seal-in loses its state on power loss while latch retains it","Latch is faster","Seal-in is retentive"],a:1,e:"Seal-in is nonretentive (lost on power loss), latch is retentive."},
 {q:"Which of the following is a sensor?",o:["Contactor","Photoelectric / proximity","Output coil","The rack"],a:1,e:"Sensors include proximity, photoelectric, ultrasonic, magnetic reed, etc."},
 {q:"Relay contacts are drawn in which state?",o:["Energized","De-energized","Faulted","Half-energized"],a:1,e:"Contacts are drawn in the coil's de-energized state."}
],
7:[
 {q:"The timer that accumulates time, keeps it when the input drops, and needs RES is:",o:["TON","TOF","RTO","CTU"],a:2,e:"RTO is retentive: it keeps the accumulated time and resets only with a RES instruction."},
 {q:"A TON (On-Delay) activates its DN output:",o:["Immediately on the input","After the delay from input start","When the input drops","Never"],a:1,e:"TON activates DN after the delay elapses from when the rung becomes true."},
 {q:"During timer counting (timing), the bits are:",o:["EN=0,TT=0,DN=1","EN=1,TT=1,DN=0","EN=1,TT=0,DN=1","EN=0,TT=1,DN=0"],a:1,e:"During timing: EN=1, TT=1, DN=0. After it finishes: EN=1, TT=0, DN=1."},
 {q:"The DN bit becomes 1 when:",o:["The input starts","ACC = PRE (time elapsed)","The input is removed","At reset"],a:1,e:"DN (Done) = 1 when the accumulated value ACC reaches the preset PRE."},
 {q:"How is a TON timer reset?",o:["By a RES instruction only","By making the input false","By making the input true","It does not reset"],a:1,e:"A TON is nonretentive and resets automatically when its input goes false."},
 {q:"PRE and ACC in a timer mean, respectively:",o:["Elapsed and required","Required and elapsed","Time base and bit","Input and output"],a:1,e:"PRE = the required time (preset), ACC = the elapsed time (accumulated)."},
 {q:"To log the run time of a machine that runs and stops intermittently, the right timer is:",o:["TON","TOF","RTO (retentive)","None"],a:2,e:"RTO accumulates the total time despite stoppages because it is retentive."},
 {q:"The difference between the TT and DN bits:",o:["They are the same","TT during counting, DN after it finishes","DN during counting only","TT after it finishes"],a:1,e:"TT (Timer Timing) = 1 during counting, and DN (Done) = 1 after the time completes."}
]
};

/* ============================ APP STATE ============================ */
const progress = {}; CH.forEach(c=>progress[c.id]={learned:false,quiz:false,mistakes:0,first:0,total:0});
let cur=null, queue=[], mastered=0, totalQ=0, wrongCount=0, firstTry=0, isFinal=false, answered=false;

const $=id=>document.getElementById(id);
const sections=['home','lesson','quiz','done'];
function show(s){sections.forEach(x=>$(x).classList.toggle('hide',x!==s));window.scrollTo({top:0,behavior:'smooth'});}

/* ---------- HOME ---------- */
function renderHome(){
  const g=$('chGrid'); g.innerHTML='';
  CH.forEach(c=>{
    const p=progress[c.id]; const pc=(p.learned?50:0)+(p.quiz?50:0);
    const d=document.createElement('div'); d.className='ch'; d.onclick=()=>openLesson(c.id);
    d.innerHTML=(p.quiz?'<span class="chk done-pill">MASTERED &#10003;</span>':'')+
      '<div class="num">CHAPTER '+c.id+'</div>'+
      '<h3>'+c.title+'</h3><div class="en">'+c.en+'</div>'+
      '<div class="bar"><i style="width:'+pc+'%"></i></div>';
    g.appendChild(d);
  });
  const allQuiz=CH.every(c=>progress[c.id].quiz);
  $('finalBtn').disabled=!allQuiz;
  $('finalBtn').onclick=startFinal;
  const totalPc=Math.round(CH.reduce((s,c)=>s+((progress[c.id].learned?50:0)+(progress[c.id].quiz?50:0)),0)/(CH.length*100)*100);
  $('pctDone').textContent=totalPc+'%';
}
function goHome(){renderHome();show('home');}

/* ---------- LESSON ---------- */
function openLesson(id){
  cur=id; const c=CH.find(x=>x.id===id);
  $('lessonTag').textContent='CHAPTER '+id;
  $('lessonTitle').textContent=c.title;
  $('lessonEn').textContent=c.en;
  const b=$('lessonBody'); b.innerHTML='';
  c.lessons.forEach((L,i)=>{
    const card=document.createElement('div'); card.className='lcard';
    let html='<h4><span class="dot">'+(i+1)+'</span>'+L.h+'</h4>';
    if(L.points){html+='<ul>'+L.points.map(p=>'<li>'+p+'</li>').join('')+'</ul>';}
    if(L.code){html+='<div class="code">'+L.code+'</div>';}
    if(L.ex){html+='<div class="ex"><b>Note:</b> '+L.ex+'</div>';}
    card.innerHTML=html; b.appendChild(card);
  });
  progress[id].learned=true;
  $('startQuizBtn').onclick=()=>startQuiz(id);
  show('lesson');
}

/* ---------- QUIZ ENGINE (mastery loop) ---------- */
function buildQueue(list){return list.map((q,i)=>({...q,_id:i,seenFirst:false}));}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function startQuiz(id){
  isFinal=false; cur=id;
  queue=shuffle(buildQueue(QB[id]));
  totalQ=queue.length; mastered=0; wrongCount=0; firstTry=0; answered=false;
  $('quizTitle').textContent='Chapter '+id+' Quiz — '+CH.find(c=>c.id===id).title;
  show('quiz'); nextQ();
}
function startFinal(){
  isFinal=true; cur='final';
  let all=[]; CH.forEach(c=>{const arr=QB[c.id];[...arr].sort(()=>Math.random()-0.5).slice(0,3).forEach(q=>all.push({...q,ch:c.id}));});
  queue=shuffle(all.map((q,i)=>({...q,_id:'f'+i,seenFirst:false})));
  totalQ=queue.length; mastered=0; wrongCount=0; firstTry=0; answered=false;
  $('quizTitle').textContent='★ Comprehensive Exam (1–7)';
  show('quiz'); nextQ();
}

function nextQ(){
  answered=false;
  if(queue.length===0){return finishQuiz();}
  const q=queue[0];
  const prog=Math.round(mastered/totalQ*100);
  $('quizProg').style.width=prog+'%';
  $('masterCount').textContent='Mastered '+mastered+'/'+totalQ+(queue.length>totalQ-mastered?' · in queue '+queue.length:'');
  const box=$('qbox');
  let qhtml='';
  if(q.ch){qhtml='<div class="qtext"><span style="font-family:var(--mono);font-size:12px;color:var(--amber)">[Ch'+q.ch+']</span> '+q.q+'</div>';}
  else{qhtml='<div class="qtext">'+q.q+'</div>';}
  qhtml+='<div class="opts">';
  const keys=['A','B','C','D'];
  q.o.forEach((opt,i)=>{qhtml+='<div class="opt" data-i="'+i+'"><span class="k">'+keys[i]+'</span><span>'+opt+'</span></div>';});
  qhtml+='</div><div class="fb" id="fb"></div><div class="row" id="qnav" style="margin-top:14px"></div>';
  box.innerHTML=qhtml;
  box.querySelectorAll('.opt').forEach(el=>el.onclick=()=>pick(parseInt(el.dataset.i),q));
}

function pick(i,q){
  if(answered)return; answered=true;
  const opts=document.querySelectorAll('.opt');
  opts.forEach(o=>o.classList.add('disabled'));
  const fb=$('fb'); const nav=$('qnav');
  const correct=(i===q.a);
  opts[q.a].classList.add('correct');
  if(correct){
    if(!q.seenFirst) firstTry++;
    mastered++;
    fb.className='fb good show';
    fb.innerHTML='<span class="lab">✓ Correct</span>'+q.e;
    queue.shift();
  }else{
    opts[i].classList.add('wrong');
    wrongCount++; q.mistakes=(q.mistakes||0)+1;
    if(isFinal && q.ch) progress[q.ch].mistakes++; else if(!isFinal) progress[cur].mistakes++;
    fb.className='fb bad show';
    fb.innerHTML='<span class="lab">✗ Incorrect</span>'+q.e+'<div class="requeue">↻ This question returns to the queue until you master it.</div>';
    const item=queue.shift(); item.seenFirst=true;
    const pos=Math.min(queue.length, 2+Math.floor(Math.random()*2));
    queue.splice(pos,0,item);
  }
  q.seenFirst=true;
  const btn=document.createElement('button');
  btn.className='btn primary'; btn.textContent=queue.length===0?'See Results ›':'Next ›';
  btn.onclick=nextQ; nav.appendChild(btn);
}

function finishQuiz(){
  const firstPct=totalQ?Math.round(firstTry/totalQ*100):0;
  $('dTotal').textContent=totalQ;
  $('dWrong').textContent=wrongCount;
  $('dFirst').textContent=firstPct+'%';
  if(isFinal){
    $('doneSub').textContent='You completed the comprehensive exam for Chapters 1–7!';
    $('nextChBtn').classList.add('hide');
    $('retryBtn').onclick=startFinal;
  }else{
    progress[cur].quiz=true; progress[cur].first=firstPct; progress[cur].total=totalQ;
    $('doneSub').textContent='You mastered every question in Chapter '+cur+'.';
    $('retryBtn').onclick=()=>startQuiz(cur);
    const next=CH.find(c=>c.id===cur+1);
    if(next){$('nextChBtn').classList.remove('hide');$('nextChBtn').onclick=()=>openLesson(next.id);}
    else{$('nextChBtn').classList.add('hide');}
  }
  show('done');
}

renderHome();
