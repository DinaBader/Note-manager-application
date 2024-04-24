"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

function Index() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/add');
    };

    return (
        <form>
            <button onClick={handleClick}>Add to do</button>
            {/* list all to dos */}
            <ul>
                <li>
                    <span>First todo</span>
                    <button> view</button>
                    <button> edit</button>
                    <button> delete</button>
                </li>
            </ul>
        </form>
    );
}

export default Index;
