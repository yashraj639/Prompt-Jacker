# Prompt-Jacker

<div align="center">

![Prompt-Jacker Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Don't just admire the view. Steal the recipe.

  <p align="center">
    Prompt-Jacker is a sophisticated reverse-engineering tool that deconstructs images into optimized prompts for AI generation. 
    Whether you're stealing the lighting from a cinematic shot or the layout from a top-tier SaaS dashboard, we extract the DNA.
  </p>
</div>

---

## ⚡ Features

### 🎨 Art Thief Mode

_Target: Midjourney, Stable Diffusion, DALL-E_
Deconstructs visuals into a photographer's and 3D artist's language.

- **Camera Specs**: Sensor type, focal length, aperture, shutter speed.
- **Lighting Architecture**: Key light, rim light, volumetric fog, color temperature.
- **Rendering Details**: Octane/Unreal engine tags, ray tracing, texturing.
- **Style & Mood**: Artistic movements, detailed atmosphere descriptors.

### 💻 UI Pirate Mode

_Target: Web Design, Figma, UI/UX Mockups_
Forensic analysis of interfaces for recreation.

- **Layout Structure**: Grid systems, hierarchy, container logic.
- **Component Taxonomy**: Button styles, input states, card architectures.
- **Design System**: Typography stacks, color palettes, spacing logic.
- **Interaction Cues**: Hover states, focus indicators, micro-interactions.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Google AI Studio](https://aistudio.google.com/) API Key (Gemini Vision)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/prompt-jacker.git
    cd prompt-jacker
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env.local` file in the root directory:

    ```bash
    cp .env.example .env.local
    ```

    Open `.env.local` and add your API key:

    ```env
    GOOGLE_API_KEY=your_api_key_here
    ```

4.  **Start the heist**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Intelligence**: [Google Gemini Vision](https://deepmind.google/technologies/gemini/)

---

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
