/*
      =========================
      PARADIGMA DE PROGRAMACION 
      FECHA: 27-08-2025
      PROFESOR: ALVAREZ LEANDRO
      =========================
*/


   const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];

    const clonArr = Numbers.map(x => x);
    const menoresOIgualA10 = clonArr.map(n => n <= 10 ? n : 'X');

    console.log(menoresOIgualA10); // [ 12, 10 ]]

