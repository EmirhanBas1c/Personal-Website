import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
 let messages = [
        'Have you lost your way, kiddo? (Yapım Aşamasında.)',
        'Damn it! This dead-end road. (Yapım Aşamasında.)',
        'The Aurors blocked this road, Harry! (Yapım Aşamasında.)'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;
