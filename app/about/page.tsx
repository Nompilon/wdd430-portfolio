import SkillsCard from "@/components/SkillsCard";

export default function About() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="mb-4 text-3xl font-bold">About Me</h2>

      <p className="mb-4 text-lg text-gray-700">
        Hello! I'm <strong>Nompilo Ngwenya</strong>, a software development
        student with a passion for building responsive and user-friendly web
        applications. I enjoy learning new technologies and creating solutions
        to real-world problems.
      </p>

      <p className="text-lg text-gray-700">
        I have experience developing full-stack applications using modern web
        technologies and enjoy working on both frontend and backend
        development.
      </p>

      <SkillsCard
        title="Technical Skills"
        skills={skills}
      />
    </main>
  );
}