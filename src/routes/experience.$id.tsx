import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "../data/Experiences";

export const Route = createFileRoute("/experience/$id")({
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { id } = Route.useParams();
  const experience = Experience.find((exp) => exp.id === id);

  if (!experience) {
    return (
      <div className="w-full pt-20 px-3 text-gray-800 max-w-6xl mx-auto pb-10">
        <h1 className="text-2xl font-bold mt-5 xl:mt-20 xl:mb-8 xl:text-4xl">
          Experience not found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 px-3 text-gray-800 max-w-6xl mx-auto pb-10">
      <h1 className="text-2xl font-bold mt-5 xl:mt-20 xl:mb-8 xl:text-4xl">
        {experience.title}
      </h1>

      <div className="lg:w-5/6">
        <p className="text-base leading-6 mb-6">{experience.titledes}</p>
        <p className="text-base leading-6 mb-6">{experience.des1}</p>
        {experience.des2 && (
          <p className="text-base leading-6 mb-6">{experience.des2}</p>
        )}

        {experience.list && (
          <div className="mb-8">
            <h2 className="text-2xl mt-10 xl:text-3xl mb-4">
              Key Responsibilities
            </h2>
            <ul className="space-y-2">
              {experience.list.map((item, index) => (
                <li
                  key={index}
                  className="flex ml-5 xl:ml-7 relative 2xl:w-3/6"
                >
                  <span className="w-3 h-3 bg-gray-800 absolute top-[5px] bottom-0 left-[-20px] xl:left-[-25px] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.jobDes && (
          <div className="mb-8">
            <h2 className="text-2xl mt-10 xl:text-3xl mb-4">
              {experience.jobDes.title}
            </h2>
            <p className="text-base leading-6 mb-6">{experience.jobDes.des}</p>
            <ul className="space-y-2">
              {experience.jobDes.list.map((item, index) => (
                <li
                  key={index}
                  className="flex ml-5 xl:ml-7 relative 2xl:w-3/6"
                >
                  <span className="w-3 h-3 bg-gray-800 absolute top-[5px] bottom-0 left-[-20px] xl:left-[-25px] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
