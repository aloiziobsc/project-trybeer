import React, { useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import '../../css/ControllerHeader.css';
import loading from '../../img/loading.gif';

function ControllerHeader() {
  const [viewMenu, setViewMenu] = useState(false);

  return (
    <div className="controller-header">
      <button
        data-testid="top-hamburguer"
        type="button"
        onClick={ () => setViewMenu(!viewMenu) }
      >
        ☰
      </button>
      <Header />
      { viewMenu && <SideBar setViewMenu={ setViewMenu } /> }
    </div>
  );
}

export default ControllerHeader;
