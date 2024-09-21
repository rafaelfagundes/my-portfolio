import clsx from "clsx";

interface AvatarProps {
  size: number;
  url: string;
  alt: string;
  variant?: "default" | "destructive" | "warning" | "secondary";
  scaled?: boolean;
}

function Avatar({
  size,
  url,
  alt,
  variant = "default",
  scaled = true,
}: AvatarProps) {
  const avatarVariants = clsx(
    variant === "default" &&
      "bg-purple-200 dark:bg-purple-300 text-primary-foreground",
    variant === "destructive" && "bg-red-200 dark:bg-red-400",
    variant === "warning" && "bg-yellow-200 dark:bg-yellow-400",
    variant === "secondary" && "bg-zinc-200 dark:bg-zinc-400"
  );

  return (
    <div
      style={{
        transform: scaled ? `scale(${size / 160})` : "scale(1)",
      }}
      className={`rounded-full border-solid border-black/[.08] dark:border-white/30 ${
        scaled && "p-4"
      } border-1 ${avatarVariants}`}
    >
      <img
        src={url}
        width={scaled ? 160 : size}
        height={scaled ? 160 : size}
        alt={alt}
        className={`${scaled && "scale-150"} rounded-full`}
      ></img>
    </div>
  );
}

export default Avatar;
