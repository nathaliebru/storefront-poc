import { BackButton } from '@/components/back-button';

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mt-14 p-3 max-w-5xl m-auto">
        <BackButton />
        <div className="mt-4">{children}</div>
      </div>
    </>
  );
}
