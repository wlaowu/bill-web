/**
 * @description  框架外置配置文件，用于书写项目中需要在生产环境中修改的配置信息。 本文件在打包时不会参与编译，为了保证各个
 * 浏览器的兼容性，请使用ES5语法编写本配置文件信息.
 * @author wangsl wangsl@dse.cn
 * @version v1.0.0
 * @date create Administrator on 2019/3/6
 *
 */
"use strict";

var DSE = {};

// 外网
DSE.serverPath = '';

window.DSE = DSE;
