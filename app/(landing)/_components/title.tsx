export function Title({ title }: { title: string }) {
    return (
        <span className="font-[family-name:var(--font-lato-regular)] text-[12px] smTablet:text-[0.9rem] text-primary font-semibold">
            {title}
        </span>
    );
}