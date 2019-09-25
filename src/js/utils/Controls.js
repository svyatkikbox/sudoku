import Message from './Message';
import Text from './Text';

export default () => {
  const clear = document.querySelector('.clear');

  clear.onclick = () => {
    if (!document.querySelector('.active.quiz')) {
      Message(Text.chooseQuiz, ['error']);
    } else {
      document.querySelector('.active.quiz').innerHTML = '';
    }
  }

};