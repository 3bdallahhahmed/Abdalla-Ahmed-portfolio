# Autonomous Air Quality Monitoring Segway Robot

## Overview
* **Program**: SoiLAB Eco-Warrior Innovation Camp — Sharjah, United Arab Emirates
* **Timeline**: August – September 2023
* **Focus**: Two-Wheeled Inverted Pendulum Dynamics, Environmental Sensor Integration, Rapid Prototyping

---

## Technical Highlights

### 1. Self-Balancing Dynamics
* Modeled the robot as a two-wheeled inverted pendulum system.
* Implemented feedback control fusing tilt data from a 6-axis IMU (accelerometer + gyroscope) through a complementary filter.
* Computed proportional-integral-derivative (PID) corrections sent to high-torque DC gearmotors to maintain vertical equilibrium.

### 2. Environmental Sampling Payload
* Integrated particulate matter sensors (PM2.5 / PM10) and hazardous gas detection modules.
* Logged real-time air pollution levels correlated with robotic odometry coordinates to map environmental hotspots.

### 3. Rapid Hardware Prototyping
* Designed structural chassis brackets utilizing laser cutting and 3D printing.
* Balanced payload weight distribution above the wheel axis to minimize steady-state balancing power consumption.
