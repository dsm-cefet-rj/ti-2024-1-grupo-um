import {jwtDecode} from "jwt-decode"; // Biblioteca para decodificar JWT sem verificar a assinatura

export const checkTokenValidity = (token) => {
    if (!token) {
        return false; // Se não houver token, ele não é válido
    }

    try {
        // Decodifica o token JWT sem verificar a assinatura
        const decodedToken = jwtDecode(token);

        // Verifica se o token expirou (o tempo de expiração está em segundos, então convertemos a data atual para segundos)
        const currentTime = Date.now() / 1000; // Tempo atual em segundos

        if (decodedToken.exp < currentTime) {
            // O token expirou
            return false;
        }

        // O token ainda é válido
        return true;
    } catch (error) {
        // Se ocorrer algum erro ao decodificar o token, considere o token inválido
        return false;
    }
};