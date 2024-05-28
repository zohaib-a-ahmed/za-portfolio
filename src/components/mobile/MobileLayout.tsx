import React from "react";

// components
import Profile from "../misc/Profile";
import ExperienceCard from "../misc/ExperienceCard";
import ProjectCard from "../misc/ProjectCard";

export default function MobileLayout() {
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full border-b-4 border-green-500 p-4 text-center">
                <Profile />
            </div>
            <div className="w-full border-b-4 border-yellow-500 p-4 text-center">
                <ExperienceCard />
            </div>
            <div className="w-full border-b-4 border-purple-500 p-4 text-center">
                <ProjectCard />
            </div>
        </div>
    );
}
