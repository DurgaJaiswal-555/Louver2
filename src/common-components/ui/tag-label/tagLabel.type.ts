export interface TagLabelProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
