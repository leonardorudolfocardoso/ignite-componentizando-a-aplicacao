import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleGenreClick: (genreId: number) => void
}

export function SideBar({
  genres,
  selectedGenreId,
  handleGenreClick
}: SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenreClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
  
}