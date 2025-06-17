import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
  description: 'View and manage your customer database',
};

export default function Page() {
    return <p>Customers Page</p>;
  }