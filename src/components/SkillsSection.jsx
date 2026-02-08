import { use, useState } from "react";
import { cn } from "@/libs/utils";

export const skills = [
    // Frontend Skills
    {name: "React", level: "90%", icon: "react.svg", category: "frontend"},
    {name: "JavaScript", level: "95%", icon: "javascript.svg", category: "frontend"},
    {name: "HTML5", level: "95%", icon: "html5.svg", category: "frontend"},
    {name: "CSS3", level: "90%", icon: "css3.svg", category: "frontend"},

    // Backend Skills
    {name: "Node.js", level: "85%", icon: "nodejs.svg", category: "backend"},
    {name: "Python", level: "80%", icon: "python.svg", category: "backend"},
    {name: "Django", level: "75%", icon: "django.svg", category: "backend"},
    {name: "Flask", level: "75%", icon: "flask.svg", category: "backend"},
    {name: "Spring Boot", level: "70%", icon: "springboot.svg", category: "backend"},
    {name: "Maven", level: "70%", icon: "maven.svg", category: "backend"},
    {name: "Java", level: "75%", icon: "java.svg", category: "backend"},
    {name: "SQL", level: "80%", icon: "sql.svg", category: "backend"},
    {name: "MongoDB", level: "80%", icon: "mongodb.svg", category: "backend"},
    {name: "Golang", level: "70%", icon: "golang.svg", category: "backend"},

    // DevOps Skills
    {name: "Docker", level: "80%", icon: "docker.svg", category: "devops"},
    {name: "AWS", level: "75%", icon: "aws.svg", category: "devops"},

    //Tools
    {name: "Git", level: "90%", icon: "git.svg", category: "tools"},
    {name: "GitHub", level: "90%", icon: "github.svg", category: "tools"},
    {name: "VS Code", level: "95%", icon: "vscode.svg", category: "tools"},
    {name: "Postman", level: "85%", icon: "postman.svg", category: "tools"},
    {name: "IntelliJ IDEA", level: "80%", icon: "intellij.svg", category: "tools"},
    {name: "PyCharm", level: "75%", icon: "pycharm.svg", category: "tools"}
];

const categories = ["all", "frontend", "backend", "devops", "tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const  filteredSkills = activeCategory === "all" ? skills : skills.filter
    (skill => skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary hover:bg-Secondary"
                            )}>
                            {category}
                        </button>
                    ))}


                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                            <div className="w-full bg-foreground/10 h-2 rounded-full">
                                <div className="bg-primary h-2 rounded-full" style={{ width: skill.level }} />
                            </div>
                            <div className="text-right mt-2">
                                <span className="text-sm">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};