function Video() {
  return (
    <section class="video-content" id="hotmart">
      <div class="video-story">
        <h1 class="video-title">COMO FUNCIONA A HOTMART?</h1>
        <p class="video-subtitle">Assista o vídeo abaixo</p>
        <div class="embed-container">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/TunL4bNz55I?si=mKMy8LtEUqRikgWZ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="three-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Video;
