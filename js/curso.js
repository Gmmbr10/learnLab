if (window.location.hash == "") {

    window.location.href = "formacoes.html";

}

const hash = window.location.hash.substring(1);

const title = document.getElementById("title");
const paragrafo = document.getElementById("paragrafo");
const img = document.getElementById("img");

const content = {
    html: {
        title: "Html e Css",
        text: "Domine a base do desenvolvimento web com nosso curso de HTML e CSS! Aprenda a criar páginas incríveis e estilizá-las com as linguagens mais fundamentais do front-end. Neste curso, você vai explorar desde os conceitos básicos até as técnicas avançadas de layout e design responsivo. Esteja preparado para criar interfaces atraentes e funcionais, capazes de cativar os usuários e tornar seus projetos ainda mais profissionais. Não perca tempo, inscreva-se agora e torne-se um especialista em HTML e CSS!",
        img: "./imgs/cursos/html-css.png"
    },
    javascript: {
        title: "Javascript",
        text: "Descubra todo o potencial da programação web com nosso curso de JavaScript! Aprenda a criar interatividade e dinamismo em suas páginas, tornando-as mais envolventes e responsivas. Com a linguagem de programação mais popular do mundo, você poderá desenvolver desde pequenos scripts até aplicações web complexas. Com a ajuda dos nossos instrutores especializados, você irá mergulhar em conceitos como manipulação do DOM, eventos, AJAX e muito mais. Amplie suas habilidades e destaque-se no mercado com o curso de JavaScript!",
        img: "./imgs/cursos/js.png"
    },
    php: {
        title: "Php",
        text: "Expanda suas possibilidades no desenvolvimento web com nosso curso de PHP! Aprenda a criar sites dinâmicos e aplicativos web poderosos utilizando uma das linguagens mais utilizadas no back-end. Com o PHP, você poderá interagir com bancos de dados, criar sistemas de login e registro, manipular formulários e muito mais. Neste curso, você terá a oportunidade de explorar desde os conceitos básicos até técnicas avançadas de programação, tudo isso com a orientação de nossos especialistas. Esteja preparado para dar um salto na sua carreira com o curso de PHP!",
        img: "./imgs/cursos/php.jpg"
    },
    mysql: {
        title: "Mysql",
        text: "Aprenda a trabalhar com bancos de dados e domine a manipulação de informações com nosso curso de MySQL! Com essa tecnologia essencial no desenvolvimento web, você será capaz de armazenar, gerenciar e recuperar dados de forma eficiente. Neste curso, você vai mergulhar em conceitos como criação de tabelas, consultas SQL, relacionamentos entre tabelas e otimização de consultas. Tenha o conhecimento necessário para criar sistemas robustos e escaláveis, impulsionando seus projetos para o próximo nível. Inscreva-se agora e torne-se um especialista em MySQL!",
        img: "./imgs/cursos/mysql.jpeg"
    },
    reactNative: {
        title: "React Native",
        text: "Desenvolva aplicativos móveis incríveis com nosso curso de React Native! Esta poderosa tecnologia permite criar aplicativos nativos para iOS e Android utilizando JavaScript. Com o React Native, você poderá construir interfaces de usuário modernas e responsivas, compartilhando uma base de código entre as plataformas. Em nosso curso, você aprenderá desde os conceitos básicos até técnicas avançadas de desenvolvimento, explorando componentes, navegação, acesso a API's nativas e muito mais. Não perca tempo, inscreva-se agora e mergulhe no mundo do desenvolvimento mobile com React Native!",
        img: "./imgs/cursos/react-native.png"
    }
}

switch (hash) {
    case 'html':
    case 'css':
        title.innerHTML = content.html.title;
        paragrafo.innerHTML = content.html.text;
        img.src = content.html.img;
        break;
    case 'javascript':
        title.innerHTML = content.javascript.title;
        paragrafo.innerHTML = content.javascript.text;
        img.src = content.javascript.img;
        break;
    case 'php':
        title.innerHTML = content.php.title;
        paragrafo.innerHTML = content.php.text;
        img.src = content.php.img;
        break;
    case 'mysql':
        title.innerHTML = content.mysql.title;
        paragrafo.innerHTML = content.mysql.text;
        img.src = content.mysql.img;
        break;
    case 'react-native':
        title.innerHTML = content.reactNative.title;
        paragrafo.innerHTML = content.reactNative.text;
        img.src = content.reactNative.img;
        break;
    case 'breve':
    default:
        window.location.href = "formacoes.html"
}