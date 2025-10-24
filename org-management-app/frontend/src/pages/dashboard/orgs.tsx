import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../../lib/api';
import { Organization } from '../../types';

const OrgsPage: React.FC = () => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadOrganizations = async () => {
            try {
                const data = await fetchOrganizations();
                setOrganizations(data);
            } catch (err) {
                setError('Failed to load organizations');
            } finally {
                setLoading(false);
            }
        };

        loadOrganizations();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Organizations</h1>
            <ul>
                {organizations.map(org => (
                    <li key={org.id}>{org.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrgsPage;