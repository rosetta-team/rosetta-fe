import React from 'react';
import '../../styles/Loading.scss';

const Loading = () => {
  return (
    <div className="center">
      <div className="cs-loader">
        <div className="cs-loader-inner">
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
        </div>
      </div>
    </div>
  )
}

export default Loading