import Text from './Text';
import Play from './Play';

export default (text, classes) => { // показ сообщений для пользователя
  const message = document.querySelector('.message'); // сообщения для пользователя
  message.innerText = text;

  message.classList.add('show');
  message.classList.add(...classes);

  setTimeout(() => {
    message.classList.remove('show');
    message.classList.remove(...classes);

    if (text === Text.lose || text === Text.victory) { // в случае сообщения о победе/проигрыше перезапускать игру
      Play();
    }

  }, 2000);

};