import PropTypes from "prop-types";

export const ITEM_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;
