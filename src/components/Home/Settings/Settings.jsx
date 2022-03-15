import React from "react";
import ImagesHome from "../../../utils/images/home.svg";
import ImagesExplore from "../../../utils/images/explore.svg";
import ImagesNotifications from "../../../utils/images/notification.svg";
import ImagesMessages from "../../../utils/images/messages.svg";
import ImagesBookmarks from "../../../utils/images/bookmarks.svg";
import ImagesLists from "../../../utils/images/lists.svg";
import ImagesProfile from "../../../utils/images/profile.svg";
import ImagesMore from "../../../utils/images/more.svg";
import "../../../App.scss";
import "./Settings.scss";

function Settings() {
  return (
    <>
      <ul className="settings__list">
        <li className="settings__item">
          <a href="index.html" className="settings__link home-link">
            <img
              src={ImagesHome}
              alt="Home Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Home
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesExplore}
              alt="Explore Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Explore
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesNotifications}
              alt="Notification Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Notifications
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesMessages}
              alt="Message Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Messages
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesBookmarks}
              alt="Bookmark Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Bookmarks
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesLists}
              alt="List Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Lists
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesProfile}
              alt="Profile Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            Profile
          </a>
        </li>
        <li className="settings__item">
          <a href="index.html" className="settings__link">
            <img
              src={ImagesMore}
              alt="More Icon"
              className="settings__icon"
              width="28"
              height="28"
            />
            More
          </a>
        </li>
      </ul>
    </>
  );
}

export default Settings;
