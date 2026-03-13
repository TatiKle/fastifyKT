console.log('main.js загружен');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM загружен');

  const btn = document.getElementById('api-btn');
  console.log('Кнопка:', btn);

  if (!btn) {
    console.error('Кнопка id="api-btn" не найдена');
    return;
  }

  btn.addEventListener('click', async () => {
    console.log('А я вижу, что вы кнопку жмав');

    try {
      const res = await fetch('/api');
      if (!res.ok) {
        console.log('Сервер вернул ошибку, статус:', res.status);
        return;
      }
      const data = await res.json();

      if (data.message === 'Запрос прошел успешно') {
        console.log(data.message);
      } else {
        console.log('Ответ сервера:', data);
      }
    } catch (e) {
      console.error('Ошибка запроса:', e);
    }
  });
});