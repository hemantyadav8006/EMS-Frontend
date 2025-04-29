export const Input = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="bg-gray-100 text-sm px-4 py-3 w-full rounded mb-3 focus:outline-none"
  />
);
