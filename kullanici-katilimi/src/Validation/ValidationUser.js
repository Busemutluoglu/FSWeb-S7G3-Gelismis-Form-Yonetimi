import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  isim: Yup.string()
    .min(2, "Çok kısa!")
    .max(50, "Çok uzun!")
    .required("Bu bilgi gereklidir"),
  eposta: Yup.string()
    .email("Geçersiz Eposta adresi")
    .required("Bu bilgi gereklidir"),
  sifre: Yup.string()
    .min(2, "Çok kısa !")
    .max(50, "Çok uzun!")
    .required("Bu bilgi gereklidir"),
  sartlar: Yup.boolean().oneOf(
    [true],
    "Kullanım şartları ve gizlilik politikasını kabul etmeniz gerekmektedir."
  ),
});
