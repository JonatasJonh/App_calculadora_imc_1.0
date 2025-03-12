import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form(){

const [Height, setHeight] = useState(null)
const [Weight, setWeight] = useState(null)
const [messageImc, setMessageImc]= useState("preencha o peso e a Altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

    function imcCalcular(){
        return setImc((Weight/(Height*Height)).toFixed(2))
    }

    function validationImc(){
        if(Weight != null && Height != null){
            imcCalcular()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc e igual a:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha peso e altura")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} value={Height} onChangeText={setHeight} placeholder="Ex. 1.68" keyboardType="numeric"/>
                
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} value={Weight} onChangeText={setWeight} placeholder="Ex. 70" keyboardType="numeric"/>
                <TouchableOpacity style={styles.buttonCalculator} onPress={()=>{validationImc()}}><Text style={styles.textButtonCalculator}>Calcular</Text></TouchableOpacity>
                
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
        </View>
    );
}