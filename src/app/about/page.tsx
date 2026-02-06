"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, FileBadge } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      period: "Jan 2024 - Present",
      description:
        "Successfully delivered and maintained full-stack and mobile software solutions. Managed the complete product lifecycle from requirement analysis to deployment.",
      skills: ["React Native", "Expo", "Firebase", "React.js", "Node.js", "Docker", "Kubernetes"],
    },
    {
      title: "Software Engineer Intern",
      company: "Huawei R&D Center",
      period: "Nov 2022 - Sep 2023",
      description:
        "Integrated Huawei Mobile Services (HMS) kits into various applications. Built and optimized server-side web applications using Node.js and MongoDB. Designed and tested RESTful APIs.",
      skills: ["HMS Core", "Node.js", "MongoDB", "Kotlin", "RESTful APIs"],
    },
    {
      title: "Mobile Developer Intern",
      company: "Birfen Elektrik Elektronik",
      period: "Jul 2022 - Sep 2022",
      description:
        "Developed a cross-platform Flutter application for real-time communication with robotic systems. Implemented remote control protocols (TCP/IP, Bluetooth) and designed a responsive UI.",
      skills: ["Flutter", "Dart", "TCP/IP", "Bluetooth", "UI Design"],
    },
  ];

  const education = [
    {
      degree: "B.S. Computer Engineering",
      school: "Yalova University",
      period: "2020 - 2024",
      description: "Istanbul, Turkey",
    },
  ];

  const certifications = [
    {
      name: "Huawei Cloud HCCDP - Solution Architecture",
      issuer: "Huawei Cloud",
      date: "Aug 2025",
    },
    {
      name: "Huawei Cloud HCCDA - Cloud Native",
      issuer: "Huawei Cloud",
      date: "Aug 2025",
    },
    {
      name: "Huawei Cloud HCCDA - Tech Essentials",
      issuer: "Huawei Cloud",
      date: "Jul 2025",
    },
    {
      name: "Huawei Cloud DevOps Bootcamp 2025",
      issuer: "Huawei",
      date: "2025",
    },
  ];

  const skills = [
    "Kotlin (Jetpack Compose)",
    "React Native (Expo)",
    "Flutter (Dart)",
    "Node.js & Express",
    "Docker & Kubernetes",
    "CI/CD Pipelines",
    "Huawei Cloud (CCE, SWR, ELB)",
    "MongoDB & Firebase",
    "Linux/Bash",
    "Git & Postman",
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
            I&apos;m a full-stack mobile developer specializing in React Native and TypeScript, passionate about building scalable applications with cloud infrastructure, real-time features, and premium monetization systems. Based in Istanbul, I transform complex technical challenges into exceptional user experiences.
          </p>
          <p>
            With a proven track record of designing, building, and publishing cross-platform mobile apps (React Native/Kotlin), I also manage scalable cloud infrastructure.
            I specialize in container orchestration with Kubernetes, automating deployment workflows via CI/CD pipelines, and optimizing backend performance to deliver robust, end-to-end software solutions.
          </p>
          <p>
            One of my highlights includes winning 3rd Place in the Huawei Coding Marathon 2022 (Mobile Services Category) by developing a Kotlin-based language learning app using ML Kits.
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
        <div className="grid gap-6 md:grid-cols-1">
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

      {/* Certifications Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <FileBadge className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Certifications & Training</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
              </div>
              <p className="text-xs text-accent mt-3 font-mono">{cert.date}</p>
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
