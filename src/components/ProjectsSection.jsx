import { ArrowRight, ExternalLink, Github} from "lucide-react"

const projects = [
    {
        id: 1, title: 'Todo App',
        description: 'A simple todo app built with javascript, html, and css with Java for backend.',
        image: 'projects/TodoApp.png',
        tags: ['JavaScript', 'HTML', 'CSS', 'Java'],
        demoUrl:"https://todo-app-demo.com",
        repoUrl:"https://github.com/yourusername/todo-app"
        },

        {
            id: 2, title: 'Calculator',
            description: 'A calculator app built with JavaScript, HTML, and CSS.',
            image: 'projects/Calculator.png',
            tags: ['JavaScript', 'HTML', 'CSS'],
            demoUrl:"https://calculator-demo.com",
            repoUrl:"https://github.com/yourusername/calculator-app"
        },

        {
            id: 3, title: 'E-commerce Website',
            description: 'An e-commerce website built with React and Django.',
            image: 'projects/KongaWebsite.png',
            tags: ['React', 'Django', 'Python', 'MySQL'],
            demoUrl:"https://ecommerce-website-demo.com",
            repoUrl:"https://github.com/yourusername/ecommerce-website"
        }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Featured <span className="text-primary">Projects</span>
                

            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my featured projects. Each project showcases different skills and technologies I've worked with.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}
                             className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium borde rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                        

                                    </span>
                                ))}
                            </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.repoUrl}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>

                            </div>
                        </div>
                </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/Motunrayo0129">
                    Check My GitHub <ArrowRight size={16} />

                </a>
                </div>

        </div>

    </section>
}