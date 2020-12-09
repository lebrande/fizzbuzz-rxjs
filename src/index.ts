import 'bulma';
import { fromEvent, range, interval } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';

const app = document.getElementById('app');

// sposób 1 wypisz od razu
// const numbers$ = range(0, 100);

// sposób 2 wypisz na kliknięcie
// const click$ = fromEvent(document, 'click')
//   .pipe(
//     startWith(0),
//     scan<number>((acc) => acc + 1),
//   );

// sposób 3 wypisz co sekundę
const timer$ = interval(1000);

const fizBuzz$ = timer$;

fizBuzz$.subscribe((n) => {
  let text: string;

  if (n % 3 === 0 && n % 5 === 0) {
    text = 'FizzBuzz';
  } else if (n % 3 === 0) {
    text = 'Fizz';
  } else if (n % 5 === 0) {
    text = 'Buzz';
  } else {
    text = `${n}`;  
  }

  const item = document.createElement('div');
  item.innerText = text;
  item.classList.add('notification', 'is-info');
  app.appendChild(item);
});
