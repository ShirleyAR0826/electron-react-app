import React from 'react';
import Nucleus from 'nucleus-nodejs';

Nucleus.init('60598d488314981b6e2b1422');
Nucleus.setUserId('Shirley_Apellido')
// Required: Sends the first event to the server that app started
Nucleus.appStarted();

export default function App() {

  function clickHandler() {
    electron.notificationApi.sendNotification('My custom notification!');
    Nucleus.track("Say_Hi");
  }

  return (
    <>
      <h1>Shirley's Electron App :)</h1>
      <h2>Hello There!!!</h2>
      <button onClick={() => clickHandler()}>Say Hi</button>
    </>
  )
}