import Image from "next/image";

/**
 * The Profile Picture component props.
 */
export type ProfilePictureProps = {
  size?: number;
  className?: string;
};

/**
 * The Profile Picture component.
 */
export const ProfilePicture = ({
  size = 250,
  className = "",
}: ProfilePictureProps) => {
  return (
    <Image
      src="/jps-headshot-circle.png"
      alt="A headshot photo of Paul Sullivan"
      width={size}
      height={size}
      priority
      style={{
        transition: "0.4s",
      }}
      className={`z-20 max-w-40 md:max-w-full rounded-full border-8 bg-jps-cream dark:bg-black border-jps-cream dark:border-black animate-jump-in animate-once ${className}`}
    />
  );
};
