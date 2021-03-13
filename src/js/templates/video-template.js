import { convertDateFormat } from '../utils/util.js';

export const videoNotFoundTemplate = () => {
  return `
    <div id="saved-not-found">
        저장한 영상이 없습니다. <br />영상을 저장해주세요
    </div>
    `;
};

// TODO: 템플릿 중복 - 빼야함
export const savedVideoTemplate = info => {
  return `<article class="clip skeleton">
            <div class="preview-container image">
              <iframe
                width="100%"
                height="118"
                src="https://www.youtube.com/embed/${info.url}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="content-container pt-2 px-1">
              <h3 class="line">${info.title}</h3>
              <div>
                <a
                  href="https://www.youtube.com/channel/${info.channelId}"
                  target="_blank"
                  class="channel-name mt-1 line"
                >
                ${info.channelTitle}
                </a>
                <div class="meta">
                  <p class="line">${convertDateFormat(info.publishTime)}</p>
                </div>
                <div class="video-info-buttons">
                  <span class="watched opacity-hover">✅</span>
                  <span class="thumbs-up opacity-hover">👍</span>
                  <span class="comments opacity-hover">💬</span>
                  <span class="delete opacity-hover">🗑️</span>
                </div>
              </div>
            </div>
          </article>`;
};
