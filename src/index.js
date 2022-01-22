import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class App extends Component{
  // значения для контролируемых элементов
  state = {
    email: '',
    gender: 'Мужской',
    married: false,
    minor_children: 'Нет',
    favorite_subjects: [],
    interest: ''
  }
  // ссылка для неконтролируемого элемента
  fio = React.createRef()

  change = (e) => {
    let {name,value,type,selectedOptions,checked} = e.target
    value = type === 'select-multiple' ? [...selectedOptions].map(o=>o.value) : 
            type === 'checkbox' ? checked :
            value
    this.setState({[name]: value})
  }
  submit = (e) => {
    e.preventDefault()
    console.log(this.fio.current.value)
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render(){
    const {fio, email, gender, married, minor_children, favorite_subjects, interest} = this.state
    return(
      <div className="survey">
        <div className="container">
          <h1 className="survey__header">Анкета</h1>
          <form className="survey__form" onSubmit={this.submit}>
            <ul className="survey__list">
              <li className="survey__item">
                <div className="survey__title">ФИО</div>
                <input className="survey__input" placeholder="Иванов Иван Иванович" ref={this.fio} defaultValue="Тест"/>
              </li>
              <li className="survey__item">
                <div className="survey__title">Электронная почта</div>
                <input className="survey__input" name="email" placeholder="email@inbox.com" value={email} onChange={this.change}/>
              </li>
              <li className="survey__item">
                <div className="survey__title">Пол</div>
                <input className="survey__radio" type="radio" name="gender" value="Женский" id="female" checked={gender==="Женский"} onChange={this.change}/><label className="survey__label" htmlFor="female">Женский</label>
                <input className="survey__radio" type="radio" name="gender" value="Мужской" id="male" checked={gender==="Мужской"} onChange={this.change}/><label className="survey__label" htmlFor="male">Мужской</label>
              </li>
              <li className="survey__item">
                <div className="survey__title">Семейное положение</div>
                <input className="survey__checkbox" name="married" type="checkbox" id="married" checked={married} onChange={this.change}/><label className="survey__label" htmlFor="married">Состою в браке</label>
              </li>
              <li className="survey__item">
                <div className="survey__title">Дети младше 18 лет</div>
                <select className="survey__select" name="minor_children" value={minor_children} onChange={this.change}>
                  <option className="survey__option" value="Нет">Нет</option>
                  <option className="survey__option" value="1">1</option>
                  <option className="survey__option" value="2">2</option>
                  <option className="survey__option" value="3">3</option>
                  <option className="survey__option" value="Больше 3">Больше 3</option>
                </select>
              </li>
              <li className="survey__item">
                <div className="survey__title">Любимые предметы в школе</div>
                <select className="survey__select" name="favorite_subjects" size="4" multiple value={favorite_subjects} onChange={this.change}>
                  <option className="survey__option" value="Математика">Математика</option>
                  <option className="survey__option" value="Информатика">Информатика</option>
                  <option className="survey__option" value="История">История</option>
                  <option className="survey__option" value="Русский язык">Русский язык</option>
                </select>
              </li>
              <li className="survey__item">
                <div className="survey__title">Интересы</div>
                <textarea className="survey__textarea" name="interest" rows="1" placeholder="Ваши интересы через запятую" value={interest} onChange={this.change}/>
              </li>
            </ul>
            <button className="survey__submit">Отправить</button>
          </form>
        </div>    
      </div>
    )
  }
} 



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
