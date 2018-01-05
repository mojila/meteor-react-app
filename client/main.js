import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

// Component
import { TitleBar } from './components/index';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = 'Score Keep';
    let jsx = (
      <div className="main">
        <TitleBar />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});