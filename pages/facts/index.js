import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Tournament from "../../components/Tournament";

export default function Facts({ data }) {
    console.log(data);

    return (
        <PageWrapper>
            <Tournament data={data} />
        </PageWrapper>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://cat-fact.herokuapp.com/facts/random?amount=16')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data.map((fact, index) => ({
                id: index + 1,
                thumbnail: `https://cataas.com/cat/gif/says/${fact.text}`,
                content: fact.text,
                status: 'wait',
            }))
        },
    }
}
