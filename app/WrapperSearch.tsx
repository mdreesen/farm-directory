import SearchFilter from '@/app/ui/search/SearchFilter';
import styles from '@/app/styles/Page.module.css'

export default async function RootLayout({
    children,

}: {
    children: React.ReactNode,
}) {

    return (
        <div className={styles['container']}>
            <SearchFilter />
            {children}
        </div>
    );
};
