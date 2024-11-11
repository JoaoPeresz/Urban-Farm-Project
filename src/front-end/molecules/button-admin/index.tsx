import styles from "./button-admin.module.css";

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
}

export default function ButtonAdmin({ label, onClick, type = "button", variant = "primary" }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${styles[variant]}`}
        >
            {label}
        </button>
    );
}