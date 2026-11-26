'use client';

import { useParams } from 'next/navigation';
import CategoryDetail from '@/components/CategoryDetail';

export default function ExploreCategoryPage() {
  const params = useParams();
  const categoryId = parseInt(params.id as string, 10);

  return <CategoryDetail categoryId={categoryId} />;
}
