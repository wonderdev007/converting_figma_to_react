export function Title({ title }: { title: string }) {
    return (
        <span className="font-[family-name:var(--font-lato-regular)] text-primary font-semibold">
            {title}
        </span>
    );
}