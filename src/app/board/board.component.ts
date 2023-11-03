import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;
  draw: boolean;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.winner = null;
    this.xIsNext = true;
    this.draw = false;
    this.squares = Array(9).fill(null);
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(i) {
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player);
      this.winner = this.calculateWinner();
      this.xIsNext = !this.xIsNext;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const sq = this.squares;

      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        return sq[a];
      }
    }

    if (!this.squares.some(val => val === null)) {
      this.draw = true;
    }

    return null;
  }

}
