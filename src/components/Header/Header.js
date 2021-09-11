import PropTypes from "prop-types";

import Button from "../Button/Button";

const Header = ({ title, onAdd, showAddTask }) => {
    // const onClick = (e) => {
    //     console.log("Click");
    // };

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                onClick={onAdd}
                color={!showAddTask ? `green` : `red`}
                text={!showAddTask ? `Add` : `Close`}
            />
        </header>
    );
};

Header.defaultProps = {
    title: "Todo App",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header;
