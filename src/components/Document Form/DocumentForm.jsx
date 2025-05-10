import React from "react";
import docPng from "../../assets/img/doc.png";

const DocumentForm = () => {
  return (
    <div className="form-box">
      <form className="document-form">
        <h1 className="title form-title">
          Типовой Договор, Заявка, Прих. кас. ордер
        </h1>
        <div className="input-box">
          <label for="adult-name" className="label">
            ФИО взрослого
          </label>
          <input
            id="adult-name"
            type="text"
            className="input"
            placeholder="Иванов Иван Иванович"
          />
        </div>

        <div className="input-box">
          <label for="adult-iin" className="label">
            ИИН взрослого
          </label>
          <input
            id="adult-iin"
            type="text"
            className="input"
            placeholder="000000000000"
          />
        </div>

        <div className="input-box">
          <label for="adult-id-num" className="label">
            Номер удостоверения личности
          </label>
          <input
            id="adult-id-num"
            type="text"
            className="input"
            placeholder="000000000"
          />
        </div>

        <div className="input-box">
          <label for="date-id-given" className="label">
            Дата выдачи удостоверения личности
          </label>
          <input
            id="date-id-given"
            type="date"
            className="input"
            placeholder="000000000"
          />
        </div>

        <div className="input-box">
          <label className="label">Выдано</label>
          <fieldset className="radio-box">
            <input id="mvd-rk" type="radio" name="given" />
            <label for="mvd-rk" className="radio-label">
              МВД РК
            </label>

            <input id="mu-rk" type="radio" name="given" />
            <label for="mu-rk" className="radio-label">
              МЮ РК
            </label>
          </fieldset>
        </div>

        <div className="input-box">
          <label for="zayavka-date" className="label">
            Дата заявки
          </label>
          <input id="zayavka-date" type="date" className="input" />
        </div>

        <div className="input-box">
          <label for="num-of-children" className="label">
            Кол-во детей
          </label>
          <input
            id="num-of-children"
            type="number"
            className="input"
            placeholder="0"
          />
        </div>

        <div className="input-box">
          <label for="prih-kass-order" className="label">
            Номер приходного кассового ордера
          </label>
          <input
            id="prih-kass-order"
            type="text"
            className="input"
            placeholder="0"
          />
        </div>

        <div className="input-box">
          <label for="dogovor-number" className="label">
            Номер типового договора
          </label>
          <input
            id="dogovor-number"
            type="text"
            className="input"
            placeholder="0"
          />
        </div>

        <div className="input-box">
          <label for="dogovor-date" className="label">
            Дата типового договора
          </label>
          <input id="dogovor-date" type="date" className="input" />
        </div>


        <div className="input-box">
          <label className="label" style={{ visibility: "hidden" }}>
            button
          </label>
          <button className="btn doc-form-btn">Отправить</button>
        </div>

      </form>

      <div className="form-view">
        <div className="form-view__img-box">
          <img src={docPng} alt="" className="form-view_img" />
        </div>
      </div>
    </div>
  );
};

export default DocumentForm;
