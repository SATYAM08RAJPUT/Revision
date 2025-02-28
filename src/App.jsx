import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer';
import AllDataFile from './AllFile/TopicList';
import './App.css';
import HtmlRoadMap from './HTML-ROADMAP/htmlroadmap';
import Satyam from './satyam/satyam';
import * as Sentry from '@sentry/react';
import React from 'react';

Sentry.init({
  dsn: 'https://d9fd5720310bff92d1fcea5a0b51cd10@o4508816938434560.ingest.us.sentry.io/4508817061838848',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

function App() {
  const message = 'Hello, world';
  console.log(message);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/course/:courseId/RoadMap" element={<HtmlRoadMap />} />
          <Route
            path="/course/:courseId/topics/:topicId"
            element={<AllDataFile />}
          />
          <Route
            path="/course/:courseId/RoadMap/:topicId"
            element={<AllDataFile />}
          />
        </Routes>
      </Router>
      <Satyam />
    </div>
  );
}
export default App;
