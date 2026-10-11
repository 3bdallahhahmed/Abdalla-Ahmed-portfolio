# Abdallah Ahmed — Mechatronics Engineering Portfolio

<div align="center">

<img src="assets/images/profile.jpg" alt="Abdallah Ahmed" width="160" style="border-radius: 50%;" />

### Mechatronics Engineering Student
**Egypt-Japan University of Science and Technology (E-JUST)** • Alexandria, Egypt  
*Class of 2028 • Expected Graduation: June 2028*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abdallah%20Ahmed-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/abdallah-ahmed-4138ba344/)
[![Email](https://img.shields.io/badge/Email-3bdallahhahmed%40gmail.com-D14836?style=flat-square&logo=gmail)](mailto:3bdallahhahmed@gmail.com)
[![Phone](https://img.shields.io/badge/Phone-%2B20%201050018069-25D366?style=flat-square&logo=whatsapp)](tel:+201050018069)
[![Resume](https://img.shields.io/badge/Download-CV%20(PDF)-orange?style=flat-square&logo=adobeacrobatreader)](assets/Abdalla_Ahmed_cv.pdf)

</div>

---

## 📌 Executive Summary

Mechatronics Engineering student with a focus on mechanical kinematic design, production-grade PCB engineering (Altium Designer), and autonomous robotics simulation. Passionate about translating textbook mathematical theory into functional physical machines through rapid 3D printing prototyping, precision gear mechanisms, and closed-loop feedback systems.

---

## 📁 Repository Directory Structure

```text
├── 01-hexapod-walking-robot/          # MTR 221 Theory of Machines project (SolidWorks, STLs, Kinematics)
│   ├── cad/                          # 3D printable STL mechanical parts
│   ├── media/                        # Prototype, gear cutaway & simulation photos
│   └── README.md                     # Deep-dive kinematic & gear train documentation
├── 02-eri-robotics-simulation/        # Electronics Research Institute (ERI) summer track
│   ├── media/                        # Webots simulation environment screenshot
│   └── README.md                     # Dynamic physics, kinematics & sensor loop notes
├── 03-egsa-pcb-design/               # Egyptian Space Agency (EgSA) 60-hr hardware workshop
│   ├── bom/                          # Bill of Materials (UNO.xlsx)
│   └── README.md                     # Altium Designer schematics & manufacturing docs
├── 04-soilab-air-quality-robot/       # SoiLAB Eco-Warrior Camp project (Sharjah, UAE)
│   └── README.md                     # Two-wheeled balancing Segway with environmental sensing
└── assets/                           # Profile photo, E-JUST logo & PDF CV
```

---

## 🚀 Featured Engineering Projects

### 1. [Single-Actuator Gear-Driven Hexapod Walking Robot](01-hexapod-walking-robot/)

> **Course**: MTR 221: Theory of Machines — **Supervised by**: Dr. Ayman Nada  
> **Team**: Abdallah Ahmed, Mohamed Eldaw, Mohamed Aborehab  
> **Institution**: Egypt-Japan University of Science and Technology (E-JUST)

Designed, simulated, and manufactured a functional six-legged robot mimicking biological locomotion using a **single electric motor**. Instead of multi-servo actuation, the robot relies on purely mechanical synchronization via planar linkages and an internal bevel gear train.

<div align="center">
<table>
  <tr>
    <td align="center"><b>SolidWorks 3D Assembly</b><br><img src="01-hexapod-walking-robot/media/hexapod-render.jpg" width="380" /></td>
    <td align="center"><b>Physical 3D-Printed Prototype</b><br><img src="01-hexapod-walking-robot/media/hexapod-prototype.jpg" width="380" /></td>
  </tr>
  <tr>
    <td align="center"><b>Internal Bevel Gear Train</b><br><img src="01-hexapod-walking-robot/media/hexapod-gears.jpg" width="380" /></td>
    <td align="center"><b>Foot Trajectory Synthesis</b><br><img src="01-hexapod-walking-robot/media/hexapod-kinematics.jpg" width="380" /></td>
  </tr>
</table>
</div>

#### Technical Specification Dossier:
- **Planar Mobility**: Validated using Grübler’s criterion for single degree of freedom ($M = 1$):
  $$M = 3(n - 1) - 2j_1 - j_2$$
  *Where $n = 4$ links, $j_1 = 4$ revolute pin joints, $j_2 = 0 \implies M = 1$ DOF per leg module.*
- **Linkage Synthesis**: Compliant with Grashof's condition ($s + l \le p + q$) configured as a crank-rocker mechanism generating an oval foot locus for stable ground clearance.
- **Power Transmission**: High-torque internal gearbox utilizing 90° bevel gears and spur pinions to distribute symmetric torque across opposing leg banks.
- **Fabrication**: Modeled in SolidWorks, sliced with optimized gyroid infill (40%), and FDM 3D printed with $\pm 0.15\text{ mm}$ joint tolerances.
- **Files available**: STL part files are accessible in [`01-hexapod-walking-robot/cad/`](01-hexapod-walking-robot/cad/).

---

### 2. [Autonomous Mobile Robot Kinematics & Simulation](02-eri-robotics-simulation/)

> **Organization**: Electronics Research Institute (ERI), Cairo, Egypt  
> **Track**: Robotics & Autonomous Systems Track (Summer 2026)  
> **Tools**: Webots Robot Simulator, MATLAB / Simulink

Intensive research internship at Egypt's National Electronics Research Institute. Formulated mathematical kinematic models for wheeled mobile robots and constructed rigid-body physics simulations.

<div align="center">
  <img src="02-eri-robotics-simulation/media/eri-webots-robot.jpg" alt="ERI Webots Robot Simulation" width="600" />
</div>

#### Key Research Work:
- **Kinematic Formulation**: Derived kinematic matrices for differential drive and 4-wheel skid-steer chassis.
- **Dynamic Physics in Webots**: Modeled wheel traction, center-of-mass distribution, and actuator saturation under simulated floor friction.
- **Sensor-in-the-Loop Simulation**: Integrated simulated ultrasonic rangefinders and IMU sensor streams with a closed-loop reactive obstacle avoidance controller.
- **Documentation**: See [`02-eri-robotics-simulation/README.md`](02-eri-robotics-simulation/README.md).

---

### 3. [End-to-End PCB Design: Arduino Uno R3 & 5V Regulated Power Supply](03-egsa-pcb-design/)

> **Organization**: Egyptian Space Agency (EgSA), Cairo, Egypt  
> **Program**: Intensive 60-Hour Hardware & PCB Design Workshop (Jan–Feb 2026)  
> **CAD Suite**: Altium Designer  
> **Certification**: Comprehensive PCB Design Certificate issued by EgSA

Engineered production-grade printed circuit boards from initial schematic capture to manufacturing deliverables.

#### Engineering Lifecycle Executed:
- **Custom Library Creation**: Built schematic symbols and IPC-compliant 3D footprints with accurate courtyard boundaries from component datasheets.
- **Schematic Capture**: Configured ATmega328P microcontroller circuit, crystal oscillator clocking, decoupling networks, and low-ripple 5V linear regulation.
- **Routing & DRC**: Enforced strict Design Rule Checks (DRC), routed high-current power traces, maintained ground polygon pours, and generated manufacturing Gerbers, drill files, and BOM.
- **Deliverables**: Bill of Materials available in [`03-egsa-pcb-design/bom/UNO.xlsx`](03-egsa-pcb-design/bom/UNO.xlsx).

---

### 4. [Autonomous Air Quality Monitoring Segway Robot](04-soilab-air-quality-robot/)

> **Program**: SoiLAB Eco-Warrior Innovation Camp, Sharjah, UAE (Aug–Sep 2023)  
> **Domain**: Mobile Robotics, Inverted Pendulum Dynamics, Environmental IoT

Developed a functional two-wheeled self-balancing mobile robotics platform equipped with environmental sensors to detect and map urban air quality metrics in real time.

#### Technical Highlights:
- **Dynamics & Control**: Formulated two-wheeled inverted pendulum dynamics; stabilized pitch angle using discrete PID feedback with 6-axis IMU sensor fusion.
- **Sensor Integration**: Interfaced particulate matter (PM2.5/PM10) and gas sensors for autonomous environmental sampling.
- **Hardware Prototyping**: Fabricated chassis using laser cutting and 3D printing.

---

## 🛠️ Technical Toolkit

| Engineering Domain | Tools & Technologies | Focus Areas |
| :--- | :--- | :--- |
| **Mechanical & CAD** | SolidWorks, Fusion 360 | Kinematic synthesis, linkage design, gear trains, GD&T, 3D printing |
| **PCB & Electronics** | Altium Designer | Schematic capture, custom 3D footprints, 2-layer routing, DRC, Gerbers |
| **Robotics & Simulation** | Webots, MATLAB, Simulink | Wheeled robot kinematics, multi-body simulation, control loops |
| **Embedded & Code** | C, C++, Arduino, Python, Git,Assembly language | Bare-metal firmware, sensor interfacing (I2C, SPI, UART), version control |
| **Languages** | Arabic (Native), English (Advanced), Japanese (Beginner at E-JUST) | Technical reporting, cross-cultural engineering collaboration |

---

## 🎓 Education & Academic Background

- **Egypt-Japan University of Science and Technology (E-JUST)** — Alexandria, Egypt  
  *Bachelor of Engineering in Mechatronics Engineering* (2024 – June 2028)  
  *Core Coursework*: MTR 221 Theory of Machines, Feedback Control Systems, Robotics & Kinematics, Microcontroller Systems, Mechanical Vibrations.
- **AlNoor International School** — Sharjah, UAE  
  *Secondary School Certificate (MoE Curriculum, 2024)*

---

## 📬 Contact & Inquiries

- **Email**: [3bdallahhahmed@gmail.com](mailto:3bdallahhahmed@gmail.com)
- **Phone**: [+20 1050018069](tel:+201050018069)
- **LinkedIn**: [linkedin.com/in/abdallah-ahmed-4138ba344](https://www.linkedin.com/in/abdallah-ahmed-4138ba344/)
- **GitHub**: [github.com/3bdallahhahmed](https://github.com/3bdallahhahmed)
- **Curriculum Vitae**: [Download CV (PDF)](assets/Abdalla_Ahmed_cv.pdf)
