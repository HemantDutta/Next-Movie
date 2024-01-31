import {useRouter} from "next/router";

export default function MoviePage() {

    const router = useRouter();
    const id = router.query.movieId;

    return (
        <>
            <h1>{id}</h1>
        </>
    )
}

// export async function getStaticProps({context}){
//
//     return {
//         props: {
//
//         }
//     }
// }