import { ArrowRight, GithubIcon } from "lucide-react";

const projects = [
     {
        id: 1,
        title: "QR Code Generator",
        description: "API REST desenvolvida em Java 21 com Spring Boot para geração de QR Codes a partir de texto, com armazenamento dos códigos em AWS S3 para acesso público. Utiliza biblioteca ZXing, AWS SDK e Docker, seguindo arquitetura limpa e com testes automatizados.",
        imageUrl: "/projects/qrCodeGenerator.png",
        tags: ["Java", "Spring Boot", "AWS S3", "Docker"],
        GitHubLink: "https://github.com/Frank1br/Gerador-de-QR-Code"
     },
     {
        id: 2,
        title: "ToDo List - Java + JDBC",
        description: "API REST desenvolvida em Java 21 com Spring Boot para geração de QR Codes a partir de texto, com armazenamento dos códigos em AWS S3 para acesso público. Utiliza biblioteca ZXing, AWS SDK e Docker, seguindo arquitetura limpa e com testes automatizados.",
        imageUrl: "/projects/toDoList.png",
        tags: ["Java", "PostegreSQL", "JDBC"],
        GitHubLink: "https://github.com/Frank1br/ToDoList"
     },
     {
        id: 3,
        title: "ViaCep API com Java e PostgreSQL (JDBC)",
        description: "Aplicação Java que consome APIs externas e realiza operações de leitura e escrita em banco PostgreSQL usando JDBC. Foca em conexão eficiente com banco de dados, manipulação de dados e tratamento de exceções.",
        imageUrl: "/projects/viaCepApi.png",
        tags: ["Java", "JDBC", "PostgreSQL"],
        GitHubLink: "https://github.com/Frank1br/ConsumoApi"
     },
     {
        id: 4,
        title: "VarejoAqui",
        description: "Plataforma web desenvolvida com Laravel e PHP para conectar microempreendedores locais a consumidores. Inclui catálogo de produtos, sistema de favoritos, carrinho de compras, finalização de pedidos, sistema de mensagens e autenticação de usuários. Interface responsiva com Bootstrap 5 e persistência em banco MySQL.",
        imageUrl: "/projects/VarejoAqui.png",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Eloquent ORM"],
        GitHubLink: "https://github.com/Frank1br/VarejoAqui"
     }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Meus <span className="text-primary">Projetos</span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui estão alguns dos meus projetos recentes. Cada um reflete meu compromisso com a qualidade e a inovação no desenvolvimento de software.
                </p>

                <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                                <div className="flex flex-justify items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.GitHubLink} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" aria-label={`GitHub link for ${project.title}`}>
                                            <GithubIcon  size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/Frank1br" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                        Visite meu GitHub para ver mais projetos! <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}