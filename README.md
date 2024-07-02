
# LadoDown 

<p align="center">
	<img src="https://raw.githubusercontent.com/luan-vilela/LadoDown/main/src/assets/logo220x112.png" width="180" alt="Logo LadoDown" />
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com) [![build](https://github.com/aseprite/aseprite/actions/workflows/build.yml/badge.svg)](https://github.com/aseprite/aseprite/actions/workflows/build.yml) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://raw.githubusercontent.com/luan-vilela/LadoDown/main/LICENSE)

LadoDown é um aplicativo voltado para o registro de informações de crianças com Síndrome de Down. Pais e responsáveis podem usar o aplicativo para acompanhar a curva de crescimento específica para SD, gerenciar vacinas, receber alertas, participar de fóruns e acessar conteúdos do blog.

## Funcionalidades

 - **Registro de Curva de Crescimento**: Acompanhe o desenvolvimento físico da criança com gráficos específicos para Síndrome de Down. 
 - **Gerenciamento de Vacinas**: Mantenha um registro das vacinas administradas e próximas doses. 
 -  **Alertas**: Receba lembretes e alertas importantes relacionados à saúde e desenvolvimento da criança. 
 - **Fóruns**: Participe de comunidades para trocar experiências e informações com outros pais e profissionais. 
 - **Blog**: Acesse artigos e atualizações sobre cuidados, tratamentos e novidades relacionadas à Síndrome de Down.


## Requisitos

Para desenvolver e executar o LadoDown, certifique-se de ter as seguintes ferramentas e dependências instaladas:



### Ferramentas Necessárias

-   **Node.js** (versão 14 ou superior)
-   **npm** (geralmente incluído com o Node.js) ou **Yarn** como gerenciador de pacotes
-   **React Native CLI**
-   **Expo CLI**
-   **Android Studio** (para emulador Android e ferramentas de desenvolvimento) 
-   **Git** 


 ## Instalação 

Para instalar o LadoDown, siga os passos abaixo:

    git clone https://github.com/luan-vilela/ladodown.git
    cd ladodown 
    npm install
    
  ## Configuração do Ambiente

O aplicativo LadoDown utiliza variáveis de ambiente para configurar a API. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:


    EXPO_PUBLIC_API_URL=""
    EXPO_PUBLIC_TOKEN_KEY=@ladoDown:Token

## Configuração da API

Para que o LadoDown funcione corretamente, você também precisa configurar e executar a API correspondente. Siga os passos abaixo para configurar a API:


1- Clone o repositório da API LadoDown a partir do GitHub e instale as dependências da API:


    git clone https://github.com/luan-vilela/LadoDownAPI.git
    cd LadoDownAPI
    npm install

2- Inicie o servidor 

    npm run start
    

Certifique-se de que a API esteja em execução corretamente e configurada com as mesmas variáveis de ambiente especificadas no projeto [LadoDownAPI](https://github.com/luan-vilela/LadoDownAPI).

## Como usar

- Você pode gerar apk localmente via usb utilizando um celular android em modo desenvolvedor e dando permissão necessária
- Você pode usar android studio com um emulador rodando na maquina. https://developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio?hl=pt-br#0


## Executar e Depurar

Para iniciar o servidor de desenvolvimento, utilize o comando:

     npx react-native start

Para rodar o aplicativo em um dispositivo Android conectado ou emulador, utilize:

    npx react-native run-android

Com esses comandos, você poderá testar e depurar o aplicativo diretamente em seu dispositivo ou emulador.

## Compilar e gerar APK

Para Compilar o apk, utilize o comando:

     react-native run-android

- Para gerar um apk você pode seguir esse tutorial, caso precise de ajudar para configurar o projeto -> https://tableless.com.br/react-native-build-release-android

- Caso prefira pode utilizar a documentação oficial do react native -> https://reactnative.dev/docs/signed-apk-android


## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

1.  Faça um fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/nova-feature`).
3.  Faça suas modificações.
4.  Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
5.  Push para a branch (`git push origin feature/nova-feature`).
6.  Abra um Pull Request.

## Contato

Para suporte ou feedback, você pode entrar em contato através de luan.vilela.comp@gmail.com 

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://raw.githubusercontent.com/luan-vilela/LadoDown/main/LICENSE) para mais detalhes.
