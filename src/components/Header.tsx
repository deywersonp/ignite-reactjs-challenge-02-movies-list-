
interface HeaderProps {
  selectedTitle: string;
}

export function Header({ selectedTitle }: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedTitle}</span></span>
    </header>
  )
};
