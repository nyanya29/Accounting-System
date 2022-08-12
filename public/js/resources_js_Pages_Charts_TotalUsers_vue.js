"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Charts_TotalUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");



chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'BarChart',
  components: {
    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Bar
  },
  props: {
    chartId: {
      type: String,
      "default": 'bar-chart'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(props) {
    var vm = this;
    var chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Data One',
        backgroundColor: ['#329719', '#433979', '#544979', '#855979', '#966979', '#177979', '#f87327', '#f81279', '#f87979', '#f86979', '#f11979', '#f89979'],
        data: props.chartData
      }]
    };
    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        yAxis: {
          min: 0,
          // minimum value
          max: 100 // maximum value

        }
      }
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Bar, {
        chartData: chartData,
        chartOptions: chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      });
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ }),

/***/ "./resources/js/Pages/Charts/TotalUsers.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Charts/TotalUsers.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalUsers.vue?vue&type=template&id=46fa1c36 */ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36");
/* harmony import */ var _TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TotalUsers.vue?vue&type=script&lang=js */ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_inertia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charts/TotalUsers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TotalUsers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TotalUsers.vue?vue&type=template&id=46fa1c36 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36");


/***/ })

}]);