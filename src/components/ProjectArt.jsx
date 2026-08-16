export function ProjectArt({ project, eager = false, className = '' }) {
  return (
    <picture className={`project-art ${className}`}>
      <source
        type="image/webp"
        srcSet={`${import.meta.env.BASE_URL}images/${project.art}-640.webp 640w, ${import.meta.env.BASE_URL}images/${project.art}-960.webp 960w, ${import.meta.env.BASE_URL}images/${project.art}.webp 1536w`}
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 60vw"
      />
      <img
        src={`${import.meta.env.BASE_URL}images/${project.art}-960.webp`}
        alt={project.alt}
        width="1536"
        height="960"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  )
}
