import imagen from "./coso.png"
import moneda from "./moneda.png"

export {imagen,moneda}

export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
};