import styles from "./supplier-card.module.css";

interface Supplier {
    id: string;
    cnpj: string;
}

interface SupplierCardProps {
    supplier: Supplier;
}

export default function SupplierCard({ supplier }: SupplierCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <span>ID: {supplier.id}</span>
                <span>CNPJ: {supplier.cnpj}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.editButton}>Editar</button>
                <button className={styles.deleteButton}>Apagar</button>
            </div>
        </div>
    );
}
