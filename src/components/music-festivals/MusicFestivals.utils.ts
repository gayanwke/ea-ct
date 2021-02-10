import { MusicFestival, RecordLabels } from './MusicFestivals.types';

/**
 * Transforms a musical festival array into a record label array.
 */
export const transformMusicFestivalsToRecordLabels = (data: MusicFestival[]): RecordLabels[] => {
  const transformed: RecordLabels[] = [];

  data.forEach((festival) => {
    const bands = festival?.bands || [];
    const festivalName = festival?.name;
    bands.forEach((b) => {
      const recordLabel = b?.recordLabel || '*Independent/Unsigned Bands';
      const existingLabel = transformed.find((label) => label.name === recordLabel);
      const band = { name: b.name, festivals: festivalName ? [festivalName] : [] };
      if (existingLabel) {
        const existingBand = existingLabel.bands.find((band) => band.name === b.name);
        if (existingBand) {
          if (festivalName && !existingBand.festivals.includes(festivalName)) {
            existingBand.festivals.push(festivalName);
          }
        } else {
          existingLabel.bands.push(band);
        }
      } else {
        transformed.push({ name: recordLabel, bands: [band] });
      }
    });
  });

  return transformed;
};

/**
 * Sorts record labels, bands, festivals alphabetically.
 */
export const sortRecordLabels = (data: RecordLabels[]): RecordLabels[] => {
  // sort record labels
  data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
  data.forEach((label) => {
    // sort bands
    label.bands.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    label.bands.forEach((band) => {
      if (band?.festivals) {
        // sort festivals
        band.festivals.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
      }
    });
  });
  return data;
};
