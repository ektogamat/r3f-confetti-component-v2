# Confetti V2 Component

<h4>by Anderson Mancini</h4>

Adds confetti explosions to your react-three-fiber projects using instanced meshes with a single draw call with many customization options. Download it here.

[![screenshot](/public/cover.jpg)](https://r3f-confetti-v2-component.vercel.app)

[See the demo here](https://r3f-confettiv2-component.vercel.app/)

# HOW TO USE?

#### 1. Download the files component and save it on your project

[Download the Confetti component source code](https://gist.github.com/ektogamat/6ef843b87f803064c5da87b22a63c8f3) and save into your project

#### 2. Import the component

```jsx
import ExplosionConfetti from './components/Confetti'
```

Then add the Confetti to your Canvas

```jsx
<Canvas>
  <ExplosionConfetti />
</Canvas>
```

That's all you need ✨

---

### Props

You can use VSCODE Intellisense to see all available parameters.

| Name               | Type     | Default                                                 | Description                                                                                                         |
| ------------------ | -------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| shadows            | Boolean  | false                                                   | Enable or disable castShadows. Defaults to false.                                                                   |
| numberOfExplosions | Number   | 3                                                       | Number of explosions to create.                                                                                     |
| particleAmount     | Number   | 300                                                     | Total number of particles for each explosion.                                                                       |
| particleSize       | Number   | 0.2                                                     | Size of each particle.                                                                                              |
| spreaAreadRadius   | Number   | 5                                                       | Spread area radius for the explosion.                                                                               |
| contettiDuration   | Number   | 75                                                      | Duration of each confetti explosion in frames.                                                                      |
| explosionCount     | Number   | Infinity                                                | Total count of explosions. Determines how many times the explosion will happen before being removed from the scene. |
| position           | Number[] | [0, 0, 0]                                               | Position of the confetti explosion in the scene (XYZ coordinates).                                                  |
| colorsArray        | String[] | ['#452632', '#91204d', '#e4844a', '#e8bf56', '#e2f7ce'] | Array of Hex color codes for confetti particles.                                                                    |

### Improving performance

⚠️ Turn off shadows so you can have better performance.

### Getting Started using this demo project

Download and install Node.js on your computer (https://nodejs.org/en/download/).

Then, open VSCODE, drag the project folder to it. Open VSCODE terminal and install dependencies (you need to do this only in the first time)

```shell
npm install
```

Run this command in your terminal to open a local server at localhost:3000

```shell
npm run dev
```

### License

A CC0 license is used for this project. You can do whatever you want with it, no attribution is required. However, if you do use it, I'd love to hear about it!

### Can you leave a star please?

I genuinely appreciate your support! If you're willing to show your appreciation, you can <strong>give me a star on GitHub 🎉 </strong>or consider buying a coffee to support my development at https://www.buymeacoffee.com/andersonmancini. The funds received will be utilized to create more valuable content about Three.js and invest in acquiring new courses. Thank you for your consideration!
