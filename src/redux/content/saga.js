import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchAPI } from 'components/helpers';
import {
  FETCH_CONTENT,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_ERROR,
  FETCH_CONTENT_RESET,
} from './actions';

function* workFetchContent() {
  try {
    const [contentsResponse, thumbnailsResponse] = yield all([
      call(fetchAPI, {
        url: '/app-contents/jVV3Q?appId=2731&eventId=2570',
        method: 'get',
      }),
      call(fetchAPI, {
        url: '/content-thumbnail-url/2731',
        method: 'get',
      }),
    ]);

    if (contentsResponse.data.contents.length && thumbnailsResponse.data.length) {
      const contents = contentsResponse.data.contents.map((content) => ({
        ...content,
        contentInf: content.contentInf.map((item) => {
          const foundThumbnail = thumbnailsResponse.data.find(
            (thumbnail) => thumbnail.id === item.id
          );

          return {
            ...item,
            thumbnail: foundThumbnail.url,
          };
        }),
      }));

      //Of course, there is second and easier variation to get thumbnail
      //It's possible to create url by merging follow datas
      //https://s3.us-west-2.amazonaws.com/files.highattendance.com/contents/company11/${contentID}/thumbnails/small/${content.thumbnail_file/}
      //But <<https://s3.us-west-2.amazonaws.com/files.highattendance.com/contents/company11>> and <</thumbnails/small/>>  will be hard code, cause of I didn't found from where get these datas.

      yield put({
        type: FETCH_CONTENT_SUCCESS,
        payload: contents,
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_CONTENT_ERROR,
      payload: e,
    });
  } finally {
    yield put({
      type: FETCH_CONTENT_RESET,
    });
  }
}

function* watchForFetchContents() {
  yield takeEvery(FETCH_CONTENT, workFetchContent);
}

export default function* allWatchers() {
  yield all([watchForFetchContents()]);
}
