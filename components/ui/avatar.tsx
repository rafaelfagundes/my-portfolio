import Image from "next/image";

function Avatar({
  size,
  url,
  alt,
}: {
  size: number;
  url: string;
  alt: string;
}) {
  return (
    <div
      style={{
        transform: `scale(${size / 160})`,
      }}
      className="bg-red-200 dark:bg-red-400 rounded-full border-solid border-black/[.08] dark:border-white/30 p-4 border-4"
    >
      <Image
        src={url}
        width={160}
        height={160}
        alt={alt}
        className="scale-150"
      ></Image>
    </div>
  );
}

export default Avatar;
