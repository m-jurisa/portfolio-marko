"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const preferred = typeof navigator !== 'undefined' ? navigator.language : 'de';
    const locale = preferred?.toLowerCase().startsWith('de') ? 'de' : 'en';
    router.replace(`/${locale}`);
  }, [router]);
  return null;
}
