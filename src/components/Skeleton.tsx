interface SkeletonProps {
    height?: number;
    width?: number;
}

export function Skeleton({ height }: SkeletonProps) {

    return (
        <div className={`flex h-full bg-zinc-300 animate-pulse w-full rounded`}>
            &nbsp; <br /> &nbsp;
        </div>
    )
}