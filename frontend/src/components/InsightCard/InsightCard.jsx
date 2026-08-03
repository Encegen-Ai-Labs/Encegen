import { FiBookmark, FiArrowRight } from 'react-icons/fi';
import { getCategoryMeta } from '../../data/insights';
import './InsightCard.css';

export default function InsightCard({ insight }) {
  const { tag, tagVar, actionLabel } = getCategoryMeta(insight.category);
  const { id, title, description, readTime, date, topic, author, image } = insight;
  const fallbackImage = `https://picsum.photos/seed/insight-${id}/600/400`;

  return (
    <article className="insight-card">
      <div className="insight-thumb">
        <img
          src={image}
          alt=""
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== fallbackImage) e.currentTarget.src = fallbackImage;
          }}
        />
        <button className="insight-bookmark" aria-label="Save insight" type="button">
          <FiBookmark size={15} />
        </button>
      </div>

      <div className="insight-body">
        <span className="insight-tag" style={{ color: `var(${tagVar})` }}>
          {tag}
        </span>
        <h3 className="insight-title">{title}</h3>
        <p className="insight-description">{description}</p>
        <span className="insight-meta">
          {readTime} · {date} · {topic}
        </span>

        <div className="insight-footer">
          <div className="insight-author">
            <span className="insight-avatar">{author.initials}</span>
            <span className="insight-author-info">
              <span className="insight-author-name">{author.name}</span>
              <span className="insight-author-role">{author.role}</span>
            </span>
          </div>
          <a
            href="#"
            className="insight-action"
            style={{ color: `var(${tagVar})` }}
          >
            {actionLabel} <FiArrowRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
