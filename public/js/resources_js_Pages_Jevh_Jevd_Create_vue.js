"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Jevh_Jevd_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_ToCurrency_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/ToCurrency.vue */ "./resources/js/Shared/ToCurrency.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ToCurrency: _Shared_ToCurrency_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    data: Object,
    jevd1: Array,
    totalCredit: Number,
    totalDebit: Number,
    data1: Object
  },
  data: function data() {
    return {
      jevtype: {
        1: "Collection",
        2: "Check Disbursement",
        3: "Cash Disbursement",
        4: "General",
        5: "ADA",
        6: "Procurement"
      },
      jevd: {},
      factcodes: [],
      subcode1: [],
      subcode2: [],
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        fiscalyear: this.data.fiscalyear,
        FUND_SCODE: this.data.fund_scode,
        FJEVNO: this.data.fjevno,
        FRESPCTR: "",
        FACTCODE: "",
        FSUBCDE: "",
        FSUBCDE2: "",
        FALOBNO: "",
        FVOUCHNO: "",
        FPRNO: "",
        FDEBIT: "",
        FCREDIT: "",
        FREMARKS: "",
        isSubcode1: '',
        isSubcode2: ''
      }),
      jevdData: {},
      total: {},
      pageTitle: "",
      isDisabled: false,
      recid_to_update: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getChartAccount();

              _context.next = 3;
              return _this.getTotal();

            case 3:
              if (!!_this.editData) {
                _this.form.FRESPCTR = _this.jevdData.FRESPCTR;
                _this.form.FACTCODE = _this.jevdData.FACTCODE;
                _this.form.FSUBCDE = _this.jevdData.FSUBCDE;
                _this.form.FSUBCDE2 = _this.jevdData.FSUBCDE2;
                _this.form.FALOBNO = _this.jevdData.FALOBNO;
                _this.form.FVOUCHNO = _this.jevdData.FVOUCHNO;
                _this.form.FPRNO = _this.jevdData.FPRNO;
                _this.form.FDEBIT = _this.jevdData.FDEBIT;
                _this.form.FCREDIT = _this.jevdData.FCREDIT;
                _this.form.FREMARKS = _this.jevdData.FCREDIT;
                _this.form.recid = _this.jevdData.recid;

                _this.getSubCode1();

                _this.getSubCode2();
              } else {
                _this.pageTitle = 'Create';
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    'jevdData': function jevdData(value) {
      this.getSubCode1();
      this.getSubCode2();
    },
    'form.FACTCODE': function formFACTCODE(value) {
      this.form.FSUBCDE = '';
      this.form.FSUBCDE2 = '';
    }
  },
  methods: {
    getChartAccount: function getChartAccount() {
      var _this2 = this;

      axios.post('/jevd/getChartAccount').then(function (response) {
        _this2.factcodes = response.data;
      });
    },
    getSubCode1: function getSubCode1() {
      var _this3 = this;

      axios.post('/jevd/getSubCode1', {
        FACTCODE: this.form.FACTCODE
      }).then(function (response) {
        _this3.subcode1 = response.data;
        _this3.form.isSubcode1 = response.data.length != 0;
      });
    },
    getSubCode2: function getSubCode2() {
      var _this4 = this;

      axios.post('/jevd/getSubCode2', {
        FACTCODE: this.form.FACTCODE
      }).then(function (response) {
        _this4.subcode2 = response.data;
        _this4.form.isSubcode2 = response.data.length != 0;
      });
    },
    submit: function submit() {
      var _this5 = this;

      if (this.pageTitle == 'Create') {
        this.form.post("/jevd/", {
          onSuccess: function onSuccess() {
            _this5.form.reset();
          }
        });
      } else {
        this.form.patch('/jevh/jevd-update/' + this.recid_to_update, {
          onFinish: function onFinish(visit) {
            _this5.$inertia.visit('/jevh/jevd-create/' + _this5.data.recid);
          }
        });
      }
    },
    editJevD: function editJevD(id) {
      var _this6 = this;

      axios.get('/jevd/' + id + '/edit').then(function (response) {
        _this6.recid_to_update = id;
        _this6.jevdData = response.data;
        _this6.form.FRESPCTR = response.data.FRESPCTR;
        _this6.form.FACTCODE = response.data.FACTCODE;
        _this6.form.FSUBCDE = response.data.FSUBCDE;
        _this6.form.FSUBCDE2 = response.data.FSUBCDE2;
        _this6.form.FALOBNO = response.data.FALOBNO;
        _this6.form.FVOUCHNO = response.data.FVOUCHNO;
        _this6.form.FPRNO = response.data.FPRNO;
        _this6.form.FDEBIT = response.data.FDEBIT;
        _this6.form.FCREDIT = response.data.FCREDIT;
        _this6.form.FREMARKS = response.data.FREMARKS;
        _this6.pageTitle = 'Edit';
      });
    },
    getjevdData: function getjevdData() {
      var _this7 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/jevd/get-jevdData";
      var payload = {
        fjevno: this.data.fjevno,
        fund_scode: this.data.fund_scode,
        fiscalyear: this.data.fiscalyear
      };
      axios.post(url, payload).then(function (response) {
        var data = response.data;
        _this7.jevd = data;
      });
    },
    deleteJevd: function deleteJevd(id) {
      var _this8 = this;

      var text = "Warning!\Are you sure you want to Delete this Record?";

      if (confirm(text) == true) {
        this.$inertia["delete"]("/jevd/" + id, {
          onFinish: function onFinish(visit) {
            _this8.$inertia.visit('/jevh/jevd-create/' + _this8.data.recid);
          }
        });
      }
    },
    getTotal: function getTotal() {
      var _this9 = this;

      var self = this;
      axios.post('/jevd/credit-debit-total', {
        FJEVNO: this.data.FJEVNO,
        FUND_SCODE: this.data.FUND_SCODE,
        fiscalyear: this.data.fiscalyear
      }).then(function (response) {
        _this9.total = response.data;
        self.isFullyLoaded = true;
      });
    } // closeJev(){
    //     if(this.total.totalCredit != this.total.totalDebit){
    //         this.form.errors("Credit is not equal to credit", 'error')
    //     }else{
    //         this.$inertia.get('/jevh/index');
    //     }
    // }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ToCurrency.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ToCurrency.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['money']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=template&id=3f74ec69":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=template&id=3f74ec69 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = {
  "class": "col-md-3"
};
var _hoisted_4 = {
  "class": "card card shadow"
};
var _hoisted_5 = {
  "class": "card-body"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-6"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Fiscal Year")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "col-md-6"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Jev Type")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
var _hoisted_13 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Fund Details Code")], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_15];
var _hoisted_17 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col-md-6"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "JEV Number")], -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 0,
  "class": "text-danger"
};
var _hoisted_22 = {
  "class": "col-md-6"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "JEV Date")], -1
/* HOISTED */
);

var _hoisted_24 = {
  key: 0,
  "class": "text-danger"
};
var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-md-6"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Check No")], -1
/* HOISTED */
);

var _hoisted_28 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_29 = {
  "class": "col-md"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Ref #")], -1
/* HOISTED */
);

var _hoisted_31 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Payee")], -1
/* HOISTED */
);

var _hoisted_33 = {
  key: 1,
  "class": "fs-6 c-red-500"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Description")], -1
/* HOISTED */
);

var _hoisted_35 = {
  key: 2,
  "class": "fs-6 c-red-500"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Prepared by:")], -1
/* HOISTED */
);

var _hoisted_37 = {
  key: 3,
  "class": "fs-6 c-red-500"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Position")], -1
/* HOISTED */
);

var _hoisted_39 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Approved by:")], -1
/* HOISTED */
);

var _hoisted_41 = {
  key: 5,
  "class": "fs-6 c-red-500"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Position")], -1
/* HOISTED */
);

var _hoisted_43 = {
  key: 6,
  "class": "fs-6 c-red-500"
};
var _hoisted_44 = {
  "class": "col-md-9"
};
var _hoisted_45 = {
  "class": "form-group row p-3"
};
var _hoisted_46 = {
  "class": "col-12 mb-1"
};
var _hoisted_47 = {
  "class": "card card shadow"
};
var _hoisted_48 = {
  "class": "card-body"
};
var _hoisted_49 = {
  "class": "row"
};
var _hoisted_50 = {
  "class": "col-md-2"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "RespCenter")], -1
/* HOISTED */
);

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Voucher #")], -1
/* HOISTED */
);

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "OBR #")], -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "col-md-2"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Act Code")], -1
/* HOISTED */
);

var _hoisted_56 = ["value"];
var _hoisted_57 = {
  key: 0,
  div: "",
  "class": "fs-6 c-red text-danger"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Sub Code")], -1
/* HOISTED */
);

var _hoisted_59 = ["value"];
var _hoisted_60 = {
  key: 1,
  "class": "text-danger"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Sub Code2")], -1
/* HOISTED */
);

var _hoisted_62 = ["value"];
var _hoisted_63 = {
  key: 2,
  "class": "text-danger"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-4\"><label class=\"col-form-label\"><b>Act Title</b></label><input type=\"text\" class=\"form-control\" autocomplete=\"chrome-off\"><label class=\"col-form-label\"><b>Sub Code Title</b></label><input type=\"text\" class=\"form-control\" autocomplete=\"chrome-off\"><label class=\"col-form-label\"><b>Sub Code2 Title</b></label><input type=\"text\" class=\"form-control\" autocomplete=\"chrome-off\"></div>", 1);

var _hoisted_65 = {
  "class": "col-md-4"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Remarks")], -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "row"
};
var _hoisted_68 = {
  "class": "col-md-2"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PR #")], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "col-md-4"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-6 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Debit")], -1
/* HOISTED */
);

var _hoisted_72 = ["disabled", "placeholder"];
var _hoisted_73 = {
  key: 0,
  "class": "fs-6 c-red text-danger"
};
var _hoisted_74 = {
  "class": "col-md-4"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-6 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Credit")], -1
/* HOISTED */
);

var _hoisted_76 = ["disabled", "placeholder"];
var _hoisted_77 = {
  key: 0,
  "class": "fs-6 c-red text-danger"
};
var _hoisted_78 = {
  "class": "modal-footer"
};
var _hoisted_79 = ["disabled"];
var _hoisted_80 = ["disabled"];
var _hoisted_81 = {
  "class": "col-12"
};
var _hoisted_82 = {
  "class": "bgc-white p-20 bd table-responsive shadow"
};
var _hoisted_83 = {
  "class": "table table-hover"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "RespCtr"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "ActCode"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "ActCode Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "SubCode"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "SubCode Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "SubCode2"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "SubCode2 Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Voucher"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "OBR#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "PR#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Debit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Credit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Remarks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th scope=\"col\" style=\"width: 30%\"></th> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "text-align": "right"
  }
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_85 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_86 = {
  "class": "dropdown dropstart"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-secondary btn-sm action-btn",
  type: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-three-dots",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
})])], -1
/* HOISTED */
);

var _hoisted_88 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_89 = ["onClick"];

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-pencil-square",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
})], -1
/* HOISTED */
);

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit");

var _hoisted_92 = [_hoisted_90, _hoisted_91];

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "dropdown-divider action-divider"
})], -1
/* HOISTED */
);

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-trash-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
})], -1
/* HOISTED */
);

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ");

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "6"
}, null, -1
/* HOISTED */
);

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "2",
  "class": "text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Total Debit")], -1
/* HOISTED */
);

var _hoisted_98 = {
  colspan: "2"
};

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "2",
  "class": "text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Total Credit")], -1
/* HOISTED */
);

var _hoisted_100 = {
  colspan: "2"
};
var _hoisted_101 = {
  key: 0
};

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "9"
}, null, -1
/* HOISTED */
);

var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fs-6 c-red text-danger"
}, "Debit is not equal to credit!!!")], -1
/* HOISTED */
);

var _hoisted_104 = [_hoisted_102, _hoisted_103];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_back_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("back-button");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_to_currency = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("to-currency");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_back_button, {
    backToURL: '/jevh/index'
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" new design "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header\">\r\n                        Add Jevd\r\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.fiscalyear = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fiscalyear]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.fjevtyp = $event;
    })
  }, _hoisted_12, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.fjevtyp]]), $data.form.errors.fjevtyp ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fjevtyp), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.fund_scode = $event;
    })
  }, _hoisted_16, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.fund_scode]]), $data.form.errors.fund_scode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fund_scode), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.fjevno = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fjevno]]), $data.form.errors.fjevno ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fjevno), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.fjevdate = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fjevdate]]), $data.form.errors.fjevdate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fjevdate), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.fchkno = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fchkno]]), $data.form.errors.fchkno ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fchkno), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.frefno = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.frefno]]), $data.form.errors.frefno ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.frefno), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.fpayee = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fpayee]]), $data.form.errors.fpayee ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fpayee), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.fremk = $event;
    }),
    placeholder: "Write here",
    id: "floatingTextarea2",
    style: {
      "height": "105px"
    }
  }, "\r\n                                ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fremk]]), $data.form.errors.fremk ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fremk), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.fprepby = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fprepby]]), $data.form.errors.fprepby ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fprepby), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.fprepd = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fprepd]]), $data.form.errors.fprepd ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fprepd), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.fappvby = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fappvby]]), $data.form.errors.fappvby ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fappvby), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.fappvd = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.fappvd]]), $data.form.errors.fappvd ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.fappvd), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
  /* HYDRATE_EVENTS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end here "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" mb-1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card card text-dark bg-light shadow\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"col-12 gap-5\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\">\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Jev Type:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ jevtype[data.fjevtyp] }}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>FUND:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fund_scode }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>JEV No.:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fjevno }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>JEV Date:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fjevdate }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Check:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fchkno }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Ref#:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.frefno }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-4\">\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Payee:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fpayee }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Prepared By:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fprepby }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Position:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fprepd }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Aprroved By:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fappvby }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-4\">\r\n                                                        <label class=\"col-form-label\" for=\"colFormLabelSm\" style=\"text-align:right\"><b>Position:</b></label>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <p class=\"col-form-label\">{{ data.fappvd }}</p>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-4\">\r\n                                            <div class=\"col-sm-12 form-floating\">                               \r\n                                                <textarea class=\"col-form-label form-control\" style=\"height: 200px\" readonly v-model=\"data.fremk\"></textarea>\r\n                                                <label for=\"floatingInput\"><b>DESCRIPTION</b></label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.FRESPCTR = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.FRESPCTR]]), _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.form.FVOUCHNO = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.FVOUCHNO]]), _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.form.FALOBNO = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.FALOBNO]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.form.FACTCODE = $event;
    }),
    onChange: _cache[18] || (_cache[18] = function ($event) {
      return $options.getSubCode1(), $options.getSubCode2();
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.factcodes, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.FACTCODE,
      key: item.recid
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FTITLE), 9
    /* TEXT, PROPS */
    , _hoisted_56);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.FACTCODE]]), $data.form.errors.FACTCODE ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FACTCODE), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.form.FSUBCDE = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.subcode1, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      option: "",
      value: item.FSUBCDE,
      key: item.recid
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FSTITLE), 9
    /* TEXT, PROPS */
    , _hoisted_59);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.FSUBCDE]]), $data.form.errors.FSUBCDE ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FSUBCDE), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.form.FSUBCDE2 = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.subcode2, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.FSUBCDE2,
      key: item.recid
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FSTITLE2), 9
    /* TEXT, PROPS */
    , _hoisted_62);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.FSUBCDE2]]), $data.form.errors.FSUBCDE2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FSUBCDE2), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $props.data.fremk = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.data.fremk]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.form.FPRNO = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.FPRNO]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.form.FDEBIT = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off",
    disabled: $data.form.FCREDIT != '',
    placeholder: $data.form.FCREDIT != '' ? "Unable to input Debit" : ""
  }, null, 8
  /* PROPS */
  , _hoisted_72), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.FDEBIT]]), $data.form.errors.FDEBIT ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FDEBIT), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $data.form.FCREDIT = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off",
    disabled: $data.form.FDEBIT != '',
    placeholder: $data.form.FDEBIT != '' ? "Unable to input Credit" : ""
  }, null, 8
  /* PROPS */
  , _hoisted_76), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.FCREDIT]]), $data.form.errors.FCREDIT ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FCREDIT), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [$data.pageTitle === 'Create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.isDisabled
  }, " Add" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.processing ? 'ing...' : ''), 9
  /* TEXT, PROPS */
  , _hoisted_79)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.pageTitle === 'Edit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.isDisabled
  }, "Update", 8
  /* PROPS */
  , _hoisted_80)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
  /* HYDRATE_EVENTS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.jevd1, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FRESPCTR), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FACTCODE), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FTITLE), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FSUBCDE), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FSTITLE), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FSUBCDE2), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FSTITLE2), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FVOUCHNO), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FALOBNO), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FPRNO), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.jevdDebit), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.jevdCredit), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.FREMARKS), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.editJevD(item.recid);
      }
    }, _hoisted_92, 8
    /* PROPS */
    , _hoisted_89)]), _hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "text-danger dropdown-item",
      onClick: function onClick($event) {
        return $options.deleteJevd(item.recid);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_94, _hoisted_95];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"])])])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_96, _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_to_currency, {
    money: $props.totalDebit
  }, null, 8
  /* PROPS */
  , ["money"])])]), _hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_to_currency, {
    money: $props.totalCredit
  }, null, 8
  /* PROPS */
  , ["money"])])])]), $props.totalCredit != $props.totalDebit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_101, _hoisted_104)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-4\">\r\n                <div class=\"card card shadow\">\r\n                    <div class=\"card-header\">\r\n                        Add Jevd\r\n                    </div>\r\n                    <form @submit.prevent=\"submit()\">\r\n                        <div class=\"card-body\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"col-form-label\"><b>RespCenter</b></label>\r\n                                    <input type=\"text\" v-model=\"form.FRESPCTR\" class=\"form-control\" autocomplete=\"chrome-off\">\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"col-form-label\"><b>Voucher #</b></label>\r\n                                    <input type=\"text\" v-model=\"form.FVOUCHNO\" class=\"form-control\" autocomplete=\"chrome-off\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"col-mb-3 col-form-label\"><b>OBR #</b></label>\r\n                                    <input type=\"text\" v-model=\"form.FALOBNO\" class=\"form-control\" autocomplete=\"chrome-off\">\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"col-form-label\"><b>PR #</b></label>\r\n                                    <input type=\"text\" v-model=\"form.FPRNO\" class=\"form-control\" autocomplete=\"chrome-off\"> \r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 \">\r\n                                    <label class=\"col-form-label\"><b>PR #</b></label>\r\n                                    <input type=\"text\" v-model=\"form.FPRNO\" class=\"form-control\" autocomplete=\"chrome-off\"> \r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"col-form-label\"><b>Act Code</b></label>\r\n                                    <select  class=\"form-select\" v-model=\"form.FACTCODE\" @change=\"getSubCode1(), getSubCode2()\">\r\n                                        <option v-for=\"item in factcodes\" :value=\"item.FACTCODE\" :key=\"item.recid\">{{ item.FTITLE}}</option>\r\n                                    </select>\r\n \r\n                                    <div class=\"fs-6 c-red text-danger\" v-if=\"form.errors.FACTCODE\"> {{form.errors.FACTCODE}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 \">\r\n                                    <label class=\"col-form-label\"><b>Sub Code</b></label>\r\n                                    <select class=\"form-select\" v-model=\"form.FSUBCDE\">\r\n                                    <option v-for=\"item in subcode1\" :value=\"item.FSUBCDE\" :key=\"item.recid\"> {{ item.FSTITLE}} </option></select>\r\n                                    <div class=\"text-danger\" v-if=\"form.errors.FSUBCDE\"> {{form.errors.FSUBCDE}}</div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"col-form-label\"><b>Sub Code2</b></label>\r\n                                    <select class=\"form-select\" v-model=\"form.FSUBCDE2\">\r\n                                    <option v-for=\"item in subcode2\" :value=\"item.FSUBCDE2\" :key=\"item.recid\">{{item.FSTITLE2}}</option></select>\r\n                                    <div class=\"text-danger\" v-if=\"form.errors.FSUBCDE2\"> {{form.errors.FSUBCDE2}}</div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <label class=\"col-mb-3 col-form-label\"><b>Debit</b></label>\r\n                            <input \r\n                                type=\"number\" \r\n                                v-model=\"form.FDEBIT\" \r\n                                class=\"form-control\" \r\n                                autocomplete=\"chrome-off\" \r\n                                :disabled=\"form.FCREDIT != ''\"\r\n                                :placeholder=\"form.FCREDIT != '' ? `Unable to input Debit` : ``\"\r\n                            >\r\n                            <div class=\"fs-6 c-red text-danger\" v-if=\"form.errors.FDEBIT\"> {{form.errors.FDEBIT}}</div>\r\n    \r\n                            <label class=\"col-mb-3 col-form-label\"><b>Credit</b></label>\r\n                            <input \r\n                                type=\"number\" \r\n                                v-model=\"form.FCREDIT\" \r\n                                class=\"form-control\"\r\n                                autocomplete=\"chrome-off\"\r\n                                :disabled=\"form.FDEBIT != ''\"\r\n                                :placeholder=\"form.FDEBIT != '' ? `Unable to input Credit` : ``\"\r\n                            >\r\n                            <div class=\"fs-6 c-red text-danger\" v-if=\"form.errors.FCREDIT\"> {{form.errors.FCREDIT}}</div>\r\n    \r\n                            <label class=\"col-mb-3 col-form-label\"><b>Description</b></label>\r\n                                <textarea class=\"form-control\" v-model=\"form.FREMARKS\" id=\"floatingTextarea2\" style=\"height:105px;\"></textarea> \r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" v-if=\"pageTitle === 'Create'\" :disabled=\"isDisabled\"> Add{{form.processing ? 'ing...':''}}</button>\r\n                            <button type=\"submit\" class=\"btn btn-primary\" v-if=\"pageTitle === 'Edit'\" :disabled=\"isDisabled\">Update</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ToCurrency.vue?vue&type=template&id=7ddbabf0":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ToCurrency.vue?vue&type=template&id=7ddbabf0 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number($props.money).toLocaleString(undefined, {
    minimumFractionDigits: 2
  })), 1
  /* TEXT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Jevh/Jevd/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Jevh/Jevd/Create.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_3f74ec69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=3f74ec69 */ "./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=template&id=3f74ec69");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_3f74ec69__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Jevh/Jevd/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ToCurrency.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/ToCurrency.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToCurrency_vue_vue_type_template_id_7ddbabf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToCurrency.vue?vue&type=template&id=7ddbabf0 */ "./resources/js/Shared/ToCurrency.vue?vue&type=template&id=7ddbabf0");
/* harmony import */ var _ToCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToCurrency.vue?vue&type=script&lang=js */ "./resources/js/Shared/ToCurrency.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ToCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ToCurrency_vue_vue_type_template_id_7ddbabf0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/ToCurrency.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ToCurrency.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/ToCurrency.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToCurrency.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ToCurrency.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=template&id=3f74ec69":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=template&id=3f74ec69 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_3f74ec69__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_3f74ec69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=3f74ec69 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Jevd/Create.vue?vue&type=template&id=3f74ec69");


/***/ }),

/***/ "./resources/js/Shared/ToCurrency.vue?vue&type=template&id=7ddbabf0":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/ToCurrency.vue?vue&type=template&id=7ddbabf0 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToCurrency_vue_vue_type_template_id_7ddbabf0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ToCurrency_vue_vue_type_template_id_7ddbabf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ToCurrency.vue?vue&type=template&id=7ddbabf0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ToCurrency.vue?vue&type=template&id=7ddbabf0");


/***/ })

}]);