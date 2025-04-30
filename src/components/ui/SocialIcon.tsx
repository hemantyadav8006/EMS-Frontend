export const SocialIcon = ({
  Icon,
  url,
}: {
  Icon: React.ElementType;
  url?: string;
}) => (
  <a
    href={url}
    className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
  >
    <Icon />
  </a>
);
