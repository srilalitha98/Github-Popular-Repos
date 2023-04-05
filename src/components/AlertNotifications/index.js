// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-cont">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="icons-cont success">
        <AiFillCheckCircle className="icon" />
        <div>
          <h1 className="notification-head">Success</h1>
          <p className="description">
            You Can Access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="icons-cont error">
        <RiErrorWarningFill className="icon" />
        <div>
          <h1 className="notification-head">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="icons-cont warning">
        <MdWarning className="icon" />
        <div>
          <h1 className="notification-head">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="icons-cont info">
        <MdInfo className="icon" />
        <div>
          <h1 className="notification-head">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
