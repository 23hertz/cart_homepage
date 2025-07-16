import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,     // Dashboard
  faEnvelope,           // Message
  faChartLine,          // Analytics
  faWallet,             // Wallet
  faExchangeAlt,        // Transaction
  faUserFriends,        // Recipient
  faCog,                // Settings
  faQuestionCircle,      // Help
  faSignOutAlt          
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className="pl-3 pr-1">
    <aside className="pl-3 pr-0 w-64 leading-relaxed bg-white rounded-t-lg shadow-md space-y-6">
        <div className="p-0 m-0">
      <div className="mt-0 mb-0 h-12 bg-white border-0 rounded-t-lg border-b border-gray-300"><h1 className="pt-2 text-2xl text-gray-600 text-center -font-bold">WAYLINE</h1></div>
      <nav className="px-5 pl-10 text-sm font-medium text-gray-700 bg-white space-y-2">
        <br/>
        <a href="#" className="block mb-5 mt-5 hover:text-blue-600"><FontAwesomeIcon icon={faTachometerAlt} className="mr-2 text-gray-600" />Dashboard</a>
        <a href="#" className="block mb-5 hover:text-blue-600"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />Message</a>
        <a href="#" className="block mb-5 hover:text-blue-600"><FontAwesomeIcon icon={faWallet} className="mr-2 text-gray-600" />My Wallets</a>
        <a href="#" className="block mb-5 hover:text-blue-600"><FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-gray-600" />Transactions</a>
        <a href="#" className="block mb-5 hover:text-blue-600"><FontAwesomeIcon icon={faUserFriends} className="mr-2 text-gray-600" />Recipients</a>
        <a href="#" className="block mb-5 hover:text-blue-600"><FontAwesomeIcon icon={faChartLine} className="mr-2 text-gray-600" />Analytics</a>
        <a href="#" className="block mb-5 text-blue-600 font-semibold"><FontAwesomeIcon icon={faCog} className="mr-2 text-gray-600" />Settings</a>
      </nav>
      </div>
      <div className="mt-55 p-5 text-sm text-gray-500 bg-white space-y-2">
        <a href="#" className="block mb-5 text-gray-500 \text-xs"><FontAwesomeIcon icon={faQuestionCircle} className="mr-2 text-gray-600" />Get Help</a>
        <a href="#" className="block mb-5 text-xs text-gray-500"><FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-gray-600" />Logout</a>
      </div>
    </aside>
    </div>
  );
}
