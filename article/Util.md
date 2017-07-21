---
createTime: 2017/05/10 16:34:25
title:常用的正则表达式
description:简单介绍了项目中比较常用的正则表达式
---

###常用的校验

#### 验证是否为电话号码

```	
function isTel(val){
    if(!val){
      return true;
    }
    var reg = /^(13[0-9]|14(5|7)|15(0|1|2|3|5|6|7|8|9)|18[0-9]|17[0-9])\d{8}|(\d{8})$/;
    return reg.test(val);
  }
```   

####验证是否为邮箱。
```
function isEmail(val){
  if(!val){
    return true;
  }
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(val);
}
```

####验证是否为整数
```	
function isInteger(val){
  if(!val){
    return true;
  }
  return /^-?\d+$/.test(val);
}
```
####身份证校验
```	
function isIDNumber(val){
  if(!val){
    return true;
  }
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
}
```
