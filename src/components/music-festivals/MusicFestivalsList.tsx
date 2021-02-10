import { RecordLabels } from './MusicFestivals.types';
import './MusicFestivalsList.css';

interface Props {
  data: RecordLabels[];
}

export const MusicFestivalsList = ({ data }: Props) => {
  return data.length > 0 ? (
    <ul className="music-festivals-list" data-testid="music-festivals-list">
      {data.map((recordLabel, i) => (
        <li key={i}>
          {recordLabel.name}
          {recordLabel.bands.length > 0 && (
            <ul>
              {recordLabel.bands.map((band, j) => (
                <li key={j}>
                  {band.name}
                  {band?.festivals && band.festivals.length > 0 && (
                    <ul>
                      {band.festivals.map((festival, k) => (
                        <li key={k}>{festival}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <div>No data available.</div>
  );
};
