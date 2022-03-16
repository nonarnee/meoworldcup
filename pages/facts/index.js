import useSWR from 'swr';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Tournament from "../../components/Tournament";
import {fetcher} from "../../utils/fetcher";

export default function Facts() {
    const { data, error } = useSWR(
      () => `https://cat-fact.herokuapp.com/facts/random?amount=16`,
      fetcher,
    );

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const facts = data.map((fact, index) => ({
        id: index + 1,
        thumbnail: `https://cataas.com/cat/says/${fact.text.slice(0, 20)}`,
        content: fact.text,
        status: 'wait',
    }));

    return (
        <PageWrapper>
            <Tournament data={facts} />
        </PageWrapper>
    );
}

// export async function getStaticProps() {
//     const res = await fetch('https://cat-fact.herokuapp.com/facts/random?amount=16')
//     const data = await res.json()
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//
//     return {
//         props: {
//             data: data.map((fact, index) => ({
//                 id: index + 1,
//                 thumbnail: `https://cataas.com/cat/gif/says/${fact.text}`,
//                 content: fact.text,
//                 status: 'wait',
//             }))
//         },
//     }
// }
