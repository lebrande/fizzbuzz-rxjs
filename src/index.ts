import 'bulma';
import { fromEvent, interval, range } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

const app = document.getElementById('app');
// najpierw zrobić bez funkcji
const createItem = (fizzBuzzNumber: number) => {
  let text: string = `${fizzBuzzNumber}`;

  if (fizzBuzzNumber % 15 === 0) {
    text = 'FizzBuzz';
  } else if (fizzBuzzNumber % 3 === 0) {
    text = 'Fizz';
  } else if (fizzBuzzNumber % 5 === 0) {
    text = 'Buzz';
  }

  const item = document.createElement('p');
  item.classList.add('notification', 'is-info');
  item.innerText = `${fizzBuzzNumber} -> ${text}`;
  app.appendChild(item);
}

// sposób 1 wypisz od razu
const numbers$ = range(0, 100);
const fizzBuzz$ = numbers$;

// sposób 2 wypisz na kliknięcie
const clicks$ = fromEvent(document, 'click');
// const fizzBuzz$ = clicks$.pipe(
//   startWith(0),
//   scan<number>((acc) => acc + 1)
// );

// sposób 3 wypisz co sekundę
// const timer$ = interval(1000);
// const fizzBuzz$ = timer$.pipe(
//   startWith(0),
//   scan<number>((acc) => acc + 1)
// );

fizzBuzz$.subscribe(createItem);