'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CalendarView = require('./CalendarView');

var _CalendarView2 = _interopRequireDefault(_CalendarView);

var _dates = require('./util/dates');

var _dates2 = _interopRequireDefault(_dates);

var _localizers = require('./util/localizers');

var _ = require('./util/_');

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecadeView = (_temp2 = _class = function (_React$Component) {
  _inherits(DecadeView, _React$Component);

  function DecadeView() {
    var _temp, _this, _ret;

    _classCallCheck(this, DecadeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderRow = function (row, rowIdx) {
      var _this$props = _this.props,
          focused = _this$props.focused,
          activeId = _this$props.activeId,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          yearFormat = _this$props.yearFormat,
          value = _this$props.value,
          today = _this$props.today,
          culture = _this$props.culture,
          min = _this$props.min,
          max = _this$props.max;


      return _react2.default.createElement(
        _CalendarView2.default.Row,
        { key: rowIdx },
        row.map(function (date, colIdx) {
          var label = _localizers.date.format(date, _localizers.date.getFormat('year', yearFormat), culture);

          return _react2.default.createElement(
            _CalendarView2.default.Cell,
            {
              key: colIdx,
              unit: 'year',
              activeId: activeId,
              label: label,
              date: date,
              now: today,
              min: min,
              max: max,
              onChange: onChange,
              focused: focused,
              selected: value,
              disabled: disabled
            },
            label
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DecadeView.prototype.render = function render() {
    var _props = this.props,
        focused = _props.focused,
        activeId = _props.activeId;


    return _react2.default.createElement(
      _CalendarView2.default,
      _extends({}, Props.omitOwn(this), {
        activeId: activeId
      }),
      _react2.default.createElement(
        _CalendarView2.default.Body,
        null,
        (0, _.chunk)(getDecadeYears(focused), 4).map(this.renderRow)
      )
    );
  };

  return DecadeView;
}(_react2.default.Component), _class.propTypes = {
  activeId: _propTypes2.default.string,
  culture: _propTypes2.default.string,
  today: _propTypes2.default.instanceOf(Date),
  value: _propTypes2.default.instanceOf(Date),
  focused: _propTypes2.default.instanceOf(Date),
  min: _propTypes2.default.instanceOf(Date),
  max: _propTypes2.default.instanceOf(Date),
  onChange: _propTypes2.default.func.isRequired,

  yearFormat: CustomPropTypes.dateFormat,
  disabled: _propTypes2.default.bool
}, _temp2);


function getDecadeYears(_date) {
  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      date = _dates2.default.add(_dates2.default.startOf(_date, 'decade'), -2, 'year');

  return days.map(function () {
    return date = _dates2.default.add(date, 1, 'year');
  });
}

exports.default = DecadeView;
module.exports = exports['default'];