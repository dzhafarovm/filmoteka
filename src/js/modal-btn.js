//////////// Кнопка "add to Watched"  добавить- к просмотренным
export function listenerAddsWatched(data) {
  const btnAddWatched = document.querySelector('.card__btn-watched');
  btnAddWatched.addEventListener('click', addsWatched);
}
// добавляет в Локальное хранилище
function addsWatched(data) {
  console.log(data);

  const fqwe = {
    id: 111,
    y: 2,
    z: 3,
  };
  console.log(fqwe);

  localStorage.setItem(fqwe, JSON.stringify(fqwe));
  const qqqq = JSON.parse(localStorage.getItem(fqwe));

  console.log(typeof fqwe); // объект
  console.log(qqqq);
  //   console.log((fqwe1 = JSON.parse(localStorage.getItem('fqwe')))); // Объект {x: 12, y: 56}
}

//////////// Кнопка "add to queue" -  добавить в очередь

// //Добавляем или изменяем значение:
// localStorage.setItem('myKey', 'myValue'); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"

// //Выводим его в консоль:
// var localValue = localStorage.getItem('myKey');
// console.log(localValue); //"myValue"

// //удаляем:
// localStorage.removeItem("myKey");

// //очищаем все хранилище
// localStorage.clear()

// То же самое, только с квадратными скобками:

// localStorage["Ключ"] = "Значение" //установка значения
// localStorage["Ключ"] // Получение значения
// delete localStorage["Ключ"] // Удаление значения
