import React from 'react'
import './ButtonPanel.css'

export default ({ handleClick }) => (
  <div className="calc__buttons">
    <div className="calc__row">
      <div onClick={ handleClick } className="calc__btn">AC</div>
      <div onClick={ handleClick } className="calc__btn">+/-</div>
      <div onClick={ handleClick } className="calc__btn">%</div>
      <div onClick={ handleClick } className="calc__btn calc__btn--orange">÷</div>
    </div>
    <div className="calc__row">
      <div onClick={ handleClick } className="calc__btn">7</div>
      <div onClick={ handleClick } className="calc__btn">8</div>
      <div onClick={ handleClick } className="calc__btn">9</div>
      <div onClick={ handleClick } className="calc__btn calc__btn--orange">x</div>
    </div>
    <div className="calc__row">
      <div onClick={ handleClick } className="calc__btn">4</div>
      <div onClick={ handleClick } className="calc__btn">5</div>
      <div onClick={ handleClick } className="calc__btn">6</div>
      <div onClick={ handleClick } className="calc__btn calc__btn--orange">-</div>
    </div>
    <div className="calc__row">
      <div onClick={ handleClick } className="calc__btn">1</div>
      <div onClick={ handleClick } className="calc__btn">2</div>
      <div onClick={ handleClick } className="calc__btn">3</div>
      <div onClick={ handleClick } className="calc__btn calc__btn--orange">+</div>
    </div>
    <div className="calc__row">
      <div onClick={ handleClick } className="calc__btn calc__btn--wide">0</div>
      <div onClick={ handleClick } className="calc__btn">.</div>
      <div onClick={ handleClick } className="calc__btn calc__btn--orange">=</div>
    </div>
  </div>
)
