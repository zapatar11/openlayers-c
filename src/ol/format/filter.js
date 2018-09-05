/**
 * @module ol/format/filter
 */
import And from '../format/filter/And.js';
import Bbox from '../format/filter/Bbox.js';
import Contains from '../format/filter/Contains.js';
import During from '../format/filter/During.js';
import EqualTo from '../format/filter/EqualTo.js';
import GreaterThan from '../format/filter/GreaterThan.js';
import GreaterThanOrEqualTo from '../format/filter/GreaterThanOrEqualTo.js';
import Intersects from '../format/filter/Intersects.js';
import IsBetween from '../format/filter/IsBetween.js';
import IsLike from '../format/filter/IsLike.js';
import IsNull from '../format/filter/IsNull.js';
import LessThan from '../format/filter/LessThan.js';
import LessThanOrEqualTo from '../format/filter/LessThanOrEqualTo.js';
import Not from '../format/filter/Not.js';
import NotEqualTo from '../format/filter/NotEqualTo.js';
import Or from '../format/filter/Or.js';
import Within from '../format/filter/Within.js';


/**
 * Create a logical `<And>` operator between two or more filter conditions.
 *
 * @param {...import("./filter/Filter.js").default} conditions Filter conditions.
 * @returns {!import("./filter/And.js").default} `<And>` operator.
 * @api
 */
export function and(conditions) {
  const params = [null].concat(Array.prototype.slice.call(arguments));
  return new (Function.prototype.bind.apply(And, params));
}


/**
 * Create a logical `<Or>` operator between two or more filter conditions.
 *
 * @param {...import("./filter/Filter.js").default} conditions Filter conditions.
 * @returns {!import("./filter/Or.js").default} `<Or>` operator.
 * @api
 */
export function or(conditions) {
  const params = [null].concat(Array.prototype.slice.call(arguments));
  return new (Function.prototype.bind.apply(Or, params));
}


/**
 * Represents a logical `<Not>` operator for a filter condition.
 *
 * @param {!import("./filter/Filter.js").default} condition Filter condition.
 * @returns {!import("./filter/Not.js").default} `<Not>` operator.
 * @api
 */
export function not(condition) {
  return new Not(condition);
}


/**
 * Create a `<BBOX>` operator to test whether a geometry-valued property
 * intersects a fixed bounding box
 *
 * @param {!string} geometryName Geometry name to use.
 * @param {!import("../extent.js").Extent} extent Extent.
 * @param {string=} opt_srsName SRS name. No srsName attribute will be
 *    set on geometries when this is not provided.
 * @returns {!import("./filter/Bbox.js").default} `<BBOX>` operator.
 * @api
 */
export function bbox(geometryName, extent, opt_srsName) {
  return new Bbox(geometryName, extent, opt_srsName);
}

/**
 * Create a `<Contains>` operator to test whether a geometry-valued property
 * contains a given geometry.
 *
 * @param {!string} geometryName Geometry name to use.
 * @param {!import("../geom/Geometry.js").default} geometry Geometry.
 * @param {string=} opt_srsName SRS name. No srsName attribute will be
 *    set on geometries when this is not provided.
 * @returns {!import("./filter/Contains.js").default} `<Contains>` operator.
 * @api
 */
export function contains(geometryName, geometry, opt_srsName) {
  return new Contains(geometryName, geometry, opt_srsName);
}

/**
 * Create a `<Intersects>` operator to test whether a geometry-valued property
 * intersects a given geometry.
 *
 * @param {!string} geometryName Geometry name to use.
 * @param {!import("../geom/Geometry.js").default} geometry Geometry.
 * @param {string=} opt_srsName SRS name. No srsName attribute will be
 *    set on geometries when this is not provided.
 * @returns {!import("./filter/Intersects.js").default} `<Intersects>` operator.
 * @api
 */
export function intersects(geometryName, geometry, opt_srsName) {
  return new Intersects(geometryName, geometry, opt_srsName);
}

/**
 * Create a `<Within>` operator to test whether a geometry-valued property
 * is within a given geometry.
 *
 * @param {!string} geometryName Geometry name to use.
 * @param {!import("../geom/Geometry.js").default} geometry Geometry.
 * @param {string=} opt_srsName SRS name. No srsName attribute will be
 *    set on geometries when this is not provided.
 * @returns {!import("./filter/Within.js").default} `<Within>` operator.
 * @api
 */
export function within(geometryName, geometry, opt_srsName) {
  return new Within(geometryName, geometry, opt_srsName);
}


/**
 * Creates a `<PropertyIsEqualTo>` comparison operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!(string|number)} expression The value to compare.
 * @param {boolean=} opt_matchCase Case-sensitive?
 * @returns {!import("./filter/EqualTo.js").default} `<PropertyIsEqualTo>` operator.
 * @api
 */
export function equalTo(propertyName, expression, opt_matchCase) {
  return new EqualTo(propertyName, expression, opt_matchCase);
}


/**
 * Creates a `<PropertyIsNotEqualTo>` comparison operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!(string|number)} expression The value to compare.
 * @param {boolean=} opt_matchCase Case-sensitive?
 * @returns {!import("./filter/NotEqualTo.js").default} `<PropertyIsNotEqualTo>` operator.
 * @api
 */
export function notEqualTo(propertyName, expression, opt_matchCase) {
  return new NotEqualTo(propertyName, expression, opt_matchCase);
}


/**
 * Creates a `<PropertyIsLessThan>` comparison operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} expression The value to compare.
 * @returns {!import("./filter/LessThan.js").default} `<PropertyIsLessThan>` operator.
 * @api
 */
export function lessThan(propertyName, expression) {
  return new LessThan(propertyName, expression);
}


/**
 * Creates a `<PropertyIsLessThanOrEqualTo>` comparison operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} expression The value to compare.
 * @returns {!import("./filter/LessThanOrEqualTo.js").default} `<PropertyIsLessThanOrEqualTo>` operator.
 * @api
 */
export function lessThanOrEqualTo(propertyName, expression) {
  return new LessThanOrEqualTo(propertyName, expression);
}


/**
 * Creates a `<PropertyIsGreaterThan>` comparison operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} expression The value to compare.
 * @returns {!import("./filter/GreaterThan.js").default} `<PropertyIsGreaterThan>` operator.
 * @api
 */
export function greaterThan(propertyName, expression) {
  return new GreaterThan(propertyName, expression);
}


/**
 * Creates a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} expression The value to compare.
 * @returns {!import("./filter/GreaterThanOrEqualTo.js").default} `<PropertyIsGreaterThanOrEqualTo>` operator.
 * @api
 */
export function greaterThanOrEqualTo(propertyName, expression) {
  return new GreaterThanOrEqualTo(propertyName, expression);
}


/**
 * Creates a `<PropertyIsNull>` comparison operator to test whether a property value
 * is null.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @returns {!import("./filter/IsNull.js").default} `<PropertyIsNull>` operator.
 * @api
 */
export function isNull(propertyName) {
  return new IsNull(propertyName);
}


/**
 * Creates a `<PropertyIsBetween>` comparison operator to test whether an expression
 * value lies within a range given by a lower and upper bound (inclusive).
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} lowerBoundary The lower bound of the range.
 * @param {!number} upperBoundary The upper bound of the range.
 * @returns {!import("./filter/IsBetween.js").default} `<PropertyIsBetween>` operator.
 * @api
 */
export function between(propertyName, lowerBoundary, upperBoundary) {
  return new IsBetween(propertyName, lowerBoundary, upperBoundary);
}


/**
 * Represents a `<PropertyIsLike>` comparison operator that matches a string property
 * value against a text pattern.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!string} pattern Text pattern.
 * @param {string=} opt_wildCard Pattern character which matches any sequence of
 *    zero or more string characters. Default is '*'.
 * @param {string=} opt_singleChar pattern character which matches any single
 *    string character. Default is '.'.
 * @param {string=} opt_escapeChar Escape character which can be used to escape
 *    the pattern characters. Default is '!'.
 * @param {boolean=} opt_matchCase Case-sensitive?
 * @returns {!import("./filter/IsLike.js").default} `<PropertyIsLike>` operator.
 * @api
 */
export function like(propertyName, pattern,
  opt_wildCard, opt_singleChar, opt_escapeChar, opt_matchCase) {
  return new IsLike(propertyName, pattern,
    opt_wildCard, opt_singleChar, opt_escapeChar, opt_matchCase);
}


/**
 * Create a `<During>` temporal operator.
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!string} begin The begin date in ISO-8601 format.
 * @param {!string} end The end date in ISO-8601 format.
 * @returns {!import("./filter/During.js").default} `<During>` operator.
 * @api
 */
export function during(propertyName, begin, end) {
  return new During(propertyName, begin, end);
}
