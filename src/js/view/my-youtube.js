import { $ } from '../utils/util.js';
import {
  searchNotFoundTemplate,
  searchVideoTemplate,
  recentKeywordsTemplate,
  myVideoInfosTemplate,
} from './template.js';

// class 명 SearchView 같은걸로 바꾸기
class MyYoutubeView {
  renderVideoArticle = (info, save) => {
    const $searchVideoWrapper = $('#search-video-wrapper');

    // TODO : domparser util화 하기
    const parser = new DOMParser();
    $searchVideoWrapper.append(
      parser.parseFromString(searchVideoTemplate(info, save), 'text/html').body
        .firstElementChild
    );
  };

  renderNotFound = () => {
    const $searchVideoWrapper = $('#search-video-wrapper');
    $searchVideoWrapper.innerHTML = searchNotFoundTemplate();
  };

  renderSkeletonArticles = () => {
    const $searchVideoWrapper = $('#search-video-wrapper');
    $searchVideoWrapper.innerHTML = videoSkeletonTemplate().repeat(10);
  };

  renderRecentKeywordSection = keywords => {
    const $recentKeywordsSection = $('#recent-keywords');
    $recentKeywordsSection.innerHTML = recentKeywordsTemplate(keywords);
  };

  renderMyVideoInfosSection = length => {
    const $myVideoInfosSection = $('#my-video-infos');
    $myVideoInfosSection.innerHTML = myVideoInfosTemplate(length);
  };

  resetView = () => {
    const $searchVideoWrapper = $('#search-video-wrapper');
    $searchVideoWrapper.innerHTML = '';
  };

  // TODO : view init 만들어주기
}

export default MyYoutubeView;
