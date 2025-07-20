export function Pagination_star(number) {
  const numbers = [];

  if (number === 5) {
    for (let i = 1; i <= number; i++) {
      numbers.push(i);
    }
  }

  if (number === 4) {
    for (let i = 1; i <= number; i++) {
      numbers.push(i);
    }
  }

  if (number === 3) {
    for (let i = 1; i <= number; i++) {
      numbers.push(i);
    }
  }

  if (number === 2) {
    for (let i = 1; i <= number; i++) {
      numbers.push(i);
    }
  }

  if (number === 1) {
    for (let i = 1; i <= number; i++) {
      numbers.push(i);
    }
  }
  return numbers;
}

// export function FinishedRow(number, sprite) {
//   if (number === 5) {
//     const arrayNambers = Pagination_star(number);

//     const star = arrayNambers.map((arr, index) => {
//       return `${(
//         <svg width={16} height={16}>

//           <use href={`${sprite}#icon-star`} />
//         </svg>
//       )}`;
//     });

//     return star;
//   }
// }
