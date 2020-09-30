function cc(obj){//接口验证签名规格
    let arr = [],str = '',key;
    for(key in obj){
        arr.push(key);
    }
    arr.sort();
    arr.forEach((item) => {
        str += item + '=' + obj[item] + '&';
    })
    str += '76576076c1f5f657b634e966c8836a06';
    // str += '84bb961185899b01663a6cd705a53cbd';
    return str;
}
module.exports = cc;