import emoji from "react-easy-emoji";

const greeting = {
  username: "Raizenn",
  title: 'Hello, I am Raizenn (real name: Raka)',
  subTitle: emoji("Advanced Roblox LuaU Scripter 🚀 | NASM x86 Linux")
};

const socialMediaLinks = {
  github: "https://github.com/rakaxcvn457",
  gmail: "rakaofficial457@gmail.com",
};

const skillsSection = {
  title: "My Skills",
  skills: [
    emoji("⚡ Roblox LuaU Scripting (Advanced)"),
    emoji("⚡ Problem solving and logic programming"),
    emoji("⚡ NASM x86 Linux (Intermediate-Learning)")
  ]
};

const bigProjects = {
  title: "Showcase Projects",
  projects: [
    {
      image: "https://example.com/roblox-project1.png",
      link: "https://www.roblox.com/games/YourGameID1",
      desc: "Gameplay mechanics and interactive systems using advanced LuaU"
    },
    {
      image: "https://example.com/roblox-project2.png",
      link: "https://www.roblox.com/games/YourGameID2",
      desc: "Optimized scripts for player interactions and events"
    }
  ]
};

export { greeting, socialMediaLinks, skillsSection, bigProjects };
