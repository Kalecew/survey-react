import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const App = () => (
  <div className="container">
    <div className="survey">
      <h1 className="survey__header">Анкета</h1>
      <form className="survey__form">
        <ul className="survey__list">
          <li className="survey__item">
            <div className="survey__title">ФИО</div>
            <input className="survey__input" name="fio" placeholder="Иванов Иван Иванович" />
          </li>
          <li className="survey__item">
            <div className="survey__title">Электронная почта</div>
            <input className="survey__input" name="email" placeholder="email@inbox.com" />
          </li>
          <li className="survey__item">
            <div className="survey__title">Пол</div>
            <input className="survey__radio" type="radio" name="gender" value="Женский" id="female"/><label className="survey__label" for="female">Женский</label>
            <input className="survey__radio" type="radio" name="gender" value="Мужской" id="male"/><label className="survey__label" for="male">Мужской</label>
          </li>
          <li className="survey__item">
            <div className="survey__title">Семейное положение</div>
            <label className="survey__label"><input className="survey__checkbox" name="married" type="checkbox"/>Состою в браке</label>
          </li>
          <li className="survey__item">
            <div className="survey__title">Дети младше 18 лет</div>
            <select className="survey__select" name="minor-children">
              <option value="Нет">Нет</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="Больше 3">Больше 3</option>
            </select>
          </li>
          <li className="survey__item">
            <div className="survey__title">Любимые предметы в школе</div>
            <select className="survey__select" name="favorite-subjects" size="4" multiple>
              <option value="Математика">Математика</option>
              <option value="Информатика">Информатика</option>
              <option value="История">История</option>
              <option value="Русский язык">Русский язык</option>
            </select>
          </li>
          <li className="survey__item">
            <div className="survey__title">Интересы</div>
            <textarea className="survey__textarea" name="interest" rows="1" placeholder="Ваши интересы через запятую" />
          </li>
        </ul>
        <button className="survey__submit">Отправить</button>
      </form>
    </div>    
  </div>
)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
