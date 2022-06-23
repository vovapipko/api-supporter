/* 23-06-2022 7:10 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/components/api-components/sort-templates/aply-button-template.js":
      /*!******************************************************************************!*\
  !*** ./src/components/api-components/sort-templates/aply-button-template.js ***!
  \******************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getApplyButtonTemplate: () => /* binding */ getApplyButtonTemplate,
          /* harmony export */
        });
        var getApplyButtonTemplate = function getApplyButtonTemplate(a, b) {
          var c = a.right,
            d = b.y,
            e = b.height;
          return '<div \n            class="apply-filters" \n            style="top: '
            .concat(d - (30 - e) / 2, "px; \n            left: ")
            .concat(c, 'px;">\n          </div>');
        };

        /***/
      },

    /***/ "./src/components/api-components/sort-templates/checkbox-template.js":
      /*!***************************************************************************!*\
    !*** ./src/components/api-components/sort-templates/checkbox-template.js ***!
    \***************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getCheckboxTemplate: () => /* binding */ getCheckboxTemplate,
          /* harmony export */
        });
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../utils */ "./src/utils.js"
        );
        var getCheckboxTemplate = function getCheckboxTemplate(b) {
          var c = b.key,
            d = b.type,
            e = b.value,
            f = b.description,
            g = (0, _utils__WEBPACK_IMPORTED_MODULE_0__.formatFieldTitle)(f),
            h = "true" === e ? "checked" : "";
          return '<div class="form__field form__field--toggle">\n      <span class="field__title">'
            .concat(
              (0, _utils__WEBPACK_IMPORTED_MODULE_0__.formatFieldTitle)(c),
              ':</span>\n      <span data-tooltip="'
            )
            .concat(
              g,
              '" class="field-tooltip">?</span>\n  \n      <div class="toggle-wrapper">\n          <input \n              type="'
            )
            .concat(d, '" \n              name="')
            .concat(c, '" \n              id="')
            .concat(c, '" \n              class="field__toggle--input" \n              value="')
            .concat(e, '" \n              ')
            .concat(h, ' />\n          <label for="')
            .concat(
              c,
              '" class="field__toggle--label"></label>\n          <span class="field-indicator"></span>\n      </div>\n    </div>'
            );
        };

        /***/
      },

    /***/ "./src/components/api-components/sort-templates/list-template.js":
      /*!***********************************************************************!*\
    !*** ./src/components/api-components/sort-templates/list-template.js ***!
    \***********************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getListTemplate: () => /* binding */ getListTemplate,
          /* harmony export */
        });
        var getListTemplate = function getListTemplate(a, b) {
          var c = a.key,
            d = a.title,
            e = a.isActive,
            f = a.isRow;
          return (
            f && b.splice(2),
            '<div class="form__list" id="'
              .concat(c, '">\n                <div class="list__header ')
              .concat(
                "true" === e ? "list__header--open" : "",
                '">\n                    <span class="list__title">'
              )
              .concat(
                d,
                '</span>\n                    <div class="list__arrow list__arrow--open"></div>\n                </div>\n                <div class="list__block">\n                   '
              )
              .concat(f ? '<div class="list__block-wrapper">' : "", "\n                      ")
              .concat(b.join(" "), "\n                   ")
              .concat(f ? "</div>" : "", "\n                </div>\n            </div>")
          );
        };

        /***/
      },

    /***/ "./src/components/api-components/sort-templates/number-template.js":
      /*!*************************************************************************!*\
    !*** ./src/components/api-components/sort-templates/number-template.js ***!
    \*************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getNumberTemplate: () => /* binding */ getNumberTemplate,
          /* harmony export */
        });
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../utils */ "./src/utils.js"
        );
        var getNumberTemplate = function getNumberTemplate(b) {
          var c = b.key,
            d = b.type,
            e = b.value,
            f = e || "unavailableMultiplier" !== c ? e || 20 : "0.01";
          return '<div class="form__field">\n    <span class="field__title">'
            .concat(
              (0, _utils__WEBPACK_IMPORTED_MODULE_0__.formatFieldTitle)(c),
              ':</span>\n    <input \n        id="'
            )
            .concat(c, '" \n        name="')
            .concat(c, '" \n        class="field__text--input" \n        type="')
            .concat(d, '" \n        autocomplete="off" \n        placeholder="')
            .concat(e || "\u041E\u0442", '" \n        value="')
            .concat(e, '" \n        step="')
            .concat(
              f,
              '" \n        min="0" \n        style="width:50%; \n        margin-left: 5px;" />\n </div>'
            );
        };

        /***/
      },

    /***/ "./src/components/api-components/sort-templates/radio-template.js":
      /*!************************************************************************!*\
    !*** ./src/components/api-components/sort-templates/radio-template.js ***!
    \************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getRadioTemplate: () => /* binding */ getRadioTemplate,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../const */ "./src/const.js"
        );
        var getRadioTemplate = function getRadioTemplate(e) {
          var f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
            g = _const__WEBPACK_IMPORTED_MODULE_0__.SORT_TYPES,
            h = "",
            i = '<span class="field__title">API:</span>';
          return (
            e === _const__WEBPACK_IMPORTED_MODULE_0__.RadioTemplateOption.STRATEGY &&
              ((g = _const__WEBPACK_IMPORTED_MODULE_0__.STRATEGIES),
              (h = "form__field--strategy"),
              (i = "")),
            e === _const__WEBPACK_IMPORTED_MODULE_0__.RadioTemplateOption.EXTRA_STRATEGY &&
              ((g = _const__WEBPACK_IMPORTED_MODULE_0__.EXTRA_STRATEGIES),
              (h = "form__field--extra-strategy"),
              (i = "")),
            '<div \n            class="form__field '
              .concat(h, '">\n            ')
              .concat(i, "\n            ")
              .concat(
                g
                  .map(function (a) {
                    return '<input \n                  id="api-'
                      .concat(
                        a,
                        '" \n                  class="field__radio--input" \n                  type="radio" \n                  name="'
                      )
                      .concat(e, '" \n                  ')
                      .concat(
                        null !== window.location.pathname.match(a) ||
                          (f.value && null !== f.value.match(a))
                          ? "checked"
                          : "",
                        ' \n                  value="'
                      )
                      .concat(a, '"/>\n                <label for="api-')
                      .concat(a, '" class="field__radio--label">')
                      .concat(a ? a.toUpperCase() : "-", "</label>");
                  })
                  .join(""),
                "\n        </div>"
              )
          );
        };

        /***/
      },

    /***/ "./src/components/api-components/sort-templates/sort-template.js":
      /*!***********************************************************************!*\
    !*** ./src/components/api-components/sort-templates/sort-template.js ***!
    \***********************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getSortTemplate: () => /* binding */ getSortTemplate,
          /* harmony export */
        });
        /* harmony import */ var _model_model_sort__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../../../model/model-sort */ "./src/model/model-sort.js");
        /* harmony import */ var _checkbox_template__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./checkbox-template */ "./src/components/api-components/sort-templates/checkbox-template.js"
          );
        /* harmony import */ var _list_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./list-template */ "./src/components/api-components/sort-templates/list-template.js"
        );
        /* harmony import */ var _number_template__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./number-template */ "./src/components/api-components/sort-templates/number-template.js"
          );
        /* harmony import */ var _text_teplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./text-teplate */ "./src/components/api-components/sort-templates/text-teplate.js"
        );
        /* harmony import */ var _radio_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./radio-template */ "./src/components/api-components/sort-templates/radio-template.js"
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../const */ "./src/const.js"
        );
        /* harmony import */ var _model_model_list__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../../../model/model-list */ "./src/model/model-list.js");
        /* harmony import */ var _model_model_position__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../../../model/model-position */ "./src/model/model-position.js");
        var getSortTemplate = function getSortTemplate() {
          var j = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.st,
            k = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.apiKey,
            l = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.useCategoryPrediction,
            m = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.withCorrection,
            n = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.fullData,
            o = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.withSku,
            p = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.size,
            q = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.offset,
            r = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.showUnavailable,
            s = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.unavailableMultiplier,
            t = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.strategy,
            u = _model_model_sort__WEBPACK_IMPORTED_MODULE_0__.parameterSort.regionId;
          return '<div class="api" '
            .concat(
              _model_model_position__WEBPACK_IMPORTED_MODULE_8__.positionSort.top &&
                _model_model_position__WEBPACK_IMPORTED_MODULE_8__.positionSort.left
                ? 'style="left: '
                    .concat(
                      _model_model_position__WEBPACK_IMPORTED_MODULE_8__.positionSort.left,
                      "px; top: "
                    )
                    .concat(
                      _model_model_position__WEBPACK_IMPORTED_MODULE_8__.positionSort.top,
                      'px;"'
                    )
                : "",
              ' >\n            <div class="api__header">\n              <button class="header__navigation navigation__drag">.</button>\n            </div>\n            <form class="api__form" id="api__form">\n                '
            )
            .concat(
              (0, _radio_template__WEBPACK_IMPORTED_MODULE_5__.getRadioTemplate)(
                _const__WEBPACK_IMPORTED_MODULE_6__.RadioTemplateOption.TYPE
              ),
              "\n                "
            )
            .concat(
              (0, _text_teplate__WEBPACK_IMPORTED_MODULE_4__.getTextTemplate)(j),
              "\n                "
            )
            .concat(
              (0, _text_teplate__WEBPACK_IMPORTED_MODULE_4__.getTextTemplate)(k),
              "\n                <hr />\n                "
            )
            .concat(
              (0, _checkbox_template__WEBPACK_IMPORTED_MODULE_1__.getCheckboxTemplate)(l),
              "\n                "
            )
            .concat(
              (0, _checkbox_template__WEBPACK_IMPORTED_MODULE_1__.getCheckboxTemplate)(m),
              "\n                "
            )
            .concat(
              (0, _checkbox_template__WEBPACK_IMPORTED_MODULE_1__.getCheckboxTemplate)(n),
              "\n                "
            )
            .concat(
              (0, _checkbox_template__WEBPACK_IMPORTED_MODULE_1__.getCheckboxTemplate)(o),
              "\n                <hr />\n                "
            )
            .concat(
              (0, _list_template__WEBPACK_IMPORTED_MODULE_2__.getListTemplate)(
                _model_model_list__WEBPACK_IMPORTED_MODULE_7__.listSort.size,
                [
                  (0, _number_template__WEBPACK_IMPORTED_MODULE_3__.getNumberTemplate)(p),
                  (0, _number_template__WEBPACK_IMPORTED_MODULE_3__.getNumberTemplate)(q),
                ]
              ),
              "\n                <hr />\n                "
            )
            .concat(
              (0, _list_template__WEBPACK_IMPORTED_MODULE_2__.getListTemplate)(
                _model_model_list__WEBPACK_IMPORTED_MODULE_7__.listSort.availability,
                [
                  (0, _checkbox_template__WEBPACK_IMPORTED_MODULE_1__.getCheckboxTemplate)(r),
                  (0, _number_template__WEBPACK_IMPORTED_MODULE_3__.getNumberTemplate)(s),
                ]
              ),
              "\n                <hr />\n                \n                "
            )
            .concat(
              (0, _list_template__WEBPACK_IMPORTED_MODULE_2__.getListTemplate)(
                _model_model_list__WEBPACK_IMPORTED_MODULE_7__.listSort.other,
                [
                  (0, _radio_template__WEBPACK_IMPORTED_MODULE_5__.getRadioTemplate)(
                    _const__WEBPACK_IMPORTED_MODULE_6__.RadioTemplateOption.STRATEGY,
                    t
                  ),
                  (0, _radio_template__WEBPACK_IMPORTED_MODULE_5__.getRadioTemplate)(
                    _const__WEBPACK_IMPORTED_MODULE_6__.RadioTemplateOption.EXTRA_STRATEGY,
                    t
                  ),
                  (0, _text_teplate__WEBPACK_IMPORTED_MODULE_4__.getTextTemplate)(t),
                  (0, _text_teplate__WEBPACK_IMPORTED_MODULE_4__.getTextTemplate)(u),
                ]
              ),
              "\n            </form>\n        </div>"
            );
        };

        /***/
      },

    /***/ "./src/components/api-components/sort-templates/text-teplate.js":
      /*!**********************************************************************!*\
    !*** ./src/components/api-components/sort-templates/text-teplate.js ***!
    \**********************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getTextTemplate: () => /* binding */ getTextTemplate,
          /* harmony export */
        });
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../utils */ "./src/utils.js"
        );
        var getTextTemplate = function getTextTemplate(b) {
          var c = b.key,
            d = b.type,
            e = b.value,
            f = b.placeholder;
          return '<div class="form__field">\n        <span class="field__title">'
            .concat(
              (0, _utils__WEBPACK_IMPORTED_MODULE_0__.formatFieldTitle)(c),
              ":</span>\n        <input \n            type="
            )
            .concat(d, ' \n            id="')
            .concat(c, '" \n            name="')
            .concat(c, '" \n            value="')
            .concat(e, '" \n            class="field__text--input" \n            placeholder="')
            .concat(f, '"\n            ')
            .concat(
              c === "strategy" ? "disabled" : "",
              '\n            autocomplete="off" />\n    </div>'
            );
        };

        /***/
      },

    /***/ "./src/const.js":
      /*!**********************!*\
    !*** ./src/const.js ***!
    \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ rootElement: () => /* binding */ rootElement,
          /* harmony export */ Timeout: () => /* binding */ Timeout,
          /* harmony export */ KeyCode: () => /* binding */ KeyCode,
          /* harmony export */ RadioTemplateOption: () => /* binding */ RadioTemplateOption,
          /* harmony export */ STRATEGIES: () => /* binding */ STRATEGIES,
          /* harmony export */ EXTRA_STRATEGIES: () => /* binding */ EXTRA_STRATEGIES,
          /* harmony export */ SORT_TYPES: () => /* binding */ SORT_TYPES,
          /* harmony export */ WidgetLocation: () => /* binding */ WidgetLocation,
          /* harmony export */ Session: () => /* binding */ Session,
          /* harmony export */ LocalStorage: () => /* binding */ LocalStorage,
          /* harmony export */ AppType: () => /* binding */ AppType,
          /* harmony export */ withElement: () => /* binding */ withElement,
          /* harmony export */ headerPadding: () => /* binding */ headerPadding,
          /* harmony export */
        });
        var rootElement = document.querySelector("body");
        var Timeout = { APPLY_BUTTON: 6e3, ERROR_MESSAGE: 3e3 };
        var KeyCode = { ENTER: 13 };
        var RadioTemplateOption = {
          TYPE: "type",
          STRATEGY: "strategy",
          EXTRA_STRATEGY: "extra-strategy",
        };
        var STRATEGIES = [
          "simple",
          "advanced",
          "advanced_xname",
          "vectors",
          "vectors_extended",
          "vectors_strict",
          "vectors_advanced",
        ];
        var EXTRA_STRATEGIES = ["", "zero_queries", "zero_queries_predictor"];
        var SORT_TYPES = ["search", "debug"];
        var WidgetLocation = { SORT: "sort.diginetica.net" };
        var Session = { LIST: "listSort", DRAG: "dragSort" };
        var LocalStorage = { DEBUG_KEY: "debugKey" };
        var AppType = { SORT: "sort", AUTOCOMPLETE: "autocomplete" };
        var withElement = { APP: 270 };
        var headerPadding = { Y: 5, X: 18 };

        /***/
      },

    /***/ "./src/controllers/drag-drop-controller.js":
      /*!*************************************************!*\
    !*** ./src/controllers/drag-drop-controller.js ***!
    \*************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ handleFormDragDrop: () => /* binding */ handleFormDragDrop,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/const.js"
        );
        /* harmony import */ var _model_model_position__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../model/model-position */ "./src/model/model-position.js");
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../utils */ "./src/utils.js"
        );
        var f = function getDragElement(a) {
            return a.classList.contains("navigation__drag") || a.closest(".navigation__drag")
              ? a.closest(".api")
              : null;
          },
          g = function checkOutside(b, d) {
            var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : "x";
            return 0 > b - d
              ? "0"
              : b + (_const__WEBPACK_IMPORTED_MODULE_0__.withElement.APP - d) > window.innerWidth
              ? window.innerWidth - _const__WEBPACK_IMPORTED_MODULE_0__.withElement.APP
              : "y" === e
              ? b - d - _const__WEBPACK_IMPORTED_MODULE_0__.headerPadding.Y
              : b - d - _const__WEBPACK_IMPORTED_MODULE_0__.headerPadding.X;
          };
        var handleFormDragDrop = function handleFormDragDrop(a) {
          var c = a.target,
            h = a.offsetX,
            i = a.offsetY;
          c.style.cursor = "grabbing";
          var j = f(c),
            k = function handleFormMousemove(a) {
              var b = a.x,
                c = a.y;
              (0, _utils__WEBPACK_IMPORTED_MODULE_2__.removeElement)(".apply-filters"),
                (j.style.left = "".concat(g(b, h), "px")),
                (_model_model_position__WEBPACK_IMPORTED_MODULE_1__.positionSort.left = g(b, h)),
                (j.style.top = "".concat(g(c, i, "y"), "px")),
                (_model_model_position__WEBPACK_IMPORTED_MODULE_1__.positionSort.top = g(
                  c,
                  i,
                  "y"
                ));
            }; // dragElement.style.opacity = '1';
          document.addEventListener("mousemove", k),
            document.addEventListener("mouseup", function handleFormMouseup() {
              // dragElement.style.opacity = '1';
              (c.style.cursor = "grab"),
                document.removeEventListener("mousemove", k),
                sessionStorage.setItem(
                  _const__WEBPACK_IMPORTED_MODULE_0__.Session.DRAG,
                  JSON.stringify(_model_model_position__WEBPACK_IMPORTED_MODULE_1__.positionSort)
                );
            });
        };

        /***/
      },

    /***/ "./src/controllers/list-controller.js":
      /*!********************************************!*\
    !*** ./src/controllers/list-controller.js ***!
    \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ handleListClick: () => /* binding */ handleListClick,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/const.js"
        );
        /* harmony import */ var _model_model_list__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../model/model-list */ "./src/model/model-list.js");
        var handleListClick = function handleListClick(c) {
          var d = c.target,
            e = d;
          !d.id && d.closest("[id]") && (e = d.closest("[id]")),
            _model_model_list__WEBPACK_IMPORTED_MODULE_1__.listSort[e.id].isActive &&
            "true" === _model_model_list__WEBPACK_IMPORTED_MODULE_1__.listSort[e.id].isActive
              ? (e.querySelector(".list__header").classList.remove("list__header--open"),
                (_model_model_list__WEBPACK_IMPORTED_MODULE_1__.listSort[e.id].isActive = "false"))
              : (e.querySelector(".list__header").classList.add("list__header--open"),
                (_model_model_list__WEBPACK_IMPORTED_MODULE_1__.listSort[e.id].isActive = "true")),
            sessionStorage.setItem(
              _const__WEBPACK_IMPORTED_MODULE_0__.Session.LIST,
              JSON.stringify(_model_model_list__WEBPACK_IMPORTED_MODULE_1__.listSort)
            );
        };

        /***/
      },

    /***/ "./src/controllers/sort-form-controller.js":
      /*!*************************************************!*\
    !*** ./src/controllers/sort-form-controller.js ***!
    \*************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ handleFormInput: () => /* binding */ handleFormInput,
          /* harmony export */ handleFormKeyup: () => /* binding */ handleFormKeyup,
          /* harmony export */ handleFormRadioChange: () => /* binding */ handleFormRadioChange,
          /* harmony export */
        });
        /* harmony import */ var _components_api_components_sort_templates_aply_button_template__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../components/api-components/sort-templates/aply-button-template */ "./src/components/api-components/sort-templates/aply-button-template.js"
          );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../const */ "./src/const.js"
        );
        /* harmony import */ var _model_model_sort__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../model/model-sort */ "./src/model/model-sort.js");
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../utils */ "./src/utils.js"
        );
        var k = function renderApplyButton(b) {
            var c = b.closest("form").getBoundingClientRect(),
              d = b.nextElementSibling
                ? b.nextElementSibling.getBoundingClientRect()
                : b.getBoundingClientRect();
            (0, _utils__WEBPACK_IMPORTED_MODULE_3__.render)(
              _const__WEBPACK_IMPORTED_MODULE_1__.rootElement,
              (0,
              _components_api_components_sort_templates_aply_button_template__WEBPACK_IMPORTED_MODULE_0__.getApplyButtonTemplate)(
                c,
                d
              )
            );
          },
          l = function checkFormValid(a) {
            for (var b, c = 0; c < a.length; c += 1)
              if (
                ((b = document.querySelector("input[name=".concat(a[c], "]"))),
                _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[a[c]].required &&
                  !b.value)
              )
                return { isValid: !1, inputElement: b };
            return { isValid: !0 };
          },
          m = function addErrorMessage(a) {
            var b = a.inputElement,
              c = b.placeholder;
            if (b.classList.contains("field__text--input-error"))
              return (
                b.focus(),
                (0, _utils__WEBPACK_IMPORTED_MODULE_3__.removeElement)(".apply-filters"),
                k(b),
                !1
              );
            var d = !1,
              e = function handleInputElementInput() {
                (d = !0),
                  b.setAttribute("placeholder", c),
                  b.classList.remove("field__text--input-error"),
                  b.removeEventListener("input", e),
                  b.removeEventListener("blur", e);
              };
            return (
              b.classList.add("field__text--input-error"),
              b.focus(),
              (0, _utils__WEBPACK_IMPORTED_MODULE_3__.removeElement)(".apply-filters"),
              k(b),
              b.setAttribute(
                "placeholder",
                "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 ".concat(c.toLowerCase())
              ),
              b.addEventListener("input", e),
              b.addEventListener("blur", e),
              setTimeout(function () {
                d || e();
              }, _const__WEBPACK_IMPORTED_MODULE_1__.Timeout.ERROR_MESSAGE),
              !0
            );
          },
          n = function collectSearchLink(a) {
            var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "",
              c = function collectStrategy() {
                var a = document.querySelector(
                    "[name=".concat(
                      _const__WEBPACK_IMPORTED_MODULE_1__.RadioTemplateOption.STRATEGY,
                      "]:checked"
                    )
                  ),
                  b = document.querySelector(
                    "[name=".concat(
                      _const__WEBPACK_IMPORTED_MODULE_1__.RadioTemplateOption.EXTRA_STRATEGY,
                      "]:checked"
                    )
                  );
                return "".concat(a.value).concat(b && b.value ? ",".concat(b.value) : "");
              };
            return a
              .reduce(function (a, e) {
                var g = document.querySelector("input[name=".concat(e, "]"));
                return g ||
                  "key" === _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[e].key
                  ? g && ("text" === g.type || "number" === g.type) && (g.value || "st" === e)
                    ? "".concat(a).concat(e, "=").concat(g.value.replace(/&/g, "%26"), "&")
                    : g && "checkbox" === g.type
                    ? "".concat(a).concat(e, "=").concat(g.checked, "&")
                    : g &&
                      "radio" === g.type &&
                      g.name === _const__WEBPACK_IMPORTED_MODULE_1__.RadioTemplateOption.STRATEGY
                    ? "".concat(a).concat(e, "=").concat(c(g), "&")
                    : _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[e].value &&
                      "key" ===
                        _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[e].key && // window.location.pathname.match(SORT_TYPES[0])
                      b !== _const__WEBPACK_IMPORTED_MODULE_1__.SORT_TYPES[0]
                    ? ""
                        .concat(a)
                        .concat(e, "=")
                        .concat(
                          _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[e].value,
                          "&"
                        )
                    : "".concat(a)
                  : _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[e].value
                  ? ""
                      .concat(a)
                      .concat(e, "=")
                      .concat(
                        _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort[e].value,
                        "&"
                      )
                  : "".concat(a);
              }, "?")
              .slice(0, -1);
          },
          o = function checkDebugKey() {
            var a = _model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort.key,
              b = document.querySelector(
                "[value=".concat(_const__WEBPACK_IMPORTED_MODULE_1__.SORT_TYPES[0], "]")
              );
            if (!a.value) {
              /* eslint-disable */ var d = prompt(
                "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447",
                ""
              );
              /* eslint-enable */ if (null === d) return (b.checked = !0), !1;
              if ("h" === d[1] && "s" === d[d.length - 1])
                return (
                  window.localStorage.setItem(
                    _const__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.DEBUG_KEY,
                    d
                  ),
                  (a.value = d),
                  !0
                );
              null !== d &&
                (alert(
                  "\u0412\u0432\u0435\u0434\u0451\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447"
                ),
                (b.checked = !0),
                o());
            } else if (a.value && "h" === a.value[1] && "s" === a.value[a.value.length - 1])
              return (
                window.localStorage.getItem(
                  _const__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.DEBUG_KEY
                ) ||
                  window.localStorage.setItem(
                    _const__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.DEBUG_KEY,
                    a.value
                  ),
                !0
              );
            return !1;
          },
          p = function submitForm(a) {
            var b = Object.keys(_model_model_sort__WEBPACK_IMPORTED_MODULE_2__.parameterSort),
              c = l(b);
            if (!c.isValid) m(c);
            else if (
              a &&
              a.target.name === _const__WEBPACK_IMPORTED_MODULE_1__.RadioTemplateOption.TYPE
            ) {
              var e = a.target.value;
              if (
                e === _const__WEBPACK_IMPORTED_MODULE_1__.SORT_TYPES[0] ||
                (e === _const__WEBPACK_IMPORTED_MODULE_1__.SORT_TYPES[1] && o())
              ) {
                var g = n(b, e);
                window.history.pushState("", "", g), (window.location.pathname = e);
              }
            } else {
              var i = n(b);
              window.location.search = i;
            }
          },
          q = null;
        var handleFormInput = function handleFormInput(a) {
          (0, _utils__WEBPACK_IMPORTED_MODULE_3__.removeElement)(".apply-filters"), k(a.target);
          var b = document.querySelector(".apply-filters");
          b.addEventListener("click", p),
            q && clearTimeout(q),
            (q = setTimeout(function () {
              (0, _utils__WEBPACK_IMPORTED_MODULE_3__.removeElement)(".apply-filters");
            }, _const__WEBPACK_IMPORTED_MODULE_1__.Timeout.APPLY_BUTTON));
        };
        var handleFormKeyup = function handleFormKeyup(a) {
          var c = a.keyCode;
          c === _const__WEBPACK_IMPORTED_MODULE_1__.KeyCode.ENTER && p();
        };
        var handleFormRadioChange = function handleFormRadioChange(a) {
          return p(a);
        };

        /***/
      },

    /***/ "./src/model/model-list.js":
      /*!*********************************!*\
    !*** ./src/model/model-list.js ***!
    \*********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ listSort: () => /* binding */ listSort,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/const.js"
        );
        var a, b, c, d, e, f;
        var listSort = {
          size: {
            key: "size",
            title:
              "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
            isActive:
              (null ===
                (a = JSON.parse(
                  window.sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.LIST)
                )) ||
              void 0 === a ||
              null === (b = a.size) ||
              void 0 === b
                ? void 0
                : b.isActive) || "false",
            isRow: !0,
          },
          availability: {
            key: "availability",
            title:
              "\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
            isActive:
              (null ===
                (c = JSON.parse(
                  window.sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.LIST)
                )) ||
              void 0 === c ||
              null === (d = c.availability) ||
              void 0 === d
                ? void 0
                : d.isActive) || "false",
            isRow: !1,
          },
          other: {
            key: "other",
            title: "\u0414\u0440\u0443\u0433\u043E\u0435",
            isActive:
              (null ===
                (e = JSON.parse(
                  window.sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.LIST)
                )) ||
              void 0 === e ||
              null === (f = e.other) ||
              void 0 === f
                ? void 0
                : f.isActive) || "true",
            isRow: !1,
          },
        };

        /***/
      },

    /***/ "./src/model/model-position.js":
      /*!*************************************!*\
    !*** ./src/model/model-position.js ***!
    \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ positionSort: () => /* binding */ positionSort,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/const.js"
        );
        var positionSort = {
          top:
            sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.DRAG) &&
            JSON.parse(sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.DRAG))
              .top,
          left:
            sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.DRAG) &&
            JSON.parse(sessionStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.Session.DRAG))
              .left,
        };

        /***/
      },

    /***/ "./src/model/model-sort.js":
      /*!*********************************!*\
    !*** ./src/model/model-sort.js ***!
    \*********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ parameterSort: () => /* binding */ parameterSort,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/const.js"
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../utils */ "./src/utils.js"
        );
        var parameterSort = {
          st: {
            key: "st",
            type: "text",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("st"),
            description:
              "\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441. \u041F\u0440\u0438 \u043F\u0443\u0441\u0442\u043E\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0432 \u043E\u0442\u0432\u0435\u0442\u0435 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u043F\u0443\u0441\u0442\u043E",
            placeholder:
              "\u041F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
            required: !1,
          },
          apiKey: {
            key: "apiKey",
            type: "text",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("apiKey"),
            description: "\u043A\u043B\u044E\u0447 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
            placeholder: "\u041A\u043B\u044E\u0447 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
            required: !0,
          },
          strategy: {
            key: "strategy",
            type: "text",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("strategy")
              ? (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("strategy")
              : "simple",
            description:
              "\u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439 \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043C\u043E\u0434\u0435\u043B\u044C \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u0442\u043E\u0432\u0430\u0440\u044B. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E - simple",
            placeholder: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F",
            required: !1,
          },
          withSku: {
            key: "withSku",
            type: "checkbox",
            value:
              null === window.location.pathname.match(/debug/)
                ? (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("withSku")
                : "true",
            description:
              "\u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043B\u0438 \u0433\u0440\u0443\u043F\u043F\u044B \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u0414\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 Groupid deduplication \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0444\u043B\u0430\u0433\u0430 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0432\u044B\u0434\u0430\u0447\u0443.  \u0412 API debug \u0444\u043B\u0430\u0433 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C = true, \u0438\u043D\u0430\u0447\u0435 \u0432\u044B\u0434\u0430\u0441\u0442 \u043E\u0448\u0438\u0431\u043A\u0443",
            required: !1,
          },
          fullData: {
            key: "fullData",
            type: "checkbox",
            value:
              null === window.location.pathname.match(/debug/)
                ? (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("fullData")
                : "true",
            description:
              "\u0444\u043B\u0430\u0433, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043B\u0438 \u043F\u043E\u043B\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0442\u043E\u0432\u0430\u0440\u0430\u0445. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E false. \u041F\u0440\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0438 false \u043E\u0442\u0432\u0435\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E id \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u0438\u0445 score. \u0424\u043B\u0430\u0433 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0434\u0435\u0431\u0430\u0433\u0435, \u0432 \u0434\u0435\u0431\u0430\u0433\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 true.",
            required: !1,
          },
          serverIntegration: {
            key: "serverIntegration",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("serverIntegration"),
            description:
              "\u0444\u043B\u0430\u0433, \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u0439 fullData. \u0412\u0441\u0435\u0433\u0434\u0430 \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u0444\u043B\u0430\u0433\u0430 fullData, \u0441 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B, \u0442\u0435. \u043C\u0435\u043D\u044F\u0442\u044C \u0435\u0433\u043E, \u0442\u043E\u0436\u0435 \u0441\u0430\u043C\u043E\u0435 \u0447\u0442\u043E \u043C\u0435\u043D\u044F\u0442\u044C fullData. \u042D\u0442\u043E \u0438\u0437\u043B\u0438\u0448\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C legacy \u043A\u043E\u0434\u0430",
            required: !1,
          },
          useCompletion: {
            key: "useCompletion",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("useCompletion"),
            description:
              "\u0444\u043B\u0430\u0433, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0434\u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441\u044B, \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u0442\u043E\u043C\u0443 \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432 \u0430\u0432\u0442\u043E\u043A\u043E\u043C\u043F\u043B\u0438\u0442\u0435. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E false",
            required: !1,
          },
          withCorrection: {
            key: "withCorrection",
            type: "checkbox",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("withCorrection"),
            description:
              "\u0444\u043B\u0430\u0433, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043B\u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435. \u0415\u0441\u043B\u0438 false, \u0442\u043E \u0432\u044B\u0434\u0430\u0447\u0430 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043C\u0438\u043D\u0443\u044F \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
            required: !1,
          },
          withFacets: {
            key: "withFacets",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("withFacets"),
            description:
              "\u0444\u043B\u0430\u0433, \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043B\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B. \u041F\u0440\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0438 false \u0432 API \u0431\u0443\u0434\u0443\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B: \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F, \u0431\u0440\u0435\u043D\u0434 \u0438 \u0446\u0435\u043D\u0430",
            required: !1,
          },
          treeFacets: {
            key: "treeFacets",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("treeFacets"),
            description:
              "\u0444\u043B\u0430\u0433, \u0432\u0438\u0434 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0445 \u0444\u0430\u0441\u0435\u0442\u043E\u0432.  \u041F\u0440\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0438 false \u0432 API \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439, \u0431\u0435\u0437 \u0443\u0447\u0451\u0442\u0430 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u0434\u043D\u0443 \u0432 \u0434\u0440\u0443\u0433\u0443\u044E",
            required: !1,
          },
          regionId: {
            key: "regionId",
            type: "text",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("regionId"),
            description:
              "id \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u0430. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E - global, \u0442.\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0438\u0434",
            placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D",
            required: !1,
          },
          useCategoryPrediction: {
            key: "useCategoryPrediction",
            type: "checkbox",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)(
              "useCategoryPrediction"
            ),
            description:
              "\u0444\u043B\u0430\u0433 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043B\u0438 \u041F\u0440\u0435\u0434\u0438\u043A\u0442\u043E\u0440 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",
            required: !1,
          },
          size: {
            key: "size",
            type: "number",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("size"),
            description:
              "\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u0432 \u043E\u0442\u0432\u0435\u0442\u0435. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u2014 400 \u0438\u043B\u0438 2000 \u043F\u0440\u0438 \u0444\u043B\u0430\u0433\u0435 fullData = false",
            required: !1,
          },
          offset: {
            key: "offset",
            type: "number",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("offset"),
            description:
              "\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u0432\u044B\u0434\u0430\u0447\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438 size=20 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C offset=10, \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0442\u043E\u0432\u0430\u0440\u044B \u0441 11 \u043F\u043E 20-\u0439. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0430\u0433\u0438\u043D\u0430\u0446\u0438\u0438. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0432\u044B\u0434\u0430\u0447\u0438 \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0447\u0435\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 size",
            required: !1,
          },
          showUnavailable: {
            key: "showUnavailable",
            type: "checkbox",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("showUnavailable"),
            description:
              "\u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043B\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B",
            required: !1,
          },
          unavailableMultiplier: {
            key: "unavailableMultiplier",
            type: "number",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)(
              "unavailableMultiplier"
            ),
            description:
              "\u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u044C \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043C\u043D\u043E\u0436\u0430\u0435\u0442\u0441\u044F score \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
            required: !1,
          },
          preview: {
            key: "preview",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("preview"),
            description:
              "true \u0435\u0441\u043B\u0438 \u043C\u044B \u0441\u043C\u043E\u0442\u0440\u0438\u043C API \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0432\u044C\u044E, \u0432 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 false",
            required: !1,
          },
          sort: {
            key: "sort",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("sort"),
            description:
              "\u0442\u0438\u043F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u0435, \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C DEFAULT, PRICE_DESC \u0438 PRICE_ASC",
            required: !1,
          },
          key: {
            key: "key",
            value:
              window.localStorage.getItem(
                _const__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.DEBUG_KEY
              ) ||
              (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("key") ||
              "",
            required: !1,
          },
          filter: {
            key: "filter",
            value: (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)("filter"),
            required: !1,
          },
        };

        /***/
      },

    /***/ "./src/styles.js":
      /*!***********************!*\
    !*** ./src/styles.js ***!
    \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ styleSort: () => /* binding */ styleSort,
          /* harmony export */
        });
        var styleSort =
          ':root {\n    --main-backgrond: #f8f8f8b3;\n    --tooltip-background: #3D3E4E;\n    --drag-dot-background: #3D3E4E;\n    --text-color: #fff;\n    --title-color: #3D3E4E;\n    --active: #9CE6D4;\n    --active-shadow: #c2efe5;\n    --accent: #D7A1AB;\n    --accent-hover: #CC9CA4;\n    --default: #dcdcdb;\n    --default-hover: #E2E2E2;\n    --error: #c7c7c7; \n}\n\n@import url(\'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap\');\n\n[name="type"], [type="radio"], .field__toggle--input {\n    display: none;\n}\n\n.api {\n    position: fixed;\n    top: 50px;\n    right: 40px;\n    z-index: 4;\n    width: 270px;\n    height: auto;\n    margin: 0;\n    border-radius: 5px;\n    background-color: var(--main-backgrond);\n    font-family: \'Space Grotesk\', sans-serif;\n    font-size: 12px;\n    color: var(--title-color);\n}\n\ninput {\n    border-color: var(--default-hover) !important;\n}\n\n.api__header {\n    height: 20px;\n    color: var(--default);\n    padding: 5px 18px;\n    user-select: none; \n    display: flex;\n    align-items: center;\n}\n\n.api__header:hover {\n    opacity: 1;\n    color: #d3d3d3;\n}\n\n.api__header .header__navigation {\n    width: 100%;\n    height: 16px;\n    font-size: 16px;\n\n    display: flex;\n    align-items: center;\n}\n\n.api__header .navigation__drag {\n    font-size: 12px;\n    background-color: transparent;\n    line-height: 0px;\n    cursor: grab;\n    color: var(--drag-dot-background);\n    text-shadow: 0px -5px var(--drag-dot-background), \n                 5px 0 var(--drag-dot-background), 5px -5px var(--drag-dot-background), \n                 10px 0 var(--drag-dot-background), 10px -5px var(--drag-dot-background), \n                 15px 0 var(--drag-dot-background), 15px -5px var(--drag-dot-background), \n                 20px 0 var(--drag-dot-background), 20px -5px var(--drag-dot-background), \n                 25px 0 var(--drag-dot-background), 25px -5px var(--drag-dot-background), \n                 30px 0 var(--drag-dot-background), 30px -5px var(--drag-dot-background), \n                 35px 0 var(--drag-dot-background), 35px -5px var(--drag-dot-background), \n                 40px 0 var(--drag-dot-background), 40px -5px var(--drag-dot-background), \n                 45px 0 var(--drag-dot-background), 45px -5px var(--drag-dot-background), \n                 50px 0 var(--drag-dot-background), 50px -5px var(--drag-dot-background), \n                 55px 0 var(--drag-dot-background), 55px -5px var(--drag-dot-background), \n                 60px 0 var(--drag-dot-background), 60px -5px var(--drag-dot-background), \n                 65px 0 var(--drag-dot-background), 65px -5px var(--drag-dot-background), \n                 70px 0 var(--drag-dot-background), 70px -5px var(--drag-dot-background), \n                 75px 0 var(--drag-dot-background), 75px -5px var(--drag-dot-background), \n                 80px 0 var(--drag-dot-background), 80px -5px var(--drag-dot-background), \n                 85px 0 var(--drag-dot-background), 85px -5px var(--drag-dot-background), \n                 90px 0 var(--drag-dot-background), 90px -5px var(--drag-dot-background), \n                 95px 0 var(--drag-dot-background), 95px -5px var(--drag-dot-background), \n                 100px 0 var(--drag-dot-background), 100px -5px var(--drag-dot-background),\n                 105px 0 var(--drag-dot-background), 105px -5px var(--drag-dot-background), \n                 110px 0 var(--drag-dot-background), 110px -5px var(--drag-dot-background), \n                 115px 0 var(--drag-dot-background), 115px -5px var(--drag-dot-background), \n                 120px 0 var(--drag-dot-background), 120px -5px var(--drag-dot-background), \n                 125px 0 var(--drag-dot-background), 125px -5px var(--drag-dot-background), \n                 130px 0 var(--drag-dot-background), 130px -5px var(--drag-dot-background), \n                 135px 0 var(--drag-dot-background), 135px -5px var(--drag-dot-background), \n                 140px 0 var(--drag-dot-background), 140px -5px var(--drag-dot-background), \n                 145px 0 var(--drag-dot-background), 145px -5px var(--drag-dot-background), \n                 150px 0 var(--drag-dot-background), 150px -5px var(--drag-dot-background), \n                 155px 0 var(--drag-dot-background), 155px -5px var(--drag-dot-background), \n                 160px 0 var(--drag-dot-background), 160px -5px var(--drag-dot-background), \n                 165px 0 var(--drag-dot-background), 165px -5px var(--drag-dot-background), \n                 170px 0 var(--drag-dot-background), 170px -5px var(--drag-dot-background), \n                 175px 0 var(--drag-dot-background), 175px -5px var(--drag-dot-background), \n                 180px 0 var(--drag-dot-background), 180px -5px var(--drag-dot-background), \n                 185px 0 var(--drag-dot-background), 185px -5px var(--drag-dot-background), \n                 190px 0 var(--drag-dot-background), 190px -5px var(--drag-dot-background), \n                 195px 0 var(--drag-dot-background), 195px -5px var(--drag-dot-background), \n                 200px 0 var(--drag-dot-background), 200px -5px var(--drag-dot-background),\n                 205px 0 var(--drag-dot-background), 205px -5px var(--drag-dot-background), \n                 210px 0 var(--drag-dot-background), 210px -5px var(--drag-dot-background), \n                 215px 0 var(--drag-dot-background), 215px -5px var(--drag-dot-background), \n                 220px 0 var(--drag-dot-background), 220px -5px var(--drag-dot-background), \n                 225px 0 var(--drag-dot-background), 225px -5px var(--drag-dot-background);\n    padding: 0px;\n    border: 0px;\n    padding-bottom: 4px;\n    padding-left: 3px;\n}\n\n.api__header .navigation__drag:hover {\n    cursor: grab;\n    opacity: 1;\n    color: var(--default);\n    text-shadow: 0px -5px var(--default), \n                 5px 0 var(--default), 5px -5px var(--default), \n                 10px 0 var(--default), 10px -5px var(--default), \n                 15px 0 var(--default), 15px -5px var(--default), \n                 20px 0 var(--default), 20px -5px var(--default), \n                 25px 0 var(--default), 25px -5px var(--default), \n                 30px 0 var(--default), 30px -5px var(--default), \n                 35px 0 var(--default), 35px -5px var(--default), \n                 40px 0 var(--default), 40px -5px var(--default), \n                 45px 0 var(--default), 45px -5px var(--default), \n                 50px 0 var(--default), 50px -5px var(--default), \n                 55px 0 var(--default), 55px -5px var(--default), \n                 60px 0 var(--default), 60px -5px var(--default), \n                 65px 0 var(--default), 65px -5px var(--default), \n                 70px 0 var(--default), 70px -5px var(--default), \n                 75px 0 var(--default), 75px -5px var(--default), \n                 80px 0 var(--default), 80px -5px var(--default), \n                 85px 0 var(--default), 85px -5px var(--default), \n                 90px 0 var(--default), 90px -5px var(--default), \n                 95px 0 var(--default), 95px -5px var(--default), \n                 100px 0 var(--default), 100px -5px var(--default),\n                 105px 0 var(--default), 105px -5px var(--default), \n                 110px 0 var(--default), 110px -5px var(--default), \n                 115px 0 var(--default), 115px -5px var(--default), \n                 120px 0 var(--default), 120px -5px var(--default), \n                 125px 0 var(--default), 125px -5px var(--default), \n                 130px 0 var(--default), 130px -5px var(--default), \n                 135px 0 var(--default), 135px -5px var(--default), \n                 140px 0 var(--default), 140px -5px var(--default), \n                 145px 0 var(--default), 145px -5px var(--default), \n                 150px 0 var(--default), 150px -5px var(--default), \n                 155px 0 var(--default), 155px -5px var(--default), \n                 160px 0 var(--default), 160px -5px var(--default), \n                 165px 0 var(--default), 165px -5px var(--default), \n                 170px 0 var(--default), 170px -5px var(--default), \n                 175px 0 var(--default), 175px -5px var(--default), \n                 180px 0 var(--default), 180px -5px var(--default), \n                 185px 0 var(--default), 185px -5px var(--default), \n                 190px 0 var(--default), 190px -5px var(--default), \n                 195px 0 var(--default), 195px -5px var(--default), \n                 200px 0 var(--default), 200px -5px var(--default),\n                 205px 0 var(--default), 205px -5px var(--default), \n                 210px 0 var(--default), 210px -5px var(--default), \n                 215px 0 var(--default), 215px -5px var(--default), \n                 220px 0 var(--default), 220px -5px var(--default), \n                 225px 0 var(--default), 225px -5px var(--default);\n}\n\n.api__header .navigation__drag:active {\n    color: var(--accent);\n    text-shadow: 0px -5px var(--accent), \n                 5px 0 var(--accent), 5px -5px var(--accent), \n                 10px 0 var(--accent), 10px -5px var(--accent), \n                 15px 0 var(--accent), 15px -5px var(--accent), \n                 20px 0 var(--accent), 20px -5px var(--accent), \n                 25px 0 var(--accent), 25px -5px var(--accent), \n                 30px 0 var(--accent), 30px -5px var(--accent), \n                 35px 0 var(--accent), 35px -5px var(--accent), \n                 40px 0 var(--accent), 40px -5px var(--accent), \n                 45px 0 var(--accent), 45px -5px var(--accent), \n                 50px 0 var(--accent), 50px -5px var(--accent), \n                 55px 0 var(--accent), 55px -5px var(--accent), \n                 60px 0 var(--accent), 60px -5px var(--accent), \n                 65px 0 var(--accent), 65px -5px var(--accent), \n                 70px 0 var(--accent), 70px -5px var(--accent), \n                 75px 0 var(--accent), 75px -5px var(--accent), \n                 80px 0 var(--accent), 80px -5px var(--accent), \n                 85px 0 var(--accent), 85px -5px var(--accent), \n                 90px 0 var(--accent), 90px -5px var(--accent), \n                 95px 0 var(--accent), 95px -5px var(--accent), \n                 100px 0 var(--accent), 100px -5px var(--accent),\n                 105px 0 var(--accent), 105px -5px var(--accent), \n                 110px 0 var(--accent), 110px -5px var(--accent), \n                 115px 0 var(--accent), 115px -5px var(--accent), \n                 120px 0 var(--accent), 120px -5px var(--accent), \n                 125px 0 var(--accent), 125px -5px var(--accent), \n                 130px 0 var(--accent), 130px -5px var(--accent), \n                 135px 0 var(--accent), 135px -5px var(--accent), \n                 140px 0 var(--accent), 140px -5px var(--accent), \n                 145px 0 var(--accent), 145px -5px var(--accent), \n                 150px 0 var(--accent), 150px -5px var(--accent), \n                 155px 0 var(--accent), 155px -5px var(--accent), \n                 160px 0 var(--accent), 160px -5px var(--accent), \n                 165px 0 var(--accent), 165px -5px var(--accent), \n                 170px 0 var(--accent), 170px -5px var(--accent), \n                 175px 0 var(--accent), 175px -5px var(--accent), \n                 180px 0 var(--accent), 180px -5px var(--accent), \n                 185px 0 var(--accent), 185px -5px var(--accent), \n                 190px 0 var(--accent), 190px -5px var(--accent), \n                 195px 0 var(--accent), 195px -5px var(--accent), \n                 200px 0 var(--accent), 200px -5px var(--accent),\n                 205px 0 var(--accent), 205px -5px var(--accent), \n                 210px 0 var(--accent), 210px -5px var(--accent), \n                 215px 0 var(--accent), 215px -5px var(--accent), \n                 220px 0 var(--accent), 220px -5px var(--accent), \n                 225px 0 var(--accent), 225px -5px var(--accent);\n}\n\n.api__form {\n    width: inherit;\n    box-sizing: border-box;\n    padding: 20px;\n    padding-top: 0px;\n}\n\n.form__field {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.form__field.form__field--strategy,\n.form__field.form__field--extra-strategy {\n    flex-wrap: wrap;\n}\n\n.form__field.form__field.form__field--strategy {\n    margin-bottom: 5px;\n}\n\n.form__field--strategy .field__radio--label:nth-child(-n+6) {\n    width: 20%;\n}\n\n.form__field--strategy .field__radio--label:nth-child(6),\n.form__field--strategy .field__radio--label:nth-child(8),\n.form__field--strategy .field__radio--label:nth-child(10),\n.form__field--strategy .field__radio--label:nth-child(12),\n.form__field--strategy .field__radio--label:nth-child(14) {\n    width: 35%;\n}\n\n.field__radio--label {\n    padding: 5px 0;\n    margin-left: 10px;\n    flex-grow: 1;\n\n    border-radius: 20px;\n    color: var(--text-color);\n    background-color: var(--default);\n    text-align: center;\n    font-weight: 600;\n    transition: background 0.2s ease;\n}\n\n.field-title {\n    color: var(--title-color);\n}\n\n[name="strategy"] ~ .field__radio--label {\n    font-size: 8px;\n    margin-left: 0px;\n    margin-right: 2px;\n    margin-bottom: 3px;\n}\n\n[name="extra-strategy"] ~ .field__radio--label {\n    font-size: 8px;\n    margin-left: 0px;\n    margin-right: 2px;\n    margin-bottom: 3px;\n}\n\n.field__radio--label:hover {\n    background-color: var(--default-hover);\n    text-align: center;\n    cursor: pointer;\n    transition: background 0.2s ease;\n}\n\n.field__radio--input:checked + .field__radio--label:hover {\n    cursor: inherit;\n}\n\n.field__radio--input:checked + .field__radio--label {\n    background-color: var(--active);\n    box-shadow: 0px 0px 3px var(--active);\n    transition: all 0.2s ease;\n}\n\n.form__field--extra-strategy .field__radio--input:checked + .field__radio--label {\n    background-color: var(--accent);\n    box-shadow: 0px 0px 3px var(--accent);\n}\n\n.field__text--input {\n    padding: 5px 10px;\n    margin-left: 10px;\n    flex-grow: 1;\n    border-radius: 20px;\n    border: 1px solid var(--default);\n    font-size: 10px;\n    background: var(--text-color);\n    color: var(--title-color);\n}\n\n.field__text--input:focus {\n    outline: 1px solid var(--default);\n    box-shadow: 0px 0px 3px var(--default);\n}\n\n.field__text--input::placeholder {\n    color: var(--default-hover);\n}\n\n.field__text--input:focus::placeholder {\n    color: var(--default-hover);\n}\n\n.field__text--input-error:focus {\n    outline: 1px solid var(--error);\n    box-shadow: 0px 0px 3px var(--error);\n}\n\n.field__text--input-error::placeholder {\n    color: var(--error);\n}\n\n.field__text--input-error:focus::placeholder {\n    color: var(--error);\n}\n\n\n.toggle-wrapper {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    flex-grow: 1;\n}\n\n.field__toggle--label {\n    position: relative;\n\n    width: 50px;\n    height: 20px;\n    margin: 0;\n\n    vertical-align: middle;\n\n    background: var(--default);\n    border-radius: 20px;\n    outline: none;\n    cursor: pointer;\n\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n\n    transition: all 0.2s cubic-bezier(0.2, 0.85, 0.32, 1.2);\n}\n\n.field__toggle--label::after {\n    content: "";\n\n    position: absolute;\n    left: 2px;\n    top: 2px;\n\n    width: 16px;\n    height: 16px;\n    background-color: var(--text-color);\n    border-radius: 50%;\n\n    transform: translateX(0);\n\n    transition: all 0.2s cubic-bezier(0.2, 0.85, 0.32, 1.2);\n}\n\n.field__toggle--input:checked + .field__toggle--label {\n    background-color: var(--active);\n}\n\n.field__toggle--input:checked + .field__toggle--label::after {\n    transform: translateX(calc(100% + 14px));\n}\n\n.field__toggle--label::before {\n    content: "FALSE";\n\n    position: relative;\n    left: 21px;\n    top: 1px;\n\n    font-size: 8px;\n    color: var(--text-color);\n    font-weight: 600;\n\n    transition: all 1s ease;\n}\n\n.field__toggle--input:checked ~ .field__toggle--label::before {\n    content: "TRUE";\n\n    position: relative;\n    left: 8px;\n    top: 1px;\n\n    font-size: 8px;\n    color: var(--text-color);\n    font-weight: 600;\n\n    transition: all 1s ease;\n}\n\n.field-tooltip {\n    width: 10px;\n    height: 10px;\n\n    margin-left: 3px;\n\n    font-size: 8px;\n    text-align: center;\n\n    color: var(--default);\n    border: 1px solid var(--default);\n    border-radius: 50%;\n\n    cursor: pointer;\n}\n\n[data-tooltip] {\n    position: relative;\n}\n\n[data-tooltip]::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    left: 50%; top: 0%;\n    transform: translateX(-50%);\n    padding: 8px;\n    z-index: 1;\n    opacity: 0;\n\n    width: 180px;\n    height: auto;\n\n    background: var(--tooltip-background);\n    color: var(--text-color);\n    text-align: left;\n    line-height: 15px;\n    box-shadow: 2px 2px 5px var(--tooltip-background);\n    pointer-events: none;\n    border-radius: 5px;\n\n    transition: all 0.2s ease;\n\n    font-size: 10px;\n}\n\n[data-tooltip]::before {\n    content: "";\n    position: absolute;\n    left: 0px;\n    bottom: 8px;\n    z-index: 1;\n    opacity: 0;\n\n    border: 5px solid transparent;\n    border-bottom: 5px solid var(--tooltip-background);\n\n    transition: all 0.2s ease;\n}\n\n[data-tooltip]:hover::after {\n    opacity: .9;\n    top: 20px;\n}\n\n[data-tooltip]:hover::before {\n    opacity: .9;\n    bottom: -10px;\n}\n\n.field-indicator {\n    position: relative;\n    width: 10px;\n    height: 10px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.field-indicator::after {\n    content: "";\n    display: block;\n    position: relative;\n    width: 3px;\n    height: 3px;\n\n    box-shadow: 0px 0px 3px var(--default);\n    background: var(--default);\n    border-radius: 50%;\n}\n\n.field__toggle--input:checked ~ .field-indicator::after {\n    box-shadow: 0px 0px 3px var(--active-shadow);\n    background: var(--active);\n    transition: all 0.4s ease;\n}\n\n.form__field--toggle {\n    display: flex;\n    justify-content: space-between;\n}\n\n.list__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    user-select: none;\n}\n\n.list__title {\n    color: var(--default);\n    font-size: 10px;\n    flex-grow: 1;\n}\n\n.list__arrow {\n    width: 12px;\n    height: auto;\n    display: inline-block;\n    position: relative;\n    margin-right: 2px;\n}\n\n.list__arrow::before, .list__arrow::after {\n    content: "";\n    position: absolute;\n    width: 7.5px;\n    height: 1px;\n\n    background-color: var(--default);\n    display: inline-block;\n    transition: all .2s ease;\n}\n\n.list__arrow::before {\n    left: 0;\n    transform: rotate(45deg);\n}\n\n.list__arrow::after {\n    right: 0;\n    transform: rotate(-45deg);\n}\n\n.list__header--open .list__arrow::before {\n    left: 0;\n    transform: rotate(-45deg);\n}\n\n.list__header--open .list__arrow::after {\n    right: 0;\n    transform: rotate(45deg);\n}\n\n.list__block-wrapper {\n    display: flex;\n}\n\n.list__block {\n    padding-top: 10px;\n    height: 20px;\n    display: none;\n}\n\n\n\n.list__header--open + .list__block {\n    height: auto;\n    display: block;\n}\n\n\n.apply-filters {\n    width: 40px;\n    height: 30px;\n    padding: 0;\n\n    text-align: center;\n    font-size: 10px;\n    font-family: \'Space Grotesk\', sans-serif;\n    font-weight: bold;\n    line-height: 32px;\n\n    color: var(--text-color);\n    background: var(--accent);\n    border-radius: 5px;\n    cursor: pointer;\n\n    position: fixed;\n    z-index: 1010;\n    transition: background 0.2s ease;\n}\n\n.apply-filters:hover {\n    background: var(--accent-hover);\n    transition: background 0.2s ease;\n}\n\n.apply-filters:hover:before {\n    background: var(--accent-hover);\n    transition: background 0.2s ease;\n}\n\n\n.apply-filters:after {\n    /* content: \'\u041E\u0442\u043A\u0440\u044B\u0442\u044C\'; */\n    content: \'\uD83D\uDD0D\';\n    border-radius: 5px;\n    box-shadow: inherit;\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background-image: inherit;\n    border-radius: inherit;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n\n.apply-filters:before {\n    display: block;\n    content: \'\';\n    position: absolute;\n    left: -5px;\n    top: 8px;\n    background: var(--accent);\n    transition: background 0.2s ease;\n    width: 15px;\n    height: 15px;\n    border-radius: 3px;\n    transform: rotate(135deg);\n    z-index: 0;\n}\n\nhr {\n    opacity: 0.1;\n}\n\n.form__list:last-child .form__field:last-child {\n    margin-bottom: 0px;\n}';

        /***/
      },

    /***/ "./src/utils.js":
      /*!**********************!*\
    !*** ./src/utils.js ***!
    \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ log: () => /* binding */ log,
          /* harmony export */ createStyleApp: () => /* binding */ createStyleApp,
          /* harmony export */ getParameterByName: () => /* binding */ getParameterByName,
          /* harmony export */ render: () => /* binding */ render,
          /* harmony export */ formatFieldTitle: () => /* binding */ formatFieldTitle,
          /* harmony export */ addEventListenerAll: () => /* binding */ addEventListenerAll,
          /* harmony export */ removeElement: () => /* binding */ removeElement,
          /* harmony export */ getHost: () => /* binding */ getHost,
          /* harmony export */
        });
        function _typeof(a) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      "function" == typeof Symbol &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            _typeof(a)
          );
        }
        var log = function log(a) {
          /* eslint-disable */ "object" === _typeof(a)
            ? console.log(a)
            : console.log(">>> ".concat(a));
        };
        var createStyleApp = function createStyleApp(a) {
          "undefined" != typeof GM_addStyle && GM_addStyle(a);
        };
        var getParameterByName = function getParameterByName(a) {
          var b = new RegExp("[\\?&]".concat(a, "=([^&#]*)")).exec(window.location.search);
          return b && b.length ? decodeURIComponent(b[1].replace(/\+/g, "")) : "";
        };
        var render = function render(a, b) {
          var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : "afterbegin";
          a.insertAdjacentHTML(c, b);
        };
        var formatFieldTitle = function formatFieldTitle(a) {
          return a[0].toUpperCase() + a.slice(1);
        };
        var addEventListenerAll = function addEventListenerAll(a, b, c) {
          a.forEach(function (a) {
            return a.addEventListener(b, c);
          });
        };
        var removeElement = function removeElement(a) {
          var b = document.querySelector(a);
          b && b.remove();
        };
        var getHost = function getHost() {
          return document.location.host ||
            document.location.host.split(".").length ||
            document.location.host.split(".")[0]
            ? document.location.host.split(".")[0]
            : "";
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils */ "./src/utils.js"
    );
    /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./styles */ "./src/styles.js"
    );
    /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./const */ "./src/const.js"
    );
    /* harmony import */ var _components_api_components_sort_templates_sort_template__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ./components/api-components/sort-templates/sort-template */ "./src/components/api-components/sort-templates/sort-template.js"
      );
    /* harmony import */ var _controllers_sort_form_controller__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(
        /*! ./controllers/sort-form-controller */ "./src/controllers/sort-form-controller.js"
      );
    /* harmony import */ var _controllers_drag_drop_controller__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(
        /*! ./controllers/drag-drop-controller */ "./src/controllers/drag-drop-controller.js"
      );
    /* harmony import */ var _controllers_list_controller__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(
        /*! ./controllers/list-controller */ "./src/controllers/list-controller.js"
      );
    var n = function renderSort() {
      (0, _utils__WEBPACK_IMPORTED_MODULE_0__.createStyleApp)(
        _styles__WEBPACK_IMPORTED_MODULE_1__.styleSort
      ),
        (0, _utils__WEBPACK_IMPORTED_MODULE_0__.render)(
          _const__WEBPACK_IMPORTED_MODULE_2__.rootElement,
          (0,
          _components_api_components_sort_templates_sort_template__WEBPACK_IMPORTED_MODULE_3__.getSortTemplate)()
        );
      var c = document.querySelector("#api__form");
      c.addEventListener(
        "keyup",
        _controllers_sort_form_controller__WEBPACK_IMPORTED_MODULE_4__.handleFormKeyup
      );
      var f = document.querySelectorAll("input:not([type=radio])"),
        n = document.querySelectorAll("input[type=radio]");
      (0, _utils__WEBPACK_IMPORTED_MODULE_0__.addEventListenerAll)(
        f,
        "input",
        _controllers_sort_form_controller__WEBPACK_IMPORTED_MODULE_4__.handleFormInput
      ),
        (0, _utils__WEBPACK_IMPORTED_MODULE_0__.addEventListenerAll)(
          n,
          "change",
          _controllers_sort_form_controller__WEBPACK_IMPORTED_MODULE_4__.handleFormRadioChange
        );
      var o = document.querySelector(".navigation__drag");
      o.addEventListener(
        "mousedown",
        _controllers_drag_drop_controller__WEBPACK_IMPORTED_MODULE_5__.handleFormDragDrop
      );
      var p = document.querySelectorAll(".form__list .list__header");
      (0, _utils__WEBPACK_IMPORTED_MODULE_0__.addEventListenerAll)(
        p,
        "click",
        _controllers_list_controller__WEBPACK_IMPORTED_MODULE_6__.handleListClick
      );
    };
    (0, _utils__WEBPACK_IMPORTED_MODULE_0__.getHost)() ===
      _const__WEBPACK_IMPORTED_MODULE_2__.AppType.SORT && n();
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
