
import React from 'react';
import { useRouter } from 'next/router';

const view = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>View Page</h1>
            <p>Todo ID: {id}</p>
        </div>
    );
};

export default view;
