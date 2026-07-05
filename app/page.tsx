import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "TikCat API",
    description:
      "A RESTful API for managing users, events, orders, and authentication using Node.js, Express, and MongoDB.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Swagger",
    ],
    link: "https://github.com/Nompilon/TikCat-API",
  },
  {
    title: "Tshwane Chamber of Commerce Website",
    description:
      "A responsive Chamber of Commerce website featuring a business directory, weather integration, and member information.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    link: "https://github.com/Nompilon/chamber",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-700">
          Hi, I'm Nompilo Ngwenya, a software development student passionate
          about building modern web applications with Next.js, React, Node.js,
          and MongoDB. Here are some of the projects I've worked on.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}