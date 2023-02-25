import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";


const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa fa-ellipsis"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const MoreDropdown = () => {
    return (
        <Dropdown className="ml-auto" drop="right">
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu
                className={`text-center ${styles.DropdownMenu}`}
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    className={styles.DropdownItem}
                    
                >
                    <i className="fas fa-pen" />
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                   
                >
                    <i className="fas fa-delete-left" />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};