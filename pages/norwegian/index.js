import PageWrapper from "../../components/PageWrapper";
import Tournament from "../../components/Tournament";

export default function Norwegian({ data }) {
    return (
        <PageWrapper>
            <Tournament data={data} />
        </PageWrapper>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        'https://api.thecatapi.com/v1/images/search?breed_ids=norw&limit=16',
        {
            headers: {
                'x-api-key': process.env.API_KEY,
            }
        }
    );
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data.map((norwegian) => ({
                id: norwegian.id,
                thumbnail: norwegian.url,
                content: '',
                status: 'wait',
            }))
        },
    }
}
