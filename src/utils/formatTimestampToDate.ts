import moment from 'moment';

export const formatTimestampToDate = timestamp => {
  if (!timestamp) {
    return '-';
  }
  const { _seconds, _nanoseconds } = timestamp;
  const milliseconds = _seconds * 1000 + _nanoseconds / 1e6;
  return moment(milliseconds).toDate().toLocaleString();
};
