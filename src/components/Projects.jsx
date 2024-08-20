import React from "react";
import axios from "axios";
import Discord from "./Discord";

import { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/unreal1x/repos")
      .then((res) => setRepos(res.data))
      .catch((err) => console.error("Error fetching repos: " + error));
  });
  return (
    <>
      <div className="h-[20%]">
        <header className="flex justify-center items-center pt-5 pb-5 text-2xl border-b border-[#5d6a73]">
          Projects
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[30px] border-b border-[#5d6a73]">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#283239] p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-white"
            >
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                <a
                  href={`https://github.com/unreal1x/${repo.name}`}
                  target="_blank"
                  className="hover:text-gray-300 transition duration-300"
                >
                  {repo.name}
                </a>
              </h2>
              <div className="mt-4 mb-2">
                <span className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                  {repo.language ? `${repo.language}` : "Not specified"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Discord />
      </div>
    </>
  );
};

export default Projects;
