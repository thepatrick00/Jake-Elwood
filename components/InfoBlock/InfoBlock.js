const text = [
    {
        title: 'About us',
        text: 'We grew up in downtown Chicago, and we used to play in a band. <b>Jake loves fried chicken</b>, and <b>Elwood loves dry white toast</b>.'
    },
    {
        title: 'Our skills',
        text: `Elwood is an expert in <b>SEO, SEM, and driving from the police</b>. Jake is our <b>social media specialist</b>, and he has an amazing voice.`
    },
    {
        title: 'Get in touch',
        text: `Send us an email with some info about what help you need and <b>we’ll drive over to your place</b> in our Bluesmobile the following day to discuss the deal.`
    }
];


let html = `
    <section class="infoBlock">
        <article>
            <h2>${text[0].title}</h2>
            <p>${text[0].text}</p>
        </article>
        <article>
            <h2>${text[1].title}</h2>
            <p>${text[1].text}</p>
        </article><article>
        <h2>${text[2].title}</h2>
        <p>${text[2].text}</p>
    </article>
    </section>
`;

export default html;