import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear
        height: 100vh
    }

    .signin-card {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    .signin-title {
        color: ${({ theme }) => theme.text};
    }

    nav {
        border-bottom: 2px solid ${({ theme }) => theme.nav};
        transition: all .5s linear
    }

    .homepage-container {
        background: ${({ theme }) => theme.body};
        transition: all .5s linear
    }

    .homepage-title {
        color: ${({ theme }) => theme.text};
        transition: all .5s linear
    }

    #prev {
        color: ${({ theme }) => theme.prev};
        border: 2px solid ${({ theme }) => theme.prev};
        transition: all .5s linear
    }

    #next {
        background-color: ${({ theme }) => theme.next};
        border: 2px solid ${({ theme }) => theme.next};
        color: ${({ theme }) => theme.tonext};
        transition: all .5s linear
    }

    .open {
        color: ${({ theme }) => theme.menubar};
    }

    .homepage-text {
        color: ${({ theme }) => theme.text};
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#000',
    nav: "#000",
    menubar: '#000'
}

export const darkTheme = {
    body: '#000',
    text: '#fff',
    prev : '#fff',
    next: '#fff',
    tonext : '#000',
    bar: '#fff'
}