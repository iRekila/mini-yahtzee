import React from "react";
import { Text, View } from "react-native";
import style from "../style/style";

export default Footer = () => {
    return (
        <View style={style.footer}>
            <Text style={style.title}>
                Author: Ilkka Rekilä
            </Text>
        </View>
    )
}