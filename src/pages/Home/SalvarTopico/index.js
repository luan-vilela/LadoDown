import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { isValidObjField, updateError } from "../../../utils/methods";
import FormContainer from "../../../components/Formulario/FormContainer";
import FormInput from "../../../components/Formulario/FormInput";
import FormUploadImagem from "../../../components/Formulario/FormUploadImagem";
import FormTextInput from "../../../components/Formulario/FormTextInput";
import FormTextAreaInput from "../../../components/Formulario/FormTextAreaInput";
import FormSubmitButton from "../../../components/Formulario/FormSubmitButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ConteudoServices from "../../../services/Services";

const validationSchema = Yup.object({
  titulo: Yup.string().trim().required("Campo Obrigatório!"),
  imagemPequena: Yup.string().trim().required("Campo Obrigatório!"),
  imagemGrande: Yup.string().trim().required("Campo Obrigatório!"),
  subTitulo: Yup.string().trim().required("Campo Obrigatório!"),
  descricao: Yup.string().trim().required("Campo Obrigatório!"),
  tag: Yup.string().trim().required("Campo Obrigatório!"),
  autor: Yup.string().trim().required("Campo Obrigatório!"),
  texto: Yup.string().trim().required("Campo Obrigatório!"),
});

const SalvarTopico = ({ navigation }) => {
  const formulario = {
    titulo: "",
    imagemPequena: "",
    imagemGrande: "",
    subTitulo: "",
    descricao: "",
    texto: "",
    tag: "",
    autor: "",
  };

  const [error, setError] = useState("");

  const {
    titulo,
    imagemPequena,
    imagemGrande,
    subTitulo,
    descricao,
    texto,
    tag,
    autor,
  } = formulario;

  const handleOnChangeText = (value, fieldName) => {
    setFormulario({ ...formulario, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(formulario))
      return updateError("Required all fields!", setError);
    if (!titulo.trim()) return updateError("Campo Obrigatório!", setError);
    if (!imagemPequena.trim())
      return updateError("Campo Obrigatório!!", setError);
    if (!imagemGrande.trim())
      return updateError("Campo Obrigatório!!", setError);
    if (!subTitulo.trim()) return updateError("Campo Obrigatório!!", setError);
    if (!descricao.trim()) return updateError("Campo Obrigatório!!", setError);
    if (!tag.trim()) return updateError("Campo Obrigatório!!", setError);
    if (!autor.trim()) return updateError("Campo Obrigatório!!", setError);
    if (!texto.trim()) return updateError("Campo Obrigatório!!", setError);
    return true;
  };

  const signUp = async (values, formikActions) => {
    let form = {
      tituloPrincipal: values.titulo,
      imagemPequena: values.imagemPequena,
      subTitulo: values.subTitulo,
      imagemGrande: values.imagemGrande,
      descricao: values.descricao,
      tag: values.tag,
      autor: values.autor,
    };

    await ConteudoServices.post("/conteudo", form)
      .then((res) => {
        Alert.alert("Dados salvos!");
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Não foi possível salvar os dados!");
      });

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <FormContainer>
        <Formik
          initialValues={formulario}
          validationSchema={validationSchema}
          onSubmit={signUp}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {
              titulo,
              imagemPequena,
              imagemGrande,
              subTitulo,
              descricao,
              tag,
              autor,
              texto,
            } = values;
            return (
              <>
                <FormInput
                  value={titulo}
                  error={touched.titulo && errors.titulo}
                  onChangeText={handleChange("titulo")}
                  onBlur={handleBlur("titulo")}
                  label="Título Principal"
                />
                <FormInput
                  value={imagemPequena}
                  error={touched.imagemPequena && errors.imagemPequena}
                  onChangeText={handleChange("imagemPequena")}
                  onBlur={handleBlur("imagemPequena")}
                  label="Imagem Pequena"
                />
                <FormInput
                  value={imagemGrande}
                  error={touched.imagemGrande && errors.imagemGrande}
                  onChangeText={handleChange("imagemGrande")}
                  onBlur={handleBlur("imagemGrande")}
                  label="Imagem Grande"
                />
                <FormInput
                  value={subTitulo}
                  error={touched.subTitulo && errors.subTitulo}
                  onChangeText={handleChange("subTitulo")}
                  onBlur={handleBlur("subTitulo")}
                  label="SubTítulo *"
                />
                <FormTextInput
                  value={descricao}
                  error={touched.descricao && errors.descricao}
                  onChangeText={handleChange("descricao")}
                  onBlur={handleBlur("descricao")}
                  label="Descrição *"
                />
                <FormTextAreaInput
                  value={texto}
                  error={touched.texto && errors.texto}
                  onChangeText={handleChange("texto")}
                  onBlur={handleBlur("texto")}
                  label="Texto *"
                />
                <FormInput
                  value={tag}
                  error={touched.tag && errors.tag}
                  onChangeText={handleChange("tag")}
                  onBlur={handleBlur("tag")}
                  label="Tag *"
                />
                <FormInput
                  value={autor}
                  error={touched.autor && errors.autor}
                  onChangeText={handleChange("autor")}
                  onBlur={handleBlur("autor")}
                  label="Autor *"
                />
                <FormSubmitButton
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  title="Salvar"
                />
              </>
            );
          }}
        </Formik>
      </FormContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
});

export default SalvarTopico;
