const experiences = [
  {
    year: "2025",
    title: "AI Engineer Cohort",
  },
  {
    year: "2025",
    title: "Laskar AI",
  },
  {
    year: "2024",
    title: "Web Developer Intern",
  },
];

function Timeline() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6">

      <h2 className="text-4xl text-white font-bold mb-10">
        Experience
      </h2>

      {experiences.map((item) => (
        <div
          key={item.year}
          className="
          border-l-2
          border-cyan-400
          pl-8
          mb-10
        "
        >
          <p className="text-cyan-400">
            {item.year}
          </p>

          <h3 className="text-white text-2xl">
            {item.title}
          </h3>
        </div>
      ))}
    </section>
  );
}

export default Timeline;