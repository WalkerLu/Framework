/**
 * Created by _lu on 2017/3/15.
 */
var fra = function () {
};
fra.prototype = {
    /**
     * 函数扩展
     * @param tar
     * @param source
     * @returns {*}
     */
    extend: function (tar, source) {
        for (var i in source) tar[i] = source[i];
        return tar;
    }
};

fra = new fra();
fra.extend(fra, {
    /**
     * 在数值范围取随机数
     * @param begin
     * @param end
     * @returns {*}
     */
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    }
});

/*数据类型检测*/
fra.extend(fra, {
    isNumber: function (val) {
        return typeof val === Number && isFinite(val);
    },
    isBoolean: function (val) {
        return typeof val === "boolean";
    },
    isString: function (val) {
        return typeof val === "string";
    },
    isUndefined: function (val) {
        return typeof val === "undefined";
    },
    isObj: function (str) {
        if (str === null || typeof str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull: function (val) {
        return val === null;
    },
    isArray: function (arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    }
});

/*字符串操作*/
fra.extend(fra, {
    //去除左边空格
    ltrim: function (str) {
        return str.replace(/(^\s*)/g, '');
    },
    //去除右边空格
    rtrim: function (str) {
        return str.replace(/(\s*$)/g, '');
    },
    //去除空格
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //简单的数据绑定formateString
    formateString: function (str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    }
});

/*ajax*/
fra.extend(fra, {
    /**
     * 请求
     * @param 请求url
     * @param post/get
     * @param 回调函数
     */
    fAjax: function (url,type, fn) {
        var xhr = CreateXHR();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    fn(xhr.responseText);
                } else {
                    console.log("erro");
                }
            }
        };
        xhr.open(type,url,true);
        xhr.send();

        /*创建XHR对象*/
        function CreateXHR() {
            if (typeof XMLHttpRequest != 'undefined') {
                return new XMLHttpRequest();
            } else if (typeof  ActiveXObject != 'undefined') {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"
                    ],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                    }
                    catch (ex) {
                        console.log(ex);
                    }
                }
                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw ('No XHR Object available .');
            }
        }
    }
});

/*selecter*/
fra.extend(fra,{
    id:function () {

}
});

