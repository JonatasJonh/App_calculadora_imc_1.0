import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc/"

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc]= useState("preencha o peso e a Altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

    function imcCalcular(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput value={Height} onChangeText={setHeight} placeholder="Ex. 1.68" keyboardType="numeric"></TextInput>
                
                <Text>Peso</Text>
                <TextInput value={Weight} onChangeText={setWeight} placeholder="Ex. 70" keyboardType="numeric"></TextInput>
                <Button onPress={() => validationImc()} title={textButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
        </View>
    );
}