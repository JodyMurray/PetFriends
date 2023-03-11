import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";
import { OverlayTrigger, Tooltip } from "react-bootstrap";



const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

const ProfileSettings = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-bars"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Edit post
  </Tooltip>
);
const renderTooltip2 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Delete post
  </Tooltip>
);


export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Bars}`} drop="right">
      <Dropdown.Toggle as={ProfileSettings} />
      <Dropdown.Menu>

        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-user-pen" /> Edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)
          }
          aria-label="edit-username"
        >
          <i className="fas fa-user" />
          Change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-lock" />
          Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className={`ml-auto" ${styles.Absolute}`} drop="right">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className='text-center'
        popperConfig={{ strategy: "fixed" }}
      >
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip1}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label='edit'
          >
            <i className="fas fa-pen" />
          </Dropdown.Item>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip2}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleDelete}
            aria-label='delete'
          >
            <i className="fas fa-delete-left" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
};