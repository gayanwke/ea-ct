import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MusicFestivalsList } from './MusicFestivalsList';
import { sortRecordLabels, transformMusicFestivalsToRecordLabels } from './MusicFestivals.utils';
import { FetchStatus, FETCH_STATUS, FestivalsAPIResponse, RecordLabels } from './MusicFestivals.types';

export const MusicFestivals = () => {
  const [data, setData] = useState<RecordLabels[]>([]);
  const [status, setStatus] = useState<FetchStatus>(FETCH_STATUS.IDLE);
  const festivalsAPI = '/api/v1/festivals';

  useEffect(() => {
    const fetchData = async () => {
      setStatus(FETCH_STATUS.LOADING);
      try {
        const response: FestivalsAPIResponse = await axios(festivalsAPI);
        const transformed = transformMusicFestivalsToRecordLabels(response.data);
        const sorted = sortRecordLabels(transformed);
        setData(sorted);
        setStatus(FETCH_STATUS.SUCCESS);
      } catch (error) {
        setStatus(FETCH_STATUS.ERROR);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {status === FETCH_STATUS.LOADING && <div>Loading ...</div>}
      {status === FETCH_STATUS.ERROR && <div>System unavailable. Please try again later.</div>}
      {status === FETCH_STATUS.SUCCESS && <MusicFestivalsList data={data} />}
    </React.Fragment>
  );
};
