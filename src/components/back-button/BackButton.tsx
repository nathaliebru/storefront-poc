'use client';

import ChevronLeft from '@/public/icons/chevron-left.svg';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center cursor-pointer hover:underline"
      onClick={() => router.back()}
    >
      <ChevronLeft height={20} width={20} />
      Back
    </button>
  );
};
