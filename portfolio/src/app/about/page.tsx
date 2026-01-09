"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      title: "Mobile Application Developer",
      company: "Rahmet Eli",
      period: "Sep 2022 - Present",
      description:
        "Developing cross-platform mobile applications using React Native. Managing the full product lifecycle from requirements gathering to App Store & Play Store deployment.",
      skills: ["React Native", "TypeScript", "Redux", "Firebase"],
    },
    {
      title: "R&D Intern",
      company: "Huawei",
      period: "Aug 2022 - Sep 2022",
      description:
        "Integrated Huawei Mobile Services (HMS) kits into mobile applications. Optimized server-side tools using Node.js and MongoDB.",
      skills: ["HMS Core", "Kotlin", "Node.js", "MongoDB"],
    },
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions",
      period: "Jun 2021 - Aug 2021",
      description:
        "Assisted in developing responsive web interfaces using React and Tailwind CSS. Collaborated with designers to implement UI/UX improvements.",
      skills: ["React", "Tailwind CSS", "JavaScript"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Istanbul Technical University",
      period: "2018 - 2023",
      description: "Focus on Software Engineering and Cloud Computing.",
    },
  ];

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React / React Native",
    "Next.js",
    "Node.js",
    "Go",
    "Kubernetes",
    "Docker",
    "AWS / Huawei Cloud",
    "Git / CI/CD",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-16 py-8"
    >
      {/* Bio Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Hi, I&apos;m Kemal Adlığ. I am a passionate Mobile Application Developer and DevOps Engineer based in Istanbul.
            I thrive on bridging the gap between elegant user experiences and robust, scalable infrastructure.
          </p>
          <p>
            My journey started with a curiosity for how things work on the web, which quickly evolved into a deep dive
            into the React ecosystem. Over the years, I&apos;ve expanded my skillset to include cloud-native technologies,
            mastering tools like Kubernetes and Docker to ensure that the applications I build are not only beautiful
            but also resilient and performant.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects,
            or enjoying a good cup of coffee while brainstorming my next big idea.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </div>
        <div className="border-l-2 border-gray-200 dark:border-zinc-800 ml-3 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-accent" />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-accent font-medium">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                    <h3 className="font-semibold text-lg">{edu.school}</h3>
                    <p className="text-gray-500 text-sm mb-2">{edu.degree}</p>
                    <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-1 rounded">{edu.period}</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">{edu.description}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
        </div>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-sm text-sm font-medium"
                >
                    {skill}
                </motion.div>
            ))}
        </div>
      </section>
    </motion.div>
  );
}
