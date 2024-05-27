import React from "react";

// components
import Profile from "../misc/Profile";
import ExperienceCard from "../misc/ExperienceCard";
import ProjectCard from "../misc/ProjectCard";

export default function DesktopLayout() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 border-r-4 border-red-500 flex items-center justify-center">
                <div className="p-4 text-center">
                    <Profile/>
                </div>
            </div>
            <div className="w-1/2 border-l-4 border-blue-500 flex items-center justify-center">
                <div className="p-4 text-center">
                    <ExperienceCard/>
                    <ProjectCard/>
                </div>
            </div>
        </div>
    );
}
