# STL File Visualization in Browser

This project demonstrates how to visualize STL files (ASCII format) in a web browser using **Three.js**. It includes functionality to load STL files, visualize them with basic camera controls, and provides a responsive and user-friendly interface.

---

## Features

- **STL File Loading**: Load ASCII STL files from local storage using a file input.
- **3D Visualization**: Render STL files in a 3D environment with adjustable camera controls.
- **Camera Controls**: Rotate, zoom, and pan using OrbitControls.
- **Loading Feedback**: Displays a loading spinner when a large STL file is being processed.
- **Interactive UI**: User-friendly interface with a file input and control buttons.

---

## Project Structure

```
project/
├──3dmodels/       # Sample STL files for testing
│   ├── drill.stl
│   ├── gear.stl
│   ├── v6engine.stl
├── index.html   # Main HTML file
├── index.js     # JavaScript for rendering and STL loading
├── threejs/      # Three.js modules
     ├── three.module.js
     ├── OrbitControls.js
     ├── STLLoader.js
```

---

## Prerequisites

To run this project, ensure you have:
- A modern web browser (e.g., Chrome, Firefox) that supports WebGL.

---

## How to Run

1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Open the Project**:
   - Open the `index.html` file in your web browser.
   
3. **Load an STL File**:
   - Use the file input to select an STL file from your local machine.
   - Click on the "Load" button to visualize the file in 3D.

---

## Usage Instructions

1. **Camera Controls**:
   - **Rotate**: Click and drag the left mouse button.
   - **Zoom**: Use the mouse scroll wheel.
   - **Pan**: Click and drag the right mouse button.

2. **Loading Large Files**:
   - If loading a large STL file, a spinner will appear to indicate progress. Please wait for the file to fully load.

---

## Key Technologies Used

- **Three.js**: For 3D rendering and WebGL integration.
- **OrbitControls**: For interactive camera controls.
- **STLLoader**: For parsing and rendering STL files.

---

## Troubleshooting

- Ensure that the STL file is in ASCII format. Binary STL files are not supported in this implementation.
- If the 3D model doesn't load, check the browser console for errors.

---

## Screenshots

- **User Interface**:
  Shows the input field, load button, and rendered 3D model.
  

- **3D Visualization**:
  Interactive 3D view of the STL model with camera controls.

---
