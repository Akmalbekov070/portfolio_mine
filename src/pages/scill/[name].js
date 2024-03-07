import ScillName from '@/components/scills/ScillName';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ScillItem() {
	const param = useParams();
	console.log(param);
	return <ScillName param={param} />;
}
