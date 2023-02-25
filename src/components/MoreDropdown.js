import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";


const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa fa-ellipsis-v"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown className={`ml-auto" ${styles.Absolute}`} drop="right">
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu
                className='text-center'
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label='edit'
                >
                    <i className="fas fa-pen" />
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label='delete'
                >
                    <i className="fas fa-delete-left" />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};