Використані технології:

**1.React та TypeScript забезпечують гнучкість та строгість типів під час розробки.**
useContext використовується для керування станом компонентів. Це дозволяє зберігати й ділитися даними між компонентами без потреби в складних рішеннях для керування станом, таких як Redux.

**2.Компоненти:**
Основні компоненти проєкту створені для відображення завдань у вигляді діаграми Ганта, де кожне завдання має свій часовий інтервал та статус виконання.
Інтерфейс розділений на модулі, що спрощує розробку та підтримку. Кожен компонент відповідає за свою частину діаграми або управління даними.

**3.Динамічна логіка:**
Компоненти мають гнучку логіку, що дозволяє додавати, змінювати й видаляти завдання. Дані, які зберігаються в useContext, спрощують оновлення стану програми.
Додано обчислення тимчасових інтервалів та логіку для візуалізації завдань у правильній послідовності, враховуючи залежності між ними.
Інтерактивність:

**4.Забезпечено можливість користувачам взаємодіяти з діаграмою, змінюючи початок і тривалість завдань, а також оновлювати інформацію в реальному часі.**
Реалізовано функціонал перетягування завдань для зручнішої зміни їх позиції на шкалі часу.


**5.Додаткові функції:**
Оптимізація рендерингу компонентів забезпечує швидку й плавну роботу, навіть якщо є багато завдань.

 **Використання макету з syncfusion:**
 [Макет сайту](https://ej2.syncfusion.com/react/demos/?_gl=1*7s3j2c*_gcl_au*MTYxOTk2OTExMS4xNzI5NjA3NDUw*_ga*NDIzOTI1NTY2LjE3Mjk2MDc0NTA.*_ga_41J4HFMX1J*MTcyOTYwNzQ0OS4xLjEuMTcyOTYwODU4Mi4wLjAuMA..#/bootstrap5/gantt/baseline).

 **Опис даного ТЗ(діаграми Ганта):** 
 [https://whimsical.com/FiseRCAM7TTXS77BrVmrKD]

 **Для перегляду даного проекту клонуйте собі даний репозиторій та за допомогою команди npm install- встановіть всі залежності проекту та введіть npm start - для запуску локального хоста, щоб побачити сторінку вживу**