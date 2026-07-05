interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({
  title,
  skills,
}: SkillsCardProps) {
  return (
    <section className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

      <ul className="list-disc pl-6 space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}