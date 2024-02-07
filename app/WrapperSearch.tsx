import SearchFilter from '@/app/ui/search/SearchFilter';

export default async function RootLayout({
    children,

}: {
    children: React.ReactNode,
}) {

    return (
        <>
            <SearchFilter />
            {children}
        </>
    );
};
