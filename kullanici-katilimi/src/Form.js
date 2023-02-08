import React from "react";
import { userSchema } from "./Validation/ValidationUser";
import * as Yup from "yup";

export default function Form() {
  function createUser(event) {
    event.preventDefault();
    let formData = {
      isim: event.target[0].value,
      eposta: event.target[1].value,
      sifre: event.target[2].value,
      sartlar: event.target[3].value,
    };
    const isValid = userSchema.isValid(formData);
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <fieldset>
          <legend>Kullanıcı Oluşturma</legend>
          <p>
            <label htmlFor="Name">İsim-Soyisim</label>
            <input id="Name" valu name="isim" type="text"></input>
          </p>
          <p>
            <label htmlFor="Email">Eposta Adresi</label>
            <input id="Email" name="eposta" type="text"></input>
          </p>
          <p>
            <label htmlFor="Password">Şifre</label>
            <input id="Password" name="sifre" type="password"></input>
          </p>
          <p>
            <label htmlFor="KullanimSartlari">
              Kullanım şartları ve gizlilik politikası.
            </label>
            <input type="checkbox" name="sartlar" id="KullanimSartlari"></input>
          </p>
          <p>
            <label>
              Gönder
              <input type="submit" name="buton" />
            </label>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
