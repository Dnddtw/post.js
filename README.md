# post.js
Here you find the separated post.js functions and might to find their html-code/styles.

Опис функцій також та результати виконання можна знайти [тут](http://sa.post.js.rcktprft.ru).

``` javascript
  postDate(dateFormat, language, abbreviated);
  postSeason(language);
  postSpoiler(spoilerName, textArray, classesArray);
  postCalendar();
  postFixedSidebar(className);
  postPopup();
```

## [postDate(dateFormat, language, abbreviated);](http://sa.post.js.rcktprft.ru#postDate)


Arguments:
  ``` javascript
      dateFormat (string), language (string), abbreviated (bool)
      Default: 'dd.mm.yyyy', 'ru', false
  ```

Додаємо клас `date-N`, де N - кількість "відмотаних" днів. <br />
[Наприклад](http://sa.post.js.rcktprft.ru#postDate1), код нижче, "мотає" 0 днів назад (тобто, сьогодні).
``` html
  <span class="date-0"></span>
```

Вивід дати (+ години + хвилини), додаємо клас `time`. [Наприклад](http://sa.post.js.rcktprft.ru#postDate2), `<span class="date-1 time></span>`.

``` html
    <span class="date-1 time"></span>
    <span class="date-1 time"></span>
    <span class="date-1 time"></span>
    <span class="date-1 time"></span>
```

Працює як в порядку зростання, так і в порядку спадання. Шукаємо в коді рядок `timeArray = time(nodeList, true)` і передаємо другий аргумент `true`. [Отримаємо](http://sa.post.js.rcktprft.ru#postDate3):

``` html
    <span class="date-2 time"></span>
    <span class="date-2 time"></span>
    <span class="date-2 time"></span>
    <span class="date-2 time"></span>
```

Можна задавати формат часу для окремих дат. Зазвичай, на початку пре-лендінг сторінки йде дата публікації статті, а внизу сторінки - коментарі з датою. Додаємо `data-format="format"` до тегу з класом `date`.

[Наприклад](http://sa.post.js.rcktprft.ru#postDate4): 

``` html
<span class="date-8"></span>
<span class="date-8"></span>
<span class="date-8"></span>
<span class="date-8" data-format="day dd, month yyyy"></span>
``` 

Передаємо другим аргументом функції назву країни: `postDate('dd month yyyy', 'fr');`. Результат:

``` html
20 Février 2018
```
Передаємо третій аргумент функції `true`, якщо необхідне скорочення до трьох символів: `postDate('dd month yyyy', 'de', true);`. Результат:

``` html
  21 feb 2018
```

Доступні мови (лише місяці, дні не переведені):

``` javascript
'it': Italy 
'es': Spain 
'fr': France 
'pt': Portugal 
'de': Germany 
'bg': Bulgaria 
'pl': Poland 
'ro': Romania 
'hu': Hungary 
'gr': Greece 
'cy': Cyprus (Кіпр) 
'ru': Russia 
```

Доступні формати виводу дати (dd, mm, yyyy - цифри, day, month, year - прописом):

``` javascript
mm.dd.yyyy 
dd.mm.yyyy 
dd month yyyy 
dd month 
day dd, month yyyy 
dd/mm/yyyy 
dd-mm-yyyy 
yyyy.mm.dd
month dd, yyyy
dd month, yyyy
```

## [postSeason('ua');](http://sa.post.js.rcktprft.ru#postSeason)

Argument:
  ``` javascript
      language (string)
      Default: 'ua'
  ```
  
Додаємо класс `season` до будь-якого тегу. [Наприклад](http://sa.post.js.rcktprft.ru#postSeason1), `<span class="season"></span>`. Результат буде `літо`.

Доступні мови:

``` javascript
'ro': Romania 
'hr': Croatia 
'vn': Vietnam 
'cz': Czechia 
'si': Slovenia 
'sk': Slovakia 
'bg': Bulgaria 
'pl': Poland 
'fr': France 
'hu': Hungary 
'pt': Portugal 
'es': Spain 
'it': Italy 
'gr': Greece 
'cy': Cyprus (Кіпр) 
'ru': Russia 
'ua': Ukraine 
```

## postSpoiler('spoil', ['Показати фото', 'Сховати фото'], ['spoiler-text', 'spoiler-content']);

Arguments:

``` javascript
spoilerName (string), textArray (array), classesArray (array)
Default: 'spoil', ['Показати фото', 'Сховати фото'], ['spoiler-text', 'spoiler-content']
```

Блок з текстом - `spoil`. Всередині нього блок з текстом `spoiler-text` та наступний по DOM-дереву блок с прихованим контентом `spoiler-content`.
HTML-розмітка:

``` html
  <div class="spoil">
    <div class="spoiler-text">Показати фото</div>
  </div>
  <div class="spoiler-content" style="display: none;">
    <img class="sa-img" alt="" src=image_patch/css.jpg">
  </div>
```

Класи внутрішніх блоків та тексту можна змінювати передаючи аргументи при виклику функції. [Наприклад](http://sa.post.js.rcktprft.ru#postSpoiler1), `["Show photo", "Hide photo"] - postSpoiler("", ['Show photo', 'Hide photo']);`

## [Calendar](http://sa.post.js.rcktprft.ru#postCalendar)

Календар задається у формі таблиці `id="calendar"` (можна змінити в разі необхідності).
Копіюємо html-розмітку та стилі. [Результат](http://sa.post.js.rcktprft.ru#postCalendar1).

``` html
<table id="calendar">
        <thead>
          <tr class="mounth"><td>‹</td><td colspan="5" data-month="2" data-year="2018">Март 2018</td><td>›
              </td></tr><tr class="days"><td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td>
              </tr>
              </thead><tbody><tr><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td class="today">5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr><tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr><tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr><tr><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody>
</table>
```

``` css
#calendar {
    width: 300px;
    font-family: Arial;
    line-height: 18px;
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    line-height: 1.5;
}

#calendar thead tr:last-child {
    font-size: small;
    color: rgb(85, 85, 85);
}

#calendar thead tr:nth-child(1) td:nth-child(2) {
    color: #fff;
}

#calendar thead tr:nth-child(1) td:nth-child(1):hover,
#calendar thead tr:nth-child(1) td:nth-child(3):hover {
    cursor: pointer;
}

#calendar tbody td {
    color: #fff;
}

#calendar tbody td:nth-child(n+6),
#calendar .holiday {
    color: #fff;
}

#calendar tbody td.today {
    background: #3683c7;
    color: #fff;
}

tr.mounth {
    background: #132442;
    color: #fff!important;
    border: none;
}

tr.days td {
    background: #d7e0e9;
    color: #132442;
}

tr td:nth-child(6) {
    background: #b8d8ed;
}

tr td:nth-child(7) {
    background: #b8d8ed;
}

tbody td {
    background: #d7e0e9;
}

tbody td:nth-chlid(6) {
    background: #b7d7ec!important;
}

```

## [postFixedSidebar(className);](http://sa.post.js.rcktprft.ru#postFixedSidebar)

Argument:

``` javascript
  className (string) 
  Default: 'sticky'
```

Задаємо клас `sticky` для блоку, який хочемо зафіксувати + копіюємо стилі для коректного відображення.

``` css
.sticky-wrapper {
    width: inherit;
    left: auto;
    right: auto;
    transition: all 0.2s linear;
}

.sticky-wrapper.fixed {
    position: fixed;
    top: 0px;
}
```

При потребі, клас можна задати свій. Тоді змінюємо css-стилі для свого класу `.className-wrapper` та `.className-wrapper.fixed`. Частину `wrapper` не потрібно видаляти. Вона автоматично додається для коректного відображення. [Результат](http://sa.post.js.rcktprft.ru#postFixedSidebar1).

## [postPopup();](http://sa.post.js.rcktprft.ru#postPopup)

Копіюємо html-розмітку в кінець сторінки та стилі (або підганяємо під дизайн сторінки самостійно). [Pop-up](http://sa.post.js.rcktprft.ru#postPopup1)

``` html
<div class="screenLock">
  <div class="message">
      <div class="screenLockClose">X</div>
      <h1 class="message-title">Уже уходите? Подождите! Для Вас специальное предложение</h1>
      <a class="submit-popup" href="">Получите дырку от бублика бесплатно!</a>
  </div>
</div>
```

``` css

.screenLock {
    height: 9946px; 
    position: fixed; 
    z-index: 999999; 
    top: 0px; 
    left: 0px; 
    width: 100%; 
    background: 
    rgba(0, 0, 0, 0.7); 
    display: none;
}

.message {
    position: absolute; 
    width: 600px; 
    height: 300px; 
    background: 
    rgb(113, 63, 233); 
    top: 150px; 
    left: 50%; 
    margin-left: -300px; 
    border-style: solid; 
    border-color: 
    rgb(255, 255, 255); 
    border-width: 2px; 
    border-radius: 7px; 
    padding: 7px;
}

.screenLockClose {
    text-align: right; 
    cursor: pointer;
    font-family: sans-serif;
    color: #fff;
    font-size: 28px;
}

.message-title {
    font-size: 40px; 
    font-family: Arial; 
    text-align: center; 
    color: rgb(255, 255, 255); 
    font-weight: bold; 
    margin-bottom: 30px; 
    margin-top: 20px;
}

.submit-popup {
    display: block;
    margin: 30px auto 0;
    text-transform: uppercase; 
    font-size: 30px; 
    font-family: Arial; 
    font-weight: bold; 
    color: rgb(255, 255, 255); 
    text-align: center;
    width: 440px;
    background: rgb(204, 0, 0); 
    border-style: solid; 
    border-color: rgb(255, 255, 255); 
    border-width: 1px;
}
```
