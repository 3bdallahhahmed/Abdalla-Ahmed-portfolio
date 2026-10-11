// Technical Project Data for Deep-Dive Modals
const projectDetails = {
  hexapod: {
    title: "Single-Actuator Gear-Driven Hexapod Walking Robot",
    category: "Mechanisms & Robotics (MTR 221)",
    year: "May 2026",
    summary: "Comprehensive course project for MTR 221: Theory of Machines at E-JUST under the academic supervision of Dr. Ayman Nada. Designed, simulated, and manufactured a functional six-legged robot mimicking biological locomotion using single-motor actuation.",
    specs: [
      { label: "Institution & Course", value: "E-JUST • MTR 221: Theory of Machines" },
      { label: "Academic Supervisor", value: "Dr. Ayman Nada" },
      { label: "Engineering Team", value: "Abdallah Ahmed, Mohamed Eldaw, Mohamed Aborehab" },
      { label: "Degree of Freedom", value: "Single DOF (validated via Grübler's criterion)" },
      { label: "Linkage Synthesis", value: "Planar four-bar & six-bar compliant with Grashof's theorem" },
      { label: "Power Transmission", value: "Internal gear train featuring custom bevel & pinion gears" },
      { label: "Manufacturing", value: "SolidWorks 3D Modeling • Optimized FDM 3D printing" }
    ],
    architecture: [
      { 
        title: "Kinematic Synthesis & Trajectory", 
        desc: "Synthesized mechanical linkages to generate a closed oval walking locus for each foot. Applied Grübler's mobility criterion to guarantee synchronized, jam-free motion across all 6 legs from a single power source." 
      },
      { 
        title: "Internal Gear Train & Power Distribution", 
        desc: "Designed an internal drive gearbox using bevel and spur pinion gears to split motor torque evenly between opposing leg banks, achieving stable tripedal gait without electronic phase synchronization." 
      },
      { 
        title: "Manufacturing & Physical Assembly", 
        desc: "Modelled all structural plates, shafts, and linkages in SolidWorks. Prototyped using high-infill 3D printing, toleranced pin joints with low-friction bushings, and validated physical walking stability on lab floor." 
      }
    ],
    links: [
      { name: "View on LinkedIn", url: "https://www.linkedin.com/posts/abdallah-ahmed-4138ba344_truly-a-pleasure-working-with-you-on-this-activity-7480431781226254336-Bb24" }
    ]
  },
  eri: {
    title: "Autonomous Mobile Robot Kinematics & Simulation",
    category: "Robotics Research Track",
    year: "Summer 2026",
    summary: "Specialized summer internship at the Electronics Research Institute (ERI) in Cairo. Explored mobile robotic kinematics, dynamic modeling, and closed-loop control algorithms.",
    specs: [
      { label: "Host Institute", value: "Electronics Research Institute (ERI), Cairo" },
      { label: "Focus Track", value: "Robotics & Autonomous Systems" },
      { label: "Simulation Platform", value: "Webots Robot Simulator & MATLAB/Simulink" },
      { label: "Kinematic Models", value: "Differential Drive & 4-Wheel Skid-Steer" },
      { label: "Control Systems", value: "Closed-loop trajectory tracking, obstacle avoidance, PID velocity" },
      { label: "Hardware Interfacing", value: "Sensors (Ultrasonic, IMU, Encoders) & Microcontroller integration" }
    ],
    architecture: [
      { 
        title: "Dynamic Modeling in Webots", 
        desc: "Constructed rigid-body physics environments in Webots to evaluate wheeled chassis dynamics, wheel slip, and sensor placement before real-world testing." 
      },
      { 
        title: "Obstacle Avoidance & Navigation", 
        desc: "Implemented autonomous steering and reactive obstacle avoidance controllers, mapping sensor thresholds to motor PWM duty cycles." 
      },
      { 
        title: "Hardware & Actuation Integration", 
        desc: "Studied real-time microcontroller pipelines for reading high-frequency sensor streams and driving H-bridge motor drivers under deterministic timing." 
      }
    ],
    links: [
      { name: "Electronics Research Institute (ERI)", url: "https://eri.sci.eg/" }
    ]
  },
  egsa_pcb: {
    title: "Production-Ready PCB Design: Arduino Uno R3 & 5V Power Supply",
    category: "Hardware & PCB Engineering",
    year: "Jan–Feb 2026",
    summary: "60-hour hardware engineering workshop conducted at the Egyptian Space Agency (EgSA), focusing on industrial PCB design lifecycles using Altium Designer.",
    specs: [
      { label: "Organization", value: "Egyptian Space Agency (EgSA)" },
      { label: "CAD Suite", value: "Altium Designer" },
      { label: "Board 1", value: "Arduino Uno R3 Microcontroller Board" },
      { label: "Board 2", value: "5V Regulated Power Supply Circuit" },
      { label: "Verification", value: "Rigorous Design Rule Checks (DRC) & Signal Integrity" },
      { label: "Deliverables", value: "BOM, Schematic capture, 3D Component Models, Manufacturing Gerbers" }
    ],
    architecture: [
      { 
        title: "Component Library Creation", 
        desc: "Built custom library parts from datasheets, including exact schematic symbols and 3D IPC-compliant component footprints with courtyard dimensions." 
      },
      { 
        title: "Schematic Capture & Power Supply", 
        desc: "Engineered circuit topologies with proper bypass capacitors, decoupling networks, reverse polarity protection diodes, and voltage regulators." 
      },
      { 
        title: "Layout, Routing & Fabrication Outputs", 
        desc: "Routed high-current traces, implemented star grounding to minimize EMI, verified clearances with automated DRC rules, and generated fabrication-ready Gerber and NC drill files." 
      }
    ],
    links: [
      { name: "Egyptian Space Agency (EgSA)", url: "https://egsa.gov.eg/" }
    ]
  },
  segway: {
    title: "Autonomous Air Quality Monitoring Segway Robot",
    category: "Mobile Robotics & Environmental IoT",
    year: "Aug–Sep 2023",
    summary: "Project developed at SoiLAB Eco-Warrior Camp in Sharjah, UAE. Created a two-wheeled self-balancing mobile robot with environmental sensors to collect real-time urban air quality data.",
    specs: [
      { label: "Location", value: "SoiLAB Innovation Camp, Sharjah, UAE" },
      { label: "Dynamics", value: "Two-Wheeled Inverted Pendulum Kinematics" },
      { label: "Control Strategy", value: "PID Feedback balancing via IMU accelerometer & gyroscope" },
      { label: "Sensing Suite", value: "Particulate matter & air quality environmental sensors" },
      { label: "Chassis", value: "Custom laser-cut and 3D-printed structural frame" }
    ],
    architecture: [
      { 
        title: "Balancing & Control Loop", 
        desc: "Derived tilt angle using complementary filtering on 6-axis IMU readings. Computed proportional-integral-derivative corrective torque commands sent to DC gearmotors." 
      },
      { 
        title: "Environmental Sensing Integration", 
        desc: "Logged pollution metrics in real time while navigating, proving the feasibility of autonomous mobile nodes for urban air quality surveillance." 
      }
    ],
    links: []
  }
};

// --- Theme Management ---
const themeToggleBtn = document.getElementById('theme-toggle');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

initTheme();

// --- Hexapod Thumbnail Switcher ---
function changeHexapodImg(src) {
  const img = document.getElementById('hexapod-display-img');
  if (img) {
    img.style.opacity = '0.5';
    setTimeout(() => {
      img.src = src;
      img.style.opacity = '1';
    }, 150);
  }
}

// --- Project Category Filtering ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('active-filter');
      b.classList.add('text-zinc-600', 'dark:text-zinc-400');
    });
    btn.classList.add('active-filter');
    btn.classList.remove('text-zinc-600', 'dark:text-zinc-400');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- Project Deep-Dive Modal ---
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');

function openModal(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  let specsHtml = project.specs.map(s => `
    <div class="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800 text-xs font-mono">
      <span class="text-zinc-500">${s.label}:</span>
      <span class="text-zinc-900 dark:text-zinc-200 font-medium">${s.value}</span>
    </div>
  `).join('');

  let archHtml = project.architecture.map(a => `
    <div class="space-y-1">
      <h5 class="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">${a.title}</h5>
      <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">${a.desc}</p>
    </div>
  `).join('');

  let linksHtml = project.links && project.links.length > 0 ? project.links.map(l => `
    <a href="${l.url}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white px-3 py-1.5 rounded transition-colors">
      <span>${l.name}</span>
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
  `).join('') : '';

  modalContent.innerHTML = `
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase">${project.category}</span>
        <span class="text-xs font-mono text-zinc-400">• ${project.year}</span>
      </div>
      <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">${project.title}</h3>
      <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">${project.summary}</p>
    </div>

    <div class="space-y-2">
      <h4 class="text-xs font-mono text-zinc-400 uppercase tracking-wider">Technical Specifications</h4>
      <div class="rounded-lg bg-zinc-50 dark:bg-zinc-950/60 p-3.5 border border-zinc-200 dark:border-zinc-800">
        ${specsHtml}
      </div>
    </div>

    <div class="space-y-4">
      <h4 class="text-xs font-mono text-zinc-400 uppercase tracking-wider">Engineering Subsystem Breakdown</h4>
      <div class="space-y-3">
        ${archHtml}
      </div>
    </div>

    ${linksHtml ? `
    <div class="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
      ${linksHtml}
    </div>
    ` : ''}
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// --- Copy Email to Clipboard ---
const copyEmailBtn = document.getElementById('copy-email-btn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    const email = copyEmailBtn.getAttribute('data-email');
    navigator.clipboard.writeText(email).then(() => {
      const emailLabel = document.getElementById('email-label');
      const originalText = emailLabel.textContent;
      emailLabel.textContent = "Copied to clipboard!";
      emailLabel.classList.add('text-emerald-500');
      setTimeout(() => {
        emailLabel.textContent = originalText;
        emailLabel.classList.remove('text-emerald-500');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  });
}

// ==========================================
// --- Engineering Workbench Micro-Tools ---
// ==========================================

function switchCalcTab(tab) {
  const grublerBtn = document.getElementById('calc-tab-grubler');
  const gearBtn = document.getElementById('calc-tab-gear');
  const grublerPane = document.getElementById('grubler-calc-pane');
  const gearPane = document.getElementById('gear-calc-pane');

  if (tab === 'grubler') {
    grublerBtn.classList.add('active-filter');
    grublerBtn.classList.remove('text-zinc-600', 'dark:text-zinc-400');
    gearBtn.classList.remove('active-filter');
    gearBtn.classList.add('text-zinc-600', 'dark:text-zinc-400');

    grublerPane.classList.remove('hidden');
    gearPane.classList.add('hidden');
  } else {
    gearBtn.classList.add('active-filter');
    gearBtn.classList.remove('text-zinc-600', 'dark:text-zinc-400');
    grublerBtn.classList.remove('active-filter');
    grublerBtn.classList.add('text-zinc-600', 'dark:text-zinc-400');

    gearPane.classList.remove('hidden');
    grublerPane.classList.add('hidden');
  }
}

// 1. Grübler's Planar Mobility Calculator
function calculateMobility() {
  const nInput = document.getElementById('input-n');
  const j1Input = document.getElementById('input-j1');
  const j2Input = document.getElementById('input-j2');

  if (!nInput || !j1Input || !j2Input) return;

  const n = parseInt(nInput.value, 10);
  const j1 = parseInt(j1Input.value, 10);
  const j2 = parseInt(j2Input.value, 10);

  document.getElementById('n-val').textContent = n;
  document.getElementById('j1-val').textContent = j1;
  document.getElementById('j2-val').textContent = j2;

  // Formula: M = 3*(n - 1) - 2*j1 - j2
  const M = 3 * (n - 1) - (2 * j1) - j2;

  const resultEl = document.getElementById('mobility-result');
  const badgeEl = document.getElementById('mobility-badge');
  const descEl = document.getElementById('mobility-desc');

  resultEl.textContent = `M = ${M}`;

  if (M === 1) {
    badgeEl.textContent = "Constrained Mechanism (1 DOF)";
    badgeEl.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20";
    descEl.textContent = "Exact single degree of freedom. One input actuator deterministically dictates the full walking trajectory (Hexapod condition).";
  } else if (M === 2) {
    badgeEl.textContent = "Differential / 2-DOF Mechanism";
    badgeEl.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20";
    descEl.textContent = "Two independent input motions required to uniquely determine mechanism pose (e.g. 5-bar linkage or 2-axis manipulator).";
  } else if (M > 2) {
    badgeEl.textContent = `Unconstrained System (${M} DOF)`;
    badgeEl.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20";
    descEl.textContent = `Requires ${M} independent actuators or inputs. System possesses redundant internal mobility.`;
  } else if (M === 0) {
    badgeEl.textContent = "Statically Determinant Structure";
    badgeEl.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20";
    descEl.textContent = "Zero mobility. Forms a rigid truss structure; no motion possible under ideal rigid-body assumptions.";
  } else {
    badgeEl.textContent = `Overconstrained Truss (M = ${M})`;
    badgeEl.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20";
    descEl.textContent = `Negative degrees of freedom. Statically indeterminate structure with redundant constraints.`;
  }
}

function loadGrublerPreset(n, j1, j2, name) {
  document.getElementById('input-n').value = n;
  document.getElementById('input-j1').value = j1;
  document.getElementById('input-j2').value = j2;
  calculateMobility();
}

// 2. Gear Train Kinematics Calculator
function calculateGears() {
  const n1Input = document.getElementById('input-n1');
  const n2Input = document.getElementById('input-n2');
  const rpmInput = document.getElementById('input-rpm');

  if (!n1Input || !n2Input || !rpmInput) return;

  const N1 = Math.max(1, parseInt(n1Input.value, 10) || 1);
  const N2 = Math.max(1, parseInt(n2Input.value, 10) || 1);
  const rpmIn = Math.max(0, parseFloat(rpmInput.value) || 0);

  document.getElementById('n1-val').textContent = N1;
  document.getElementById('n2-val').textContent = N2;
  document.getElementById('rpm-val').textContent = rpmIn;

  const ratio = N2 / N1;
  const rpmOut = rpmIn / ratio;

  document.getElementById('gear-ratio-result').textContent = `${ratio.toFixed(2)} : 1`;
  document.getElementById('gear-out-speed').textContent = `${rpmOut.toFixed(1)} RPM`;
  document.getElementById('gear-torque-mult').textContent = `${ratio.toFixed(2)}x`;

  const descEl = document.getElementById('gear-desc');
  if (ratio > 1) {
    descEl.textContent = `Speed reduction with a ${ratio.toFixed(2)}x proportional torque amplification (Ideal for walking robot leg drive).`;
  } else if (ratio === 1) {
    descEl.textContent = "1:1 Direct transmission. Identical speed and torque (Ideal for 90° bevel redirection).";
  } else {
    descEl.textContent = `Speed increaser (Overdrive). Output turns ${(1/ratio).toFixed(2)}x faster with reduced torque.`;
  }
}

function loadGearPreset(n1, n2, rpm, name) {
  document.getElementById('input-n1').value = n1;
  document.getElementById('input-n2').value = n2;
  document.getElementById('input-rpm').value = rpm;
  calculateGears();
}

// Initialize tools
if (document.getElementById('input-n')) {
  calculateMobility();
  calculateGears();
}

