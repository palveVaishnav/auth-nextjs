"use client"
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { ProviderUser, UserAtom } from '@/state/user';


export default function Home() {
    const { data: session, status } = useSession();
    const [user, setUser] = useRecoilState(ProviderUser);
    const [Dbuser] = useRecoilState(UserAtom);

    const router = useRouter();

    useEffect(() => {
        if (session && session.user) {
            // Store the session data in Recoil state
            setUser({
                id: session.user.id || "",
                name: session.user.name || "",
                email: session.user.email || "",
                picture: session.user.picture || "",
            });
        }
    }, [session, setUser]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (!session) {
        router.push('/');
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>{user.providerId}</p>
            {/* <img src={user.picture} alt={user.name} /> */}
            <h1>Welcome, {Dbuser?.name}</h1>
            <p>Email: {Dbuser?.email}</p>
            <p>{Dbuser?.providerId}</p>
            {/* <img src={user.picture} alt={user.name} /> */}
        </div>
    );
};
