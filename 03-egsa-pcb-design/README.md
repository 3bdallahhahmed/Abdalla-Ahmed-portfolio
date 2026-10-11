# End-to-End PCB Design: Arduino Uno R3 & 5V Power Supply

## Overview
* **Organization**: Egyptian Space Agency (EgSA) — Cairo, Egypt
* **Program**: Comprehensive 60-Hour Hardware & PCB Design Workshop (Jan–Feb 2026)
* **Software**: Altium Designer
* **Credential**: Comprehensive PCB Design Certificate — Egyptian Space Agency

---

## Engineering Objectives
Master the complete industry-standard PCB development lifecycle: from circuit theory and schematic capture to component footprint development, layout routing, Design Rule Checking (DRC), and manufacturing export.

---

## Boards Engineered

### 1. Arduino Uno R3 Compatible Board
* **MCU**: ATmega328P with crystal oscillator clocking circuit.
* **Communication**: USB-to-UART bridge interfacing with hardware serial lines.
* **Power Management**: Dual-rail power switching circuit between USB VBUS and external DC jack.
* **Component Footprints**: Custom-built 3D models and IPC-compliant footprint footprints.

### 2. 5V Regulated Low-Ripple Power Supply
* **Input**: 7V–12V DC input with reverse polarity protection diode.
* **Regulation**: Linear voltage regulator stage with bulk electrolytic smoothing and high-frequency ceramic decoupling capacitors.
* **Thermal Management**: Thermal relief vias and localized copper heatsink planes.

---

## Bill of Materials (BOM)
The verified component schedule is available in:
* [`bom/UNO.xlsx`](bom/UNO.xlsx)
