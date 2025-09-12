
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
        imageUrl: "/projects/viaCep.png",
        tags: ["Java", "JDBC", "PostgreSQL"],
        GitHubLink: "https://github.com/Frank1br/ConsumoApi"
     },
     {
        id: 3,
        title: "VarejoAqui",
        description: "Plataforma web desenvolvida com Laravel e PHP para conectar microempreendedores locais a consumidores. Inclui catálogo de produtos, sistema de favoritos, carrinho de compras, finalização de pedidos, sistema de mensagens e autenticação de usuários. Interface responsiva com Bootstrap 5 e persistência em banco MySQL.",
        imageUrl: "/projects/VarejoAqui.png",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Eloquent ORM"],
        GitHubLink: "https://github.com/Frank1br/VarejoAqui"
     }
]

export const ProjectsSection = () => {
    return (
        <section></section>
    );
}