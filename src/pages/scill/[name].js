import ScillName from '@/components/scills/ScillName';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ScillItem() {
	const param = useParams();
	return <ScillName param={param} />;
}
