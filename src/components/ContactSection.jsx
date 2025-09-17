import { Mail, Smartphone, MapPin, Linkedin, GithubIcon, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const haddleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {}, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Fale comigo diretamente!
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tiver um projeto interessante ou apenas quiser dizer olá, não hesite em entrar em contato!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna esquerda */}
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Informações de contatos</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:frankoliveiradev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    frankoliveiradev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Telefone</h4>
                  <a
                    href="tel:+5513981733254"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    13 98173-3254
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Local</h4>
                  <span className="text-muted-foreground">
                    São Vicente, São Paulo
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-left">Conecte-se comigo!</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/frank-oliveira-2a7134254/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://github.com/Frank1br"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna direita - formulário */}
          <div className="bg-card p-8 rounded-lg shadow-xs text-left">
            <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>

            <form
              className="space-y-6"
              action="https://formspree.io/f/mzzalznb"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Seu nome!
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu nome..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Seu email!
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu email..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Sua mensagem!
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                Enviar Mensagem
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
