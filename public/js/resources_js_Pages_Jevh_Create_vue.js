"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Jevh_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Create.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_ToCurrency_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/ToCurrency.vue */ "./resources/js/Shared/ToCurrency.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ToCurrency: _Shared_ToCurrency_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      // jevtype:{
      //     1:"Collection",
      //     2:"Check Disbursement",
      //     3:"Cash Disbursement",
      //     4:"General",
      //     5:"ADA",
      //     6:"Procurement"
      // },
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
      funds: "",
      jevd: {},
      factcodes: [],
      subcode1: [],
      subcode2: [],
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        jevh: {
          fiscalyear: new Date().getFullYear(),
          fund_scode: "",
          fjevno: "",
          fjevtyp: "",
          fjevdate: "",
          fpayee: "",
          fchkno: "",
          fremk: "",
          frefno: "",
          fprepby: "",
          fprepd: "",
          fappvby: "",
          fappvd: "" // recid:"",

        },
        jevd: {
          // fiscalyear: this.form.jevh.fiscalyear,
          // FUND_SCODE: this.form.jevh.fund_scode,
          // FJEVNO: this.form.jevh.fjevno,
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
        }
      }),
      // jevdForm: useForm ({
      //     fiscalyear: this.form.jevh.fiscalyear,
      //     FUND_SCODE: this.form.jevh.fund_scode,
      //     FJEVNO: this.form.jevh.fjevno,
      //     FRESPCTR: "",
      //     FACTCODE: "",
      //     FSUBCDE: "",
      //     FSUBCDE2: "",
      //     FALOBNO: "",
      //     FVOUCHNO: "",
      //     FPRNO: "",
      //     FDEBIT: "",
      //     FCREDIT: "",
      //     FREMARKS: "",
      //     isSubcode1:'',
      //     isSubcode2:'',
      // }),
      // form.jevh: useForm({
      //     fiscalyear: new Date().getFullYear(),
      //     fund_scode:"",
      //     fjevno:"",
      //     fjevtyp:"",
      //     fjevdate:"",
      //     fpayee:"",
      //     fchkno:"",
      //     fremk:"",
      //     frefno: "",
      //     fprepby:"",
      //     fprepd:"",
      //     fappvby:"",
      //     fappvd:"",
      //     // recid:"",
      // }),
      // jevdData:{},
      // total:{},
      // pageTitle: 'create',
      isDisabled: false,
      recid_to_update: null
    };
  },
  mounted: function mounted() {
    this.getFundDetail(), this.getChartAccount();

    if (!!this.editData) {
      this.form.jevd.FRESPCTR = this.jevdData.FRESPCTR;
      this.form.jevd.FACTCODE = this.jevdData.FACTCODE;
      this.form.jevd.FSUBCDE = this.jevdData.FSUBCDE;
      this.form.jevd.FSUBCDE2 = this.jevdData.FSUBCDE2;
      this.form.jevd.FALOBNO = this.jevdData.FALOBNO;
      this.form.jevd.FVOUCHNO = this.jevdData.FVOUCHNO;
      this.form.jevd.FPRNO = this.jevdData.FPRNO;
      this.form.jevd.FDEBIT = this.jevdData.FDEBIT;
      this.form.jevd.FCREDIT = this.jevdData.FCREDIT;
      this.form.jevd.FREMARKS = this.jevdData.FCREDIT;
      this.form.jevd.recid = this.jevdData.recid;
      this.getSubCode1();
      this.getSubCode2();
    } else {
      this.pageTitle = 'Create';
    }
  },
  watch: {
    'jevdData': function jevdData(value) {
      this.getSubCode1();
      this.getSubCode2();
    },
    'form.jevd.FACTCODE': function formJevdFACTCODE(value) {
      this.form.jevd.FSUBCDE = '';
      this.form.jevd.FSUBCDE2 = '';
    }
  },
  methods: {
    getFundDetail: function getFundDetail() {
      var _this = this;

      axios.post('/jevh/getFundDetail').then(function (response) {
        _this.funds = response.data;
      });
    },
    getChartAccount: function getChartAccount() {
      var _this2 = this;

      axios.post('/jevd/getChartAccount').then(function (response) {
        _this2.factcodes = response.data;
      });
    },
    getSubCode1: function getSubCode1() {
      var _this3 = this;

      axios.post('/jevd/getSubCode1', {
        FACTCODE: this.form.jevd.FACTCODE
      }).then(function (response) {
        _this3.subcode1 = response.data;
        _this3.form.jevd.isSubcode1 = response.data.length != 0;
      });
    },
    getSubCode2: function getSubCode2() {
      var _this4 = this;

      axios.post('/jevd/getSubCode2', {
        FACTCODE: this.form.jevd.FACTCODE
      }).then(function (response) {
        _this4.subcode2 = response.data;
        _this4.form.jevd.isSubcode2 = response.data.length != 0;
      });
    },
    submit: function submit() {
      var _this5 = this;

      if (this.pageTitle == 'Create') {
        this.form.post("/jevh/store-jev", {// onSuccess: () => {
          //     this.form.reset();
          // }
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
    deleteJevd: function deleteJevd(id) {
      var _this7 = this;

      var text = "Warning!\Are you sure you want to Delete this Record?";

      if (confirm(text) == true) {
        this.$inertia["delete"]("/jevd/" + id, {
          onFinish: function onFinish(visit) {
            _this7.$inertia.visit('/jevh/jevd-create/' + _this7.data.recid);
          }
        });
      }
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Create.vue?vue&type=template&id=6a49fbb6":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Create.vue?vue&type=template&id=6a49fbb6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_11 = ["value"];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Fund Details Code")], -1
/* HOISTED */
);

var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col-md-6"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "JEV Number")], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "col-md-6"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "JEV Date")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "row"
};
var _hoisted_20 = {
  "class": "col-md-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Check No")], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "col-md"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Ref #")], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Payee")], -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Description")], -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Prepared by:")], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Position")], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Approved by:")], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-3 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Position")], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "col-md-9"
};
var _hoisted_31 = {
  "class": "form-group row p-3"
};
var _hoisted_32 = {
  "class": "col-12"
};
var _hoisted_33 = {
  "class": "bgc-white p-20 bd table-responsive shadow"
};
var _hoisted_34 = {
  "class": "table table-hover",
  style: {
    "height": "360px"
  }
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr v-for=\"item in jevd1\" :key=\"item.index\">\r\n                                    <td>{{ item.FRESPCTR }}</td>\r\n                                    <td>{{ item.FACTCODE }}</td>\r\n                                    <td>{{ item.FTITLE }}</td>\r\n                                    <td>{{ item.FSUBCDE }}</td>\r\n                                    <td>{{ item.FSTITLE }}</td>\r\n                                    <td>{{ item.FSUBCDE2 }}</td>\r\n                                    <td>{{ item.FSTITLE2 }}</td>\r\n                                    <td>{{ item.FVOUCHNO }}</td>\r\n                                    <td>{{ item.FALOBNO }}</td>\r\n                                    <td>{{ item.FPRNO }}</td>\r\n                                    <td>{{ item.jevdDebit }}</td>\r\n                                    <td>{{ item.jevdCredit }}</td>\r\n                                    <td>{{ item.FREMARKS }}</td>\r\n                                    <td style=\"text-align: right\">\r\n                                        <div class=\"dropdown dropstart\">\r\n                                            <button class=\"btn btn-secondary btn-sm action-btn\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-three-dots\" viewBox=\"0 0 16 16\">\r\n                                                <path d=\"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/>\r\n                                                </svg>\r\n                                            </button>\r\n\r\n                                            <ul class=\"dropdown-menu action-dropdown\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                                <li><button class=\"dropdown-item\" @click=\"editJevD(item.recid)\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n                                                    <path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\r\n                                                    <path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\r\n                                                    </svg> Edit</button></li>\r\n\r\n                                                <li> <hr class=\"dropdown-divider action-divider\"></li>\r\n                                                    <li><Link class=\"text-danger dropdown-item\" @click=\"deleteJevd(item.recid)\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\">\r\n                                                    <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>\r\n                                                    </svg> Delete </Link></li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr> ")], -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "6"
}, null, -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "2",
  "class": "text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Total Debit")], -1
/* HOISTED */
);

var _hoisted_39 = {
  colspan: "2"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "2",
  "class": "text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Total Credit")], -1
/* HOISTED */
);

var _hoisted_41 = {
  colspan: "2"
};
var _hoisted_42 = {
  key: 0
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "9"
}, null, -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fs-6 c-red text-danger"
}, "Debit is not equal to credit!!!")], -1
/* HOISTED */
);

var _hoisted_45 = [_hoisted_43, _hoisted_44];
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
  "class": "col-md-5"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Act Code/Title")], -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Sub Code/Title")], -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Sub Code2/Title")], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "col-md-5"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Remarks")], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "row"
};
var _hoisted_61 = {
  "class": "col-md-2"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PR #")], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "col-md-4"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-6 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Debit")], -1
/* HOISTED */
);

var _hoisted_65 = ["disabled", "placeholder"];
var _hoisted_66 = {
  "class": "col-md-4"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-mb-6 col-form-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Credit")], -1
/* HOISTED */
);

var _hoisted_68 = ["disabled", "placeholder"];
var _hoisted_69 = {
  "class": "col-2"
};
var _hoisted_70 = ["disabled"];
var _hoisted_71 = ["disabled"];

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Save All")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_back_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("back-button");

  var _component_to_currency = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("to-currency");

  var _component_select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pageTitle), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_back_button, {
    backToURL: '/jevh/index'
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.jevh.fiscalyear = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fiscalyear]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.jevh.fjevtyp = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.jevtype, function (items, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: items.value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(items.name), 9
    /* TEXT, PROPS */
    , _hoisted_11);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.jevh.fjevtyp]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fjevtyp\">{{ form.errors.jevh.fjevtyp }}</div> ")])]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.jevh.fund_scode = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.funds, function (items) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: items.FUND_SCODE,
      key: items.recid
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(items.FUNDDETAIL_NAME), 9
    /* TEXT, PROPS */
    , _hoisted_13);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.jevh.fund_scode]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fund_scode\">{{ form.errors.jevh.fund_scode }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.jevh.fjevno = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fjevno]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-danger\" v-if=\"form.errors.jevh.fjevno\">{{ form.errors.jevh.fjevno }}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.jevh.fjevdate = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fjevdate]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-danger\" v-if=\"form.errors.jevh.fjevdate\">{{ form.errors.jevh.fjevdate }}</div> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.jevh.fchkno = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fchkno]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fchkno\">{{ form.errors.jevh.fchkno }}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.jevh.frefno = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.frefno]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.frefno\">{{ form.errors.jevh.frefno }}</div> ")])]), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.jevh.fpayee = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fpayee]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fpayee\">{{ form.errors.jevh.fpayee }}</div> "), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.jevh.fremk = $event;
    }),
    placeholder: "Write here",
    id: "floatingTextarea2",
    style: {
      "height": "105px"
    }
  }, "\r\n                        ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fremk]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fremk\">{{ form.errors.jevh.fremk }}</div> "), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.jevh.fprepby = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fprepby]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fprepby\">{{ form.errors.jevh.fprepby }}</div> "), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.jevh.fprepd = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fprepd]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fprepd\">{{ form.errors.jevh.fprepd }}</div> "), _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.jevh.fappvby = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fappvby]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fappvby\">{{ form.errors.jevh.fappvby }}</div> "), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.jevh.fappvd = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevh.fappvd]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors.jevh.fappvd\">{{ form.errors.jevh.fappvd }}</div> ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [_hoisted_35, _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_37, _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_to_currency, {
    money: $props.totalDebit
  }, null, 8
  /* PROPS */
  , ["money"])])]), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_to_currency, {
    money: $props.totalCredit
  }, null, 8
  /* PROPS */
  , ["money"])])])]), $props.totalCredit != $props.totalDebit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_42, _hoisted_45)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.jevd.FRESPCTR = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FRESPCTR]]), _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.jevd.FVOUCHNO = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FVOUCHNO]]), _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.form.jevd.FALOBNO = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FALOBNO]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_select2, {
    id: "FACTCODE",
    modelValue: $data.form.jevd.FACTCODE,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.form.jevd.FACTCODE = $event;
    }),
    options: $data.factcodes,
    placeholder: "Select Account Code",
    onSelect: _cache[17] || (_cache[17] = function ($event) {
      return $options.getSubCode1(), $options.getSubCode2();
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red text-danger\" v-if=\"form.errors.jevd.FACTCODE\"> {{form.errors.jevd.FACTCODE}}</div> "), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_select2, {
    modelValue: $data.form.jevd.FSUBCDE,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.form.jevd.FSUBCDE = $event;
    }),
    options: $data.subcode1,
    placeholder: "Select Account Code First"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-danger\" v-if=\"form.errors.jevd.FSUBCDE\"> {{form.errors.jevd.FSUBCDE}}</div> "), _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_select2, {
    modelValue: $data.form.jevd.FSUBCDE2,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.form.jevd.FSUBCDE2 = $event;
    }),
    options: $data.subcode2,
    placeholder: "Select Account Code First"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-danger\" v-if=\"form.errors.jevd.FSUBCDE2\"> {{form.errors.jevd.FSUBCDE2}}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.form.jevd.FREMARKS = $event;
    }),
    rows: "7"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FREMARKS]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.form.jevd.FPRNO = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FPRNO]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.form.jevd.FDEBIT = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off",
    disabled: $data.form.jevd.FCREDIT != '',
    placeholder: $data.form.jevd.FCREDIT != '' ? "Unable to input Debit" : ""
  }, null, 8
  /* PROPS */
  , _hoisted_65), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FDEBIT]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red text-danger\" v-if=\"form.errors.jevd.FDEBIT\"> {{form.errors.jevd.FDEBIT}}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.form.jevd.FCREDIT = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off",
    disabled: $data.form.jevd.FDEBIT != '',
    placeholder: $data.form.jevd.FDEBIT != '' ? "Unable to input Credit" : ""
  }, null, 8
  /* PROPS */
  , _hoisted_68), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.jevd.FCREDIT]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red text-danger\" v-if=\"form.errors.jevd.FCREDIT\"> {{form.errors.jevd.FCREDIT}}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_ctx.pageTitle === 'Create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn-primary",
    disabled: $data.isDisabled,
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return _ctx.saveAll();
    })
  }, " Add" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.jevd.processing ? 'ing...' : ''), 9
  /* TEXT, PROPS */
  , _hoisted_70)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.pageTitle === 'Edit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "btn btn-primary",
    disabled: $data.isDisabled,
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return _ctx.saveAll();
    })
  }, "Update", 8
  /* PROPS */
  , _hoisted_71)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_72], 32
  /* HYDRATE_EVENTS */
  )])])])])])]);
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

/***/ "./resources/js/Pages/Jevh/Create.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Jevh/Create.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_6a49fbb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6a49fbb6 */ "./resources/js/Pages/Jevh/Create.vue?vue&type=template&id=6a49fbb6");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Jevh/Create.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_Accounting_System_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_6a49fbb6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Jevh/Create.vue"]])
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

/***/ "./resources/js/Pages/Jevh/Create.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Jevh/Create.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Create.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Jevh/Create.vue?vue&type=template&id=6a49fbb6":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Jevh/Create.vue?vue&type=template&id=6a49fbb6 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_6a49fbb6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_6a49fbb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=6a49fbb6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Jevh/Create.vue?vue&type=template&id=6a49fbb6");


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