import PortfolioItems from '@/components/portfolio/portItem';
import { useParams } from 'next/navigation';
import React from 'react';

export default function PortItem() {
	const param = useParams();
	console.log(param);
	return <PortfolioItems param={param} />;
}
