import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Enthusiast</h3>
                        
                        <p className="text-foreground/70">
                            I'm a dedicated web developer passionate about creating modern,
                            responsive websites and applications. I specialize in front-end
                            development with React and JavaScript, and I'm always eager to learn
                            new technologies and improve my skills.
                        </p> 

                        <p className="text-foreground/70">
                            With a strong foundation in HTML, CSS, and JavaScript, I enjoy building
                            user-friendly interfaces and seamless user experiences. I'm also proficient
                            in back-end development using Node.js and Express, allowing me to create
                            full-stack applications that are both functional and visually appealing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="#contact" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="border-2 border-primary/20 rounded-md p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold mb-2">Frontend Development</h4>
                                    <p className="text-foreground/70 text-sm">
                                        Building responsive and interactive user interfaces with 
                                        React and modern JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-primary/20 rounded-md p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold mb-2">UI/UX Design</h4>
                                    <p className="text-foreground/70 text-sm">
                                        Creating intuitive and beautiful user experiences with 
                                        attention to detail.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-primary/20 rounded-md p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold mb-2">Full Stack Development</h4>
                                    <p className="text-foreground/70 text-sm">
                                        Building complete web applications with Node.js, Express, 
                                        and databases.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};