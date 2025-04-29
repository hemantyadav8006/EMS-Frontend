export const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a
    href="#"
    className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
  >
    <Icon />
  </a>
);
