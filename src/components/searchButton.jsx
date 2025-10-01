import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        className="pl-4 pr-4 py-2 w-full border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
        placeholder="Search branch name..."
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
        <Search className="w-4 h-4" />
      </div>
    </div>
  );
}
