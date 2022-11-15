"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Jevh_JevReport_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/JevReport.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/JevReport.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/BackButton.vue */ "./resources/js/Shared/BackButton.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BackButton: _Shared_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      myReportsModal: null,
      type: '0',
      funds: {},
      jevtype: [{
        value: 1,
        name: "Collection"
      }, {
        value: 2,
        name: "Check Disbursement"
      }, {
        value: 3,
        name: "Cash Disbursement"
      }, {
        value: 4,
        name: "General"
      }, {
        value: 5,
        name: "ADA"
      }, {
        value: 6,
        name: "Procurement"
      }],
      FUND_SCODE: "",
      FJEVTYP: "",
      date_from: "",
      date_to: ""
    };
  },
  mounted: function mounted() {
    this.getAllFunds();
  },
  methods: {
    getAllFunds: function getAllFunds() {
      var _this = this;

      axios.post('get-fund-details').then(function (response) {
        _this.funds = response.data;
      });
    },
    print: function print(FUND_SCODE, FJEVTYP, date_from, date_to) {
      // console.log(FUND_SCODE,FJEVTYP,date_from,date_to);
      window.open('http://192.168.6.23:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fcash_reciept_journal&standAlone=true&decorate=no&FJEVTYP=' + FJEVTYP + '&FUND_SCODE=' + FUND_SCODE + '&from=' + date_from + '&to=' + date_to);
    },
    printSecond: function printSecond(FUND_SCODE, FJEVTYP, date_from, date_to) {
      window.open('http://192.168.6.23:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fcash_reciept_journal_one&standAlone=true&decorate=no&FJEVTYP=' + FJEVTYP + '&FUND_SCODE=' + FUND_SCODE + '&from=' + date_from + '&to=' + date_to);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/JevReport.vue?vue&type=template&id=66d75c96":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/JevReport.vue?vue&type=template&id=66d75c96 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row gap-10 masonry pos-r"
};
var _hoisted_2 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, " Journal Entry Voucher Reports", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "row justify-content-center"
};
var _hoisted_5 = {
  "class": "col-4"
};
var _hoisted_6 = {
  "class": "card"
};
var _hoisted_7 = {
  "class": "card-body"
};
var _hoisted_8 = {
  "class": "col-md-12"
};
var _hoisted_9 = {
  "class": "row g-2"
};
var _hoisted_10 = {
  "class": "col-md"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Report Type", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: "0"
}, " Select here", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "Detailed Cash Receipts Journal", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "2"
}, "Summary Cash Receipts Journal", -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_12, _hoisted_13, _hoisted_14];
var _hoisted_16 = {
  "class": "row g-2"
};
var _hoisted_17 = {
  "class": "col-md"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "From", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "col-md"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "To", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "row g-2"
};
var _hoisted_22 = {
  "class": "col-md"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "colFormLabelSm",
  "class": "col-sm-2 col-form-label"
}, "Fund", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, " Select Fund", -1
/* HOISTED */
);

var _hoisted_25 = ["value"];
var _hoisted_26 = {
  "class": "col-md"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "colFormLabelSm",
  "class": "col-sm-2 col-form-label"
}, "Jev Type", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, " Select Jev type", -1
/* HOISTED */
);

var _hoisted_29 = ["value"];
var _hoisted_30 = {
  "class": "modal-footer p-1"
};
var _hoisted_31 = {
  key: 0,
  type: "button",
  "class": "btn btn-primary mt-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_back_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("back-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_back_button, {
    href: '/jevh/index'
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select mt-1 pt-1 mb-1",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.type = $event;
    })
  }, _hoisted_15, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.type]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "class": "form-control mt-1 pt-1 mb-1",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.date_from = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.date_from]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "class": "form-control mt-1 pt-1 mb-1",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.date_to = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.date_to]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select mt-1 pt-1 mb-1",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.FUND_SCODE = $event;
    })
  }, [_hoisted_24, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.funds, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.FUND_SCODE,
      key: item.recid
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FUNDDETAIL_NAME), 9
    /* TEXT, PROPS */
    , _hoisted_25);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.FUND_SCODE]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select mt-1 pt-1 mb-1",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.FJEVTYP = $event;
    })
  }, [_hoisted_28, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.jevtype, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_29);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.FJEVTYP]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [$data.type === '0' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_31, "Print")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.type === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "btn btn-primary mt-3",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.print($data.FUND_SCODE, $data.FJEVTYP, $data.date_from, $data.date_to);
    })
  }, "Print")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.type === '2' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    type: "button",
    "class": "btn btn-primary mt-3",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.printSecond($data.FUND_SCODE, $data.FJEVTYP, $data.date_from, $data.date_to);
    })
  }, "Print")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Jevh/JevReport.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Jevh/JevReport.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JevReport_vue_vue_type_template_id_66d75c96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JevReport.vue?vue&type=template&id=66d75c96 */ "./resources/js/Pages/Jevh/JevReport.vue?vue&type=template&id=66d75c96");
/* harmony import */ var _JevReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JevReport.vue?vue&type=script&lang=js */ "./resources/js/Pages/Jevh/JevReport.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_JevReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_JevReport_vue_vue_type_template_id_66d75c96__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Jevh/JevReport.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Jevh/JevReport.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Jevh/JevReport.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JevReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JevReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JevReport.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/JevReport.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Jevh/JevReport.vue?vue&type=template&id=66d75c96":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Jevh/JevReport.vue?vue&type=template&id=66d75c96 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JevReport_vue_vue_type_template_id_66d75c96__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JevReport_vue_vue_type_template_id_66d75c96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JevReport.vue?vue&type=template&id=66d75c96 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/JevReport.vue?vue&type=template&id=66d75c96");


/***/ })

}]);