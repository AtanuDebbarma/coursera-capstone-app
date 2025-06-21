/**
 * A basic wrapper component for the main content area of the page.
 *
 * This component is used to wrap the main content area of the page in an HTML
 * `<main>` element. It is intended to be used as a direct child of the
 * `App` component.
 *
 * @param {Object} props Component props
 * @param {ReactNode} props.children The content to be rendered inside the
 *                                    `<main>` element.
 * @returns {ReactElement} A `<main>` element containing the rendered `children`.
 */
const Main = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
