import { FiBriefcase, FiExternalLink, FiMapPin } from "react-icons/fi";
import InfoBlock from "./InfoBlock";
import SectionWrapper from "./SectionWrapper";

// Example dummy data (replace with real data or props)
const internships = [
  { company: "ABC Corp", details: "6-month internship program", link: "https://abc.com" },
  { company: "XYZ Ltd", details: "Summer training for students", link: "https://xyz.com" },
];

const industryVisits = [
  { name: "Tech Park Visit", link: "https://techpark.com" },
  { name: "Manufacturing Unit Tour", link: "#" },
];

export default function Corporate() {
  return (
    <div className="space-y-8">
      {/* Collaborations & Internships */}
      <InfoBlock color="amber">
        <SectionWrapper title="Corporate Connect & Internships">
          <div className="flex items-center gap-2 mb-3 text-yellow-900">
            <FiBriefcase size={22} />
            <span className="font-semibold">
              Collaborations & Student Internships
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {internships.map((internship, i) => (
              <div
                key={i}
                className="bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-medium text-yellow-900">
                  {internship.company}
                </h3>
                <p className="text-sm text-yellow-800 mt-1">
                  {internship.details}
                </p>
                <a
                  href={internship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-sm text-amber-700 hover:text-amber-900 hover:underline"
                >
                  Company Website <FiExternalLink className="ml-1" size={14} />
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>

      {/* Industry Visits */}
      <InfoBlock color="amber">
        <SectionWrapper title="Industry Visits Organized">
          <div className="flex items-center gap-2 mb-3 text-yellow-900">
            <FiMapPin size={22} />
            <span className="font-semibold">Practical Exposure & Site Visits</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {industryVisits.map((visit, j) => (
              <div
                key={j}
                className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-lg hover:bg-amber-100 transition"
              >
                <a
                  href={visit.link !== "#" ? visit.link : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-amber-700 hover:text-amber-900 ${
                    visit.link !== "#" ? "hover:underline" : ""
                  }`}
                >
                  {visit.name}
                  {visit.link !== "#" && (
                    <FiExternalLink className="ml-1" size={14} />
                  )}
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}
