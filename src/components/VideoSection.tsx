const VideoSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <div className="relative w-full overflow-hidden rounded-2xl border border-border shadow-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/jO9Qz3NzOpw?rel=0"
          title="Zahradní dílna – prodejní video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default VideoSection;
