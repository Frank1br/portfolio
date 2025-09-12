import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Olá, eu sou</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                    {" "}
                    Frank
                    </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Oliveira</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Desenvolvo a arquitetura que sustenta soluções inovadoras. 
                Como desenvolvedor <span className="text-primary">back-end</span>, integro sistemas eficientes e escaláveis, 
                criando a lógica para o sucesso de cada projeto.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    Conheça meu trabalho!
                </a>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Mais conteudo abaixo!</span>
            <ArrowDown className="h-5 text-primary"/>
        </div>
    </section>
  )
}