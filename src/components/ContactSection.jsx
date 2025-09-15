import { Mail, Smartphone, MapPin, Linkedin, GithubIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Fale comigo diretamente!
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tiver um projeto interessante ou apenas quiser dizer olá, não hesite em entrar em contato!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Informações de contatos</h3>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                             <h4>Email</h4>
                            <a href="mailto:frankoliveiradev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                frankoliveiradev@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Smartphone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                             <h4>Telefone</h4>
                            <a href="tel:+5513981733254" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                13 98173-3254
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>

                        </div>
                        <div>
                             <h4>Local</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                São Vicente, São Paulo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4 "> Conect-se comigo!</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/frank-oliveira-2a7134254/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                            <Linkedin />
                        </a>

                        <a href="https://github.com/Frank1br" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </div>
            {/* TODO: FORM */}
        </div>
    </div>
    </section>
  );
};
