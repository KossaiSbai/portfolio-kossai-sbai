import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/portfolio");
    }, [router]);

    // You can return null or some loading UI
    return null; // or return <div>Loading...</div>
}

export default Home;
