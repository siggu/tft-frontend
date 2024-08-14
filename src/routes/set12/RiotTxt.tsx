import React, { useEffect } from 'react';

function RiotTxtRedirect() {
  useEffect(() => {
    window.location.href = '/set12/riot.txt';
  }, []);

  return null;
}

export default RiotTxtRedirect;
