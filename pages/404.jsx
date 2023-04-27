import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yapım Aşamasında.',
        'Yapım Aşamasında.',
        'Yapım Aşamasında.'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;
