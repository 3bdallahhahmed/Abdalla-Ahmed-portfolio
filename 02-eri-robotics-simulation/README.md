# Autonomous Mobile Robot Kinematics & Simulation

## Overview
* **Institution**: Electronics Research Institute (ERI) — Cairo, Egypt
* **Program**: Summer Training & Research Track in Robotics & Autonomous Systems (Summer 2026)
* **Focus**: Wheeled robot kinematics, physics simulation, sensor integration, and control algorithms.

---

## Simulation Environment

![ERI Webots Simulation](media/eri-webots-robot.jpg)

The platform was modeled and simulated using **Webots Robot Simulator** and **MATLAB / Simulink**.

---

## Technical Scope

### 1. Kinematic Modeling
* Formulated forward and inverse kinematics for differential drive and 4-wheel skid-steer platforms.
* Derived velocity transformation matrices relating individual wheel angular velocities ($\omega_L, \omega_R$) to robot linear and rotational velocity ($\dot{x}, \dot{y}, \dot{\theta}$).

### 2. Multi-Body Dynamic Simulation
* Rigid-body inertial parameters, friction coefficients, and motor torque limits configured in Webots.
* Evaluated dynamic responses, center of gravity stability, and wheel slip during tight turns.

### 3. Sensor Integration & Obstacle Avoidance
* Simulated sensory feedback pipelines: 3-axis IMU, quadrature wheel encoders, and front/lateral ultrasonic distance sensors.
* Implemented reactive obstacle avoidance with potential field vector calculation, preventing collisions in cluttered indoor environments.
