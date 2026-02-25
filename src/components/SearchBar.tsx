import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass rounded-lg flex items-center gap-3 px-4 py-3">
        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por tecnología, nombre o descripción..."
          className="bg-transparent w-full text-foreground placeholder:text-muted-foreground text-sm font-body outline-none"
        />
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-border text-[10px] text-muted-foreground font-body">
          ⌘K
        </kbd>
      </div>
    </div>
  );
};

export default SearchBar;
