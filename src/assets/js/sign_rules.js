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
    return str;
}
module.exports = cc;