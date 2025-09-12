import { Code, Database, GithubIcon } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl  mb:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* direita */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Desenvolvedor Back-End: Criando a Lógica que Impulsiona Soluções</h3>

                        <p className="text-muted-foreground">
                            Como estudante de Engenharia da Computação e Desenvolvimento de Software Multiplataformas, meu foco é no universo back-end. Sou apaixonado por construir a base que sustenta aplicações de alta performance. Tenho experiência em projetos acadêmicos, onde desenvolvi APIs RESTful e trabalhei com bancos de dados relacionais e controle de versão Git.
                        </p>

                        <p className="text-muted-foreground">
                            Estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para soluções inovadoras. Vamos conectar e explorar como posso agregar valor ao seu próximo projeto!
                        </p>

                        <div className="flex flex-col sm:flex-col gap-4 pt-4 justify-center">
                            <a href="https://www.linkedin.com/in/frank-oliveira-2a7134254/" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target="_blank">LinkedIn</a>
                        </div>

                        <div className="flex flex-col sm:flex-col gap-4 pt-4 justify-center">
                            <a href="https://drive.google.com/file/d/1teTC4XzKihkyM-GMjmksOBBcVtu06icE/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target="_blank">Download CV</a>
                        </div>

                        <div className="flex flex-col sm:flex-col gap-4 pt-4 justify-center">
                            <a href="https://wa.me/5513981733254?text=Tenho%20interesse%20em%20conhecer%20mais%20sobre%20seu%20trabalho%20e%20disponibilidade%20para%20colaboração" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target="_blank">Whatssap</a>
                        </div>
                    </div>

                    {/* esquerda */}
                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Desenvolvimento de APIs</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Construção de APIs RESTful eficientes e seguras para a comunicação entre sistemas, utilizando Java e SpringBoot.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Gerenciamento de Banco de Dados</h4>
                                    <p className="text-muted-foreground text-sm">
                                       Experiência com bancos de dados relacionais (MySQL) e não relacionais, incluindo modelagem de dados, otimização de consultas e gerenciamento para alta performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GithubIcon className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">
                                        Controle de Versão e Metodologias Ágeis
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Utilização de Git para controle de versão e colaboração em equipe, com conhecimento em metodologias ágeis como Scrum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}