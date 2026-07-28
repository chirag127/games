# oriz.games

[![Live](https://img.shields.io/badge/Live-games.oriz.in-6366f1?style=flat-square)](https://games.oriz.in)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Free browser games — no install, no login, no build step.

**Live:** https://games.oriz.in

---

## Games (14)

| Game | Category |
|---|---|
| 2048 | Puzzle |
| Minesweeper (Beginner / Intermediate / Expert) | Puzzle |
| Sudoku (Easy / Medium / Hard) | Puzzle |
| Sliding Puzzle (3x3 / 4x4) | Puzzle |
| Snake | Arcade |
| Tetris | Arcade |
| Flappy Bird | Arcade |
| Breakout | Arcade |
| Wordle | Word |
| Trivia | Word |
| Hangman | Word |
| Tic-Tac-Toe (vs AI / 2P) | Board |
| Connect Four (vs AI / 2P) | Board |
| Chess (vs AI / 2P) | Board |

## Tech

- Pure HTML / CSS / JS — zero build step
- Service worker for offline play
- PWA manifest
- Scores persisted via `localStorage`
- Chess uses [chess.js](https://github.com/jhlywa/chess.js) + [chessboard.js](https://chessboardjs.com/) CDN; all other games are fully self-contained

## GitHub Pages setup

1. Push to `main`
2. Settings → Pages → Source: `main` / `/ (root)`
3. (Optional) add custom domain `games.oriz.in` under Pages → Custom domain

## Local dev

```bash
npx serve .
# or
python -m http.server 8080
```

## License

MIT — see [LICENSE](LICENSE)
