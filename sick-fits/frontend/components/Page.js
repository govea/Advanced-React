import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}
Page.propTypes = {
  cool: PropTypes.string,
  // PropTypes.any to fix: Invalid prop 'children' of type 'object' when supplied to Page, expected an array
  // From 'sell' page we passed a single object (h2) but Page expected an array, not a single element
  children: PropTypes.any,
};
