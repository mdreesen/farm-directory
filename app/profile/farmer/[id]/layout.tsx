import Sidebar from '@/ui/navigation/Sidebar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen md:flex-row bg-white">
      {/* <Sidebar /> */}
      {children}
    </div>
  );
}