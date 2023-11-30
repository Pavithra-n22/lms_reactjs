import React, { useState, useEffect } from 'react';

const Html = () => {
  const [minimized, setMinimized] = useState(false);
  const [videoMinimized, setVideoMinimized] = useState(false);
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (startTime && !minimized && !videoMinimized) {
      const elapsed = Date.now() - startTime;
      const progressPercentage = (elapsed / (30 * 60 * 1000)) * 100; // Assuming 30 minutes for completion
      setProgress(Math.min(progressPercentage, 100)); // Cap at 100%
    }
  }, [startTime, minimized, videoMinimized]);

  const toggleMinimize = () => {
    setMinimized(!minimized);
    updateStartTime();
  };

  const toggleVideoMinimize = () => {
    setVideoMinimized(!videoMinimized);
    updateStartTime();
  };

  const updateStartTime = () => {
    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  return (
    <div>
      <header>
        <h1>HTML Tutorials</h1>
      </header>

      <main>
        <article>
          <h2>NOTES</h2>
          {/* Add your content here */}
        </article>

        {/* Button to toggle PDF viewer */}
        <button onClick={toggleMinimize}>
          {minimized ? 'Maximize PDF' : 'Minimize PDF'}
        </button>

        {/* PDF Viewer */}
        <div className={`pdf-container ${minimized ? 'minimized' : ''}`}>
          <embed
            src={process.env.PUBLIC_URL + '/html.pdf'}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </div>

        {/* Video Lectures */}
        <article>
          <h2>Video Lectures</h2>
          {/* Button to toggle YouTube video */}
          <button onClick={toggleVideoMinimize}>
            {videoMinimized ? 'Maximize Video' : 'Minimize Video'}
          </button>

          <div className={`video-container ${videoMinimized ? 'minimized' : ''}`}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/kUMe1FH4CHE"
    title="YouTube Live Stream"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
        </article>

        {/* Progress Bar */}
        
       
      </main>

      <footer>
        <p>&copy; Designed by Pavithra  :)</p>
      </footer>
    </div>
  );
};

export default Html;
